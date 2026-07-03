import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Peñalolén",
    slug: "penalolen",
    descripcion: "Servicio de kinesiología a domicilio en Peñalolén con kinesiólogos profesionales certificados. Cobertura total y atención personalizada.",
    poblacion: "Atendemos a cientos de pacientes en Peñalolén que buscan rehabilitación premium sin salir de casa.",
    sectores: [
        "Todo Peñalolén",
        "Sectores residenciales",
    ],
    caracteristicas: [
        "Cobertura total en Peñalolén",
        "Kinesiólogos con equipamiento avanzado",
        "Atención post-operatoria especializada",
        "KTR infantil y adulto",
        "Reembolso Isapre y Fonasa libre elección",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | Kine Isapre y Fonasa | KINEUM`,
    description: `Kinesiólogo a domicilio en Peñalolén. Kinesiología respiratoria, geriátrica, post operatoria y rehabilitación neurológica. Isapre y Fonasa. Evaluación gratis.`,
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kine a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        `kinesiólogo a domicilio ${comunaData.nombre} isapre`,
        `kinesiólogo a domicilio ${comunaData.nombre} fonasa`,
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
        title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | Kine Isapre y Fonasa | KINEUM`,
        description: `Kinesiología premium a domicilio en ${comunaData.nombre}. Kinesiólogos certificados a su hogar. Reembolso Isapre y Fonasa.`,
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={comunaData} />
}
