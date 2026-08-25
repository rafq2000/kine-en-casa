import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "santiago-centro"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-santiago-centro"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en Santiago Centro | KINEUM",
    description:
        "Kinesiólogo Post Operatorio a domicilio en Santiago Centro: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos Barrio Lastarria, Barrio Brasil, Barrio Yungay y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "rehabilitación postquirúrgica Santiago Centro",
            "rehabilitación postquirúrgica a domicilio Santiago Centro",
            "kinesiólogo post operatorio Santiago Centro",
            "kinesiólogo a domicilio Santiago Centro",
            "kinesiología a domicilio Santiago Centro",
            "prótesis de rodilla Santiago Centro",
            "prótesis de cadera Santiago Centro",
            "artroscopia de rodilla u hombro Santiago Centro",
            "cirugía de columna Santiago Centro",
            "kinesiólogo Barrio Lastarria",
            "kinesiólogo Barrio Brasil",
            "kinesiólogo Barrio Yungay"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en Santiago Centro | KINEUM",
        description:
            "Kinesiólogo Post Operatorio a domicilio en Santiago Centro: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos Barrio Lastarria, Barrio Brasil, Barrio Yungay y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
