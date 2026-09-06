import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "la-florida"
const URL = "https://kineum.cl/kinesiologia-geriatrica-la-florida"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en La Florida | KINEUM",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en La Florida: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera.",
    keywords: [
            "kinesiología geriátrica La Florida",
            "kinesiología geriátrica a domicilio La Florida",
            "kinesiólogo para adulto mayor La Florida",
            "kinesiólogo a domicilio La Florida",
            "kinesiología a domicilio La Florida",
            "sarcopenia y pérdida de fuerza La Florida",
            "prevención de caídas La Florida",
            "artrosis de rodilla y cadera La Florida",
            "recuperación post hospitalización La Florida",
            "kinesiólogo Bellavista de La Florida",
            "kinesiólogo Walker Martínez",
            "kinesiólogo Trinidad"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en La Florida | KINEUM",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en La Florida: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
