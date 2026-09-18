import type { Metadata } from "next"
import { getComuna } from "./comunas-data"
import { comunasLocal } from "./comunas-local"
import { especialidades } from "./especialidades-data"

// Metadatos de las paginas locales generadas (hub de comuna y especialidad+comuna).
// El texto viene de lib/comunas-local.ts, escrito y verificado por comuna; aqui solo
// se arma el objeto Metadata para que cada page.tsx generada sea de tres lineas.

const SITIO = "https://kineum.cl"

function conMarca(title: string) {
    // La marca ayuda al CTR, pero solo cabe si el titulo no se pasa de 60 caracteres.
    if (title.includes("KINEUM")) return title
    return title.length <= 51 ? `${title} | KINEUM` : title
}

function meta(url: string, titleBase: string, description: string, keywords: string[]): Metadata {
    const title = conMarca(titleBase)
    return {
        title,
        description,
        keywords,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website", locale: "es_CL", siteName: "KINEUM" },
    }
}

export function metaHub(slug: string): Metadata {
    const com = getComuna(slug)
    if (!com) throw new Error(`Comuna desconocida: ${slug}`)
    const seo = comunasLocal[slug]?.hubSeo
    return meta(
        `${SITIO}/kinesiologo-a-domicilio-${slug}`,
        seo?.title ?? `Kinesiólogo a Domicilio en ${com.nombre} | KINEUM`,
        seo?.description ?? com.descripcion ?? com.contexto,
        seo?.keywords ?? [`kinesiólogo a domicilio ${com.nombre}`, `kinesiología a domicilio ${com.nombre}`],
    )
}

export function metaEspecialidadComuna(especialidadSlug: string, comunaSlug: string): Metadata {
    const com = getComuna(comunaSlug)
    const esp = especialidades.find((e) => e.slug === especialidadSlug)
    if (!com || !esp) throw new Error(`Par desconocido: ${especialidadSlug}-${comunaSlug}`)
    const seo = comunasLocal[comunaSlug]?.especialidades.find((e) => e.slug === especialidadSlug)
    return meta(
        `${SITIO}/${especialidadSlug}-${comunaSlug}`,
        seo?.seoTitle ?? `${esp.nombre} a Domicilio en ${com.nombre}`,
        seo?.seoDescription ?? `${esp.nombre} a domicilio en ${com.nombre}. ${esp.intro}`.slice(0, 155),
        seo?.keywords ?? [`${esp.terminoBusqueda} ${com.nombre}`, `kinesiólogo a domicilio ${com.nombre}`],
    )
}

/** Datos que consume el componente del hub de comuna. */
export function datosHub(slug: string) {
    const com = getComuna(slug)
    if (!com) throw new Error(`Comuna desconocida: ${slug}`)
    return {
        nombre: com.nombre,
        slug: com.slug,
        descripcion: com.descripcion ?? com.contexto,
        poblacion: com.contexto,
        sectores: com.sectores,
        caracteristicas: com.caracteristicas ?? [
            `Cobertura en toda la comuna de ${com.nombre}`,
            "Kinesiólogos titulados con equipamiento profesional",
            "Evaluación inicial gratuita",
            "Boleta reembolsable en Isapre y seguros complementarios",
        ],
    }
}
