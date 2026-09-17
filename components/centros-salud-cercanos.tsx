import { Hospital } from "lucide-react"
import type { CentroSalud } from "@/lib/comunas-local"

// Sin hooks: sirve en server components y en la página cliente de comuna.
export function CentrosSaludCercanos({ comuna, centros }: { comuna: string; centros: CentroSalud[] }) {
    if (!centros.length) return null
    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Hospital className="h-5 w-5 text-red-600" />
                Centros de salud y urgencias cerca de {comuna}
            </h3>
            <ul className="space-y-3">
                {centros.map((c) => (
                    <li key={c.nombre} className="text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">{c.nombre}</strong>{" "}
                        <span className="text-slate-500">({c.tipo})</span>
                        {c.nota && <span className="block text-sm text-slate-600">{c.nota}</span>}
                    </li>
                ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                Referencia para emergencias. KINEUM no tiene convenio con estos centros. Ante una urgencia vital llama
                al SAMU 131.
            </p>
        </div>
    )
}
