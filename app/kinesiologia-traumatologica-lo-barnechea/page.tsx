import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "lo-barnechea"
const URL = "https://kineum.cl/kinesiologia-traumatologica-lo-barnechea"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en Lo Barnechea",
    description:
        "Kinesiólogo Traumatológico a domicilio en Lo Barnechea: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Evaluación gratuita.",
    keywords: [
            "kinesiología traumatológica Lo Barnechea",
            "kinesiología traumatológica a domicilio Lo Barnechea",
            "kinesiólogo traumatológico Lo Barnechea",
            "kinesiólogo a domicilio Lo Barnechea",
            "kinesiología a domicilio Lo Barnechea",
            "esguince de tobillo Lo Barnechea",
            "lumbago y dolor de espalda Lo Barnechea",
            "tendinopatías de hombro Lo Barnechea",
            "fracturas en recuperación Lo Barnechea",
            "kinesiólogo La Dehesa",
            "kinesiólogo Los Trapenses",
            "kinesiólogo El Arrayán"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en Lo Barnechea",
        description:
            "Kinesiólogo Traumatológico a domicilio en Lo Barnechea: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
