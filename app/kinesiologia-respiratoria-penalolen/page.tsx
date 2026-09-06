import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "penalolen"
const URL = "https://kineum.cl/kinesiologia-respiratoria-penalolen"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria (KTR) a Domicilio en Peñalolén",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Peñalolén: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
    keywords: [
            "kinesiología respiratoria Peñalolén",
            "kinesiología respiratoria a domicilio Peñalolén",
            "kinesiólogo respiratorio (ktr) Peñalolén",
            "kinesiólogo a domicilio Peñalolén",
            "kinesiología a domicilio Peñalolén",
            "bronquiolitis y virus respiratorios Peñalolén",
            "bronquitis obstructiva (SBO) Peñalolén",
            "neumonía en recuperación Peñalolén",
            "ePOC y asma Peñalolén",
            "kinesiólogo Peñalolén Alto",
            "kinesiólogo Comunidad Ecológica",
            "kinesiólogo San Luis"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria (KTR) a Domicilio en Peñalolén",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Peñalolén: bronquiolitis, bronquitis obstructiva (SBO) y neumonía en recuperación. Evaluación gratuita.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
