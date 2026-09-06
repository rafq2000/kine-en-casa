import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "lo-barnechea"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-lo-barnechea"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en Lo Barnechea",
    description:
        "Kinesiólogo Post Operatorio a domicilio en Lo Barnechea: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro.",
    keywords: [
            "rehabilitación postquirúrgica Lo Barnechea",
            "rehabilitación postquirúrgica a domicilio Lo Barnechea",
            "kinesiólogo post operatorio Lo Barnechea",
            "kinesiólogo a domicilio Lo Barnechea",
            "kinesiología a domicilio Lo Barnechea",
            "prótesis de rodilla Lo Barnechea",
            "prótesis de cadera Lo Barnechea",
            "artroscopia de rodilla u hombro Lo Barnechea",
            "cirugía de columna Lo Barnechea",
            "kinesiólogo La Dehesa",
            "kinesiólogo Los Trapenses",
            "kinesiólogo El Arrayán"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en Lo Barnechea",
        description:
            "Kinesiólogo Post Operatorio a domicilio en Lo Barnechea: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
