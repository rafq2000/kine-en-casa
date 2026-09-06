import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { comunas } from '@/lib/comunas-data'
import { especialidades } from '@/lib/especialidades-data'

const baseUrl = 'https://kineum.cl'

// Fechas REALES de ultima modificacion de contenido, no la fecha del build.
// Si todas las URLs cambian de lastmod en cada deploy, Google deja de confiar
// en la señal y la ignora. Actualizar solo la clave que de verdad cambio.
const MODIFICADO: Record<string, string> = {
    '/': '2026-09-06',
    '/nosotros': '2026-09-06',
    '/servicios/geriatrica': '2026-09-06',
    '/servicios/respiratoria': '2026-09-06',
    '/servicios/neurologica': '2026-09-06',
    '/servicios/traumatologica': '2026-09-06',
    '/precios': '2026-09-06',
    '/como-funciona': '2026-09-06',
    '/testimonios': '2026-09-06',
    '/blog': '2026-09-06',
    '/ejercicios': '2026-09-06',
    // Paginas locales: ultima reescritura de titulos y descripciones
    local: '2026-09-06',
}

// Prioridad segun cercania a la conversion, no todo al mismo nivel:
// la home y los hubs de servicio valen mas que un post informativo.
function prioridad(ruta: string): number {
    if (ruta === '') return 1
    if (ruta.startsWith('/servicios/')) return 0.9
    if (ruta.startsWith('/kinesiologo-a-domicilio-')) return 0.9
    if (ruta === '/precios' || ruta === '/como-funciona') return 0.8
    if (ruta.startsWith('/blog/')) return 0.6
    return 0.7
}

export default function sitemap(): MetadataRoute.Sitemap {
    const rutasLocales: string[] = []
    for (const c of comunas) {
        rutasLocales.push(`/kinesiologo-a-domicilio-${c.slug}`)
        for (const e of especialidades) rutasLocales.push(`/${e.slug}-${c.slug}`)
    }

    const rutasBase = [
        '',
        '/nosotros',
        '/como-funciona',
        '/precios',
        '/testimonios',
        '/blog',
        '/ejercicios',
        '/servicios/respiratoria',
        '/servicios/geriatrica',
        '/servicios/neurologica',
        '/servicios/traumatologica',
    ]

    const estaticas = rutasBase.map((ruta) => ({
        url: `${baseUrl}${ruta}`,
        lastModified: new Date(MODIFICADO[ruta || '/'] ?? MODIFICADO.local),
        changeFrequency: 'monthly' as const,
        priority: prioridad(ruta),
    }))

    const locales = rutasLocales.map((ruta) => ({
        url: `${baseUrl}${ruta}`,
        lastModified: new Date(MODIFICADO.local),
        changeFrequency: 'monthly' as const,
        priority: prioridad(ruta),
    }))

    // Cada post lleva su propia fecha de publicacion, que ya vive en blog-data.
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.dateISO),
        changeFrequency: 'yearly' as const,
        priority: prioridad(`/blog/${post.slug}`),
    }))

    return [...estaticas, ...locales, ...posts]
}
