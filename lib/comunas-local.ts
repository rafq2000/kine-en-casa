// Contenido local único por comuna (centros de salud verificados, bloque del hub
// y texto por especialidad). Reduce el texto compartido entre /{especialidad}-{comuna}.

export interface CentroSalud {
    nombre: string
    tipo: string
    nota: string
}

export interface ComunaLocal {
    centrosSalud: CentroSalud[]
    hub: { h2: string; parrafos: string[] }
    especialidades: { slug: string; introLocal: string; faqsLocales: { q: string; a: string }[] }[]
}

export const comunasLocal: Record<string, ComunaLocal> = {}
