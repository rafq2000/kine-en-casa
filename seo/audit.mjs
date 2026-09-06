#!/usr/bin/env node
// Auditor SEO de kineum.cl.
// Rastrea el sitemap de produccion, mide cada pagina contra seo/rules.mjs
// y escribe un reporte JSON + resumen legible.
//
//   node seo/audit.mjs                 -> audita produccion
//   node seo/audit.mjs --local         -> audita http://localhost:3000
//   node seo/audit.mjs --json          -> solo imprime el JSON

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE, RULES, keywordDe, norm } from './rules.mjs'

const __dir = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const BASE = args.includes('--local') ? 'http://localhost:3000' : SITE
const ONLY_JSON = args.includes('--json')

const log = (...a) => { if (!ONLY_JSON) console.log(...a) }

async function get(url, tries = 2) {
    for (let i = 0; i < tries; i++) {
        try {
            const t0 = Date.now()
            const res = await fetch(url, { redirect: 'follow' })
            const body = await res.text()
            return { status: res.status, body, ms: Date.now() - t0, url: res.url }
        } catch (e) {
            if (i === tries - 1) return { status: 0, body: '', ms: 0, error: String(e), url }
        }
    }
}

const pick = (html, re) => { const m = html.match(re); return m ? m[1].trim() : '' }

function textoVisible(html) {
    return html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-z]+;/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
}

