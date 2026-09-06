import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("nosotros")!

export const metadata: Metadata = {
    title: 'Kinesiólogos Certificados a Domicilio Santiago | KINEUM',
    description: 'Conoce a los kinesiólogos certificados de KINEUM. Profesionales inscritos en la Superintendencia de Salud. Kinesiología a domicilio en Santiago.',
    keywords: [
        "kineum",
        "kinesiólogos certificados santiago",
        "equipo kineum",
        "kinesiólogos a domicilio santiago",
        "fisioterapeutas certificados",
        "kineum opiniones",
        "kinesiólogos superintendencia salud",
        "kinesiólogos experiencia santiago",
    ],
    alternates: {
        canonical: 'https://kineum.cl/nosotros',
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} />
}
