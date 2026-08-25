import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "penalolen"
const URL = "https://kineum.cl/kinesiologia-geriatrica-penalolen"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en Peñalolén | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en Peñalolén: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos Peñalolén Alto, Comunidad Ecológica, San Luis y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología geriátrica Peñalolén",
            "kinesiología geriátrica a domicilio Peñalolén",
            "kinesiólogo para adulto mayor Peñalolén",
            "kinesiólogo a domicilio Peñalolén",
            "kinesiología a domicilio Peñalolén",
            "sarcopenia y pérdida de fuerza Peñalolén",
            "prevención de caídas Peñalolén",
            "artrosis de rodilla y cadera Peñalolén",
            "recuperación post hospitalización Peñalolén",
            "kinesiólogo Peñalolén Alto",
            "kinesiólogo Comunidad Ecológica",
            "kinesiólogo San Luis"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en Peñalolén | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en Peñalolén: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos Peñalolén Alto, Comunidad Ecológica, San Luis y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
