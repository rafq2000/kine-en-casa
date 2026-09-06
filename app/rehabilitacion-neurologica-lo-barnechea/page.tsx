import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "lo-barnechea"
const URL = "https://kineum.cl/rehabilitacion-neurologica-lo-barnechea"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Lo Barnechea",
    description:
        "Neurorehabilitación a domicilio en Lo Barnechea: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple.",
    keywords: [
            "rehabilitación neurológica Lo Barnechea",
            "rehabilitación neurológica a domicilio Lo Barnechea",
            "neurorehabilitación a domicilio Lo Barnechea",
            "kinesiólogo a domicilio Lo Barnechea",
            "kinesiología a domicilio Lo Barnechea",
            "secuelas de ACV Lo Barnechea",
            "enfermedad de Parkinson Lo Barnechea",
            "esclerosis múltiple Lo Barnechea",
            "alzheimer y otras demencias Lo Barnechea",
            "kinesiólogo La Dehesa",
            "kinesiólogo Los Trapenses",
            "kinesiólogo El Arrayán"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en Lo Barnechea",
        description:
            "Neurorehabilitación a domicilio en Lo Barnechea: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
