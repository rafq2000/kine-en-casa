// Datos locales por comuna. Fuente única para las páginas
// /kinesiologo-a-domicilio-{comuna} y /{especialidad}-{comuna}.
// Cada comuna aporta sectores y contexto propio para evitar contenido duplicado.

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
            "Las Condes concentra la mayor demanda de salud domiciliaria del sector oriente, con muchos pacientes que salen de clínicas cercanas y necesitan continuar su rehabilitación en casa.",
        referencias: "cerca de Apoquindo, Kennedy y el eje Escuela Militar–Los Dominicos",
        llegada: "el mismo día en la mayoría de los casos",
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
            "Vitacura tiene una alta proporción de adultos mayores viviendo en casas amplias, un entorno ideal para rehabilitar sin trasladarse.",
        referencias: "cerca de Av. Vitacura, Kennedy y el Parque Bicentenario",
        llegada: "el mismo día en la mayoría de los casos",
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
            "En Providencia la mayoría de los pacientes vive en departamentos y trabaja en la misma comuna: subimos con camilla y equipamiento en horarios compatibles con la jornada laboral.",
        referencias: "cerca del eje Providencia–Nueva Providencia y las estaciones Salvador, Manuel Montt y Los Leones",
        llegada: "el mismo día en la mayoría de los casos",
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
            "Parque Bustamante",
            "Villa Frei",
            "Barrio Italia",
            "Campus Oriente",
            "Estadio Nacional",
        ],
        contexto:
            "Ñuñoa mezcla casas antiguas y edificios nuevos, con muchas familias que cuidan a un adulto mayor en casa y agradecen no tener que trasladarlo.",
        referencias: "cerca de Plaza Ñuñoa, Irarrázaval y el Estadio Nacional",
        llegada: "el mismo día en la mayoría de los casos",
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
            "La Reina es tranquila y arbolada, con calles y parques que aprovechamos para la fase de marcha y reacondicionamiento al aire libre.",
        referencias: "cerca de Plaza Egaña, Av. Ossa y el Parque Padre Hurtado",
        llegada: "el mismo día en la mayoría de los casos",
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
            "Lo Barnechea es la comuna más extensa de nuestra cobertura y la peor conectada con centros de rehabilitación: por eso la atención en casa marca la mayor diferencia, sin recargo por distancia.",
        referencias: "cerca de La Dehesa, Camino a Farellones y Los Trapenses",
        llegada: "coordinado con hora fija, sin recargo por subir",
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
            "Peñalolén tiene poca oferta de rehabilitación propia y sus vecinos suelen bajar a Ñuñoa o La Reina: nosotros subimos con todo el equipamiento, incluida la zona precordillera.",
        referencias: "cerca de Av. Grecia, Tobalaba sur y la Comunidad Ecológica",
        llegada: "coordinado con hora fija, sin recargo por subir",
    },
    {
        nombre: "La Florida",
        slug: "la-florida",
        provincia: "Santiago",
        zona: "sur",
        cobertura: "full",
        sectores: [
            "Bellavista de La Florida",
            "Walker Martínez",
            "Trinidad",
            "Los Quillayes",
            "Rojas Magallanes",
            "Santa Raquel",
            "Gerónimo de Alderete",
            "La Florida Alto",
        ],
        contexto:
            "La Florida es una de las comunas más pobladas de Santiago y sus centros de rehabilitación están siempre copados: con atención domiciliaria partes el tratamiento esta misma semana, con hora fija.",
        referencias: "cerca de Vicuña Mackenna, Walker Martínez y Bellavista de La Florida",
        llegada: "el mismo día o al día siguiente",
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
            "Macul combina barrios residenciales consolidados con muchos adultos mayores que viven solos o con su familia: llevamos la rehabilitación completa a su living.",
        referencias: "cerca de Vicuña Mackenna, Quilín y Departamental",
        llegada: "el mismo día o al día siguiente",
    },
    {
        nombre: "San Joaquín",
        slug: "san-joaquin",
        provincia: "Santiago",
        zona: "centro",
        cobertura: "full",
        sectores: [
            "Metro San Joaquín",
            "Pedrero",
            "La Castrina",
            "El Pinar",
            "Eje Santa Rosa",
            "Eje Vicuña Mackenna",
            "Campus San Joaquín",
            "Barrio Aníbal Pinto",
        ],
        contexto:
            "San Joaquín casi no tiene centros de rehabilitación propios y sus vecinos terminan viajando a otras comunas: el kinesiólogo llega con camilla y equipamiento completo a la puerta.",
        referencias: "cerca de Santa Rosa, Vicuña Mackenna y las estaciones Pedrero y San Joaquín",
        llegada: "el mismo día o al día siguiente",
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
            "En Santiago Centro la mayoría vive en departamentos y depende del metro: subimos a tu piso con todo el equipamiento y en horarios que calzan con el trabajo.",
        referencias: "cerca de la Alameda, el Parque Forestal y los barrios Lastarria, Brasil y Yungay",
        llegada: "el mismo día en la mayoría de los casos",
    },
]

export function getComuna(slug: string) {
    return comunas.find((c) => c.slug === slug)
}

/** Comunas con matriz completa de paginas por especialidad. */
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
