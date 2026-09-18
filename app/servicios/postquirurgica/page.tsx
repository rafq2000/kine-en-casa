import type { Metadata } from "next"
import ServicioPage from "@/components/servicio-page"
import { getServicio } from "@/lib/servicios-contenido"

const contenido = getServicio("postquirurgica")!

export const metadata: Metadata = {
    title: "Rehabilitación Post Operatoria a Domicilio Santiago | KINEUM",
    description: "Kinesiólogo post operatorio a domicilio en Santiago: prótesis de rodilla y cadera, ligamento cruzado, manguito rotador, columna. Evaluación inicial gratis.",
    alternates: {
        canonical: "https://kineum.cl/servicios/postquirurgica",
    },
}

export default function Page() {
    return <ServicioPage contenido={contenido} especialidadSlug="rehabilitacion-postquirurgica" />
}
