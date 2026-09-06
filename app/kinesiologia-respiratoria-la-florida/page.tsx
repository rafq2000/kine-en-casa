import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "la-florida"
const URL = "https://kineum.cl/kinesiologia-respiratoria-la-florida"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria a Domicilio en La Florida | KINEUM",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en La Florida: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación.",
    keywords: [
            "kinesiología respiratoria La Florida",
            "kinesiología respiratoria a domicilio La Florida",
            "kinesiólogo respiratorio (ktr) La Florida",
            "kinesiólogo a domicilio La Florida",
            "kinesiología a domicilio La Florida",
            "bronquiolitis y virus respiratorios La Florida",
            "bronquitis obstructiva (SBO) La Florida",
            "neumonía en recuperación La Florida",
            "ePOC y asma La Florida",
            "kinesiólogo Bellavista de La Florida",
            "kinesiólogo Walker Martínez",
            "kinesiólogo Trinidad"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria a Domicilio en La Florida | KINEUM",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en La Florida: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
