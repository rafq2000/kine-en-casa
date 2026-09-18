import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"
import { metaEspecialidadComuna } from "@/lib/seo-local"

export const metadata: Metadata = metaEspecialidadComuna("rehabilitacion-neurologica", "puente-alto")

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug="rehabilitacion-neurologica" comunaSlug="puente-alto" />
}
