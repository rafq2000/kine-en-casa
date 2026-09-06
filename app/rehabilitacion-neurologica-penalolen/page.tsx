import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "penalolen"
const URL = "https://kineum.cl/rehabilitacion-neurologica-penalolen"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Peñalolén | KINEUM",
    description:
        "Kinesiólogo a domicilio en Peñalolén para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
    keywords: [
            "rehabilitación neurológica Peñalolén",
            "rehabilitación neurológica a domicilio Peñalolén",
            "neurorehabilitación a domicilio Peñalolén",
            "kinesiólogo a domicilio Peñalolén",
            "kinesiología a domicilio Peñalolén",
            "secuelas de ACV Peñalolén",
            "enfermedad de Parkinson Peñalolén",
            "esclerosis múltiple Peñalolén",
            "alzheimer y otras demencias Peñalolén",
            "kinesiólogo Peñalolén Alto",
            "kinesiólogo Comunidad Ecológica",
            "kinesiólogo San Luis"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Neurológica a Domicilio en Peñalolén | KINEUM",
        description:
            "Kinesiólogo a domicilio en Peñalolén para secuelas de ACV, Parkinson y esclerosis múltiple, con plan semanal en casa. Boleta reembolsable en tu Isapre.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
