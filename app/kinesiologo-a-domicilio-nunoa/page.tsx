import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Ñuñoa",
    slug: "nunoa",
    sectores: [
        "Plaza Ñuñoa",
        "Avenida Irarrázaval",
        "Simón Bolívar",
        "Estadio Nacional",
        "Villa Frei",
        "Barrio Italia",
        "Villa Olímpica",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en Ñuñoa | KINEUM",
    description: "Kine a domicilio en Ñuñoa: Plaza Ñuñoa, Irarrázaval y Villa Frei. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        "kine plaza ñuñoa",
        "rehabilitación irarrázaval",
        "kinesiologo barrio italia",
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiología a Domicilio en Ñuñoa | KINEUM",
        description: "Kine a domicilio en Ñuñoa: Plaza Ñuñoa, Irarrázaval y Villa Frei. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function NunoaPage() {
    return <ComunaPage data={comunaData} />
}
