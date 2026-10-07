// Datos locales por comuna. Fuente única para las páginas
// /kinesiologo-a-domicilio-{comuna} (las 5 especialidades van dentro del hub desde T37).
// Cada comuna aporta sectores y contexto propio para evitar contenido duplicado.

import { PRIMERA_VISITA_TEXTO } from "@/lib/negocio"

export type ZonaComuna = "oriente" | "centro" | "norte" | "poniente" | "sur"

export interface Comuna {
    nombre: string
    slug: string
    /** Provincia de la Region Metropolitana */
    provincia: string
    /** Zona usada para enlazar comunas vecinas entre si */
    zona: ZonaComuna
    /** "full": hub + 5 paginas de especialidad. "hub": solo la pagina de la comuna. */
    cobertura: "full" | "hub"
    /** Solo para las comunas generadas: alimenta el meta description y el schema del hub */
    descripcion?: string
    /** Solo para las comunas generadas: bullets de cobertura del hub */
    caracteristicas?: string[]
    /** Sectores/barrios reales que se listan en la página */
    sectores: string[]
    /** Frase de contexto local, única por comuna */
    contexto: string
    /** Referencias geográficas que usan los vecinos para ubicarse */
    referencias: string
    /** Cuándo llega el kinesiólogo */
    llegada: string
}

