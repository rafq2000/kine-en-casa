import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "san-joaquin"
const URL = "https://kineum.cl/kinesiologia-geriatrica-san-joaquin"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en San Joaquín | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en San Joaquín: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos Metro San Joaquín, Pedrero, La Castrina y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología geriátrica San Joaquín",
            "kinesiología geriátrica a domicilio San Joaquín",
            "kinesiólogo para adulto mayor San Joaquín",
            "kinesiólogo a domicilio San Joaquín",
            "kinesiología a domicilio San Joaquín",
            "sarcopenia y pérdida de fuerza San Joaquín",
            "prevención de caídas San Joaquín",
            "artrosis de rodilla y cadera San Joaquín",
            "recuperación post hospitalización San Joaquín",
            "kinesiólogo Metro San Joaquín",
            "kinesiólogo Pedrero",
            "kinesiólogo La Castrina"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en San Joaquín | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en San Joaquín: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos Metro San Joaquín, Pedrero, La Castrina y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
