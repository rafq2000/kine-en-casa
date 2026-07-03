import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "Las Condes",
    slug: "las-condes",
    especialidad: "Rehabilitación Neurológica",
    descripcion: "Rehabilitación neurológica a domicilio en Las Condes. Apoyo kinesiológico experto post-ACV, Parkinson y enfermedades neurodegenerativas.",
    poblacion: "Especialistas en Rehabilitación Neurológica disponibles en Las Condes.",
    sectores: [
        "Todo Las Condes"
    ],
    caracteristicas: [
        "Cobertura total en Las Condes",
        "Especialistas en Rehabilitación Neurológica",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Rehabilitación Neurológica a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Neurorehabilitación a domicilio en Las Condes. Kinesiólogos expertos en ACV, Parkinson, Alzheimer y esclerosis múltiple. Reembolso Isapre.`,
    keywords: [
        `${pageData.especialidad.toLowerCase()} a domicilio ${pageData.nombre}`,
        `${pageData.especialidad.toLowerCase()} ${pageData.nombre}`,
        `kinesiólogo a domicilio ${pageData.nombre}`,
        `rehabilitación ACV ${pageData.nombre}`,
        `kinesiólogo Parkinson ${pageData.nombre}`,
        `neurorehabilitación ${pageData.nombre}`,
        `kine Alzheimer ${pageData.nombre}`,
        `esclerosis múltiple rehabilitación ${pageData.nombre}`,
        `terapia neurológica domicilio ${pageData.nombre}`,
        `rehabilitación post ACV isapre ${pageData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/rehabilitacion-neurologica-las-condes`,
    },
    openGraph: {
        title: `Rehabilitación Neurológica a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Rehabilitación neurológica a domicilio en Las Condes. Apoyo kinesiológico experto post-ACV, Parkinson y enfermedades neurodegenerativas.`,
        url: `https://kineum.cl/rehabilitacion-neurologica-las-condes`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
