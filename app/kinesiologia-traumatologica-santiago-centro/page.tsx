import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "santiago-centro"
const URL = "https://kineum.cl/kinesiologia-traumatologica-santiago-centro"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en Santiago Centro",
    description:
        "Kinesiólogo Traumatológico a domicilio en Santiago Centro: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Evaluación gratuita.",
    keywords: [
            "kinesiología traumatológica Santiago Centro",
            "kinesiología traumatológica a domicilio Santiago Centro",
            "kinesiólogo traumatológico Santiago Centro",
            "kinesiólogo a domicilio Santiago Centro",
            "kinesiología a domicilio Santiago Centro",
            "esguince de tobillo Santiago Centro",
            "lumbago y dolor de espalda Santiago Centro",
            "tendinopatías de hombro Santiago Centro",
            "fracturas en recuperación Santiago Centro",
            "kinesiólogo Barrio Lastarria",
            "kinesiólogo Barrio Brasil",
            "kinesiólogo Barrio Yungay"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en Santiago Centro",
        description:
            "Kinesiólogo Traumatológico a domicilio en Santiago Centro: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
