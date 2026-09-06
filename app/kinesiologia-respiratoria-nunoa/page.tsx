import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "nunoa"
const URL = "https://kineum.cl/kinesiologia-respiratoria-nunoa"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria (KTR) a Domicilio en Ñuñoa",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Ñuñoa: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
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
        title: "Kinesiología Respiratoria (KTR) a Domicilio en Ñuñoa",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Ñuñoa: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
