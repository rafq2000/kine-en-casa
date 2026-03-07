import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "San Joaquín",
    slug: "san-joaquin",
    descripcion: "Servicio de kinesiología a domicilio en San Joaquín con kinesiólogos profesionales certificados. Cobertura total y atención personalizada.",
    poblacion: "Atendemos a cientos de pacientes en San Joaquín que buscan rehabilitación premium sin salir de casa.",
    sectores: [
        "Todo San Joaquín",
        "Sectores residenciales",
    ],
    caracteristicas: [
        "Cobertura total en San Joaquín",
        "Kinesiólogos con equipamiento avanzado",
        "Atención post-operatoria especializada",
        "KTR infantil y adulto",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | KINEUM`,
    description: `Kinesiólogo a domicilio en ${comunaData.nombre}. Kinesiología respiratoria, motora y neurológica. Agende hoy al +56 9 9967 9593.`,
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        `kinesiologo ${comunaData.nombre} domicilio`,
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | KINEUM`,
        description: `Kinesiología premium a domicilio en ${comunaData.nombre}. Kinesiólogos certificados a su hogar.`,
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={comunaData} />
}
