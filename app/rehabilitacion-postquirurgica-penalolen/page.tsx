import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "penalolen"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-penalolen"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en Peñalolén",
    description:
        "Kinesiólogo Post Operatorio a domicilio en Peñalolén: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro.",
    keywords: [
            "rehabilitación postquirúrgica Peñalolén",
            "rehabilitación postquirúrgica a domicilio Peñalolén",
            "kinesiólogo post operatorio Peñalolén",
            "kinesiólogo a domicilio Peñalolén",
            "kinesiología a domicilio Peñalolén",
            "prótesis de rodilla Peñalolén",
            "prótesis de cadera Peñalolén",
            "artroscopia de rodilla u hombro Peñalolén",
            "cirugía de columna Peñalolén",
            "kinesiólogo Peñalolén Alto",
            "kinesiólogo Comunidad Ecológica",
            "kinesiólogo San Luis"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en Peñalolén",
        description:
            "Kinesiólogo Post Operatorio a domicilio en Peñalolén: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
