import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"
import { metaEspecialidadComuna } from "@/lib/seo-local"

export const metadata: Metadata = metaEspecialidadComuna("rehabilitacion-postquirurgica", "la-granja")

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug="rehabilitacion-postquirurgica" comunaSlug="la-granja" />
}
