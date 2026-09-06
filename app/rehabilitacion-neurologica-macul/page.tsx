import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "macul"
const URL = "https://kineum.cl/rehabilitacion-neurologica-macul"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Macul | KINEUM",
    description:
        "Neurorehabilitación a domicilio en Macul: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple.",
    keywords: [
            "rehabilitación neurológica Macul",
            "rehabilitación neurológica a domicilio Macul",
            "neurorehabilitación a domicilio Macul",
            "kinesiólogo a domicilio Macul",
            "kinesiología a domicilio Macul",
            "secuelas de ACV Macul",
            "enfermedad de Parkinson Macul",
            "esclerosis múltiple Macul",
            "alzheimer y otras demencias Macul",
            "kinesiólogo Villa Macul",
            "kinesiólogo Quilín",
            "kinesiólogo Santa Julia"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en Macul | KINEUM",
        description:
            "Neurorehabilitación a domicilio en Macul: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
