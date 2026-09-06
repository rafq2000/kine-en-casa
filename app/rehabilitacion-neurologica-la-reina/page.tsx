import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "la-reina"
const URL = "https://kineum.cl/rehabilitacion-neurologica-la-reina"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en La Reina | KINEUM",
    description:
        "Kinesiólogo a domicilio en La Reina para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
    keywords: [
            "rehabilitación neurológica La Reina",
            "rehabilitación neurológica a domicilio La Reina",
            "neurorehabilitación a domicilio La Reina",
            "kinesiólogo a domicilio La Reina",
            "kinesiología a domicilio La Reina",
            "secuelas de ACV La Reina",
            "enfermedad de Parkinson La Reina",
            "esclerosis múltiple La Reina",
            "alzheimer y otras demencias La Reina",
            "kinesiólogo La Reina Alta",
            "kinesiólogo Príncipe de Gales",
            "kinesiólogo Avenida Ossa"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en La Reina | KINEUM",
        description:
            "Kinesiólogo a domicilio en La Reina para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
