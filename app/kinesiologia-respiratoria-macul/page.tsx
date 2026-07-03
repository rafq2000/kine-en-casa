import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "Macul",
    slug: "macul",
    especialidad: "Kinesiología Respiratoria",
    descripcion: "Kinesiología respiratoria pediátrica y adulto a domicilio en Macul. Tratamiento experto para bronquitis, neumonía, y EPOC.",
    poblacion: "Especialistas en Kinesiología Respiratoria disponibles en Macul.",
    sectores: [
        "Todo Macul"
    ],
    caracteristicas: [
        "Cobertura total en Macul",
        "Especialistas en Kinesiología Respiratoria",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiología Respiratoria a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Kine respiratorio infantil y adulto a domicilio en Macul. KTR bebés, bronquitis, neumonía, EPOC y rehabilitación post COVID. Reembolso Isapre.`,
    keywords: [
        `${pageData.especialidad.toLowerCase()} a domicilio ${pageData.nombre}`,
        `${pageData.especialidad.toLowerCase()} ${pageData.nombre}`,
        `kinesiólogo a domicilio ${pageData.nombre}`,
        `kine respiratorio bebé ${pageData.nombre}`,
        `kinesiología respiratoria infantil ${pageData.nombre}`,
        `KTR a domicilio ${pageData.nombre}`,
        `tratamiento EPOC ${pageData.nombre}`,
        `rehabilitación post COVID ${pageData.nombre}`,
        `kine respiratorio isapre ${pageData.nombre}`,
        `bronquitis tratamiento kine ${pageData.nombre}`,
        `neumonía rehabilitación ${pageData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologia-respiratoria-macul`,
    },
    openGraph: {
        title: `Kinesiología Respiratoria a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Kinesiología respiratoria pediátrica y adulto a domicilio en Macul. Tratamiento experto para bronquitis, neumonía, y EPOC.`,
        url: `https://kineum.cl/kinesiologia-respiratoria-macul`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
