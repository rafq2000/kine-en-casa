import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "Las Condes",
    slug: "las-condes",
    especialidad: "Kinesiología Geriátrica",
    descripcion: "Rehabilitación geriátrica para el adulto mayor a domicilio en Las Condes. Tratamiento de Sarcopenia, prevención de caídas y artrosis.",
    poblacion: "Especialistas en Kinesiología Geriátrica disponibles en Las Condes.",
    sectores: [
        "Todo Las Condes"
    ],
    caracteristicas: [
        "Cobertura total en Las Condes",
        "Especialistas en Kinesiología Geriátrica",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiología Geriátrica a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Kinesiólogo geriátrico a domicilio en Las Condes. Tratamiento sarcopenia, prevención de caídas, artrosis y rehabilitación adulto mayor. Reembolso Isapre.`,
    keywords: [
        `${pageData.especialidad.toLowerCase()} a domicilio ${pageData.nombre}`,
        `${pageData.especialidad.toLowerCase()} ${pageData.nombre}`,
        `kinesiólogo a domicilio ${pageData.nombre}`,
        `kinesiólogo adulto mayor ${pageData.nombre}`,
        `prevención caídas adulto mayor ${pageData.nombre}`,
        `tratamiento sarcopenia ${pageData.nombre}`,
        `rehabilitación artrosis ${pageData.nombre}`,
        `kine tercera edad ${pageData.nombre}`,
        `fisioterapia geriátrica ${pageData.nombre}`,
        `kinesiólogo adulto mayor isapre ${pageData.nombre}`,
        `rehabilitación post hospitalización ${pageData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologia-geriatrica-las-condes`,
    },
    openGraph: {
        title: `Kinesiología Geriátrica a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Rehabilitación geriátrica para el adulto mayor a domicilio en Las Condes. Tratamiento de Sarcopenia, prevención de caídas y artrosis.`,
        url: `https://kineum.cl/kinesiologia-geriatrica-las-condes`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
