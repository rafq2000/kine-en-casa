import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "la-florida"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-la-florida"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en La Florida",
    description:
        "Kinesiólogo Post Operatorio a domicilio en La Florida: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro.",
    keywords: [
            "rehabilitación postquirúrgica La Florida",
            "rehabilitación postquirúrgica a domicilio La Florida",
            "kinesiólogo post operatorio La Florida",
            "kinesiólogo a domicilio La Florida",
            "kinesiología a domicilio La Florida",
            "prótesis de rodilla La Florida",
            "prótesis de cadera La Florida",
            "artroscopia de rodilla u hombro La Florida",
            "cirugía de columna La Florida",
            "kinesiólogo Bellavista de La Florida",
            "kinesiólogo Walker Martínez",
            "kinesiólogo Trinidad"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en La Florida",
        description:
            "Kinesiólogo Post Operatorio a domicilio en La Florida: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
