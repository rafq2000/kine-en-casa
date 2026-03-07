import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "Las Condes",
    slug: "las-condes",
    especialidad: "Kinesiología Traumatológica",
    descripcion: "Rehabilitación traumatológica a domicilio en Las Condes. Recupérese de esguinces, fracturas y lesiones deportivas sin salir de casa.",
    poblacion: "Especialistas en Kinesiología Traumatológica disponibles en Las Condes.",
    sectores: [
        "Todo Las Condes"
    ],
    caracteristicas: [
        "Cobertura total en Las Condes",
        "Especialistas en Kinesiología Traumatológica",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiología Traumatológica a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Rehabilitación traumatológica a domicilio en Las Condes. Recupérese de esguinces, fracturas y lesiones deportivas sin salir de casa. Agende hoy al +56 9 9967 9593.`,
    keywords: [
        `${pageData.especialidad.toLowerCase()} a domicilio ${pageData.nombre}`,
        `${pageData.especialidad.toLowerCase()} ${pageData.nombre}`,
        `kinesiólogo a domicilio ${pageData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologia-traumatologica-las-condes`,
    },
    openGraph: {
        title: `Kinesiología Traumatológica a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Rehabilitación traumatológica a domicilio en Las Condes. Recupérese de esguinces, fracturas y lesiones deportivas sin salir de casa.`,
        url: `https://kineum.cl/kinesiologia-traumatologica-las-condes`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
