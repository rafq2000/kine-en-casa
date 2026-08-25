import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "providencia"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-providencia"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en Providencia | KINEUM",
    description:
        "Kinesiólogo Post Operatorio a domicilio en Providencia: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos Pedro de Valdivia, Manuel Montt, Tobalaba y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "rehabilitación postquirúrgica Providencia",
            "rehabilitación postquirúrgica a domicilio Providencia",
            "kinesiólogo post operatorio Providencia",
            "kinesiólogo a domicilio Providencia",
            "kinesiología a domicilio Providencia",
            "prótesis de rodilla Providencia",
            "prótesis de cadera Providencia",
            "artroscopia de rodilla u hombro Providencia",
            "cirugía de columna Providencia",
            "kinesiólogo Pedro de Valdivia",
            "kinesiólogo Manuel Montt",
            "kinesiólogo Tobalaba"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en Providencia | KINEUM",
        description:
            "Kinesiólogo Post Operatorio a domicilio en Providencia: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos Pedro de Valdivia, Manuel Montt, Tobalaba y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
