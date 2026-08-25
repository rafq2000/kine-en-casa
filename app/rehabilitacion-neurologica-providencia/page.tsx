import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "providencia"
const URL = "https://kineum.cl/rehabilitacion-neurologica-providencia"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Providencia | KINEUM",
    description:
        "Neurorehabilitación a Domicilio a domicilio en Providencia: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple. Atendemos Pedro de Valdivia, Manuel Montt, Tobalaba y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "rehabilitación neurológica Providencia",
            "rehabilitación neurológica a domicilio Providencia",
            "neurorehabilitación a domicilio Providencia",
            "kinesiólogo a domicilio Providencia",
            "kinesiología a domicilio Providencia",
            "secuelas de ACV Providencia",
            "enfermedad de Parkinson Providencia",
            "esclerosis múltiple Providencia",
            "alzheimer y otras demencias Providencia",
            "kinesiólogo Pedro de Valdivia",
            "kinesiólogo Manuel Montt",
            "kinesiólogo Tobalaba"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en Providencia | KINEUM",
        description:
            "Neurorehabilitación a Domicilio a domicilio en Providencia: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple. Atendemos Pedro de Valdivia, Manuel Montt, Tobalaba y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
