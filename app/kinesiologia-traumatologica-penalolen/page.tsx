import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "penalolen"
const URL = "https://kineum.cl/kinesiologia-traumatologica-penalolen"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en Peñalolén | KINEUM",
    description:
        "Kinesiólogo Traumatológico a domicilio en Peñalolén: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Atendemos Peñalolén Alto, Comunidad Ecológica, San Luis y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología traumatológica Peñalolén",
            "kinesiología traumatológica a domicilio Peñalolén",
            "kinesiólogo traumatológico Peñalolén",
            "kinesiólogo a domicilio Peñalolén",
            "kinesiología a domicilio Peñalolén",
            "esguince de tobillo Peñalolén",
            "lumbago y dolor de espalda Peñalolén",
            "tendinopatías de hombro Peñalolén",
            "fracturas en recuperación Peñalolén",
            "kinesiólogo Peñalolén Alto",
            "kinesiólogo Comunidad Ecológica",
            "kinesiólogo San Luis"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en Peñalolén | KINEUM",
        description:
            "Kinesiólogo Traumatológico a domicilio en Peñalolén: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Atendemos Peñalolén Alto, Comunidad Ecológica, San Luis y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
