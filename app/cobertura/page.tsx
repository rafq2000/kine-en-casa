import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, MessageCircle, ChevronRight, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { comunas, type ZonaComuna } from "@/lib/comunas-data"
import { especialidades } from "@/lib/especialidades-data"

const TEL = "+56999679593"
const TEL_DISPLAY = "+56 9 9967 9593"
const URL = "https://kineum.cl/cobertura"

export const metadata: Metadata = {
    title: "Cobertura: Kinesiología a Domicilio en la Región Metropolitana",
    description:
        "Las comunas de la Región Metropolitana donde KINEUM atiende kinesiología a domicilio, con página propia por comuna. Evaluación inicial gratuita.",
    keywords: [
        "kinesiología a domicilio región metropolitana",
        "kinesiólogo a domicilio santiago comunas",
        "cobertura kinesiología a domicilio",
        "kinesiólogo a domicilio cerca de mí",
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: "Cobertura de KINEUM en la Región Metropolitana",
        description: "Kinesiología a domicilio comuna por comuna en la Región Metropolitana.",
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
    },
}

const ZONAS: { id: ZonaComuna; titulo: string; texto: string }[] = [
    { id: "oriente", titulo: "Sector oriente", texto: "Donde partió KINEUM: la mayor demanda de rehabilitación domiciliaria de Santiago." },
    { id: "centro", titulo: "Santiago centro y pericentro", texto: "Edificios antiguos, departamentos sin ascensor y mucha población adulta mayor viviendo sola." },
    { id: "norte", titulo: "Sector norte", texto: "Comunas que crecieron rápido y quedan lejos de los centros de rehabilitación del oriente." },
    { id: "poniente", titulo: "Sector poniente y provincias de Talagante y Melipilla", texto: "Viviendas de uno o dos pisos, patios y traslados largos al centro: el domicilio ahorra horas de viaje." },
    { id: "sur", titulo: "Sector sur, Puente Alto, Maipo y Cordillera", texto: "Alta demanda de rehabilitación tras cirugías y de kinesiología respiratoria infantil en invierno." },
]

export default function Page() {
    const conPagina = comunas.filter((c) => c.cobertura === "full")

    const itemList = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Comunas con kinesiología a domicilio KINEUM",
        itemListElement: comunas.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Kinesiología a domicilio en ${c.nombre}`,
            url: `https://kineum.cl/kinesiologo-a-domicilio-${c.slug}`,
        })),
    }

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://kineum.cl" },
            { "@type": "ListItem", position: 2, name: "Cobertura", item: URL },
        ],
    }

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

            <header className="bg-slate-950 text-white sticky top-0 z-50 border-b border-slate-800">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="bg-amber-600 p-2 rounded-xl">
                            <Home className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <span className="text-2xl font-bold font-serif tracking-wide">KINEUM</span>
                            <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                                Kinesiología a Domicilio
                            </span>
                        </div>
                    </Link>
                    <a
                        href={`tel:${TEL}`}
                        className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors text-sm"
                    >
                        <Phone className="h-4 w-4" />
                        <span className="hidden sm:inline">{TEL_DISPLAY}</span>
                        <span className="sm:hidden">Llamar</span>
                    </a>
                </div>
            </header>

            <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-14 md:py-20 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                            <li>
                                <Link href="/" className="hover:text-amber-700">
                                    Inicio
                                </Link>
                            </li>
                            <ChevronRight className="h-3.5 w-3.5" />
                            <li className="text-slate-900 font-medium">Cobertura</li>
                        </ol>
                    </nav>
                    <div className="max-w-4xl">
                        <Badge className="mb-5 bg-slate-900 text-white border-slate-800 px-4 py-1.5">
                            <MapPin className="h-3.5 w-3.5 mr-2" />
                            Región Metropolitana
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif leading-tight mb-6">
                            Kinesiología a Domicilio en la <span className="text-amber-700">Región Metropolitana</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-4 max-w-3xl">
                            Atendemos {comunas.length} comunas de la Región Metropolitana. Cada comuna tiene su propia
                            página con los sectores que cubrimos, los centros de salud de referencia y cómo se coordina
                            la primera visita.
                        </p>
                        <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-3xl">
                            En las comunas del Gran Santiago la primera visita se coordina habitualmente dentro de 24
                            horas. En las comunas más alejadas la agendamos según disponibilidad; escríbenos y te
                            confirmamos el horario antes de que decidas.
                        </p>
                        <a
                            href={`https://wa.me/56999679593?text=${encodeURIComponent("Hola, quiero saber si atienden kinesiología a domicilio en mi comuna")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Consultar cobertura en mi comuna
                        </a>
                    </div>
                </div>
            </section>

            {ZONAS.map((zona) => {
                const lista = comunas.filter((c) => c.zona === zona.id)
                if (!lista.length) return null
                return (
                    <section key={zona.id} className="py-12 md:py-16 border-b border-slate-100">
                        <div className="container mx-auto px-4">
                            <div className="max-w-5xl">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif mb-3">
                                    {zona.titulo}
                                </h2>
                                <p className="text-slate-600 mb-8 max-w-3xl">{zona.texto}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {lista.map((c) => (
                                        <Link
                                            key={c.slug}
                                            href={`/kinesiologo-a-domicilio-${c.slug}`}
                                            className="flex items-center justify-between bg-slate-50 rounded-lg px-5 py-4 border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all group"
                                        >
                                            <span>
                                                <span className="block text-slate-800 font-medium group-hover:text-amber-700 transition-colors">
                                                    {c.nombre}
                                                </span>
                                                <span className="block text-xs text-slate-500">
                                                    {c.cobertura === "full"
                                                        ? "Hub + 5 especialidades"
                                                        : "Visitas coordinadas según agenda"}
                                                </span>
                                            </span>
                                            <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 flex-shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}

            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif mb-6">
                            Especialidades que atendemos en tu casa
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {especialidades.map((e) => (
                                <Link
                                    key={e.slug}
                                    href={e.servicioUrl}
                                    className="flex items-center justify-between bg-white rounded-lg px-5 py-4 border border-slate-200 hover:border-amber-300 transition-colors group"
                                >
                                    <span className="text-slate-700 font-medium group-hover:text-amber-700">
                                        {e.nombre}
                                    </span>
                                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600" />
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 mt-6">
                            {conPagina.length} comunas tienen además una página por especialidad con el detalle clínico
                            local.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-slate-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-5">¿Atienden en tu comuna?</h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Escríbenos con tu dirección y el motivo de consulta. Te confirmamos disponibilidad, el horario y
                        el valor antes de que decidas. La evaluación inicial es gratuita.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/56999679593?text=${encodeURIComponent("Hola, ¿atienden kinesiología a domicilio en mi comuna?")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
                        >
                            <MessageCircle className="h-5 w-5" />
                            WhatsApp {TEL_DISPLAY}
                        </a>
                        <a
                            href={`tel:${TEL}`}
                            className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 rounded-xl transition-colors"
                        >
                            <Phone className="h-5 w-5" />
                            Llamar ahora
                        </a>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    )
}
