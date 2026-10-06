import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("traumatologica")!

const title = "Kinesiología Traumatológica a Domicilio en Santiago | KINEUM"
const description = "Esguince, lumbago y tendinitis de hombro tratados en tu casa con carga progresiva, TENS y ultrasonido. Evaluación inicial gratuita. Desde $35.000."

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: "https://kineum.cl/servicios/traumatologica",
    },
    openGraph: {
        title,
        description,
        url: "https://kineum.cl/servicios/traumatologica",
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
        images: ["/og-image.jpg"],
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="kinesiologia-traumatologica" />
}
