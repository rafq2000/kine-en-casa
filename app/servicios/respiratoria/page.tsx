import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("respiratoria")!

const title = "KTR a Domicilio: Kinesiología Respiratoria Niños y Adultos"
const description = "KTR es kinesiterapia respiratoria: técnicas para movilizar y eliminar secreciones. A domicilio en Santiago para niños y adultos, con orden médica."

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: "https://kineum.cl/servicios/respiratoria",
    },
    openGraph: {
        title,
        description,
        url: "https://kineum.cl/servicios/respiratoria",
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
        images: ["/og-image.jpg"],
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="kinesiologia-respiratoria" />
}
