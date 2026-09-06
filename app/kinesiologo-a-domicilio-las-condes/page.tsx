import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Las Condes",
    slug: "las-condes",
    descripcion: "Servicio de kinesiología a domicilio en Las Condes con kinesiólogos profesionales certificados. Cobertura total en sectores como El Golf, Escuela Militar, Manquehue y San Carlos de Apoquindo.",
    poblacion: "Las Condes es una de las comunas con mayor demanda de servicios de salud premium en Santiago.",
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
    caracteristicas: [
        "Cobertura total en Las Condes",
        "Kinesiólogos con equipamiento avanzado",
        "Atención post-operatoria especializada",
        "KTR infantil y adulto",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: "Kinesiólogo a Domicilio en Las Condes y El Golf | KINEUM",
    description: "Kinesiólogo a domicilio en Las Condes: El Golf, Estoril, Manquehue y San Carlos de Apoquindo. Evaluación inicial gratuita y visita el mismo día.",
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
        title: "Kinesiólogo a Domicilio en Las Condes y El Golf | KINEUM",
        description: "Kinesiólogo a domicilio en Las Condes: El Golf, Estoril, Manquehue y San Carlos de Apoquindo. Evaluación inicial gratuita y visita el mismo día.",
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function LasCondesPage() {
    return <ComunaPage data={comunaData} />
}
