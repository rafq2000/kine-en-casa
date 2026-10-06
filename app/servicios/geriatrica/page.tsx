import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("geriatrica")!

const title = "Kinesiología Geriátrica a Domicilio: Adulto Mayor | KINEUM"
const description = "Kinesiología geriátrica a domicilio en Santiago: fuerza, equilibrio, prevención de caídas y recuperación tras una hospitalización. Evaluación gratuita."

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: "https://kineum.cl/servicios/geriatrica",
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="kinesiologia-geriatrica" />
}
