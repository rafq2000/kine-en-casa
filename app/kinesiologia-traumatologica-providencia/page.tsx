import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "providencia"
const URL = "https://kineum.cl/kinesiologia-traumatologica-providencia"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en Providencia",
    description:
        "Kinesiólogo Traumatológico a domicilio en Providencia: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro.",
    keywords: [
            "kinesiología traumatológica Providencia",
            "kinesiología traumatológica a domicilio Providencia",
            "kinesiólogo traumatológico Providencia",
            "kinesiólogo a domicilio Providencia",
            "kinesiología a domicilio Providencia",
            "esguince de tobillo Providencia",
            "lumbago y dolor de espalda Providencia",
            "tendinopatías de hombro Providencia",
            "fracturas en recuperación Providencia",
            "kinesiólogo Pedro de Valdivia",
            "kinesiólogo Manuel Montt",
            "kinesiólogo Tobalaba"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en Providencia",
        description:
            "Kinesiólogo Traumatológico a domicilio en Providencia: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
