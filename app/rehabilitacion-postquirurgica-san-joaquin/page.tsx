import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "san-joaquin"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-san-joaquin"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en San Joaquín",
    description:
        "Kinesiólogo Post Operatorio a domicilio en San Joaquín: prótesis de rodilla o cadera y artroscopias, desde el alta. Boleta reembolsable en tu Isapre.",
    keywords: [
            "rehabilitación postquirúrgica San Joaquín",
            "rehabilitación postquirúrgica a domicilio San Joaquín",
            "kinesiólogo post operatorio San Joaquín",
            "kinesiólogo a domicilio San Joaquín",
            "kinesiología a domicilio San Joaquín",
            "prótesis de rodilla San Joaquín",
            "prótesis de cadera San Joaquín",
            "artroscopia de rodilla u hombro San Joaquín",
            "cirugía de columna San Joaquín",
            "kinesiólogo Metro San Joaquín",
            "kinesiólogo Pedrero",
            "kinesiólogo La Castrina"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en San Joaquín",
        description:
            "Kinesiólogo Post Operatorio a domicilio en San Joaquín: prótesis de rodilla o cadera y artroscopias, desde el alta. Boleta reembolsable en tu Isapre.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
