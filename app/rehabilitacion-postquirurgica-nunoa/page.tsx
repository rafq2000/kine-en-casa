import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "nunoa"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-nunoa"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en Ñuñoa | KINEUM",
    description:
        "Kinesiólogo Post Operatorio a domicilio en Ñuñoa: prótesis de rodilla o cadera y artroscopias, desde el alta. Boleta reembolsable en tu Isapre.",
    keywords: [
            "rehabilitación postquirúrgica Ñuñoa",
            "rehabilitación postquirúrgica a domicilio Ñuñoa",
            "kinesiólogo post operatorio Ñuñoa",
            "kinesiólogo a domicilio Ñuñoa",
            "kinesiología a domicilio Ñuñoa",
            "prótesis de rodilla Ñuñoa",
            "prótesis de cadera Ñuñoa",
            "artroscopia de rodilla u hombro Ñuñoa",
            "cirugía de columna Ñuñoa",
            "kinesiólogo Plaza Ñuñoa",
            "kinesiólogo Avenida Irarrázaval",
            "kinesiólogo Simón Bolívar"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en Ñuñoa | KINEUM",
        description:
            "Kinesiólogo Post Operatorio a domicilio en Ñuñoa: prótesis de rodilla o cadera y artroscopias, desde el alta. Boleta reembolsable en tu Isapre.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
