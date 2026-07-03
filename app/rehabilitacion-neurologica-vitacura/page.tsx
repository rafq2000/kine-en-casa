import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "Vitacura",
    slug: "vitacura",
    especialidad: "Rehabilitación Neurológica",
    descripcion: "Rehabilitación neurológica a domicilio en Vitacura. Apoyo kinesiológico experto post-ACV, Parkinson y enfermedades neurodegenerativas.",
    poblacion: "Especialistas en Rehabilitación Neurológica disponibles en Vitacura.",
    sectores: [
        "Todo Vitacura"
    ],
    caracteristicas: [
        "Cobertura total en Vitacura",
        "Especialistas en Rehabilitación Neurológica",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Rehabilitación Neurológica a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Neurorehabilitación a domicilio en Vitacura. Kinesiólogos expertos en ACV, Parkinson, Alzheimer y esclerosis múltiple. Reembolso Isapre.`,
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
        canonical: `https://kineum.cl/rehabilitacion-neurologica-vitacura`,
    },
    openGraph: {
        title: `Rehabilitación Neurológica a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Rehabilitación neurológica a domicilio en Vitacura. Apoyo kinesiológico experto post-ACV, Parkinson y enfermedades neurodegenerativas.`,
        url: `https://kineum.cl/rehabilitacion-neurologica-vitacura`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
