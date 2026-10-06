import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("respiratoria")!

const title = "Kinesiología Respiratoria (KTR) a Domicilio Santiago"
const description = "KTR a domicilio en Santiago para niños y adultos: bronquiolitis, SBO, neumonía y EPOC, con orden médica. Evaluación inicial gratuita."

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: "https://kineum.cl/servicios/respiratoria",
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="kinesiologia-respiratoria" />
}