export const comunas: Comuna[] = [
    {
        nombre: "Las Condes",
        slug: "las-condes",
        provincia: "Santiago",
        zona: "oriente",
        cobertura: "full",
        sectores: [
            "El Golf",
            "Escuela Militar",
            "Manquehue",
            "San Carlos de Apoquindo",
            "Estoril",
            "Los Dominicos",
            "Nueva Las Condes",
            "Cantagallo",
        ],
        contexto:
            "En Las Condes atendemos en casa a pacientes que necesitan continuar su rehabilitación después de una hospitalización, una cirugía o una lesión.",
        referencias: "cerca de Apoquindo, Kennedy y el eje Escuela Militar–Los Dominicos",
        llegada: PRIMERA_VISITA_TEXTO,
    },
    {
        nombre: "Vitacura",
        slug: "vitacura",
        provincia: "Santiago",
        zona: "oriente",
        cobertura: "full",
        sectores: [
            "Santa María de Manquehue",
            "Jardín del Este",
            "Lo Curro",
            "Vitacura Centro",
            "Alonso de Córdova",
            "Parque Bicentenario",
            "Tabancura",
        ],
        contexto:
            "En Vitacura atendemos en casas y departamentos de toda la comuna, para que el paciente se rehabilite sin trasladarse.",
        referencias: "cerca de Av. Vitacura, Kennedy y el Parque Bicentenario",
        llegada: PRIMERA_VISITA_TEXTO,
    },
    {
        nombre: "Providencia",
        slug: "providencia",
        provincia: "Santiago",
        zona: "oriente",
        cobertura: "full",
        sectores: [
            "Pedro de Valdivia",
            "Manuel Montt",
            "Tobalaba",
            "Los Leones",
            "Salvador",
            "Bellavista",
            "Costanera Center",
            "Parque Bustamante",
        ],
        contexto:
            "En Providencia atendemos en departamentos y casas de toda la comuna: subimos con camilla y equipamiento, de lunes a domingo.",
        referencias: "cerca del eje Providencia–Nueva Providencia y las estaciones Salvador, Manuel Montt y Los Leones",
        llegada: PRIMERA_VISITA_TEXTO,
    },
    {
        nombre: "Ñuñoa",
        slug: "nunoa",
        provincia: "Santiago",
        zona: "oriente",
        cobertura: "full",
        sectores: [
            "Plaza Ñuñoa",
            "Avenida Irarrázaval",
            "Simón Bolívar",
            "Villa Frei",
            "Barrio Italia",
            "Estadio Nacional",
            "Villa Olímpica",
        ],
        contexto:
            "Ñuñoa mezcla casas antiguas y edificios nuevos: atendemos en ambos, para que el paciente no tenga que trasladarse.",
        referencias: "cerca de Plaza Ñuñoa, Irarrázaval y el Estadio Nacional",
        llegada: PRIMERA_VISITA_TEXTO,
    },
    {
        nombre: "La Reina",
        slug: "la-reina",
        provincia: "Santiago",
        zona: "oriente",
        cobertura: "full",
        sectores: [
            "La Reina Alta",
            "Príncipe de Gales",
            "Avenida Ossa",
            "Plaza Egaña",
            "Larraín",
            "Parque Padre Hurtado",
            "Villa La Reina",
            "Talinay",
        ],
        contexto:
            "La Reina es una comuna residencial y arbolada: atendemos en toda la comuna, sin recargo por traslado.",
        referencias: "cerca de Plaza Egaña, Av. Ossa y el Parque Padre Hurtado",
        llegada: PRIMERA_VISITA_TEXTO,
    },
    {
        nombre: "Lo Barnechea",
        slug: "lo-barnechea",
        provincia: "Santiago",
        zona: "oriente",
        cobertura: "full",
        sectores: [
            "La Dehesa",
            "Los Trapenses",
            "El Arrayán",
            "Portal La Dehesa",
            "Cerro 18",
            "El Huinganal",
            "Santa Blanca",
            "La Ermita",
        ],
        contexto:
            "Lo Barnechea es la comuna más extensa de nuestra cobertura, de La Dehesa y Los Trapenses hacia el camino a Farellones: llegamos a todos sus sectores sin recargo por distancia.",
        referencias: "cerca de La Dehesa, Camino a Farellones y Los Trapenses",
        llegada: PRIMERA_VISITA_TEXTO,
    },
    {
        nombre: "Peñalolén",
        slug: "penalolen",
        provincia: "Santiago",
        zona: "oriente",
        cobertura: "full",
        sectores: [
            "Peñalolén Alto",
            "Comunidad Ecológica",
            "San Luis",
            "Lo Hermida",
            "Consistorial",
            "Avenida Grecia",
            "Quilín Oriente",
            "Peñalolén Nuevo",
        ],
        contexto:
            "Peñalolén va de Avenida Grecia y Quilín hasta la zona precordillera: atendemos en toda la comuna, incluidos los sectores altos, sin recargo por traslado.",
        referencias: "cerca de Av. Grecia, Tobalaba sur y la Comunidad Ecológica",
        llegada: PRIMERA_VISITA_TEXTO,
    },
    {
        nombre: "Macul",
        slug: "macul",
        provincia: "Santiago",
        zona: "oriente",
        cobertura: "full",
        sectores: [
            "Villa Macul",
            "Quilín",
            "Santa Julia",
            "Rodrigo de Araya",
            "Macul Centro",
            "Los Presidentes",
            "Eje Vicuña Mackenna",
            "Campus San Joaquín",
        ],
        contexto:
            "Macul es una comuna residencial entre Vicuña Mackenna, Quilín y Departamental: la sesión se hace completa en tu casa, sin recargo por traslado.",
        referencias: "cerca de Vicuña Mackenna, Quilín y Departamental",
        llegada: PRIMERA_VISITA_TEXTO,
    },
    {
        nombre: "Santiago Centro",
        slug: "santiago-centro",
        provincia: "Santiago",
        zona: "centro",
        cobertura: "full",
        sectores: [
            "Barrio Lastarria",
            "Barrio Brasil",
            "Barrio Yungay",
            "Barrio República",
            "Parque Almagro",
            "Barrio Matta",
            "Santa Ana",
            "Parque Forestal",
        ],
        contexto:
            "En Santiago Centro atendemos en departamentos y casas: subimos a tu piso con camilla y equipamiento, de lunes a domingo.",
        referencias: "cerca de la Alameda, el Parque Forestal y los barrios Lastarria, Brasil y Yungay",
        llegada: PRIMERA_VISITA_TEXTO,
    },
]

export function getComuna(slug: string) {
    return comunas.find((c) => c.slug === slug)
}

/** Comunas con cobertura completa (hoy, las 9). */
export const comunasFull = comunas.filter((c) => c.cobertura === "full")

/**
 * Comunas para enlazar desde una pagina local: primero las de la misma zona,
 * despues el resto, para que el enlazado interno sea geograficamente coherente
 * y no un muro de 50 enlaces iguales en todas las paginas.
 */
export function comunasVecinas(slug: string, limite = 11, soloFull = true) {
    const base = soloFull ? comunasFull : comunas
    const actual = getComuna(slug)
    const resto = base.filter((c) => c.slug !== slug)
    if (!actual) return resto.slice(0, limite)
    const mismas = resto.filter((c) => c.zona === actual.zona)
    const otras = resto.filter((c) => c.zona !== actual.zona)
    return [...mismas, ...otras].slice(0, limite)
}
