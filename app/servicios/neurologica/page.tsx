import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("neurologica")!

export const metadata: Metadata = {
    title: 'Rehabilitación Neurológica a Domicilio Santiago | KINEUM',
    description: 'Rehabilitación neurológica experta en casa. Especialistas en recuperación post-ACV, Parkinson, Alzheimer y Esclerosis Múltiple. Neuroplasticidad aplicada.',
    keywords: ['neurorehabilitación domicilio', 'kine neurológica santiago', 'recuperación acv', 'tratamiento parkinson kinesiologia', 'fisioterapia neurológica'],
    alternates: {
        canonical: 'https://kineum.cl/servicios/neurologica',
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="rehabilitacion-neurologica" />
}
