import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Vitacura",
    slug: "vitacura",
    descripcion: "Kinesiología a domicilio exclusiva en Vitacura. Rehabilitación integral en Santa María de Manquehue, Jardín del Este, Vitacura Centro y Lo Curro.",
    poblacion: "Vitacura destaca por su calidad de vida y entornos residenciales ideales para la rehabilitación en casa.",
    sectores: [
        "Santa María de Manquehue",
        "Jardín del Este",
        "Lo Curro",
        "Vitacura Centro",
        "Alonso de Córdova",
        "Parque Bicentenario",
        "Tabancura",
    ],
    caracteristicas: [
        "Kinesiólogos expertos en Geriatría",
        "Neurorehabilitación en Vitacura",
        "Protocolos clínicos a domicilio",
        "Evaluación sin costo",
        "Atención personalizada",
        "Convenio Isapres (Reembolso)",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiólogo a Domicilio en Vitacura y Lo Curro | KINEUM",
    description: "Rehabilitación a domicilio en Vitacura, Lo Curro, Santa María de Manquehue y Jardín del Este. Especialistas en adulto mayor. Evaluación inicial gratis.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        "kine santa maria de manquehue",
        "rehabilitación vitacura",
        "kinesiologo adulto mayor vitacura",
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiólogo a Domicilio en Vitacura y Lo Curro | KINEUM",
        description: "Rehabilitación a domicilio en Vitacura, Lo Curro, Santa María de Manquehue y Jardín del Este. Especialistas en adulto mayor. Evaluación inicial gratis.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function VitacuraPage() {
    return <ComunaPage data={comunaData} />
}
