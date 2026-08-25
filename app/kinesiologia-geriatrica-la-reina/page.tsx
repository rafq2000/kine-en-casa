import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "la-reina"
const URL = "https://kineum.cl/kinesiologia-geriatrica-la-reina"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en La Reina | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en La Reina: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos La Reina Alta, Príncipe de Gales, Avenida Ossa y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología geriátrica La Reina",
            "kinesiología geriátrica a domicilio La Reina",
            "kinesiólogo para adulto mayor La Reina",
            "kinesiólogo a domicilio La Reina",
            "kinesiología a domicilio La Reina",
            "sarcopenia y pérdida de fuerza La Reina",
            "prevención de caídas La Reina",
            "artrosis de rodilla y cadera La Reina",
            "recuperación post hospitalización La Reina",
            "kinesiólogo La Reina Alta",
            "kinesiólogo Príncipe de Gales",
            "kinesiólogo Avenida Ossa"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en La Reina | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en La Reina: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera. Atendemos La Reina Alta, Príncipe de Gales, Avenida Ossa y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
