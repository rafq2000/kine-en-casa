import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "macul"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-macul"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en Macul | KINEUM",
    description:
        "Kinesiólogo Post Operatorio a domicilio en Macul: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos Villa Macul, Quilín, Santa Julia y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "rehabilitación postquirúrgica Macul",
            "rehabilitación postquirúrgica a domicilio Macul",
            "kinesiólogo post operatorio Macul",
            "kinesiólogo a domicilio Macul",
            "kinesiología a domicilio Macul",
            "prótesis de rodilla Macul",
            "prótesis de cadera Macul",
            "artroscopia de rodilla u hombro Macul",
            "cirugía de columna Macul",
            "kinesiólogo Villa Macul",
            "kinesiólogo Quilín",
            "kinesiólogo Santa Julia"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en Macul | KINEUM",
        description:
            "Kinesiólogo Post Operatorio a domicilio en Macul: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos Villa Macul, Quilín, Santa Julia y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
