import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "macul"
const URL = "https://kineum.cl/kinesiologia-respiratoria-macul"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria a Domicilio en Macul | KINEUM",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Macul: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos Villa Macul, Quilín, Santa Julia y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología respiratoria Macul",
            "kinesiología respiratoria a domicilio Macul",
            "kinesiólogo respiratorio (ktr) Macul",
            "kinesiólogo a domicilio Macul",
            "kinesiología a domicilio Macul",
            "bronquiolitis y virus respiratorios Macul",
            "bronquitis obstructiva (SBO) Macul",
            "neumonía en recuperación Macul",
            "ePOC y asma Macul",
            "kinesiólogo Villa Macul",
            "kinesiólogo Quilín",
            "kinesiólogo Santa Julia"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria a Domicilio en Macul | KINEUM",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Macul: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos Villa Macul, Quilín, Santa Julia y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
