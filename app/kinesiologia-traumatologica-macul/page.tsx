import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "macul"
const URL = "https://kineum.cl/kinesiologia-traumatologica-macul"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en Macul | KINEUM",
    description:
        "Kinesiólogo Traumatológico a domicilio en Macul: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Evaluación gratuita.",
    keywords: [
            "kinesiología traumatológica Macul",
            "kinesiología traumatológica a domicilio Macul",
            "kinesiólogo traumatológico Macul",
            "kinesiólogo a domicilio Macul",
            "kinesiología a domicilio Macul",
            "esguince de tobillo Macul",
            "lumbago y dolor de espalda Macul",
            "tendinopatías de hombro Macul",
            "fracturas en recuperación Macul",
            "kinesiólogo Villa Macul",
            "kinesiólogo Quilín",
            "kinesiólogo Santa Julia"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en Macul | KINEUM",
        description:
            "Kinesiólogo Traumatológico a domicilio en Macul: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
