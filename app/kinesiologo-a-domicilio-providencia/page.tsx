import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Providencia",
    slug: "providencia",
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
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en Providencia | KINEUM",
    description: "Kine a domicilio en Providencia: Pedro de Valdivia, Manuel Montt y Los Leones. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        `kine a domicilio ${comunaData.nombre}`,
        `fisioterapia ${comunaData.nombre}`,
        `rehabilitación ${comunaData.nombre}`,
        "kinesiólogo sector oriente",
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiología a Domicilio en Providencia | KINEUM",
        description: "Kine a domicilio en Providencia: Pedro de Valdivia, Manuel Montt y Los Leones. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function ProvidenciaPage() {
    return <ComunaPage data={comunaData} />
}
