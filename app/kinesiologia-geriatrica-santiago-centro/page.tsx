import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-geriatrica"
const COMUNA = "santiago-centro"
const URL = "https://kineum.cl/kinesiologia-geriatrica-santiago-centro"

export const metadata: Metadata = {
    title: "Kinesiología Geriátrica a Domicilio en Santiago Centro",
    description:
        "Kinesiólogo para Adulto Mayor a domicilio en Santiago Centro: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera.",
    keywords: [
            "kinesiología geriátrica Santiago Centro",
            "kinesiología geriátrica a domicilio Santiago Centro",
            "kinesiólogo para adulto mayor Santiago Centro",
            "kinesiólogo a domicilio Santiago Centro",
            "kinesiología a domicilio Santiago Centro",
            "sarcopenia y pérdida de fuerza Santiago Centro",
            "prevención de caídas Santiago Centro",
            "artrosis de rodilla y cadera Santiago Centro",
            "recuperación post hospitalización Santiago Centro",
            "kinesiólogo Barrio Lastarria",
            "kinesiólogo Barrio Brasil",
            "kinesiólogo Barrio Yungay"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Geriátrica a Domicilio en Santiago Centro",
        description:
            "Kinesiólogo para Adulto Mayor a domicilio en Santiago Centro: sarcopenia y pérdida de fuerza, prevención de caídas, artrosis de rodilla y cadera.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
