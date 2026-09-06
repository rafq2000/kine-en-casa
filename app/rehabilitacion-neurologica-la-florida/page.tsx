import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "la-florida"
const URL = "https://kineum.cl/rehabilitacion-neurologica-la-florida"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en La Florida",
    description:
        "Kinesiólogo a domicilio en La Florida para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
    keywords: [
            "rehabilitación neurológica La Florida",
            "rehabilitación neurológica a domicilio La Florida",
            "neurorehabilitación a domicilio La Florida",
            "kinesiólogo a domicilio La Florida",
            "kinesiología a domicilio La Florida",
            "secuelas de ACV La Florida",
            "enfermedad de Parkinson La Florida",
            "esclerosis múltiple La Florida",
            "alzheimer y otras demencias La Florida",
            "kinesiólogo Bellavista de La Florida",
            "kinesiólogo Walker Martínez",
            "kinesiólogo Trinidad"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en La Florida",
        description:
            "Kinesiólogo a domicilio en La Florida para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
