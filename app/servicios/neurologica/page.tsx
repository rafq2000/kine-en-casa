import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("neurologica")!

const title = "Rehabilitación Neurológica a Domicilio Santiago | KINEUM"
const description = "Neurorehabilitación a domicilio en Santiago oriente: secuelas de ACV, Parkinson, esclerosis múltiple y parálisis facial. Evaluación inicial gratuita."

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: "https://kineum.cl/servicios/neurologica",
    },
    openGraph: {
        title,
        description,
        url: "https://kineum.cl/servicios/neurologica",
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
        images: ["/og-image.jpg"],
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="rehabilitacion-neurologica" />
}
