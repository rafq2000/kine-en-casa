import { MetadataRoute } from 'next'
import { postsIndexables as blogPosts } from '@/lib/blog-data'
import { comunas } from '@/lib/comunas-data'

const baseUrl = 'https://kineum.cl'

// Fechas REALES de ultima modificacion de contenido, no la fecha del build.
// Si todas las URLs cambian de lastmod en cada deploy, Google deja de confiar
// en la señal y la ignora. Actualizar solo la clave que de verdad cambio.
// REGLA: la fecha solo cambia si cambia el contenido principal de la ruta (texto,
// precios, preguntas) y se pone la fecha del deploy. Nunca la fecha del build.
// Footer, navegacion, estilos o botones flotantes no cuentan. Los posts usan
// `updatedISO` en lib/blog-data.ts con la misma regla.
const MODIFICADO: Record<string, string> = {
    '/': '2026-10-05',
    '/nosotros': '2026-10-05',
    '/servicios/geriatrica': '2026-10-05',
    '/servicios/respiratoria': '2026-10-05',
    '/servicios/neurologica': '2026-10-05',
    '/servicios/traumatologica': '2026-10-05',
    '/servicios/postquirurgica': '2026-10-05',
    '/precios': '2026-10-05',
    '/como-funciona': '2026-10-05',
    '/blog': '2026-09-17',
    '/ejercicios': '2026-10-07',
    '/cobertura': '2026-09-29',
    '/privacidad': '2026-10-07',
    // Los 9 hubs /kinesiologo-a-domicilio-*: absorbieron el texto local de las 45 especialidad+comuna (T37)
    hubs: '2026-10-07',
}

// Fecha más reciente de contenido del sitio (la usa /llms.txt).
export const ULTIMA_MODIFICACION = Object.values(MODIFICADO).sort().at(-1)!

// Prioridad segun cercania a la conversion, no todo al mismo nivel:
// la home y los hubs de servicio valen mas que un post informativo.
function prioridad(ruta: string): number {
    if (ruta === '') return 1
    if (ruta.startsWith('/servicios/')) return 0.9
    if (ruta.startsWith('/kinesiologo-a-domicilio-')) return 0.9
    if (ruta === '/cobertura') return 0.9
    if (ruta === '/privacidad') return 0.3
    if (ruta === '/precios' || ruta === '/como-funciona') return 0.8
    if (ruta.startsWith('/blog/')) return 0.6
    return 0.7
}

export default function sitemap(): MetadataRoute.Sitemap {
    // Las 45 especialidad+comuna responden 308 a su hub desde el 7-oct-2026 (T37): no van en el sitemap
    const rutasLocales = comunas.map((c) => `/kinesiologo-a-domicilio-${c.slug}`)

    const rutasBase = [
        '',
        '/nosotros',
        '/como-funciona',
        '/precios',
        '/blog',
        '/ejercicios',
        '/cobertura',
        '/privacidad',
        '/servicios/respiratoria',
        '/servicios/geriatrica',
        '/servicios/neurologica',
        '/servicios/traumatologica',
        '/servicios/postquirurgica',
    ]

    const estaticas = rutasBase.map((ruta) => ({
        url: `${baseUrl}${ruta}`,
        lastModified: new Date(MODIFICADO[ruta || '/']),
        changeFrequency: 'monthly' as const,
        priority: prioridad(ruta),
    }))

    const locales = rutasLocales.map((ruta) => ({
        url: `${baseUrl}${ruta}`,
        lastModified: new Date(MODIFICADO.hubs),
        changeFrequency: 'monthly' as const,
        priority: prioridad(ruta),
    }))

    // Cada post lleva su fecha de publicacion o, si cambio su contenido, la de actualizacion.
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedISO ?? post.dateISO),
        changeFrequency: 'yearly' as const,
        priority: prioridad(`/blog/${post.slug}`),
    }))

    return [...estaticas, ...locales, ...posts]
}
