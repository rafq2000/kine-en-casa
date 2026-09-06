import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "macul"
const URL = "https://kineum.cl/kinesiologia-geriatrica-macul"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en Macul | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en Macul: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera.",
    keywords: [
            "kinesiología geriátrica Macul",
            "kinesiología geriátrica a domicilio Macul",
            "kinesiólogo para adulto mayor Macul",
            "kinesiólogo a domicilio Macul",
            "kinesiología a domicilio Macul",
            "sarcopenia y pérdida de fuerza Macul",
            "prevención de caídas Macul",
            "artrosis de rodilla y cadera Macul",
            "recuperación post hospitalización Macul",
            "kinesiólogo Villa Macul",
            "kinesiólogo Quilín",
            "kinesiólogo Santa Julia"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en Macul | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en Macul: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
