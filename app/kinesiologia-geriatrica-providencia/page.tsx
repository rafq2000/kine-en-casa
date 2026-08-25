import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "providencia"
const URL = "https://kineum.cl/kinesiologia-geriatrica-providencia"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en Providencia | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en Providencia: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos Pedro de Valdivia, Manuel Montt, Tobalaba y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología geriátrica Providencia",
            "kinesiología geriátrica a domicilio Providencia",
            "kinesiólogo para adulto mayor Providencia",
            "kinesiólogo a domicilio Providencia",
            "kinesiología a domicilio Providencia",
            "sarcopenia y pérdida de fuerza Providencia",
            "prevención de caídas Providencia",
            "artrosis de rodilla y cadera Providencia",
            "recuperación post hospitalización Providencia",
            "kinesiólogo Pedro de Valdivia",
            "kinesiólogo Manuel Montt",
            "kinesiólogo Tobalaba"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en Providencia | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en Providencia: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos Pedro de Valdivia, Manuel Montt, Tobalaba y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
