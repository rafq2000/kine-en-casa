import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("nosotros")!

const title = "Quiénes Somos: Equipo de Kinesiología KINEUM"
const description =
    "Qué le exigimos a cada kinesiólogo de KINEUM, cómo trabajamos a domicilio en 9 comunas de Santiago y los datos de Kineum SpA para que los verifiques."

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: "https://kineum.cl/nosotros",
    },
    openGraph: {
        title,
        description,
        url: "https://kineum.cl/nosotros",
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
        images: ["/og-image.jpg"],
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} />
}
