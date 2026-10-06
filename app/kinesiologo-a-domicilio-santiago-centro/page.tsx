import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Santiago Centro",
    slug: "santiago-centro",
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
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en Santiago Centro | KINEUM",
    description: "Kine a domicilio en Santiago Centro: Lastarria, Barrio Brasil y Yungay. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
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
        title: "Kinesiología a Domicilio en Santiago Centro | KINEUM",
        description: "Kine a domicilio en Santiago Centro: Lastarria, Barrio Brasil y Yungay. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function Page() {
    return <ComunaPage data={comunaData} />
}
