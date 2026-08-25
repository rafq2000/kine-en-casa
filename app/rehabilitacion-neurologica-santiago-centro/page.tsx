import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-neurologica"
const COMUNA = "santiago-centro"
const URL = "https://kineum.cl/rehabilitacion-neurologica-santiago-centro"

export const metadata: Metadata = {
    title: "Rehabilitación Neurológica a Domicilio en Santiago Centro | KINEUM",
    description:
        "Neurorehabilitación a Domicilio a domicilio en Santiago Centro: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple. Atendemos Barrio Lastarria, Barrio Brasil, Barrio Yungay y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
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
        title: "Rehabilitación Neurológica a Domicilio en Santiago Centro | KINEUM",
        description:
            "Neurorehabilitación a Domicilio a domicilio en Santiago Centro: secuelas de ACV, enfermedad de Parkinson, esclerosis múltiple. Atendemos Barrio Lastarria, Barrio Brasil, Barrio Yungay y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
