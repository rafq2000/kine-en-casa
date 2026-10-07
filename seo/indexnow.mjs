// Avisa a Bing (y a los buscadores de IndexNow) que las URLs cambiaron. ChatGPT y Copilot
// buscan sobre el indice de Bing, asi que esto es lo que refresca lo que las IA leen del sitio.
// Uso: node seo/indexnow.mjs              -> todo el sitemap vivo + las rutas retiradas (301). No usar.
//      node seo/indexnow.mjs /precios /    -> solo esas rutas
//      node seo/indexnow.mjs --recientes   -> solo las URLs del sitemap con lastmod de los ultimos 2 dias
// En Git Bash (Windows) las rutas que empiezan con "/" se convierten en rutas de disco:
// anteponer MSYS_NO_PATHCONV=1 (ver seo/README.md).
import { rutasRetiradas } from "../lib/rutas-retiradas.mjs"

const HOST = "kineum.cl"
const KEY = "d06ec53b7983c67755b207faa37854fd" // public/<KEY>.txt
const DIAS_RECIENTES = 2

const args = process.argv.slice(2)
const recientes = args.includes("--recientes")
let urls = args.filter((a) => a !== "--recientes").map((p) => `https://${HOST}${p}`)

if (recientes || !urls.length) {
    const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
    const entradas = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
        loc: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1],
        lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
    }))
    if (recientes) {
        // Por dias calendario (UTC): el lastmod del sitemap es la fecha del deploy a las 00:00.
        const hoy = new Date()
        const desde = Date.UTC(hoy.getUTCFullYear(), hoy.getUTCMonth(), hoy.getUTCDate() - DIAS_RECIENTES)
        urls = entradas.filter((e) => e.loc && e.lastmod && Date.parse(e.lastmod) >= desde).map((e) => e.loc)
        if (!urls.length) {
            console.log(`IndexNow: ninguna URL con lastmod de los ultimos ${DIAS_RECIENTES} dias; no se envia nada.`)
            process.exit(0)
        }
    } else {
        urls = entradas.map((e) => e.loc).filter(Boolean)
        urls.push(...rutasRetiradas.map((r) => `https://${HOST}${r.de}`))
    }
}

const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
console.log(`IndexNow: ${res.status} ${res.statusText} (${urls.length} URLs)`)
if (res.status >= 300) console.log(await res.text())
process.exitCode = res.status >= 300 ? 1 : 0
