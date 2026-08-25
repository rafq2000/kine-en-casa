import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "kinesiologia-respiratoria"
const COMUNA = "santiago-centro"
const URL = "https://kineum.cl/kinesiologia-respiratoria-santiago-centro"

export const metadata: Metadata = {
    title: "Kinesiología Respiratoria a Domicilio en Santiago Centro | KINEUM",
    description:
        "Kinesiólogo Respiratorio (KTR) a domicilio en Santiago Centro: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos Barrio Lastarria, Barrio Brasil, Barrio Yungay y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "kinesiología respiratoria Santiago Centro",
            "kinesiología respiratoria a domicilio Santiago Centro",
            "kinesiólogo respiratorio (ktr) Santiago Centro",
            "kinesiólogo a domicilio Santiago Centro",
            "kinesiología a domicilio Santiago Centro",
            "bronquiolitis y virus respiratorios Santiago Centro",
            "bronquitis obstructiva (SBO) Santiago Centro",
            "neumonía en recuperación Santiago Centro",
            "ePOC y asma Santiago Centro",
            "kinesiólogo Barrio Lastarria",
            "kinesiólogo Barrio Brasil",
            "kinesiólogo Barrio Yungay"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Kinesiología Respiratoria a Domicilio en Santiago Centro | KINEUM",
        description:
            "Kinesiólogo Respiratorio (KTR) a domicilio en Santiago Centro: bronquiolitis y virus respiratorios, bronquitis obstructiva (SBO), neumonía en recuperación. Atendemos Barrio Lastarria, Barrio Brasil, Barrio Yungay y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
