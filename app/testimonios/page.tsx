import type { Metadata } from "next"
import Link from "next/link"
import { Star, MessageCircle, Phone, Shield, Award, Users, ChevronRight, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Sin testimonios publicados hasta que Ricardo confirme por escrito cuáles son reales y
// tienen consentimiento (T04i). Con 3 o más confirmados se quita el noindex y vuelve al sitemap.
export const metadata: Metadata = {
    title: "Opiniones de Kinesiología a Domicilio Santiago | KINEUM",
    description:
        "Estamos reuniendo opiniones verificadas de pacientes de KINEUM. Mientras tanto, revisa cómo trabajamos y quiénes somos antes de agendar tu evaluación gratuita.",
    alternates: {
        canonical: "https://kineum.cl/testimonios",
    },
    robots: { index: false, follow: true },
    openGraph: {
        title: "Opiniones de Kinesiología a Domicilio Santiago | KINEUM",
        description:
            "Estamos reuniendo opiniones verificadas de pacientes de KINEUM. Mientras tanto, revisa cómo trabajamos y quiénes somos antes de agendar tu evaluación gratuita.",
        url: "https://kineum.cl/testimonios",
        type: "website",
        images: ["/og-image.jpg"],
    },
}

export default function TestimoniosPage() {
    const jsonLdBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://kineum.cl",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Testimonios",
                item: "https://kineum.cl/testimonios",
            },
        ],
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
            />

            <WhatsAppButton />

            <main id="contenido">
{/* Hero */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-4 py-1.5 text-sm mb-6">
                        <Star className="h-3.5 w-3.5 fill-amber-400 mr-1.5" />
                        Experiencias de pacientes
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Opiniones de <span className="text-amber-400">Pacientes</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Estamos reuniendo opiniones verificadas de pacientes. Mientras tanto, revisa{" "}
                        <Link href="/como-funciona" className="text-amber-400 underline hover:text-amber-300">
                            cómo trabajamos
                        </Link>{" "}
                        y{" "}
                        <Link href="/nosotros" className="text-amber-400 underline hover:text-amber-300">
                            quiénes somos
                        </Link>
                        .
                    </p>

                    {/* Hechos verificables del servicio, no cifras de satisfaccion */}
                    <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-slate-800/60 border border-slate-700 rounded-2xl px-8 py-5">
                        <div className="text-left">
                            <div className="text-lg font-bold text-white">Evaluación inicial gratuita</div>
                            <div className="text-sm text-slate-400">en tu casa y sin compromiso</div>
                        </div>
                        <div className="h-12 w-px bg-slate-700 hidden sm:block" />
                        <div className="text-left">
                            <div className="text-lg font-bold text-white">Sesiones de 60 minutos</div>
                            <div className="text-sm text-slate-400">con equipamiento profesional</div>
                        </div>
                        <div className="h-12 w-px bg-slate-700 hidden sm:block" />
                        <div className="text-left">
                            <div className="text-lg font-bold text-emerald-400">Boleta después de cada sesión</div>
                            <div className="text-sm text-slate-400">reembolsable en tu Isapre</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-10 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-amber-50 p-3 rounded-xl">
                                <Star className="h-6 w-6 text-amber-500" />
                            </div>
                            <div className="text-sm font-medium text-slate-900">Evaluación gratuita</div>
                            <div className="text-xs text-slate-500">antes de contratar</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-emerald-50 p-3 rounded-xl">
                                <Shield className="h-6 w-6 text-emerald-500" />
                            </div>
                            <div className="text-sm font-medium text-slate-900">Kinesiólogos titulados</div>
                            <div className="text-xs text-slate-500">título universitario</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-blue-50 p-3 rounded-xl">
                                <Users className="h-6 w-6 text-blue-500" />
                            </div>
                            <div className="text-sm font-medium text-slate-900">9 comunas de Santiago</div>
                            <div className="text-xs text-slate-500">atención en tu domicilio</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-purple-50 p-3 rounded-xl">
                                <Award className="h-6 w-6 text-purple-500" />
                            </div>
                            <div className="text-sm font-medium text-slate-900">Isapre y Seguros</div>
                            <div className="text-xs text-slate-500">boleta reembolsable</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-slate-500">
                    <li>
                        <Link href="/" className="hover:text-slate-900 transition-colors">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <ChevronRight className="h-3.5 w-3.5" />
                    </li>
                    <li className="text-slate-900 font-medium">Testimonios</li>
                </ol>
            </nav>

            {/* Services Covered */}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-2xl font-serif font-bold text-slate-900 text-center mb-10">
                    Servicios que Atendemos a Domicilio
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                    {[
                        { name: "Traumatológica", href: "/servicios/traumatologica", detalle: "Fracturas, esguinces, lumbago y hombro" },
                        { name: "Geriátrica", href: "/servicios/geriatrica", detalle: "Adulto mayor, caídas y movilidad" },
                        { name: "Respiratoria", href: "/servicios/respiratoria", detalle: "Adultos, niños y lactantes" },
                        { name: "Neurológica", href: "/servicios/neurologica", detalle: "Post ACV, Parkinson y esclerosis" },
                        { name: "Postquirúrgica", href: "/servicios/postquirurgica", detalle: "Prótesis, artroscopia y columna" },
                    ].map((svc) => (
                        <Link
                            key={svc.name}
                            href={svc.href}
                            className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-md transition-all group"
                        >
                            <div>
                                <div className="font-medium text-slate-900 text-sm group-hover:text-amber-600 transition-colors">
                                    Kine {svc.name}
                                </div>
                                <div className="text-xs text-slate-500">{svc.detalle}</div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <Heart className="h-10 w-10 text-amber-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Agenda tu Evaluación Gratuita
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                        Agenda tu evaluación inicial gratuita y empieza tu recuperación en tu casa, con equipamiento profesional
                        y boleta reembolsable en tu Isapre.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/56999679593?text=Hola, quiero agendar una evaluación a domicilio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-200"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Agendar por WhatsApp
                        </a>
                        <a
                            href="tel:+56999679593"
                            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-200"
                        >
                            <Phone className="h-5 w-5" />
                            +56 9 9967 9593
                        </a>
                    </div>
                    <p className="text-slate-500 text-sm mt-6">
                        Evaluación gratuita - Reembolso Isapre - Sin compromiso
                    </p>
                </div>
            </section>

            </main>
<SiteFooter />
        </div>
    )
}
