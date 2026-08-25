import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "la-reina"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-la-reina"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en La Reina | KINEUM",
    description:
        "Kinesiólogo Post Operatorio a domicilio en La Reina: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos La Reina Alta, Príncipe de Gales, Avenida Ossa y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "rehabilitación postquirúrgica La Reina",
            "rehabilitación postquirúrgica a domicilio La Reina",
            "kinesiólogo post operatorio La Reina",
            "kinesiólogo a domicilio La Reina",
            "kinesiología a domicilio La Reina",
            "prótesis de rodilla La Reina",
            "prótesis de cadera La Reina",
            "artroscopia de rodilla u hombro La Reina",
            "cirugía de columna La Reina",
            "kinesiólogo La Reina Alta",
            "kinesiólogo Príncipe de Gales",
            "kinesiólogo Avenida Ossa"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en La Reina | KINEUM",
        description:
            "Kinesiólogo Post Operatorio a domicilio en La Reina: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos La Reina Alta, Príncipe de Gales, Avenida Ossa y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
