import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Lo Barnechea",
    slug: "lo-barnechea",
    descripcion: "Llegamos a todo Lo Barnechea: La Dehesa, Los Trapenses, El Arrayán y Portal La Dehesa. Kinesiología a domicilio sin recargos por distancia.",
    poblacion: "Cubrimos las zonas más extensas de Lo Barnechea, garantizando puntualidad y equipo completo en su domicilio.",
    sectores: [
        "La Dehesa",
        "Los Trapenses",
        "El Arrayán",
        "Portal La Dehesa",
        "Cerro 18",
        "El Huinganal",
        "Santa Blanca",
    ],
    caracteristicas: [
        "Cobertura total en La Dehesa",
        "Kinesiólogos con movilización propia",
        "Trato preferente adulto mayor",
        "Kinesiología Traumatológica y Deportiva",
        "Agenda rápida",
        "Boletas para reembolso",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiólogo a Domicilio en Lo Barnechea y La Dehesa | KINEUM",
    description: "Kinesiólogo a domicilio en La Dehesa, Los Trapenses, El Arrayán y Cerro 18. Rehabilitación traumatológica y respiratoria. Primera evaluación sin costo.",
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
        description: "Kinesiólogo a domicilio en La Dehesa, Los Trapenses, El Arrayán y Cerro 18. Rehabilitación traumatológica y respiratoria. Primera evaluación sin costo.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function LoBarnecheaPage() {
    return <ComunaPage data={comunaData} />
}
