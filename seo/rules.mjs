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
    },
    // Terminos que el negocio ya NO ofrece: su aparicion es un error de contenido.
    terminosProhibidos: ['fonasa', 'bono fonasa', 'modalidad libre eleccion'],
    performance: {
        maxTtfbMs: 1200,
        maxHtmlKb: 250,
    },
}

// Keyword principal por patron de URL. Se usa para validar que title y H1 la contengan.
export function keywordDe(url) {
    const path = url.replace(SITE, '').replace(/\/$/, '') || '/'
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
