import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "providencia"
const URL = "https://kineum.cl/kinesiologia-respiratoria-providencia"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria (KTR) a Domicilio en Providencia",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Providencia: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
    keywords: [
            "kinesiología respiratoria Providencia",
            "kinesiología respiratoria a domicilio Providencia",
            "kinesiólogo respiratorio (ktr) Providencia",
            "kinesiólogo a domicilio Providencia",
            "kinesiología a domicilio Providencia",
            "bronquiolitis y virus respiratorios Providencia",
            "bronquitis obstructiva (SBO) Providencia",
            "neumonía en recuperación Providencia",
            "ePOC y asma Providencia",
            "kinesiólogo Pedro de Valdivia",
            "kinesiólogo Manuel Montt",
            "kinesiólogo Tobalaba"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria (KTR) a Domicilio en Providencia",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Providencia: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
