import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

// 24-nov-2026 (Ricardo): Chicureo, sector de Colina, entra a la cobertura con $40.000 por sesión en cualquier plan
const comunaData = {
    nombre: "Chicureo",
    slug: "chicureo",
    sectores: ["Piedra Roja", "Chamisero", "Hacienda Chicureo", "Valle Norte", "Ayres de Chicureo"],
}

export const metadata: Metadata = {
    title: "Kinesiología a Domicilio en Chicureo | KINEUM",
    description: "Kinesiología a domicilio en Chicureo: Piedra Roja, Chamisero, Hacienda Chicureo y Valle Norte. $40.000 por sesión, evaluación inicial gratis y boleta.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        "kinesiologia a domicilio chicureo",
        "kinesiologo piedra roja",
        "kinesiologo a domicilio colina chicureo",
        "rehabilitacion a domicilio chicureo",
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiología a Domicilio en Chicureo | KINEUM",
        description: "Kinesiología a domicilio en Chicureo: Piedra Roja, Chamisero, Hacienda Chicureo y Valle Norte. $40.000 por sesión, evaluación inicial gratis y boleta.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function ChicureoPage() {
    return <ComunaPage data={comunaData} />
}
