import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "san-joaquin"
const URL = "https://kineum.cl/kinesiologia-respiratoria-san-joaquin"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria a Domicilio en San Joaquín",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en San Joaquín: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación.",
    keywords: [
            "kinesiología respiratoria San Joaquín",
            "kinesiología respiratoria a domicilio San Joaquín",
            "kinesiólogo respiratorio (ktr) San Joaquín",
            "kinesiólogo a domicilio San Joaquín",
            "kinesiología a domicilio San Joaquín",
            "bronquiolitis y virus respiratorios San Joaquín",
            "bronquitis obstructiva (SBO) San Joaquín",
            "neumonía en recuperación San Joaquín",
            "ePOC y asma San Joaquín",
            "kinesiólogo Metro San Joaquín",
            "kinesiólogo Pedrero",
            "kinesiólogo La Castrina"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria a Domicilio en San Joaquín",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en San Joaquín: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
