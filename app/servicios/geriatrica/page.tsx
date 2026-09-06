import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("geriatrica")!

export const metadata: Metadata = {
    title: 'Kinesiólogo a Domicilio para Adulto Mayor | KINEUM',
    description: 'Rehabilitación geriátrica en Santiago. Tratamiento de Sarcopenia, prevención de caídas y artrosis. Kinesiólogos expertos en el cuidado del adulto mayor.',
    keywords: ['kinesiología adulto mayor domicilio', 'kine geriatrica santiago', 'tratamiento sarcopenia', 'rehabilitación artrosis cadera', 'kinesiologo tercera edad'],
    alternates: {
        canonical: 'https://kineum.cl/servicios/geriatrica',
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="kinesiologia-geriatrica" />
}
