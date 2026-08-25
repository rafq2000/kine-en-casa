import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-traumatologica"
const COMUNA = "nunoa"
const URL = "https://kineum.cl/kinesiologia-traumatologica-nunoa"

export const metadata: Metadata = {
    title: "Kinesiología Traumatológica a Domicilio en Ñuñoa | KINEUM",
    description:
        "Kinesiólogo Traumatológico a domicilio en Ñuñoa: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Atendemos Plaza Ñuñoa, Avenida Irarrázaval, Simón Bolívar y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología traumatológica Ñuñoa",
            "kinesiología traumatológica a domicilio Ñuñoa",
            "kinesiólogo traumatológico Ñuñoa",
            "kinesiólogo a domicilio Ñuñoa",
            "kinesiología a domicilio Ñuñoa",
            "esguince de tobillo Ñuñoa",
            "lumbago y dolor de espalda Ñuñoa",
            "tendinopatías de hombro Ñuñoa",
            "fracturas en recuperación Ñuñoa",
            "kinesiólogo Plaza Ñuñoa",
            "kinesiólogo Avenida Irarrázaval",
            "kinesiólogo Simón Bolívar"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Traumatológica a Domicilio en Ñuñoa | KINEUM",
        description:
            "Kinesiólogo Traumatológico a domicilio en Ñuñoa: esguince de tobillo, lumbago y dolor de espalda, tendinopatías de hombro. Atendemos Plaza Ñuñoa, Avenida Irarrázaval, Simón Bolívar y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