function analizar(url, r) {
    const html = r.body
    const title = pick(html, /<title>([^<]*)<\/title>/i)
    const desc = pick(html, /<meta name="description" content="([^"]*)"/i)
    const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/i)
    const robots = pick(html, /<meta name="robots" content="([^"]*)"/i)

    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => textoVisible(m[1]))
    const h2n = (html.match(/<h2[^>]*>/gi) || []).length
    const imgs = [...html.matchAll(/<img[^>]*>/gi)].map((m) => m[0])
    const imgsSinAlt = imgs.filter((i) => !/\balt\s*=\s*"[^"]+"/i.test(i)).length

    const jsonld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
        .map((m) => { try { return JSON.parse(m[1]) } catch { return { __invalido: true } } })
    const schemaTipos = jsonld.map((j) => j['@type'] || (j.__invalido ? 'INVALIDO' : '?'))

    const texto = textoVisible(html)
    const palabras = texto.split(' ').filter(Boolean).length
    const kw = keywordDe(url)

    const enlacesInternos = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1])

    const problemas = []
    const P = (sev, tipo, detalle, fix) => problemas.push({ sev, tipo, detalle, fix })

    if (r.status !== 200) P('critica', 'http', `HTTP ${r.status}`, 'Revisar la ruta o el redirect')
    if (!title) P('critica', 'title-vacio', 'Sin <title>', 'Definir metadata.title')
    else {
        if (title.length > RULES.title.max) P('alta', 'title-largo', `${title.length} caracteres: "${title}"`, `Acortar a <= ${RULES.title.max} manteniendo la keyword al inicio`)
        if (title.length < RULES.title.min) P('media', 'title-corto', `${title.length} caracteres`, 'Aprovechar el espacio con keyword + gancho')
        for (const s of RULES.title.sufijosProhibidos) {
            if (title.includes(s)) P('media', 'title-sufijo', `Usa el sufijo "${s}" (${s.length} caracteres)`, 'Reemplazar por " | KINEUM" o quitarlo')
        }
        if (!norm(title).includes(norm(kw).split(' ')[0])) P('media', 'title-sin-keyword', `No contiene la raiz de "${kw}"`, 'Incluir la keyword principal')
    }

    if (!desc) P('alta', 'desc-vacia', 'Sin meta description', 'Definir metadata.description')
    else {
        if (desc.length > RULES.description.max) P('alta', 'desc-larga', `${desc.length} caracteres`, `Acortar a <= ${RULES.description.max}`)
        if (desc.length < RULES.description.min) P('baja', 'desc-corta', `${desc.length} caracteres`, `Ampliar a ${RULES.description.min}-${RULES.description.max}`)
    }

    if (h1s.length !== RULES.h1.exactamente) {
        P('alta', 'h1-cantidad', `${h1s.length} h1: ${JSON.stringify(h1s.map((h) => h.slice(0, 60)))}`, 'Dejar exactamente un h1; el logo debe ser span/div')
    } else {
        const h1 = norm(h1s[0])
        const esBlog = url.includes('/blog/')
        if (esBlog) {
            // En el blog el H1 debe reflejar el tema del slug: al menos una palabra
            // significativa del slug tiene que aparecer en el H1.
            const slugPalabras = norm(kw).split(' ').filter((w) => w.length > 4)
            const coincide = slugPalabras.some((w) => h1.includes(w.slice(0, 6)))
            if (slugPalabras.length && !coincide) {
                P('media', 'h1-fuera-de-tema', `H1 "${h1s[0].slice(0, 60)}" no refleja el slug "${kw}"`, 'Alinear H1 y slug')
            }
        } else if (!RULES.h1.raicesKeyword.some((raiz) => h1.includes(raiz))) {
            P('alta', 'h1-sin-keyword', `H1 sin keyword: "${h1s[0].slice(0, 70)}"`, 'El h1 debe contener la keyword principal, no solo la marca')
        }
    }

    if (!canonical) P('alta', 'canonical-falta', 'Sin canonical', 'Agregar alternates.canonical')
    else if (!canonical.startsWith(SITE)) P('media', 'canonical-raro', canonical, 'El canonical debe apuntar a kineum.cl')

    if (robots && /noindex/i.test(robots)) P('critica', 'noindex', robots, 'Quitar noindex si la pagina debe indexarse')

    if (palabras < RULES.contenido.minPalabras) P('alta', 'contenido-corto', `${palabras} palabras de texto visible`, `Ampliar a mas de ${RULES.contenido.minPalabras}`)

    if (imgsSinAlt > 0) P('media', 'img-sin-alt', `${imgsSinAlt} de ${imgs.length} imagenes sin alt`, 'Agregar alt descriptivo')

    if (schemaTipos.includes('INVALIDO')) P('alta', 'schema-invalido', 'Hay JSON-LD que no parsea', 'Corregir el JSON-LD')

    const low = norm(html)
    for (const t of RULES.terminosProhibidos) {
        if (low.includes(norm(t))) P('critica', 'termino-prohibido', `Aparece "${t}"`, 'Eliminar: el negocio ya no ofrece ese servicio')
    }

    if (r.ms > RULES.performance.maxTtfbMs) P('media', 'lento', `${r.ms}ms`, 'Revisar cache/renderizado')
    const kb = Math.round(html.length / 1024)
    if (kb > RULES.performance.maxHtmlKb) P('baja', 'html-pesado', `${kb}KB`, 'Reducir HTML/JSON embebido')

    return {
        url, status: r.status, ms: r.ms, kb,
        title, lenTitle: title.length,
        desc, lenDesc: desc.length,
        canonical, h1s, nH1: h1s.length, h2n, palabras,
        imgs: imgs.length, imgsSinAlt, schemaTipos,
        keyword: kw, enlacesInternos, problemas,
    }
}

