import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "la-reina"
const URL = "https://kineum.cl/kinesiologia-traumatologica-la-reina"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en La Reina | KINEUM",
    description:
        "Kinesiólogo Traumatológico a domicilio en La Reina: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Atendemos La Reina Alta, Príncipe de Gales, Avenida Ossa y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología traumatológica La Reina",
            "kinesiología traumatológica a domicilio La Reina",
            "kinesiólogo traumatológico La Reina",
            "kinesiólogo a domicilio La Reina",
            "kinesiología a domicilio La Reina",
            "esguince de tobillo La Reina",
            "lumbago y dolor de espalda La Reina",
            "tendinopatías de hombro La Reina",
            "fracturas en recuperación La Reina",
            "kinesiólogo La Reina Alta",
            "kinesiólogo Príncipe de Gales",
            "kinesiólogo Avenida Ossa"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en La Reina | KINEUM",
        description:
            "Kinesiólogo Traumatológico a domicilio en La Reina: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Atendemos La Reina Alta, Príncipe de Gales, Avenida Ossa y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
