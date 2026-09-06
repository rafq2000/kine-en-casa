import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "vitacura"
const URL = "https://kineum.cl/kinesiologia-traumatologica-vitacura"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en Vitacura | KINEUM",
    description:
        "Kinesiólogo Traumatológico a domicilio en Vitacura: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Evaluación gratuita.",
    keywords: [
            "kinesiología traumatológica Vitacura",
            "kinesiología traumatológica a domicilio Vitacura",
            "kinesiólogo traumatológico Vitacura",
            "kinesiólogo a domicilio Vitacura",
            "kinesiología a domicilio Vitacura",
            "esguince de tobillo Vitacura",
            "lumbago y dolor de espalda Vitacura",
            "tendinopatías de hombro Vitacura",
            "fracturas en recuperación Vitacura",
            "kinesiólogo Santa María de Manquehue",
            "kinesiólogo Jardín del Este",
            "kinesiólogo Lo Curro"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en Vitacura | KINEUM",
        description:
            "Kinesiólogo Traumatológico a domicilio en Vitacura: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
