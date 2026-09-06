#!/usr/bin/env node
// Auto-fixer SEO de kineum.cl.
// Aplica en el repo los arreglos DETERMINISTAS y seguros que detecta seo/audit.mjs.
// Todo lo que requiera criterio editorial queda listado como "pendiente-humano".
//
//   node seo/autofix.mjs --dry     -> muestra que haria, sin escribir
//   node seo/autofix.mjs           -> aplica los cambios
//
// GUARDARRAILES (no negociables):
//  - Nunca borra paginas ni archivos.
//  - Nunca toca afirmaciones clinicas ni cifras del negocio.
//  - Solo edita title/description en archivos de metadata.
//  - Si un recorte deja el titulo sin la keyword, no lo aplica y lo deriva a humano.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { RULES, SITE, norm } from './rules.mjs'

const __dir = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dir, '..')
const DRY = process.argv.includes('--dry')

const rep = JSON.parse(readFileSync(join(__dir, 'last-report.json'), 'utf8'))

// Mapea una URL de produccion al archivo de metadata que la genera.
function archivoDe(url) {
    const path = url.replace(SITE, '').replace(/\/$/, '')
    if (path === '') return 'app/page.tsx'
    if (path.startsWith('/blog/')) return 'lib/blog-data.ts' // title se arma en app/blog/[slug]/page.tsx
    const p = join(ROOT, 'app', path.slice(1), 'page.tsx')
    return existsSync(p) ? `app${path}/page.tsx` : null
}

// Palabras con las que un titulo NUNCA puede terminar (queda colgando).
const COLGANTES = /\s(y|e|o|u|de|del|en|a|al|con|para|por|the|la|el|los|las|un|una|que|su|tu)$/i

// Un titulo es valido si conserva la keyword completa, cierra los pares
// y no termina colgando.
function tituloValido(t, keyword) {
    const nt = norm(t)
    // La keyword completa (todas sus palabras significativas) debe seguir presente.
    const palabras = norm(keyword).split(' ').filter((w) => w.length > 2)
    if (palabras.length && !palabras.every((w) => nt.includes(w))) return 'perderia parte de la keyword'
    // Pares balanceados
    const pares = [['[', ']'], ['(', ')'], ['"', '"']]
    for (const [a, b] of pares) {
        const na = t.split(a).length - 1
        const nb = t.split(b).length - 1
        if (na !== nb) return 'quedaria un parentesis o corchete sin cerrar'
    }
    if (COLGANTES.test(t)) return 'terminaria en una palabra colgando'
    if (/[,:;|-]$/.test(t.trim())) return 'terminaria en un separador'
    return null
}

// Acorta un titulo respetando la keyword y la marca.
// Solo aplica transformaciones SEGURAS; cualquier duda se deriva a reescritura editorial.
function acortarTitulo(title, keyword) {
    const MAX = RULES.title.max
    if (title.length <= MAX && !RULES.title.sufijosProhibidos.some((s) => title.includes(s))) {
        return { nuevo: title, cambio: false }
    }

    const intentos = []

    // 1. Sufijo de blog: " | KINEUM Journal" -> " | KINEUM"
    const sinJournal = title.replace(/ \| KINEUM Journal$/, ' | KINEUM')
    if (sinJournal !== title) intentos.push({ t: sinJournal, como: 'sufijo "Journal" acortado' })

    // 2. Quitar la marca del final (la keyword vale mas que la marca)
    for (const base of [title, sinJournal]) {
        const sinMarca = base.replace(/ \| KINEUM( Journal)?$/, '')
        if (sinMarca !== base) intentos.push({ t: sinMarca, como: 'se quito la marca para salvar la keyword' })
    }

    // 3. Cortar por un separador limpio, conservando la primera parte
    for (const base of [sinJournal, title]) {
        for (const sep of [' | ', ': ', ' - ', ' [']) {
            const idx = base.indexOf(sep)
            if (idx > 24) {
                const corte = base.slice(0, idx).trim()
                intentos.push({ t: corte, como: `recorte en "${sep.trim() || '['}"` })
                // Variante conservando la marca
                const conMarca = `${corte} | ${RULES.title.marca}`
                intentos.push({ t: conMarca, como: `recorte en "${sep.trim() || '['}" + marca` })
            }
        }
    }

    // Elegir el intento mas largo que quepa y sea valido (mas informacion = mejor snippet).
    const validos = intentos
        .filter((i) => i.t.length <= MAX && i.t.length >= RULES.title.min && !tituloValido(i.t, keyword))
        .sort((a, b) => b.t.length - a.t.length)

    if (validos.length) return { nuevo: validos[0].t, cambio: true, como: validos[0].como }

    const razon = intentos.length ? (tituloValido(intentos[0].t, keyword) || 'ningun recorte cabe') : 'no hay separador donde cortar'
    return { nuevo: title, cambio: false, humano: razon }
}

