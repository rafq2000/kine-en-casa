import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "nunoa"
const URL = "https://kineum.cl/kinesiologia-geriatrica-nunoa"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en Ñuñoa | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en Ñuñoa: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos Plaza Ñuñoa, Avenida Irarrázaval, Simón Bolívar y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología geriátrica Ñuñoa",
            "kinesiología geriátrica a domicilio Ñuñoa",
            "kinesiólogo para adulto mayor Ñuñoa",
            "kinesiólogo a domicilio Ñuñoa",
            "kinesiología a domicilio Ñuñoa",
            "sarcopenia y pérdida de fuerza Ñuñoa",
            "prevención de caídas Ñuñoa",
            "artrosis de rodilla y cadera Ñuñoa",
            "recuperación post hospitalización Ñuñoa",
            "kinesiólogo Plaza Ñuñoa",
            "kinesiólogo Avenida Irarrázaval",
            "kinesiólogo Simón Bolívar"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en Ñuñoa | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en Ñuñoa: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos Plaza Ñuñoa, Avenida Irarrázaval, Simón Bolívar y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