async function main() {
    log(`Auditando ${BASE} ...`)
    const sm = await get(`${BASE}/sitemap.xml`)
    const urls = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, BASE))
    if (!urls.length) { console.error('No se pudo leer el sitemap'); process.exit(1) }
    log(`${urls.length} URLs en el sitemap`)

    const paginas = []
    const LOTE = 10
    for (let i = 0; i < urls.length; i += LOTE) {
        const lote = urls.slice(i, i + LOTE)
        const res = await Promise.all(lote.map(async (u) => analizar(u, await get(u))))
        paginas.push(...res)
        log(`  ${Math.min(i + LOTE, urls.length)}/${urls.length}`)
    }

    // Duplicados de title y description
    const porTitle = {}, porDesc = {}
    for (const p of paginas) {
        if (p.title) (porTitle[norm(p.title)] ||= []).push(p.url)
        if (p.desc) (porDesc[norm(p.desc)] ||= []).push(p.url)
    }
    const dupTitles = Object.entries(porTitle).filter(([, v]) => v.length > 1)
    const dupDescs = Object.entries(porDesc).filter(([, v]) => v.length > 1)

    // Paginas huerfanas: en el sitemap pero sin enlaces internos entrantes
    const entrantes = {}
    for (const p of paginas) {
        for (const href of new Set(p.enlacesInternos)) {
            const abs = BASE + (href === '/' ? '' : href)
            entrantes[abs] = (entrantes[abs] || 0) + 1
        }
    }
    const huerfanas = paginas.filter((p) => !entrantes[p.url] && p.url !== BASE).map((p) => p.url)

    // Enlaces internos rotos
    const todosHrefs = new Set(paginas.flatMap((p) => p.enlacesInternos))
    const conocidas = new Set(paginas.map((p) => p.url.replace(BASE, '') || '/'))
    const sospechosos = [...todosHrefs].filter((h) => !conocidas.has(h) && !h.startsWith('/_next') && !/\.(png|jpg|jpeg|svg|webp|ico|xml|txt|webmanifest)$/i.test(h))
    const rotos = []
    for (const h of sospechosos.slice(0, 40)) {
        const r = await get(BASE + h, 1)
        if (r.status >= 400 || r.status === 0) rotos.push({ href: h, status: r.status })
    }

    const todos = paginas.flatMap((p) => p.problemas.map((x) => ({ url: p.url, ...x })))
    const porSev = { critica: 0, alta: 0, media: 0, baja: 0 }
    for (const p of todos) porSev[p.sev]++
    const porTipo = {}
    for (const p of todos) porTipo[p.tipo] = (porTipo[p.tipo] || 0) + 1

    const reporte = {
        base: BASE,
        totalUrls: urls.length,
        resumen: {
            porSeveridad: porSev,
            porTipo,
            titulosLargos: paginas.filter((p) => p.lenTitle > RULES.title.max).length,
            descLargas: paginas.filter((p) => p.lenDesc > RULES.description.max).length,
            h1Malos: paginas.filter((p) => p.nH1 !== 1).length,
            contenidoCorto: paginas.filter((p) => p.palabras < RULES.contenido.minPalabras).length,
            ttfbPromedio: Math.round(paginas.reduce((s, p) => s + p.ms, 0) / paginas.length),
        },
        duplicados: { titles: dupTitles, descriptions: dupDescs },
        huerfanas,
        enlacesRotos: rotos,
        problemas: todos,
        paginas,
    }

    const dir = join(__dir, 'reports')
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
    const stamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')
    const file = join(dir, `audit-${stamp}.json`)
    writeFileSync(file, JSON.stringify(reporte, null, 1), 'utf8')
    writeFileSync(join(__dir, 'last-report.json'), JSON.stringify(reporte, null, 1), 'utf8')

    if (ONLY_JSON) { console.log(JSON.stringify(reporte.resumen, null, 1)); return }

    log('\n===== RESUMEN =====')
    log(`URLs: ${reporte.totalUrls} | TTFB medio: ${reporte.resumen.ttfbPromedio}ms`)
    log(`Problemas: ${porSev.critica} criticas | ${porSev.alta} altas | ${porSev.media} medias | ${porSev.baja} bajas`)
    log('\nPor tipo:')
    for (const [t, n] of Object.entries(porTipo).sort((a, b) => b[1] - a[1])) log(`  ${String(n).padStart(4)}  ${t}`)
    if (dupTitles.length) log(`\nTitulos duplicados: ${dupTitles.length} grupos`)
    if (huerfanas.length) log(`Paginas huerfanas (sin enlaces entrantes): ${huerfanas.length}`)
    if (rotos.length) log(`Enlaces internos rotos: ${rotos.length} -> ${rotos.map((r) => r.href).join(', ')}`)
    log(`\nReporte: ${file}`)
}

main().catch((e) => { console.error(e); process.exit(1) })
