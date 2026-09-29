// Avisa a Bing (y a los buscadores de IndexNow) que las URLs cambiaron. ChatGPT y Copilot
// buscan sobre el indice de Bing, asi que esto es lo que refresca lo que las IA leen del sitio.
// Uso: node seo/indexnow.mjs            -> todo el sitemap vivo + las rutas retiradas (301)
//      node seo/indexnow.mjs /precios /  -> solo esas rutas
import { rutasRetiradas } from "../lib/rutas-retiradas.mjs"

const HOST = "kineum.cl"
const KEY = "d06ec53b7983c67755b207faa37854fd" // public/<KEY>.txt

let urls = process.argv.slice(2).map((p) => `https://${HOST}${p}`)
if (!urls.length) {
    const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text()
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    urls.push(...rutasRetiradas.map((r) => `https://${HOST}${r.de}`))
}

const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
console.log(`IndexNow: ${res.status} ${res.statusText} (${urls.length} URLs)`)
if (res.status >= 300) console.log(await res.text())
process.exitCode = res.status >= 300 ? 1 : 0
