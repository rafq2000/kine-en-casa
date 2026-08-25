import Link from "next/link"
import { MapPin, ChevronRight } from "lucide-react"
import { comunas } from "@/lib/comunas-data"
import { especialidades } from "@/lib/especialidades-data"

/**
 * Bloque de cobertura: enlaza una especialidad con las 11 comunas.
 * Se usa en las paginas /servicios/* para conectarlas con su matriz local.
 */
export function ComunasPorEspecialidad({ especialidadSlug }: { especialidadSlug: string }) {
    const esp = especialidades.find((e) => e.slug === especialidadSlug)
    if (!esp) return null

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-6 w-6 text-amber-600" />
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                            {esp.nombre} a domicilio por comuna
                        </h2>
                    </div>
                    <p className="text-slate-600 mb-8 max-w-3xl">
                        Atendemos {esp.corto} en el sector oriente y centro de Santiago. Elige tu comuna para ver los
                        sectores que cubrimos y cómo es la sesión en tu casa.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {comunas.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/${esp.slug}-${c.slug}`}
                                className="flex items-center justify-between bg-white rounded-lg px-5 py-4 border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all group"
                            >
                                <span className="text-slate-700 font-medium group-hover:text-amber-700 transition-colors">
                                    {esp.corto.charAt(0).toUpperCase() + esp.corto.slice(1)} en {c.nombre}
                                </span>
                                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
