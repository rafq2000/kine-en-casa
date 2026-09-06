import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "lo-barnechea"
const URL = "https://kineum.cl/kinesiologia-respiratoria-lo-barnechea"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria (KTR) a Domicilio en Lo Barnechea",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Lo Barnechea: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
    keywords: [
            "kinesiología respiratoria Lo Barnechea",
            "kinesiología respiratoria a domicilio Lo Barnechea",
            "kinesiólogo respiratorio (ktr) Lo Barnechea",
            "kinesiólogo a domicilio Lo Barnechea",
            "kinesiología a domicilio Lo Barnechea",
            "bronquiolitis y virus respiratorios Lo Barnechea",
            "bronquitis obstructiva (SBO) Lo Barnechea",
            "neumonía en recuperación Lo Barnechea",
            "ePOC y asma Lo Barnechea",
            "kinesiólogo La Dehesa",
            "kinesiólogo Los Trapenses",
            "kinesiólogo El Arrayán"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria (KTR) a Domicilio en Lo Barnechea",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Lo Barnechea: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
