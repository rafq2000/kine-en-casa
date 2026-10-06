import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Lo Barnechea",
    slug: "lo-barnechea",
    sectores: [
        "La Dehesa",
        "Los Trapenses",
        "El Arrayán",
        "Portal La Dehesa",
        "Cerro 18",
        "El Huinganal",
        "Santa Blanca",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiólogo a Domicilio en Lo Barnechea y La Dehesa | KINEUM",
    description: "Kine a domicilio en Lo Barnechea: La Dehesa, Los Trapenses y El Arrayán. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        "kinesiologo la dehesa",
        "kinesiologia a domicilio los trapenses",
        "rehabilitacion el huinganal",
        "fisioterapia lo barnechea",
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: "Kinesiólogo a Domicilio en Lo Barnechea y La Dehesa | KINEUM",
        description: "Kine a domicilio en Lo Barnechea: La Dehesa, Los Trapenses y El Arrayán. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function LoBarnecheaPage() {
    return <ComunaPage data={comunaData} />
}
