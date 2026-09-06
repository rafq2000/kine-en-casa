import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "las-condes"
const URL = "https://kineum.cl/rehabilitacion-neurologica-las-condes"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Las Condes",
    description:
        "Neurorehabilitación a domicilio en Las Condes: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple.",
    keywords: [
            "rehabilitación neurológica Las Condes",
            "rehabilitación neurológica a domicilio Las Condes",
            "neurorehabilitación a domicilio Las Condes",
            "kinesiólogo a domicilio Las Condes",
            "kinesiología a domicilio Las Condes",
            "secuelas de ACV Las Condes",
            "enfermedad de Parkinson Las Condes",
            "esclerosis múltiple Las Condes",
            "alzheimer y otras demencias Las Condes",
            "kinesiólogo El Golf",
            "kinesiólogo Escuela Militar",
            "kinesiólogo Manquehue"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en Las Condes",
        description:
            "Neurorehabilitación a domicilio en Las Condes: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
