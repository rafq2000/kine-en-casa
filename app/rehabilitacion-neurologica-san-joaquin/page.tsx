import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "san-joaquin"
const URL = "https://kineum.cl/rehabilitacion-neurologica-san-joaquin"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en San Joaquín | KINEUM",
    description:
        "Neurorehabilitación a Domicilio a domicilio en San Joaquín: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple. Atendemos Metro San Joaquín, Pedrero, La Castrina y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "rehabilitación neurológica San Joaquín",
            "rehabilitación neurológica a domicilio San Joaquín",
            "neurorehabilitación a domicilio San Joaquín",
            "kinesiólogo a domicilio San Joaquín",
            "kinesiología a domicilio San Joaquín",
            "secuelas de ACV San Joaquín",
            "enfermedad de Parkinson San Joaquín",
            "esclerosis múltiple San Joaquín",
            "alzheimer y otras demencias San Joaquín",
            "kinesiólogo Metro San Joaquín",
            "kinesiólogo Pedrero",
            "kinesiólogo La Castrina"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en San Joaquín | KINEUM",
        description:
            "Neurorehabilitación a Domicilio a domicilio en San Joaquín: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple. Atendemos Metro San Joaquín, Pedrero, La Castrina y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
