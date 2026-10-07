import Link from "next/link"
import {
    Phone,
    MapPin,
    Clock,
    Home,
    Stethoscope,
    ShieldCheck,
    MessageCircle,
    ChevronRight,
    CircleDollarSign,
    CalendarCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { especialidades } from "@/lib/especialidades-data"
import { comunas, comunasVecinas, getComuna } from "@/lib/comunas-data"
import { comunasLocal } from "@/lib/comunas-local"
import { BOLETA_TEXTO, PRIMERA_VISITA_TEXTO } from "@/lib/negocio"
import { CentrosSaludCercanos } from "@/components/centros-salud-cercanos"
import { WhatsAppButton } from "@/components/whatsapp-button"

// Hub de comuna. Componente de SERVIDOR: antes era "use client" solo por 12 botones con
// window.open, y eso le costaba 1.690 ms de bloqueo de JavaScript (Lighthouse móvil 64).
// Todo el contenido específico de la comuna va arriba; lo genérico, resumido y enlazado.

const TEL = "+56999679593"
const TEL_DISPLAY = "+56 9 9967 9593"

function wa(texto: string) {
    return `https://wa.me/56999679593?text=${encodeURIComponent(texto)}`
}

interface ComunaData {
    nombre: string
    slug: string
    sectores: string[]
}

interface ComunaPageProps {
    data: ComunaData
}

export default function ComunaPage({ data }: ComunaPageProps) {
    const comuna = getComuna(data.slug)
    const local = comunasLocal[data.slug]
    const vecinas = comunasVecinas(data.slug, 8, false)
    const url = `https://kineum.cl/kinesiologo-a-domicilio-${data.slug}`
    const llegada = comuna?.llegada ?? PRIMERA_VISITA_TEXTO
    const waMensaje = `Hola, necesito un kinesiólogo a domicilio en ${data.nombre}`
    const waLink = wa(waMensaje)
    const s = data.sectores
    const entrada = `KINEUM lleva un kinesiólogo a tu casa en ${data.nombre} (${s[0]}, ${s[1]}, ${s[2]} y el resto de la comuna): evaluación inicial gratis y sesiones de 60 minutos desde $35.000, con boleta para tu Isapre.`

    const faqs: { q: string; a: string; enlace?: { href: string; texto: string } }[] = [
        {
            q: `¿Cuánto cuesta un kinesiólogo a domicilio en ${data.nombre}?`,
            a: `El plan de 10 sesiones sale $350.000 ($35.000 por sesión) y el de 4 sesiones $160.000 ($40.000 por sesión). La evaluación inicial en tu casa es gratuita y recién después te decimos cuántas sesiones necesitas. No cobramos recargo por traslado dentro de ${data.nombre}.`,
        },
        {
            q: `¿Cuándo puede llegar el kinesiólogo a ${data.nombre}?`,
            a: `Coordinamos la primera visita ${llegada}. Atendemos de lunes a domingo y te confirmamos el horario por WhatsApp antes de que decidas.`,
        },
        {
            q: `¿En qué sectores de ${data.nombre} atienden?`,
            a: `En toda la comuna, incluyendo ${data.sectores.join(", ")}. Todas las sesiones son en el domicilio del paciente.`,
        },
        {
            q: "¿Puedo reembolsar las sesiones en mi Isapre?",
            a: `Sí. Emitimos ${BOLETA_TEXTO}. Puedes presentarla a reembolso en tu Isapre y en tu seguro complementario según la cobertura de tu plan. Para reembolsar necesitas una orden médica con el diagnóstico y la indicación de kinesiología.`,
        },
        {
            q: `¿Tienen consulta o centro en ${data.nombre}?`,
            a: `No. KINEUM atiende solo a domicilio: el kinesiólogo va a tu casa en cualquier sector de ${data.nombre}. La dirección de Av. Apoquindo 4501 es comercial y no atiende público.`,
            enlace: { href: "/blog/kinesiologia-a-domicilio-o-en-centro", texto: "Kinesiología a domicilio o en un centro: cuál conviene" },
        },
        // Preguntas propias del hub (lib/comunas-local.ts) y todas las locales de cada especialidad
        ...(local?.hub.faqs ?? []),
        ...(local?.especialidades ?? []).flatMap((e) => e.faqsLocales).map((f) => ({ q: f.q, a: f.a })),
    ].filter((f, i, todas) => todas.findIndex((x) => x.q === f.q) === i) // sin preguntas repetidas

    // Un solo negocio en todo el sitio (app/layout.tsx); aquí, el servicio que presta en esta comuna
    const servicioSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#servicio`,
        name: `Kinesiología a domicilio en ${data.nombre}`,
        description: entrada,
        url,
        serviceType: "Kinesiología a domicilio",
        provider: { "@id": "https://kineum.cl/#organization" },
        areaServed: {
            "@type": "City",
            name: data.nombre,
            containedInPlace: { "@type": "AdministrativeArea", name: "Santiago, Región Metropolitana, Chile" },
        },
        offers: {
            "@type": "Offer",
            price: "35000",
            priceCurrency: "CLP",
            description: "Valor por sesión en el plan de 10 sesiones. Evaluación inicial gratuita.",
            url: "https://kineum.cl/precios",
        },
        availableChannel: {
            "@type": "ServiceChannel",
            servicePhone: TEL,
            serviceUrl: url,
        },
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
            { "@type": "ListItem", position: 2, name: "Cobertura", item: "https://kineum.cl/cobertura" },
            { "@type": "ListItem", position: 3, name: data.nombre, item: url },
        ],
    }

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicioSchema) }} />
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
                    <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
                        <a href="#especialidades" className="hover:text-amber-400">Especialidades</a>
                        <a href="#precios" className="hover:text-amber-400">Precios</a>
                        <a href="#preguntas" className="hover:text-amber-400">Preguntas</a>
                    </nav>
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
<main id="contenido">

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-14 md:py-20 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                            <li>
                                <Link href="/" className="hover:text-amber-700">Inicio</Link>
                            </li>
                            <ChevronRight className="h-3.5 w-3.5" />
                            <li>
                                <Link href="/cobertura" className="hover:text-amber-700">Cobertura</Link>
                            </li>
                            <ChevronRight className="h-3.5 w-3.5" />
                            <li className="text-slate-900 font-medium">{data.nombre}</li>
                        </ol>
                    </nav>

                    <div className="max-w-4xl">
                        <Badge className="mb-5 bg-slate-900 text-white border-slate-800 px-4 py-1.5">
                            <MapPin className="h-3.5 w-3.5 mr-2" />
                            {comuna?.zona === "centro" ? `${data.nombre}, centro de Santiago` : `${data.nombre}, sector oriente de Santiago`}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif leading-tight mb-6">
                            Kinesiólogo a Domicilio en <span className="text-amber-700">{data.nombre}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 max-w-3xl">{entrada}</p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href={waLink}
                                data-cta="hero"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Agendar evaluación gratuita en {data.nombre}
                            </a>
                            <a
                                href={`tel:${TEL}`}
                                className="inline-flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-colors"
                            >
                                <Phone className="h-5 w-5" />
                                {TEL_DISPLAY}
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <Clock className="h-5 w-5 text-amber-600 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Primera visita</p>
                                <p className="text-sm text-slate-600">{llegada}</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <ShieldCheck className="h-5 w-5 text-emerald-600 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Evaluación inicial</p>
                                <p className="text-sm text-slate-600">Gratuita y en tu casa</p>
                            </div>
                            <Link
                                href="/precios"
                                className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:border-amber-300 transition-colors"
                            >
                                <CircleDollarSign className="h-5 w-5 text-amber-600 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Desde $35.000 por sesión</p>
                                <p className="text-sm text-amber-700">Ver planes y reembolso</p>
                            </Link>
                            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                                <CalendarCheck className="h-5 w-5 text-slate-700 mb-2" />
                                <p className="text-sm font-semibold text-slate-900">Lunes a domingo</p>
                                <p className="text-sm text-slate-600">Sesiones de 60 minutos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenido local propio de la comuna: lo primero que ve Google y el paciente */}
            {local && (
                <section className="py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl grid md:grid-cols-5 gap-10">
                            <div className="md:col-span-3">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-6">
                                    {local.hub.h2}
                                </h2>
                                {local.hub.parrafos.map((p) => (
                                    <p key={p.slice(0, 40)} className="text-lg text-slate-700 leading-relaxed mb-4">
                                        {p}
                                    </p>
                                ))}
                            </div>
                            <div className="md:col-span-2">
                                <CentrosSaludCercanos comuna={data.nombre} centros={local.centrosSalud} />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Cómo es el servicio en la comuna: los pasos para contratarlo */}
            <section className="py-16 md:py-20 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-8">
                            Cómo es el kinesiólogo a domicilio en {data.nombre}
                        </h2>
                        <ol className="space-y-5 mb-8">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center">1</span>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Escríbenos por WhatsApp con tu dirección en {data.nombre} y, si la tienes, la orden médica o la epicrisis.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center">2</span>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Evaluación inicial gratuita en tu casa ({llegada}): el kinesiólogo evalúa, revisa el espacio y te
                                    propone cuántas sesiones y qué plan.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center">3</span>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    Sesiones de 60 minutos de lunes a domingo, con boleta de honorarios para pedir el reembolso.
                                </p>
                            </li>
                        </ol>
                        <p className="text-slate-600 mb-8">
                            Quién llega a tu casa y qué le exigimos, en{" "}
                            <Link href="/nosotros" className="text-amber-700 font-medium hover:underline">quiénes somos</Link>; el
                            detalle de la primera visita, en{" "}
                            <Link href="/como-funciona" className="text-amber-700 font-medium hover:underline">cómo funciona</Link>.
                        </p>
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cta="como-es"
                            className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Escribir por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Especialidades en la comuna: el texto local de cada una, completo (T37: las 45 páginas
                especialidad+comuna se consolidaron aquí con 308; el id de cada bloque es el slug) */}
            <section id="especialidades" className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
                            Kine a domicilio en {data.nombre}: las 5 especialidades
                        </h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Qué tratamos en {data.nombre} y cómo se adapta la sesión a tu casa, especialidad por especialidad.
                        </p>
                        <div className="space-y-12">
                            {especialidades.map((e) => {
                                const espLocal = local?.especialidades.find((x) => x.slug === e.slug)
                                return (
                                    <div key={e.slug} id={e.slug} className="scroll-mt-24">
                                        <h3 className="text-2xl font-bold text-slate-900 font-serif mb-4">
                                            {e.nombre} a domicilio en {data.nombre}
                                        </h3>
                                        {(espLocal?.introLocal ?? e.intro).split(/\n\n+/).map((p) => (
                                            <p key={p.slice(0, 40)} className="text-lg text-slate-700 leading-relaxed mb-4">
                                                {p}
                                            </p>
                                        ))}
                                        {/* Solo los títulos: los detalles traen cifras sin fuente (T37) */}
                                        <p className="text-slate-600 leading-relaxed">
                                            <span className="font-semibold text-slate-900">Lo que más atendemos:</span>{" "}
                                            {e.condiciones.map((c) => c.titulo).join(" · ")}
                                        </p>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-5">
                                            <Link
                                                href={e.servicioUrl}
                                                className="inline-flex items-center text-amber-700 font-medium hover:underline"
                                            >
                                                Qué es y cómo se trata: {e.nombre.toLowerCase()} a domicilio
                                                <ChevronRight className="h-4 w-4 ml-1" />
                                            </Link>
                                            <a
                                                href={wa(`Hola, necesito ${e.corto} a domicilio en ${data.nombre}`)}
                                                data-cta={`especialidad-${e.slug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800"
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                                Consultar por WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectores */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
                            Sectores de {data.nombre} donde atendemos
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                            {comuna?.referencias
                                ? `Llegamos a toda la comuna, ${comuna.referencias}.`
                                : `Llegamos a toda la comuna de ${data.nombre}.`}{" "}
                            Si tu sector no aparece, escríbenos igual.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {data.sectores.map((s) => (
                                <div key={s} className="flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-3 border border-slate-200">
                                    <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
                                    <span className="text-sm text-slate-700 font-medium">{s}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Precios: resumen honesto, el detalle vive en /precios */}
            <section id="precios" className="py-16 md:py-20 bg-slate-950 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                            Precios de kinesiología a domicilio en {data.nombre}
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-3xl">
                            Los mismos valores en toda nuestra cobertura, sin recargo por traslado. La evaluación inicial
                            es gratuita y emitimos {BOLETA_TEXTO}.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">Plan Essential</p>
                                <p className="text-3xl font-bold mb-1">$160.000</p>
                                <p className="text-slate-400 mb-4">4 sesiones · $40.000 por sesión</p>
                                <a
                                    href={wa(`Hola, me interesa el Plan Essential en ${data.nombre}`)}
                                    data-cta="plan-essential"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300"
                                >
                                    <MessageCircle className="h-4 w-4" /> Consultar
                                </a>
                            </div>
                            <div className="bg-amber-600 rounded-2xl p-6 border border-amber-500">
                                <p className="text-sm uppercase tracking-wider text-amber-100 mb-2">Plan Premium</p>
                                <p className="text-3xl font-bold mb-1">$350.000</p>
                                <p className="text-amber-50 mb-4">10 sesiones · $35.000 por sesión</p>
                                <a
                                    href={wa(`Hola, me interesa el Plan Premium de 10 sesiones en ${data.nombre}`)}
                                    data-cta="plan-premium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
                                >
                                    <MessageCircle className="h-4 w-4" /> Consultar
                                </a>
                            </div>
                            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                <p className="text-sm uppercase tracking-wider text-slate-400 mb-2">Plan Elite</p>
                                <p className="text-3xl font-bold mb-1">A consultar</p>
                                <p className="text-slate-400 mb-4">Tratamientos intensivos o prolongados</p>
                                <a
                                    href={wa(`Hola, quiero consultar por el Plan Elite en ${data.nombre}`)}
                                    data-cta="plan-elite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300"
                                >
                                    <MessageCircle className="h-4 w-4" /> Consultar
                                </a>
                            </div>
                        </div>
                        <p className="text-slate-400 mt-8">
                            Detalle de lo que incluye cada plan en{" "}
                            <Link href="/precios" className="text-amber-400 hover:underline">precios y planes</Link>, y
                            cómo pedir el reembolso en la{" "}
                            <Link href="/blog/reembolso-isapre-kinesiologia" className="text-amber-400 hover:underline">
                                guía de reembolso en tu Isapre
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* Preguntas frecuentes (también como FAQPage) */}
            <section id="preguntas" className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-10">
                            Preguntas sobre kine a domicilio en {data.nombre}
                        </h2>
                        <div className="space-y-5">
                            {faqs.map((f) => (
                                <div key={f.q} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{f.q}</h3>
                                    <p className="text-slate-600 leading-relaxed">{f.a}</p>
                                    {f.enlace && (
                                        <Link href={f.enlace.href} className="inline-block mt-3 text-amber-700 font-medium hover:underline">
                                            {f.enlace.texto}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-600 mt-8">
                            Más respuestas en{" "}
                            <Link href="/como-funciona" className="text-amber-700 font-medium hover:underline">
                                cómo funciona la primera visita
                            </Link>{" "}
                            y{" "}
                            <Link href="/blog/kinesiologo-sin-orden-medica" className="text-amber-700 font-medium hover:underline">
                                si necesitas orden médica
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* Otras comunas */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">
                            Kinesiólogo a domicilio en otras comunas de nuestra cobertura
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {vecinas.map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/kinesiologo-a-domicilio-${c.slug}`}
                                    className="bg-white rounded-lg px-4 py-2 border border-slate-200 text-sm text-slate-700 hover:border-amber-300 hover:text-amber-700 transition-colors"
                                >
                                    {c.nombre}
                                </Link>
                            ))}
                            <Link
                                href="/cobertura"
                                className="bg-slate-900 text-white rounded-lg px-4 py-2 text-sm hover:bg-slate-800 transition-colors"
                            >
                                Ver las {comunas.length} comunas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="py-16 md:py-24 bg-slate-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-5">
                        ¿Necesitas un kinesiólogo a domicilio en {data.nombre}?
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Cuéntanos el caso por WhatsApp. Te decimos con honestidad si corresponde kinesiología, cuántas
                        sesiones suele tomar y cuánto cuesta, antes de que decidas.
                    </p>
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
                        <Stethoscope className="inline h-4 w-4 mr-1" />
                        Servicio particular · Boleta reembolsable en Isapre y seguros complementarios
                    </p>
                </div>
            </section>

            </main>
<SiteFooter />
            <WhatsAppButton mensaje={waMensaje} />
        </div>
    )
}
