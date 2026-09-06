import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "lo-barnechea"
const URL = "https://kineum.cl/kinesiologia-geriatrica-lo-barnechea"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en Lo Barnechea | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en Lo Barnechea: sarcopenia y pérdida de fuerza, prevención de caídas y artrosis. Evaluación inicial gratuita.",
    keywords: [
            "kinesiología geriátrica Lo Barnechea",
            "kinesiología geriátrica a domicilio Lo Barnechea",
            "kinesiólogo para adulto mayor Lo Barnechea",
            "kinesiólogo a domicilio Lo Barnechea",
            "kinesiología a domicilio Lo Barnechea",
            "sarcopenia y pérdida de fuerza Lo Barnechea",
            "prevención de caídas Lo Barnechea",
            "artrosis de rodilla y cadera Lo Barnechea",
            "recuperación post hospitalización Lo Barnechea",
            "kinesiólogo La Dehesa",
            "kinesiólogo Los Trapenses",
            "kinesiólogo El Arrayán"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en Lo Barnechea | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en Lo Barnechea: sarcopenia y pérdida de fuerza, prevención de caídas y artrosis. Evaluación inicial gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
