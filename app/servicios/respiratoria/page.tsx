import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("respiratoria")!

export const metadata: Metadata = {
    title: 'Kinesiología Respiratoria a Domicilio Santiago | KINEUM',
    description: 'Tratamiento respiratorio a domicilio en Las Condes y Vitacura. Especialistas en Bronquitis, Neumonía, EPOC y KTR Infantil. Agende hoy.',
    keywords: ['kinesiología respiratoria domicilio', 'kine respiratorio infantil', 'neumonía tratamiento casa', 'ktr domicilio santiago', 'bronquitis niños kinesiolgia'],
    alternates: {
        canonical: 'https://kineum.cl/servicios/respiratoria',
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="kinesiologia-respiratoria" />
}
