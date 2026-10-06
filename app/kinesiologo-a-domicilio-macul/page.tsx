import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Macul",
    slug: "macul",
    sectores: [
        "Villa Macul",
        "Quilín",
        "Santa Julia",
        "Rodrigo de Araya",
        "Macul Centro",
        "Los Presidentes",
        "Eje Vicuña Mackenna (Metro Macul)",
        "Sector Campus San Joaquín",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiólogo a Domicilio en Macul y Santa Julia | KINEUM",
    description: "Kinesiólogo a domicilio en Macul: Villa Macul, Quilín, Santa Julia y Rodrigo de Araya. Evaluación inicial gratuita y rehabilitación sin salir de casa.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kine a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        `kinesiólogo a domicilio ${comunaData.nombre} isapre`,
        `kine ${comunaData.nombre} reembolso`,
        `kinesiólogo adulto mayor ${comunaData.nombre}`,
        `kine respiratorio ${comunaData.nombre}`,
        `rehabilitación a domicilio ${comunaData.nombre}`,
        `rehabilitación prótesis rodilla ${comunaData.nombre}`,
        `kinesiólogo post operación ${comunaData.nombre}`,
        `kine respiratorio bebé ${comunaData.nombre}`,
        `kinesiología embarazada ${comunaData.nombre}`,
        `kinesiólogo deportivo ${comunaData.nombre}`,
        `rehabilitación ACV ${comunaData.nombre}`,
        `kinesiólogo adulto mayor caídas ${comunaData.nombre}`,
        `fisioterapeuta a domicilio ${comunaData.nombre}`,
        `kine post cirugía ${comunaData.nombre}`,
        `kinesiología piso pélvico ${comunaData.nombre}`,
        `kinesiólogo urgente ${comunaData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiólogo a Domicilio en Macul y Santa Julia | KINEUM",
        description: "Kinesiólogo a domicilio en Macul: Villa Macul, Quilín, Santa Julia y Rodrigo de Araya. Evaluación inicial gratuita y rehabilitación sin salir de casa.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function Page() {
    return <ComunaPage data={comunaData} />
}
