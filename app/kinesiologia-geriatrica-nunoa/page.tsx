import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "Ñuñoa",
    slug: "nunoa",
    especialidad: "Kinesiología Geriátrica",
    descripcion: "Rehabilitación geriátrica para el adulto mayor a domicilio en Ñuñoa. Tratamiento de Sarcopenia, prevención de caídas y artrosis.",
    poblacion: "Especialistas en Kinesiología Geriátrica disponibles en Ñuñoa.",
    sectores: [
        "Todo Ñuñoa"
    ],
    caracteristicas: [
        "Cobertura total en Ñuñoa",
        "Especialistas en Kinesiología Geriátrica",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiología Geriátrica a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Rehabilitación geriátrica para el adulto mayor a domicilio en Ñuñoa. Tratamiento de Sarcopenia, prevención de caídas y artrosis. Agende hoy al +56 9 9967 9593.`,
    keywords: [
        `${pageData.especialidad.toLowerCase()} a domicilio ${pageData.nombre}`,
        `${pageData.especialidad.toLowerCase()} ${pageData.nombre}`,
        `kinesiólogo a domicilio ${pageData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologia-geriatrica-nunoa`,
    },
    openGraph: {
        title: `Kinesiología Geriátrica a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Rehabilitación geriátrica para el adulto mayor a domicilio en Ñuñoa. Tratamiento de Sarcopenia, prevención de caídas y artrosis.`,
        url: `https://kineum.cl/kinesiologia-geriatrica-nunoa`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
