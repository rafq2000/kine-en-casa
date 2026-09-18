import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"
import { metaEspecialidadComuna } from "@/lib/seo-local"

export const metadata: Metadata = metaEspecialidadComuna("rehabilitacion-neurologica", "la-granja")

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug="rehabilitacion-neurologica" comunaSlug="la-granja" />
}
