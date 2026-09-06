import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "la-florida"
const URL = "https://kineum.cl/kinesiologia-traumatologica-la-florida"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en La Florida",
    description:
        "Kinesiólogo Traumatológico a domicilio en La Florida: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro.",
    keywords: [
            "kinesiología traumatológica La Florida",
            "kinesiología traumatológica a domicilio La Florida",
            "kinesiólogo traumatológico La Florida",
            "kinesiólogo a domicilio La Florida",
            "kinesiología a domicilio La Florida",
            "esguince de tobillo La Florida",
            "lumbago y dolor de espalda La Florida",
            "tendinopatías de hombro La Florida",
            "fracturas en recuperación La Florida",
            "kinesiólogo Bellavista de La Florida",
            "kinesiólogo Walker Martínez",
            "kinesiólogo Trinidad"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en La Florida",
        description:
            "Kinesiólogo Traumatológico a domicilio en La Florida: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
