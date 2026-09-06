import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "las-condes"
const URL = "https://kineum.cl/kinesiologia-traumatologica-las-condes"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en Las Condes",
    description:
        "Kinesiólogo Traumatológico a domicilio en Las Condes: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro.",
    keywords: [
            "kinesiología traumatológica Las Condes",
            "kinesiología traumatológica a domicilio Las Condes",
            "kinesiólogo traumatológico Las Condes",
            "kinesiólogo a domicilio Las Condes",
            "kinesiología a domicilio Las Condes",
            "esguince de tobillo Las Condes",
            "lumbago y dolor de espalda Las Condes",
            "tendinopatías de hombro Las Condes",
            "fracturas en recuperación Las Condes",
            "kinesiólogo El Golf",
            "kinesiólogo Escuela Militar",
            "kinesiólogo Manquehue"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en Las Condes",
        description:
            "Kinesiólogo Traumatológico a domicilio en Las Condes: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
