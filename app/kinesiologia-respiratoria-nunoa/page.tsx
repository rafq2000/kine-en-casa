import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "Ñuñoa",
    slug: "nunoa",
    especialidad: "Kinesiología Respiratoria",
    descripcion: "Kinesiología respiratoria pediátrica y adulto a domicilio en Ñuñoa. Tratamiento experto para bronquitis, neumonía, y EPOC.",
    poblacion: "Especialistas en Kinesiología Respiratoria disponibles en Ñuñoa.",
    sectores: [
        "Todo Ñuñoa"
    ],
    caracteristicas: [
        "Cobertura total en Ñuñoa",
        "Especialistas en Kinesiología Respiratoria",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiología Respiratoria a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Kine respiratorio infantil y adulto a domicilio en Ñuñoa. KTR bebés, bronquitis, neumonía, EPOC y rehabilitación post COVID. Reembolso Isapre.`,
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
        canonical: `https://kineum.cl/kinesiologia-respiratoria-nunoa`,
    },
    openGraph: {
        title: `Kinesiología Respiratoria a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Kinesiología respiratoria pediátrica y adulto a domicilio en Ñuñoa. Tratamiento experto para bronquitis, neumonía, y EPOC.`,
        url: `https://kineum.cl/kinesiologia-respiratoria-nunoa`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
