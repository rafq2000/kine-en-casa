import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "lo-barnechea"
const URL = "https://kineum.cl/kinesiologia-respiratoria-lo-barnechea"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria a Domicilio en Lo Barnechea | KINEUM",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Lo Barnechea: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos La Dehesa, Los Trapenses, El Arrayán y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
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
        title: "Kinesiología Respiratoria a Domicilio en Lo Barnechea | KINEUM",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Lo Barnechea: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos La Dehesa, Los Trapenses, El Arrayán y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