// Acorta una description sin cortar palabras a la mitad ni dejar frases colgando.
function acortarDesc(desc) {
    const MAX = RULES.description.max
    if (desc.length <= MAX) return { nuevo: desc, cambio: false }
    const t = desc.slice(0, MAX)

    // 1. Preferir cortar al final de una oracion completa.
    const punto = t.lastIndexOf('. ')
    if (punto > RULES.description.min - 20) {
        return { nuevo: t.slice(0, punto + 1).trim(), cambio: true, como: 'corte en oracion' }
    }

    // 2. Si no, cortar por palabra y retroceder mientras quede colgando.
    let corte = t.replace(/\s+\S*$/, '').replace(/[,.;:\s]+$/, '')
    let guarda = 0
    while (COLGANTES.test(corte) && corte.length > RULES.description.min && guarda++ < 12) {
        corte = corte.replace(/\s+\S*$/, '').replace(/[,.;:\s]+$/, '')
    }
    if (COLGANTES.test(corte) || corte.length < RULES.description.min) {
        return { nuevo: desc, cambio: false, humano: 'no hay corte limpio; reescribir' }
    }
    return { nuevo: corte + '.', cambio: true, como: 'corte por palabra' }
}

const cambios = []
const humano = []

for (const p of rep.paginas) {
    const archivo = archivoDe(p.url)
    const rel = p.url.replace(SITE, '') || '/'

    if (p.lenTitle > RULES.title.max || RULES.title.sufijosProhibidos.some((s) => p.title.includes(s))) {
        const r = acortarTitulo(p.title, p.keyword)
        if (r.cambio) cambios.push({ tipo: 'title', url: rel, archivo, de: p.title, a: r.nuevo, largo: `${p.title.length}->${r.nuevo.length}`, como: r.como })
        else humano.push({ tipo: 'title', url: rel, archivo, actual: p.title, largo: p.title.length, motivo: r.humano || 'necesita reescritura editorial' })
    }

    if (p.lenDesc > RULES.description.max) {
        const r = acortarDesc(p.desc)
        if (r.cambio) cambios.push({ tipo: 'description', url: rel, archivo, de: p.desc, a: r.nuevo, largo: `${p.desc.length}->${r.nuevo.length}`, como: r.como })
    }

    if (p.lenDesc && p.lenDesc < RULES.description.min) {
        humano.push({ tipo: 'description-corta', url: rel, archivo, actual: p.desc, largo: p.lenDesc, motivo: 'ampliar con propuesta de valor' })
    }
    if (p.palabras < RULES.contenido.minPalabras) {
        humano.push({ tipo: 'contenido-corto', url: rel, archivo, largo: p.palabras, motivo: `solo ${p.palabras} palabras; ampliar contenido` })
    }
    if (p.nH1 !== 1) {
        humano.push({ tipo: 'h1', url: rel, archivo, motivo: `${p.nH1} h1 en la pagina` })
    }
}

console.log(`\n=== AUTO-FIX SEO ${DRY ? '(simulacion)' : ''} ===`)
console.log(`Automaticos: ${cambios.length} | Requieren criterio humano: ${humano.length}\n`)

// Aplicar: reemplazo literal del string dentro del archivo fuente.
let aplicados = 0, fallidos = []
if (!DRY) {
    const porArchivo = {}
    for (const c of cambios) {
        if (!c.archivo) { fallidos.push({ ...c, motivo: 'archivo no mapeado' }); continue }
            ; (porArchivo[c.archivo] ||= []).push(c)
    }
    for (const [arch, lista] of Object.entries(porArchivo)) {
        const full = join(ROOT, arch)
        if (!existsSync(full)) { lista.forEach((c) => fallidos.push({ ...c, motivo: 'archivo inexistente' })); continue }
        let src = readFileSync(full, 'utf8')
        let tocado = false
        for (const c of lista) {
            if (src.includes(c.de)) { src = src.split(c.de).join(c.a); tocado = true; aplicados++ }
            else fallidos.push({ ...c, motivo: 'texto no encontrado en el archivo (se genera dinamicamente)' })
        }
        if (tocado) writeFileSync(full, src, 'utf8')
    }
}

for (const c of cambios.slice(0, 25)) console.log(`  [${c.tipo}] ${c.url}\n     ${c.largo}  (${c.como})\n     -> ${c.a}`)
if (cambios.length > 25) console.log(`  ... y ${cambios.length - 25} mas`)

if (!DRY) {
    console.log(`\nAplicados: ${aplicados}`)
    if (fallidos.length) {
        console.log(`No aplicados (generados dinamicamente, requieren editar la plantilla): ${fallidos.length}`)
        const porMotivo = {}
        fallidos.forEach((f) => (porMotivo[f.motivo] = (porMotivo[f.motivo] || 0) + 1))
        for (const [m, n] of Object.entries(porMotivo)) console.log(`   ${n}x ${m}`)
    }
}

writeFileSync(join(__dir, 'pendientes-humano.json'), JSON.stringify({ humano, fallidos }, null, 1), 'utf8')
console.log(`\nPendientes que requieren criterio: seo/pendientes-humano.json (${humano.length})`)
const tipos = {}
humano.forEach((h) => (tipos[h.tipo] = (tipos[h.tipo] || 0) + 1))
for (const [t, n] of Object.entries(tipos)) console.log(`   ${n}x ${t}`)
