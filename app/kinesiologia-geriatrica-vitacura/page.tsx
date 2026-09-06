import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "vitacura"
const URL = "https://kineum.cl/kinesiologia-geriatrica-vitacura"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en Vitacura | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en Vitacura: sarcopenia y pérdida de fuerza, prevención de caídas y artrosis. Evaluación inicial gratuita.",
    keywords: [
            "kinesiología geriátrica Vitacura",
            "kinesiología geriátrica a domicilio Vitacura",
            "kinesiólogo para adulto mayor Vitacura",
            "kinesiólogo a domicilio Vitacura",
            "kinesiología a domicilio Vitacura",
            "sarcopenia y pérdida de fuerza Vitacura",
            "prevención de caídas Vitacura",
            "artrosis de rodilla y cadera Vitacura",
            "recuperación post hospitalización Vitacura",
            "kinesiólogo Santa María de Manquehue",
            "kinesiólogo Jardín del Este",
            "kinesiólogo Lo Curro"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en Vitacura | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en Vitacura: sarcopenia y pérdida de fuerza, prevención de caídas y artrosis. Evaluación inicial gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
