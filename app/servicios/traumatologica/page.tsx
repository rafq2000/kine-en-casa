import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("traumatologica")!

export const metadata: Metadata = {
    title: 'Kinesiología Traumatológica a Domicilio | KINEUM',
    description: 'Rehabilitación de lesiones musculares y esqueléticas en casa. Recuperación de prótesis de cadera, rodilla, esguinces y fracturas en Santiago.',
    keywords: ['kinesiología traumatológica domicilio', 'rehabilitación fractura cadera', 'kine prótesis rodilla', 'tratamiento lumbago domicilio', 'esguince tobillo kine'],
    alternates: {
        canonical: 'https://kineum.cl/servicios/traumatologica',
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="kinesiologia-traumatologica" />
}
