import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "nunoa"
const URL = "https://kineum.cl/kinesiologia-respiratoria-nunoa"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria a Domicilio en Ñuñoa | KINEUM",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Ñuñoa: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos Plaza Ñuñoa, Avenida Irarrázaval, Simón Bolívar y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología respiratoria Ñuñoa",
            "kinesiología respiratoria a domicilio Ñuñoa",
            "kinesiólogo respiratorio (ktr) Ñuñoa",
            "kinesiólogo a domicilio Ñuñoa",
            "kinesiología a domicilio Ñuñoa",
            "bronquiolitis y virus respiratorios Ñuñoa",
            "bronquitis obstructiva (SBO) Ñuñoa",
            "neumonía en recuperación Ñuñoa",
            "ePOC y asma Ñuñoa",
            "kinesiólogo Plaza Ñuñoa",
            "kinesiólogo Avenida Irarrázaval",
            "kinesiólogo Simón Bolívar"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria a Domicilio en Ñuñoa | KINEUM",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Ñuñoa: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos Plaza Ñuñoa, Avenida Irarrázaval, Simón Bolívar y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
