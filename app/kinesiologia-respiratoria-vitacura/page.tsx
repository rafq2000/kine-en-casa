import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "vitacura"
const URL = "https://kineum.cl/kinesiologia-respiratoria-vitacura"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria a Domicilio en Vitacura | KINEUM",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Vitacura: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos Santa María de Manquehue, Jardín del Este, Lo Curro y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología respiratoria Vitacura",
            "kinesiología respiratoria a domicilio Vitacura",
            "kinesiólogo respiratorio (ktr) Vitacura",
            "kinesiólogo a domicilio Vitacura",
            "kinesiología a domicilio Vitacura",
            "bronquiolitis y virus respiratorios Vitacura",
            "bronquitis obstructiva (SBO) Vitacura",
            "neumonía en recuperación Vitacura",
            "ePOC y asma Vitacura",
            "kinesiólogo Santa María de Manquehue",
            "kinesiólogo Jardín del Este",
            "kinesiólogo Lo Curro"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria a Domicilio en Vitacura | KINEUM",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Vitacura: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos Santa María de Manquehue, Jardín del Este, Lo Curro y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
