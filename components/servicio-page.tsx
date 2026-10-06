import Link from "next/link"
import {
    Phone,
    MessageCircle,
    ChevronRight,
    Check,
    AlertTriangle,
    Home,
    ShieldCheck,
    Clock,
    CircleDollarSign,
    BookOpen,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ComunasPorEspecialidad } from "@/components/comunas-por-especialidad"
import { type ContenidoServicio } from "@/lib/servicios-contenido"
import { especialidades } from "@/lib/especialidades-data"
import { comunas } from "@/lib/comunas-data"
import { BOLETA_TEXTO } from "@/lib/negocio"

const TEL = "+56999679593"
const TEL_DISPLAY = "+56 9 9967 9593"

interface Props {
    contenido: ContenidoServicio
    /** slug de lib/especialidades-data.ts para el bloque de comunas; omitir en /nosotros */
    especialidadSlug?: string
}

export default function ServicioPage({ contenido, especialidadSlug }: Props) {
    const { url, h1, kicker, intro, secciones, faqs, cta } = contenido
    const waLink = `https://wa.me/56999679593?text=${encodeURIComponent(cta.whatsapp)}`
    const articulos = especialidadSlug ? especialidades.find((e) => e.slug === especialidadSlug)?.articulos ?? [] : []

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    }

    const paginaSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: h1,
        description: intro.slice(0, 300),
        url,
        inLanguage: "es-CL",
        lastReviewed: contenido.revisado,
        audience: { "@type": "MedicalAudience", audienceType: "Patient" },
        publisher: {
            "@id": "https://kineum.cl/#organization",
            name: "KINEUM",
            url: "https://kineum.cl",
            logo: { "@type": "ImageObject", url: "https://kineum.cl/logo.png" },
        },
        ...(especialidadSlug ? { about: { "@id": `${url}#servicio` } } : {}),
    }

    // El servicio de esta especialidad, prestado por la única entidad KINEUM (app/layout.tsx)
    const servicioSchema = especialidadSlug
        ? {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": `${url}#servicio`,
              name: h1,
              serviceType: contenido.breadcrumb,
              url,
              provider: { "@id": "https://kineum.cl/#organization" },
              areaServed: comunas.map((c) => ({ "@type": "City", name: c.nombre })),
              offers: {
                  "@type": "Offer",
                  price: "35000",
                  priceCurrency: "CLP",
                  description: "Valor por sesión en el plan de 10 sesiones. Evaluación inicial gratuita.",
                  url: "https://kineum.cl/precios",
              },
          }
        : null

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://kineum.cl" },
            { "@type": "ListItem", position: 2, name: contenido.breadcrumb, item: url },
        ],
    }

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(paginaSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {servicioSchema && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicioSchema) }} />
            )}

            {/* Header */}
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

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-14 md:py-20 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                            <li>
                                <Link href="/" className="hover:text-amber-700">Inicio</Link>
                            </li>
                            <ChevronRight className="h-3.5 w-3.5" />
                            <li className="text-slate-900 font-medium">{contenido.breadcrumb}</li>
                        </ol>
                    </nav>

                    <div className="max-w-4xl">
                        <Badge className="mb-5 bg-slate-900 text-white border-slate-800 px-4 py-1.5">{kicker}</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif leading-tight mb-6">{h1}</h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">{intro}</p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href={waLink}
                                data-cta="hero"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" />
                                {cta.boton}
                            </a>
                            <a
                                href={`tel:${TEL}`}
                                className="inline-flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-colors"
                            >
                                <Phone className="h-5 w-5" />
                                {TEL_DISPLAY}
                            </a>
                        </div>

                        <div className={`grid grid-cols-1 gap-4 ${especialidadSlug ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <ShieldCheck className="h-5 w-5 text-emerald-600 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Evaluación inicial</p>
                                <p className="text-sm text-slate-600">Gratuita y sin compromiso</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <Clock className="h-5 w-5 text-amber-600 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Atención</p>
                                <p className="text-sm text-slate-600">Lunes a domingo</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <Check className="h-5 w-5 text-slate-700 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Boleta reembolsable</p>
                                <p className="text-sm text-slate-600">Isapre y seguros</p>
                            </div>
                            {especialidadSlug && (
                                <Link
                                    href="/precios"
                                    className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:border-amber-300 transition-colors"
                                >
                                    <CircleDollarSign className="h-5 w-5 text-amber-600 mb-2" />
                                    <p className="text-sm font-semibold text-slate-900">Desde $35.000 por sesión</p>
                                    <p className="text-sm text-amber-700">Ver planes y reembolso</p>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cuerpo */}
            <article className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl space-y-14">
                        {secciones.map((s) => (
                            <section key={s.h2} className={s.alerta ? "bg-amber-50 border border-amber-200 rounded-2xl p-7" : ""}>
                                <h2
                                    className={`text-2xl md:text-3xl font-bold font-serif mb-5 ${s.alerta ? "text-amber-900 flex items-center gap-3" : "text-slate-900"
                                        }`}
                                >
                                    {s.alerta && <AlertTriangle className="h-7 w-7 flex-shrink-0" />}
                                    {s.h2}
                                </h2>
                                <div className="space-y-4">
                                    {s.parrafos.map((p, i) => (
                                        <p key={i} className={`leading-relaxed ${s.alerta ? "text-amber-900/90" : "text-slate-600"}`}>
                                            {p}
                                        </p>
                                    ))}
                                </div>
                                {s.lista && s.lista.length > 0 && (
                                    <div className="mt-6">
                                        {s.listaTitulo && (
                                            <h3 className={`font-bold mb-3 ${s.alerta ? "text-amber-900" : "text-slate-900"}`}>
                                                {s.listaTitulo}
                                            </h3>
                                        )}
                                        <ul className="space-y-3">
                                            {s.lista.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div
                                                        className={`rounded-full p-1 mt-0.5 flex-shrink-0 ${s.alerta ? "bg-amber-200" : "bg-emerald-100"
                                                            }`}
                                                    >
                                                        {s.alerta ? (
                                                            <AlertTriangle className="h-3.5 w-3.5 text-amber-800" />
                                                        ) : (
                                                            <Check className="h-3.5 w-3.5 text-emerald-700" />
                                                        )}
                                                    </div>
                                                    <span className={s.alerta ? "text-amber-900/90" : "text-slate-700"}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </article>

            {/* Precio y reembolso (solo en páginas de especialidad; /nosotros no lo muestra) */}
            {especialidadSlug && (
                <section id="precio" className="py-16 md:py-20 bg-slate-950 text-white scroll-mt-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Precio y reembolso</h2>
                            <p className="text-lg text-slate-300 mb-10 max-w-3xl">
                                La evaluación inicial en tu casa es gratuita y recién después te decimos cuántas sesiones
                                necesitas. Todas las sesiones duran 60 minutos.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                    <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">Plan Essential</p>
                                    <p className="text-3xl font-bold mb-1">$160.000</p>
                                    <p className="text-slate-400">4 sesiones · $40.000 por sesión</p>
                                </div>
                                <div className="bg-amber-600 rounded-2xl p-6 border border-amber-500">
                                    <p className="text-sm uppercase tracking-wider text-amber-100 mb-2">Plan Premium</p>
                                    <p className="text-3xl font-bold mb-1">$350.000</p>
                                    <p className="text-amber-50">10 sesiones · $35.000 por sesión</p>
                                </div>
                                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                    <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">Plan Elite</p>
                                    <p className="text-3xl font-bold mb-1">A consultar</p>
                                    <p className="text-slate-400">Tratamientos intensivos o prolongados</p>
                                </div>
                            </div>
                            <p className="text-slate-300 leading-relaxed mb-6 max-w-3xl">
                                Emitimos {BOLETA_TEXTO}. Puedes presentarla a reembolso en tu Isapre y en tu seguro
                                complementario según la cobertura de tu plan. Para reembolsar necesitas una orden médica con
                                el diagnóstico y la indicación de kinesiología.
                            </p>
                            <p className="text-slate-400 mb-8">
                                Detalle de cada plan en{" "}
                                <Link href="/precios" className="text-amber-400 hover:underline">
                                    precios y planes de kinesiología a domicilio
                                </Link>{" "}
                                y paso a paso en la{" "}
                                <Link href="/blog/reembolso-isapre-kinesiologia" className="text-amber-400 hover:underline">
                                    guía de reembolso de kinesiología en tu Isapre
                                </Link>
                                .
                            </p>
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cta="precio"
                                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Agendar evaluación gratuita
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section id="preguntas" className="py-16 md:py-20 bg-slate-50 border-y border-slate-200 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-10">Preguntas frecuentes</h2>
                        <div className="space-y-5">
                            {faqs.map((f) => (
                                <div key={f.q} className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{f.q}</h3>
                                    <p className="text-slate-600 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Guías clínicas del blog sobre esta especialidad */}
            {articulos.length > 0 && (
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif mb-8 flex items-center gap-3">
                                <BookOpen className="h-6 w-6 text-amber-600" />
                                Guías clínicas
                            </h2>
                            <div className="grid md:grid-cols-3 gap-5">
                                {articulos.map((a) => (
                                    <Link
                                        key={a.url}
                                        href={a.url}
                                        className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all"
                                    >
                                        <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                                            {a.titulo}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-sm text-amber-700 mt-3 font-medium">
                                            Leer guía <ChevronRight className="h-4 w-4" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Comunas (solo en paginas de especialidad) */}
            {especialidadSlug && <ComunasPorEspecialidad especialidadSlug={especialidadSlug} />}

            {/* CTA final */}
            <section className="py-16 md:py-24 bg-slate-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-5">{cta.titulo}</h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">{cta.texto}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={waLink}
                            data-cta="cierre"
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
                    <p className="text-sm text-slate-400 mt-8">
                        Servicio particular · Boleta reembolsable en Isapre y seguros complementarios
                    </p>
                </div>
            </section>

            <SiteFooter />
            <WhatsAppButton mensaje={cta.whatsapp} />
        </div>
    )
}
