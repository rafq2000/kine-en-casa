import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "la-reina"
const URL = "https://kineum.cl/kinesiologia-respiratoria-la-reina"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria a Domicilio en La Reina | KINEUM",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en La Reina: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos La Reina Alta, Príncipe de Gales, Avenida Ossa y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología respiratoria La Reina",
            "kinesiología respiratoria a domicilio La Reina",
            "kinesiólogo respiratorio (ktr) La Reina",
            "kinesiólogo a domicilio La Reina",
            "kinesiología a domicilio La Reina",
            "bronquiolitis y virus respiratorios La Reina",
            "bronquitis obstructiva (SBO) La Reina",
            "neumonía en recuperación La Reina",
            "ePOC y asma La Reina",
            "kinesiólogo La Reina Alta",
            "kinesiólogo Príncipe de Gales",
            "kinesiólogo Avenida Ossa"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria a Domicilio en La Reina | KINEUM",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en La Reina: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos La Reina Alta, Príncipe de Gales, Avenida Ossa y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
