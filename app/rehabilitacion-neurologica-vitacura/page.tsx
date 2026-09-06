import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "vitacura"
const URL = "https://kineum.cl/rehabilitacion-neurologica-vitacura"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Vitacura | KINEUM",
    description:
        "Neurorehabilitación a domicilio en Vitacura: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple.",
    keywords: [
            "rehabilitación neurológica Vitacura",
            "rehabilitación neurológica a domicilio Vitacura",
            "neurorehabilitación a domicilio Vitacura",
            "kinesiólogo a domicilio Vitacura",
            "kinesiología a domicilio Vitacura",
            "secuelas de ACV Vitacura",
            "enfermedad de Parkinson Vitacura",
            "esclerosis múltiple Vitacura",
            "alzheimer y otras demencias Vitacura",
            "kinesiólogo Santa María de Manquehue",
            "kinesiólogo Jardín del Este",
            "kinesiólogo Lo Curro"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en Vitacura | KINEUM",
        description:
            "Neurorehabilitación a domicilio en Vitacura: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
