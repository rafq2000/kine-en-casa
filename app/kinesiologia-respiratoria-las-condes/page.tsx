import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "las-condes"
const URL = "https://kineum.cl/kinesiologia-respiratoria-las-condes"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria (KTR) a Domicilio en Las Condes",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Las Condes: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
    keywords: [
            "kinesiología respiratoria Las Condes",
            "kinesiología respiratoria a domicilio Las Condes",
            "kinesiólogo respiratorio (ktr) Las Condes",
            "kinesiólogo a domicilio Las Condes",
            "kinesiología a domicilio Las Condes",
            "bronquiolitis y virus respiratorios Las Condes",
            "bronquitis obstructiva (SBO) Las Condes",
            "neumonía en recuperación Las Condes",
            "ePOC y asma Las Condes",
            "kinesiólogo El Golf",
            "kinesiólogo Escuela Militar",
            "kinesiólogo Manquehue"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria (KTR) a Domicilio en Las Condes",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Las Condes: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
