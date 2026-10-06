import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "La Reina",
    slug: "la-reina",
    sectores: [
        "La Reina Alta",
        "Príncipe de Gales",
        "Avenida Ossa",
        "Plaza Egaña",
        "Larraín",
        "Parque Padre Hurtado",
        "Villa La Reina",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en La Reina | KINEUM",
    description: "Kine a domicilio en La Reina: La Reina Alta, Príncipe de Gales y Plaza Egaña. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        "kine la reina alta",
        "kinesiologo principe de gales",
        "rehabilitacion plaza egaña",
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiología a Domicilio en La Reina | KINEUM",
        description: "Kine a domicilio en La Reina: La Reina Alta, Príncipe de Gales y Plaza Egaña. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function LaReinaPage() {
    return <ComunaPage data={comunaData} />
}
