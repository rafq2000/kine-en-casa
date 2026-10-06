import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Peñalolén",
    slug: "penalolen",
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
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en Peñalolén | KINEUM",
    description: "Kine a domicilio en Peñalolén: Comunidad Ecológica, San Luis y Lo Hermida. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
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
        title: "Kinesiología a Domicilio en Peñalolén | KINEUM",
        description: "Kine a domicilio en Peñalolén: Comunidad Ecológica, San Luis y Lo Hermida. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function Page() {
    return <ComunaPage data={comunaData} />
}
