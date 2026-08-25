import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"

const ESPECIALIDAD = "rehabilitacion-postquirurgica"
const COMUNA = "vitacura"
const URL = "https://kineum.cl/rehabilitacion-postquirurgica-vitacura"

export const metadata: Metadata = {
    title: "Rehabilitación Postquirúrgica a Domicilio en Vitacura | KINEUM",
    description:
        "Kinesiólogo Post Operatorio a domicilio en Vitacura: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos Santa María de Manquehue, Jardín del Este, Lo Curro y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
    keywords: [
            "rehabilitación postquirúrgica Vitacura",
            "rehabilitación postquirúrgica a domicilio Vitacura",
            "kinesiólogo post operatorio Vitacura",
            "kinesiólogo a domicilio Vitacura",
            "kinesiología a domicilio Vitacura",
            "prótesis de rodilla Vitacura",
            "prótesis de cadera Vitacura",
            "artroscopia de rodilla u hombro Vitacura",
            "cirugía de columna Vitacura",
            "kinesiólogo Santa María de Manquehue",
            "kinesiólogo Jardín del Este",
            "kinesiólogo Lo Curro"
    ],
    alternates: {
        canonical: URL,
    },
    openGraph: {
        title: "Rehabilitación Postquirúrgica a Domicilio en Vitacura | KINEUM",
        description:
            "Kinesiólogo Post Operatorio a domicilio en Vitacura: prótesis de rodilla, prótesis de cadera, artroscopia de rodilla u hombro. Atendemos Santa María de Manquehue, Jardín del Este, Lo Curro y toda la comuna. Evaluación inicial gratuita ☎ +56 9 9967 9593",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug={ESPECIALIDAD} comunaSlug={COMUNA} />
}
