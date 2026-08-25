import Link from "next/link"
import {
    MapPin,
    Phone,
    MessageCircle,
    Check,
    ChevronRight,
    AlertTriangle,
    Clock,
    Stethoscope,
    ShieldCheck,
    BookOpen,
    Home,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { comunas, type Comuna } from "@/lib/comunas-data"
import { especialidades, type Especialidad } from "@/lib/especialidades-data"

const TEL = "+56999679593"
const TEL_DISPLAY = "+56 9 9967 9593"

function wa(text: string) {
    return `https://wa.me/56999679593?text=${encodeURIComponent(text)}`
}

interface Props {
    especialidadSlug: string
    comunaSlug: string
}

export default function EspecialidadComunaPage({ especialidadSlug, comunaSlug }: Props) {
    const esp = especialidades.find((e) => e.slug === especialidadSlug) as Especialidad
    const com = comunas.find((c) => c.slug === comunaSlug) as Comuna

    const url = `https://kineum.cl/${esp.slug}-${com.slug}`
    const waLink = wa(`Hola, necesito ${esp.corto} a domicilio en ${com.nombre}`)

    // Otras especialidades en la misma comuna
    const otrasEspecialidades = especialidades.filter((e) => e.slug !== esp.slug)
    // La misma especialidad en otras comunas
    const otrasComunas = comunas.filter((c) => c.slug !== com.slug)

    const faqs = [
        ...esp.faqs.map((f) => ({ q: f.q, a: f.a })),
        {
            q: `¿Atienden ${esp.corto} en todos los sectores de ${com.nombre}?`,
            a: `Sí. Cubrimos toda la comuna de ${com.nombre}, incluyendo ${com.sectores.slice(0, 5).join(", ")} y el resto de los sectores. Todas las sesiones se realizan en el domicilio del paciente.`,
        },
        {
            q: `¿Cuánto demoran en llegar a ${com.nombre}?`,
            a: `Coordinamos la primera visita ${com.llegada}. La evaluación inicial es gratuita y sin compromiso.`,
        },
        {
            q: `¿Emiten boleta para reembolso en ${com.nombre}?`,
            a: "Sí. Emitimos boleta de honorarios electrónica el mismo día, reembolsable en tu Isapre (habitualmente 50-80% según plan) y en tu seguro complementario si tienes uno.",
        },
    ]

    const medicalSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": `${url}#business`,
        name: `KINEUM - ${esp.nombre} a Domicilio en ${com.nombre}`,
        description: `${esp.nombre} a domicilio en ${com.nombre}, Santiago. ${esp.intro}`,
        url,
        telephone: TEL,
        priceRange: "$$",
        medicalSpecialty: "Physiotherapy",
        areaServed: {
            "@type": "City",
            name: com.nombre,
            containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Región Metropolitana, Chile" },
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: com.nombre,
            addressRegion: "Región Metropolitana",
            addressCountry: "CL",
        },
        parentOrganization: { "@type": "Organization", name: "KINEUM", url: "https://kineum.cl" },
        availableService: esp.condiciones.map((c) => ({
            "@type": "MedicalTherapy",
            name: c.titulo,
            description: c.detalle,
        })),
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://kineum.cl" },
            { "@type": "ListItem", position: 2, name: esp.nombre, item: `https://kineum.cl${esp.servicioUrl}` },
            { "@type": "ListItem", position: 3, name: com.nombre, item: url },
        ],
    }

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
                                <Link href="/" className="hover:text-amber-700">
                                    Inicio
                                </Link>
                            </li>
                            <ChevronRight className="h-3.5 w-3.5" />
                            <li>
                                <Link href={esp.servicioUrl} className="hover:text-amber-700">
                                    {esp.nombre}
                                </Link>
                            </li>
                            <ChevronRight className="h-3.5 w-3.5" />
                            <li className="text-slate-900 font-medium">{com.nombre}</li>
                        </ol>
                    </nav>

                    <div className="max-w-4xl">
                        <Badge className="mb-5 bg-slate-900 text-white border-slate-800 px-4 py-1.5">
                            <MapPin className="h-3.5 w-3.5 mr-2" />
                            {com.nombre}, Santiago
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif leading-tight mb-6">
                            {esp.nombre} a Domicilio en <span className="text-amber-700">{com.nombre}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-4 max-w-3xl">{esp.intro}</p>
                        <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-3xl">{com.contexto}</p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Agendar evaluación gratuita en {com.nombre}
                            </a>
                            <a
                                href={`tel:${TEL}`}
                                className="inline-flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-colors"
                            >
                                <Phone className="h-5 w-5" />
                                {TEL_DISPLAY}
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <Clock className="h-5 w-5 text-amber-600 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Primera visita</p>
                                <p className="text-sm text-slate-600">{com.llegada}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <ShieldCheck className="h-5 w-5 text-emerald-600 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Evaluación inicial</p>
                                <p className="text-sm text-slate-600">Gratuita y sin compromiso</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <Stethoscope className="h-5 w-5 text-slate-700 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Equipamiento</p>
                                <p className="text-sm text-slate-600">Lo llevamos a tu casa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Condiciones que tratamos */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
                            Qué tratamos con {esp.corto} en {com.nombre}
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                            Estos son los motivos de consulta más frecuentes que atendemos a domicilio en la comuna.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {esp.condiciones.map((c) => (
                                <div
                                    key={c.titulo}
                                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-300 transition-colors"
                                >
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{c.titulo}</h3>
                                    <p className="text-slate-600 leading-relaxed">{c.detalle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Como es la sesion */}
            <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-6">
                                Cómo es una sesión en tu casa
                            </h2>
                            <ul className="space-y-4">
                                {esp.sesion.map((s) => (
                                    <li key={s} className="flex items-start gap-3">
                                        <div className="bg-emerald-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                                            <Check className="h-4 w-4 text-emerald-700" />
                                        </div>
                                        <span className="text-slate-700 leading-relaxed">{s}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 bg-white rounded-xl p-5 border border-slate-200">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">Equipamiento incluido:</strong> el kinesiólogo
                                    traslada {esp.equipamiento} hasta tu domicilio {com.referencias}.
                                </p>
                            </div>
                            <div className="mt-4 bg-white rounded-xl p-5 border border-slate-200">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    <strong className="text-slate-900">Duración del tratamiento:</strong> {esp.duracion}
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-amber-50 rounded-2xl p-7 border border-amber-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertTriangle className="h-6 w-6 text-amber-700" />
                                    <h3 className="text-xl font-bold text-amber-900">{esp.alerta.titulo}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {esp.alerta.items.map((i) => (
                                        <li key={i} className="text-amber-900/90 leading-relaxed flex items-start gap-2">
                                            <span className="text-amber-700 mt-1">-</span>
                                            <span>{i}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-amber-800 mt-5 leading-relaxed">
                                    La kinesiología complementa el tratamiento médico, no lo reemplaza. Ante estos signos,
                                    consulta primero con tu médico o servicio de urgencia.
                                </p>
                            </div>

                            <div className="mt-6 bg-slate-900 rounded-2xl p-7 text-white">
                                <h3 className="text-xl font-bold font-serif mb-3">
                                    ¿Necesitas {esp.corto} en {com.nombre}?
                                </h3>
                                <p className="text-slate-300 mb-5 leading-relaxed">
                                    Cuéntanos el caso por WhatsApp y te confirmamos disponibilidad en tu sector.
                                </p>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Escribir por WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cobertura por sector */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
                            Sectores de {com.nombre} donde atendemos
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                            Llegamos a todo {com.nombre}, {com.referencias}. Estos son los sectores donde más atendemos:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                            {com.sectores.map((s) => (
                                <div
                                    key={s}
                                    className="flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-3 border border-slate-200"
                                >
                                    <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
                                    <span className="text-sm text-slate-700 font-medium">{s}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-600">
                            También puedes revisar todos nuestros{" "}
                            <Link
                                href={`/kinesiologo-a-domicilio-${com.slug}`}
                                className="text-amber-700 font-medium hover:underline"
                            >
                                servicios de kinesiología a domicilio en {com.nombre}
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-10">
                            Preguntas frecuentes sobre {esp.corto} en {com.nombre}
                        </h2>
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

            {/* Articulos relacionados */}
            {esp.articulos.length > 0 && (
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif mb-8 flex items-center gap-3">
                                <BookOpen className="h-6 w-6 text-amber-600" />
                                Guías clínicas sobre {esp.corto}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-5">
                                {esp.articulos.map((a) => (
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

            {/* Interlinking: otras especialidades en esta comuna */}
            <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif mb-6">
                            Otros servicios kinésicos en {com.nombre}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
                            {otrasEspecialidades.map((e) => (
                                <Link
                                    key={e.slug}
                                    href={`/${e.slug}-${com.slug}`}
                                    className="flex items-center justify-between bg-white rounded-lg px-5 py-4 border border-slate-200 hover:border-amber-300 hover:shadow-sm transition-all group"
                                >
                                    <span className="text-slate-700 font-medium group-hover:text-amber-700 transition-colors">
                                        {e.nombre}
                                    </span>
                                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600" />
                                </Link>
                            ))}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif mb-6">
                            {esp.nombre} en otras comunas de Santiago
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {otrasComunas.map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/${esp.slug}-${c.slug}`}
                                    className="bg-white rounded-lg px-4 py-2.5 border border-slate-200 text-sm text-slate-700 hover:border-amber-300 hover:text-amber-700 transition-colors"
                                >
                                    {esp.corto} en {c.nombre}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="py-16 md:py-24 bg-slate-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-5">
                        {esp.nombre} a domicilio en {com.nombre}
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Evaluación inicial gratuita en tu casa. Te decimos con honestidad si necesitas tratamiento, cuántas
                        sesiones y cuánto cuesta, antes de que decidas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={waLink}
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
                        Servicio particular - Boleta reembolsable en Isapre y seguros complementarios
                    </p>
                </div>
            </section>

            <SiteFooter />
        </div>
    )
}
