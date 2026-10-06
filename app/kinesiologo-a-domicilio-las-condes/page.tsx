import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Las Condes",
    slug: "las-condes",
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
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en Las Condes | KINEUM",
    description: "Kine a domicilio en Las Condes: El Golf, Manquehue y San Carlos de Apoquindo. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        "kine san carlos de apoquindo",
        "rehabilitación el golf",
        "kinesiologo las condes domicilio",
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiología a Domicilio en Las Condes | KINEUM",
        description: "Kine a domicilio en Las Condes: El Golf, Manquehue y San Carlos de Apoquindo. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function LasCondesPage() {
    return <ComunaPage data={comunaData} />
}
