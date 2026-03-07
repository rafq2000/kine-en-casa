import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "Lo Barnechea",
    slug: "lo-barnechea",
    especialidad: "Kinesiología Respiratoria",
    descripcion: "Kinesiología respiratoria pediátrica y adulto a domicilio en Lo Barnechea. Tratamiento experto para bronquitis, neumonía, y EPOC.",
    poblacion: "Especialistas en Kinesiología Respiratoria disponibles en Lo Barnechea.",
    sectores: [
        "Todo Lo Barnechea"
    ],
    caracteristicas: [
        "Cobertura total en Lo Barnechea",
        "Especialistas en Kinesiología Respiratoria",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiología Respiratoria a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Kinesiología respiratoria pediátrica y adulto a domicilio en Lo Barnechea. Tratamiento experto para bronquitis, neumonía, y EPOC. Agende hoy al +56 9 9967 9593.`,
    keywords: [
        `${pageData.especialidad.toLowerCase()} a domicilio ${pageData.nombre}`,
        `${pageData.especialidad.toLowerCase()} ${pageData.nombre}`,
        `kinesiólogo a domicilio ${pageData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologia-respiratoria-lo-barnechea`,
    },
    openGraph: {
        title: `Kinesiología Respiratoria a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Kinesiología respiratoria pediátrica y adulto a domicilio en Lo Barnechea. Tratamiento experto para bronquitis, neumonía, y EPOC.`,
        url: `https://kineum.cl/kinesiologia-respiratoria-lo-barnechea`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
