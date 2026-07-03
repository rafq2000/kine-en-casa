import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "San Joaquín",
    slug: "san-joaquin",
    especialidad: "Rehabilitación Postquirúrgica",
    descripcion: "Recuperación postquirúrgica especializada a domicilio en San Joaquín. Kinesiólogos expertos para una rehabilitación segura y efectiva.",
    poblacion: "Especialistas en Rehabilitación Postquirúrgica disponibles en San Joaquín.",
    sectores: [
        "Todo San Joaquín"
    ],
    caracteristicas: [
        "Cobertura total en San Joaquín",
        "Especialistas en Rehabilitación Postquirúrgica",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Rehabilitación Postquirúrgica a Domicilio en ${pageData.nombre} | KINEUM`,
    description: `Kine postquirúrgico a domicilio en San Joaquín. Rehabilitación post cirugía rodilla, cadera, hombro, columna y artroscopia. Reembolso Isapre.`,
    keywords: [
        `${pageData.especialidad.toLowerCase()} a domicilio ${pageData.nombre}`,
        `${pageData.especialidad.toLowerCase()} ${pageData.nombre}`,
        `kinesiólogo a domicilio ${pageData.nombre}`,
        `rehabilitación post cirugía rodilla ${pageData.nombre}`,
        `kine post artroscopia ${pageData.nombre}`,
        `recuperación prótesis cadera ${pageData.nombre}`,
        `kine post operación columna ${pageData.nombre}`,
        `rehabilitación post cirugía hombro ${pageData.nombre}`,
        `kine post cesárea ${pageData.nombre}`,
        `recuperación post hospitalización ${pageData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/rehabilitacion-postquirurgica-san-joaquin`,
    },
    openGraph: {
        title: `Rehabilitación Postquirúrgica a Domicilio en ${pageData.nombre} | KINEUM`,
        description: `Recuperación postquirúrgica especializada a domicilio en San Joaquín. Kinesiólogos expertos para una rehabilitación segura y efectiva.`,
        url: `https://kineum.cl/rehabilitacion-postquirurgica-san-joaquin`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
