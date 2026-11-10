import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Vitacura",
    slug: "vitacura",
    sectores: [
        "Santa María de Manquehue",
        "Jardín del Este",
        "Lo Curro",
        "Vitacura Centro",
        "Alonso de Córdova",
        "Parque Bicentenario",
        "Tabancura",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en Vitacura | KINEUM",
    description: "Kinesiología a domicilio en Vitacura: Santa María de Manquehue, Lo Curro y Jardín del Este. Desde $35.000, evaluación inicial gratis y boleta para Isapre.",
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
        title: "Kinesiología a Domicilio en Vitacura | KINEUM",
        description: "Kinesiología a domicilio en Vitacura: Santa María de Manquehue, Lo Curro y Jardín del Este. Desde $35.000, evaluación inicial gratis y boleta para Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function VitacuraPage() {
    return <ComunaPage data={comunaData} />
}
