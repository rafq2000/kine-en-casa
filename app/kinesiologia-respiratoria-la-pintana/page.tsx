import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"
import { metaEspecialidadComuna } from "@/lib/seo-local"

export const metadata: Metadata = metaEspecialidadComuna("kinesiologia-respiratoria", "la-pintana")

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug="kinesiologia-respiratoria" comunaSlug="la-pintana" />
}
