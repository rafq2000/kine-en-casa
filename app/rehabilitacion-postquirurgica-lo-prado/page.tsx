import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"
import { metaEspecialidadComuna } from "@/lib/seo-local"

export const metadata: Metadata = metaEspecialidadComuna("rehabilitacion-postquirurgica", "lo-prado")

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug="rehabilitacion-postquirurgica" comunaSlug="lo-prado" />
}
