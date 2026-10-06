// Reglas SEO de kineum.cl. Fuente unica de verdad del auditor y del auto-fixer.
// Editar aqui cambia el comportamiento de todo el sistema.

export const SITE = 'https://kineum.cl'
export const REPO = new URL('..', import.meta.url).pathname

export const RULES = {
    title: {
        // Google trunca alrededor de 580px; ~60 caracteres es el limite seguro en espanol.
        max: 60,
        min: 25,
        marca: 'KINEUM',
        // Sufijos que consumen caracteres sin aportar keyword.
        sufijosProhibidos: [' | KINEUM Journal', ' - KINEUM Journal'],
    },
    description: {
        max: 158,
        min: 110,
    },
    h1: {
        exactamente: 1,
        // El H1 no puede ser solo la marca. En paginas de servicio debe llevar la keyword;
        // en el blog basta con que refleje el tema del slug (validado aparte).
        raicesKeyword: ['kinesi', 'rehabilitac', 'fisioterap', 'ejercicio', 'precio', 'blog', 'opinion', 'equipo'],
    },
    contenido: {
        // Minimo de palabras de texto visible para que Google considere indexar.
        minPalabras: 300,
        // Solo para /blog/: cuenta las palabras del artículo (campo `content`, marcado con
        // data-contenido-post), sin cabecera, llamados a la acción ni "Sigue leyendo".
        // Calibrado con --local: un post de ~300 palabras queda bajo el umbral; uno de ~1.200 pasa.
        minPalabrasBlog: 800,
    },
    // Terminos que el negocio ya NO ofrece: su aparicion es un error de contenido.
    // Se comparan normalizados (sin tildes y en minusculas).
    terminosProhibidos: [
        'fonasa', 'bono fonasa', 'modalidad libre eleccion',
        'mayor parte del valor', '11 comunas', 'emergencias 24/7', 'mas de 5 anos',
        'monitoreo digital', 'garantizando puntualidad', 'soporte continuo',
        'red de especialistas', 'consultas ilimitadas', 'disponible ahora',
        'nuestro asistente', 'convenio isapres', 'reembolsamos todo',
        'clinical home care', 'expertos clinicos', 'portal del paciente',
        'gamificacion', 'kine prive', 'evaluacion digital', 'asistente ai',
        'kit de recuperacion', 'garantia de devolucion',
        'javiera mendez', 'maria jose perez', 'ricardo tapia',
    ],
    // Porcentajes de reembolso o copago: nunca se publican (regla dura del negocio).
    // Se aplican sobre el texto visible normalizado.
    patronesProhibidos: [
        /(reembols|copago|cobertura|isapre)\w*[^.]{0,60}\d{1,3}\s?(-\s?\d{1,3}\s?)?%/,
        /\d{1,3}\s?%[^.]{0,60}(reembols|copago)/,
    ],
    performance: {
        maxTtfbMs: 1200,
        // Medido sin comprimir; la home comprimida pesa 27 KB.
        maxHtmlKb: 400,
    },
}

// Excepciones: paginas cuyo slug NO refleja la keyword real que se persigue.
// Suele pasar cuando el slug usa el termino tecnico y la gente busca otro
// (nadie busca "neuroplasticidad", buscan "rehabilitacion post ACV").
const KEYWORD_DECLARADA = {
    '/blog/neuroplasticidad-recuperacion-acv': 'rehabilitación post ACV en casa',
    '/cobertura': 'kinesiólogo a domicilio sector oriente santiago',
}

// Keyword principal por patron de URL. Se usa para validar que title y H1 la contengan.
export function keywordDe(url) {
    const path = url.replace(SITE, '').replace(/\/$/, '') || '/'
    if (KEYWORD_DECLARADA[path]) return KEYWORD_DECLARADA[path]
    if (path === '/') return 'kinesiólogo a domicilio santiago'
    const m = path.match(/^\/kinesiologo-a-domicilio-(.+)$/)
    if (m) return `kinesiólogo a domicilio ${m[1].replace(/-/g, ' ')}`
    const e = path.match(/^\/(kinesiologia|rehabilitacion)-([a-z]+)-(.+)$/)
    if (e) return `${e[1]} ${e[2]} ${e[3].replace(/-/g, ' ')}`
    if (path.startsWith('/servicios/')) return `kinesiología ${path.split('/').pop()} a domicilio`
    if (path === '/precios') return 'precio kinesiólogo a domicilio'
    if (path === '/como-funciona') return 'cómo funciona kinesiólogo a domicilio'
    if (path === '/testimonios') return 'opiniones kinesiólogo a domicilio'
    if (path === '/nosotros') return 'equipo kinesiólogos'
    if (path.startsWith('/blog/')) return path.split('/').pop().replace(/-/g, ' ')
    return path.replace(/[/-]/g, ' ').trim()
}

// Normaliza texto para comparar (sin tildes, minusculas).
export function norm(s) {
    return (s || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
}
