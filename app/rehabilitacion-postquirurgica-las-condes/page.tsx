import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "las-condes"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-las-condes"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en Las Condes | KINEUM",
    description:
        "Kinesiólogo Post Operatorio a domicilio en Las Condes: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos El Golf, Escuela Militar, Manquehue y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "rehabilitación postquirúrgica Las Condes",
            "rehabilitación postquirúrgica a domicilio Las Condes",
            "kinesiólogo post operatorio Las Condes",
            "kinesiólogo a domicilio Las Condes",
            "kinesiología a domicilio Las Condes",
            "prótesis de rodilla Las Condes",
            "prótesis de cadera Las Condes",
            "artroscopia de rodilla u hombro Las Condes",
            "cirugía de columna Las Condes",
            "kinesiólogo El Golf",
            "kinesiólogo Escuela Militar",
            "kinesiólogo Manquehue"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en Las Condes | KINEUM",
        description:
            "Kinesiólogo Post Operatorio a domicilio en Las Condes: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos El Golf, Escuela Militar, Manquehue y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
