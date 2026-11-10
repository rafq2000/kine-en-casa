import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Huechuraba",
    slug: "huechuraba",
    sectores: [
        "Ciudad Empresarial",
        "Pedro Fontova",
        "El Carmen de Huechuraba",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en Huechuraba | KINEUM",
    description: "Kinesiología a domicilio en Huechuraba: Ciudad Empresarial, Pedro Fontova y El Carmen. Desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        "kinesiologia a domicilio huechuraba",
        "kinesiologo ciudad empresarial",
        "kinesiologo a domicilio pedro fontova",
        "rehabilitacion a domicilio huechuraba",
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiología a Domicilio en Huechuraba | KINEUM",
        description: "Kinesiología a domicilio en Huechuraba: Ciudad Empresarial, Pedro Fontova y El Carmen. Desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function HuechurabaPage() {
    return <ComunaPage data={comunaData} />
}
