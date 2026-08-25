import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "las-condes"
const URL = "https://kineum.cl/kinesiologia-geriatrica-las-condes"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en Las Condes | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en Las Condes: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos El Golf, Escuela Militar, Manquehue y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología geriátrica Las Condes",
            "kinesiología geriátrica a domicilio Las Condes",
            "kinesiólogo para adulto mayor Las Condes",
            "kinesiólogo a domicilio Las Condes",
            "kinesiología a domicilio Las Condes",
            "sarcopenia y pérdida de fuerza Las Condes",
            "prevención de caídas Las Condes",
            "artrosis de rodilla y cadera Las Condes",
            "recuperación post hospitalización Las Condes",
            "kinesiólogo El Golf",
            "kinesiólogo Escuela Militar",
            "kinesiólogo Manquehue"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en Las Condes | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en Las Condes: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos El Golf, Escuela Militar, Manquehue y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
