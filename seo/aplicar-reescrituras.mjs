#!/usr/bin/env node
// Aplica reescrituras editoriales de title / description / H1 al repo.
//
// Entrada: un JSON con la forma
//   [{ url, title_nuevo, description_nueva, h1_nuevo?, archivo_a_editar? }, ...]
//
//   node seo/aplicar-reescrituras.mjs propuestas.json --dry
//   node seo/aplicar-reescrituras.mjs propuestas.json
//
// Valida ANTES de escribir: largo, keyword conservada, sin terminos prohibidos,
// sin duplicados. Lo que no pasa la validacion se rechaza y se reporta.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { RULES, SITE, keywordDe, norm } from './rules.mjs'

const __dir = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dir, '..')
const argv = process.argv.slice(2)
const DRY = argv.includes('--dry')
const inputPath = argv.find((a) => !a.startsWith('--'))

if (!inputPath || !existsSync(inputPath)) {
    console.error('Uso: node seo/aplicar-reescrituras.mjs <propuestas.json> [--dry]')
    process.exit(1)
}

const raw = JSON.parse(readFileSync(inputPath, 'utf8'))
// Acepta tanto un array plano como la salida del workflow ({titulos:[{propuestas:[...]}]})
const propuestas = Array.isArray(raw)
    ? raw
    : (raw.titulos || []).flatMap((g) => g.propuestas || [])

if (!propuestas.length) { console.error('No hay propuestas en el archivo.'); process.exit(1) }

function rutaDe(url, sugerida) {
    if (sugerida) {
        const p = join(ROOT, sugerida.replace(/^\.?[/\\]/, ''))
        if (existsSync(p)) return sugerida.replace(/^\.?[/\\]/, '')
    }
    const path = (url || '').replace(SITE, '').replace(/\/$/, '')
    if (path === '') return 'app/page.tsx'
    if (path.startsWith('/blog/')) return 'lib/blog-data.ts'
    const p = join(ROOT, 'app', path.slice(1), 'page.tsx')
    return existsSync(p) ? `app${path}/page.tsx` : null
}

const vistos = { titles: new Map(), descs: new Map() }
const aplicar = []
const rechazados = []

for (const p of propuestas) {
    const url = p.url?.startsWith('http') ? p.url : SITE + (p.url || '')
    const kw = p.keyword_objetivo || keywordDe(url)
    const archivo = rutaDe(url, p.archivo_a_editar)
    const R = (motivo) => rechazados.push({ url: p.url, motivo, title: p.title_nuevo })

    if (!archivo) { R('no se pudo mapear la URL a un archivo del repo'); continue }

    // --- validaciones de title ---
    if (p.title_nuevo) {
        const t = p.title_nuevo.trim()
        if (t.length > RULES.title.max) { R(`title de ${t.length} caracteres (max ${RULES.title.max})`); continue }
        if (t.length < RULES.title.min) { R(`title de ${t.length} caracteres (min ${RULES.title.min})`); continue }
        if (RULES.terminosProhibidos.some((x) => norm(t).includes(norm(x)))) { R('title contiene un termino prohibido'); continue }
        const palabrasKw = norm(kw).split(' ').filter((w) => w.length > 3)
        if (palabrasKw.length && !palabrasKw.some((w) => norm(t).includes(w))) { R(`title no contiene nada de la keyword "${kw}"`); continue }
        const dup = vistos.titles.get(norm(t))
        if (dup) { R(`title duplicado con ${dup}`); continue }
        vistos.titles.set(norm(t), p.url)
    }

    // --- validaciones de description ---
    if (p.description_nueva) {
        const d = p.description_nueva.trim()
        if (d.length > RULES.description.max) { R(`description de ${d.length} caracteres (max ${RULES.description.max})`); continue }
        if (d.length < RULES.description.min) { R(`description de ${d.length} caracteres (min ${RULES.description.min})`); continue }
        if (RULES.terminosProhibidos.some((x) => norm(d).includes(norm(x)))) { R('description contiene un termino prohibido'); continue }
        const dup = vistos.descs.get(norm(d))
        if (dup) { R(`description duplicada con ${dup}`); continue }
        vistos.descs.set(norm(d), p.url)
    }

    aplicar.push({ ...p, url, archivo, kw })
}

console.log(`\n=== APLICAR REESCRITURAS ${DRY ? '(simulacion)' : ''} ===`)
console.log(`Propuestas: ${propuestas.length} | Validas: ${aplicar.length} | Rechazadas: ${rechazados.length}\n`)

let okTitle = 0, okDesc = 0, noEncontrado = []

if (!DRY) {
    const porArchivo = {}
    for (const a of aplicar) (porArchivo[a.archivo] ||= []).push(a)

    for (const [arch, lista] of Object.entries(porArchivo)) {
        const full = join(ROOT, arch)
        let src = readFileSync(full, 'utf8')
        let tocado = false

        for (const a of lista) {
            if (a.title_nuevo && a.title_actual && src.includes(a.title_actual)) {
                src = src.split(a.title_actual).join(a.title_nuevo)
                tocado = true; okTitle++
            } else if (a.title_nuevo && a.title_actual) {
                noEncontrado.push({ url: a.url, campo: 'title', archivo: arch })
            }

            if (a.description_nueva) {
                // Busca la description actual leyendo el archivo: patron metadata description
                const m = src.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)
                if (a.description_actual && src.includes(a.description_actual)) {
                    src = src.split(a.description_actual).join(a.description_nueva)
                    tocado = true; okDesc++
                } else if (m && lista.length === 1) {
                    src = src.replace(m[1], a.description_nueva)
                    tocado = true; okDesc++
                } else {
                    noEncontrado.push({ url: a.url, campo: 'description', archivo: arch })
                }
            }
        }
        if (tocado) writeFileSync(full, src, 'utf8')
    }
}

for (const a of aplicar.slice(0, 20)) {
    console.log(`  ${a.url.replace(SITE, '') || '/'}`)
    if (a.title_nuevo) console.log(`     T(${a.title_nuevo.length}): ${a.title_nuevo}`)
    if (a.description_nueva) console.log(`     D(${a.description_nueva.length}): ${a.description_nueva.slice(0, 90)}...`)
}
if (aplicar.length > 20) console.log(`  ... y ${aplicar.length - 20} mas`)

if (rechazados.length) {
    console.log(`\n--- RECHAZADAS (${rechazados.length}) ---`)
    for (const r of rechazados.slice(0, 15)) console.log(`  ${r.url}: ${r.motivo}`)
    if (rechazados.length > 15) console.log(`  ... y ${rechazados.length - 15} mas`)
}

if (!DRY) {
    console.log(`\nAplicados: ${okTitle} titles, ${okDesc} descriptions`)
    if (noEncontrado.length) {
        console.log(`No encontrados en el archivo (texto generado dinamicamente): ${noEncontrado.length}`)
        for (const n of noEncontrado.slice(0, 10)) console.log(`   ${n.campo} de ${n.url} en ${n.archivo}`)
    }
    writeFileSync(join(__dir, 'reescrituras-rechazadas.json'), JSON.stringify({ rechazados, noEncontrado }, null, 1), 'utf8')
}
