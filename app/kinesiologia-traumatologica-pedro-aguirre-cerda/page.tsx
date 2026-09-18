import type { Metadata } from "next"
import EspecialidadComunaPage from "@/components/especialidad-comuna-page"
import { metaEspecialidadComuna } from "@/lib/seo-local"

export const metadata: Metadata = metaEspecialidadComuna("kinesiologia-traumatologica", "pedro-aguirre-cerda")

export default function Page() {
    return <EspecialidadComunaPage especialidadSlug="kinesiologia-traumatologica" comunaSlug="pedro-aguirre-cerda" />
}
