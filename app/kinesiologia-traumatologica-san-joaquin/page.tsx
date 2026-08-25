import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "san-joaquin"
const URL = "https://kineum.cl/kinesiologia-traumatologica-san-joaquin"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en San Joaquín | KINEUM",
    description:
        "Kinesiólogo Traumatológico a domicilio en San Joaquín: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Atendemos Metro San Joaquín, Pedrero, La Castrina y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología traumatológica San Joaquín",
            "kinesiología traumatológica a domicilio San Joaquín",
            "kinesiólogo traumatológico San Joaquín",
            "kinesiólogo a domicilio San Joaquín",
            "kinesiología a domicilio San Joaquín",
            "esguince de tobillo San Joaquín",
            "lumbago y dolor de espalda San Joaquín",
            "tendinopatías de hombro San Joaquín",
            "fracturas en recuperación San Joaquín",
            "kinesiólogo Metro San Joaquín",
            "kinesiólogo Pedrero",
            "kinesiólogo La Castrina"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en San Joaquín | KINEUM",
        description:
            "Kinesiólogo Traumatológico a domicilio en San Joaquín: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Atendemos Metro San Joaquín, Pedrero, La Castrina y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
