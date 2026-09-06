import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "santiago-centro"
const URL = "https://kineum.cl/rehabilitacion-neurologica-santiago-centro"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Santiago Centro",
    description:
        "Kinesiólogo a domicilio en Santiago Centro para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
    keywords: [
            "rehabilitación neurológica Santiago Centro",
            "rehabilitación neurológica a domicilio Santiago Centro",
            "neurorehabilitación a domicilio Santiago Centro",
            "kinesiólogo a domicilio Santiago Centro",
            "kinesiología a domicilio Santiago Centro",
            "secuelas de ACV Santiago Centro",
            "enfermedad de Parkinson Santiago Centro",
            "esclerosis múltiple Santiago Centro",
            "alzheimer y otras demencias Santiago Centro",
            "kinesiólogo Barrio Lastarria",
            "kinesiólogo Barrio Brasil",
            "kinesiólogo Barrio Yungay"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en Santiago Centro",
        description:
            "Kinesiólogo a domicilio en Santiago Centro para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
