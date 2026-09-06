import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "nunoa"
const URL = "https://kineum.cl/rehabilitacion-neurologica-nunoa"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Ñuñoa | KINEUM",
    description:
        "Kinesiólogo a domicilio en Ñuñoa para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
    keywords: [
            "rehabilitación neurológica Ñuñoa",
            "rehabilitación neurológica a domicilio Ñuñoa",
            "neurorehabilitación a domicilio Ñuñoa",
            "kinesiólogo a domicilio Ñuñoa",
            "kinesiología a domicilio Ñuñoa",
            "secuelas de ACV Ñuñoa",
            "enfermedad de Parkinson Ñuñoa",
            "esclerosis múltiple Ñuñoa",
            "alzheimer y otras demencias Ñuñoa",
            "kinesiólogo Plaza Ñuñoa",
            "kinesiólogo Avenida Irarrázaval",
            "kinesiólogo Simón Bolívar"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en Ñuñoa | KINEUM",
        description:
            "Kinesiólogo a domicilio en Ñuñoa para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
