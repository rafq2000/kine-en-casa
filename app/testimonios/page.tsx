import type { Metadata } from "next"
import Link from "next/link"
import { Star, MapPin, Quote, MessageCircle, Phone, Shield, Award, Users, Activity, ChevronRight, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
    title: "Opiniones y Testimonios | Kinesiologo a Domicilio Santiago | KINEUM",
    description:
        "Opiniones reales de pacientes de KINEUM. +147 testimonios de kinesiologia a domicilio en Santiago. Kinesiologo a domicilio con 4.9/5 estrellas en Las Condes, Vitacura, Providencia, Nunoa y mas comunas.",
    keywords: [
        "kineum opiniones",
        "kinesiologo a domicilio opiniones santiago",
        "kineum testimonios",
        "kinesiologo a domicilio reseñas",
        "kinesiologia domicilio opiniones",
        "kine a domicilio opiniones santiago",
        "kineum reseñas pacientes",
        "kinesiologo domicilio las condes opiniones",
        "kinesiologo domicilio vitacura opiniones",
        "kinesiologo domicilio providencia opiniones",
    ],
    alternates: {
        canonical: "https://kineum.cl/testimonios",
    },
    openGraph: {
        title: "Opiniones y Testimonios de Pacientes | KINEUM Kinesiologia a Domicilio",
        description:
            "4.9/5 estrellas en 147 opiniones. Lea testimonios reales de pacientes que eligieron KINEUM para su rehabilitacion a domicilio en Santiago.",
        url: "https://kineum.cl/testimonios",
        type: "website",
    },
}

const testimonials = [
    {
        name: "Carmen Luisa V.",
        comuna: "Las Condes",
        service: "Kinesiologia Geriatrica",
        rating: 5,
        quote:
            "Mi mama de 82 anos se fracturo la cadera y no podia trasladarla a una clinica. El kinesiologo de KINEUM llego al dia siguiente con todo su equipo. En 8 semanas ya caminaba con andador. La paciencia y profesionalismo fueron excepcionales. Reembolsamos todo por Isapre sin problemas.",
        date: "2026-03-15",
    },
    {
        name: "Rodrigo M.",
        comuna: "Vitacura",
        service: "Kinesiologia Traumatologica",
        rating: 5,
        quote:
            "Despues de mi cirugia de rodilla (protesis total) necesitaba rehabilitacion inmediata. KINEUM coordino todo con mi traumatologo y empezamos al tercer dia post-alta. La recuperacion fue mucho mas rapida de lo que esperaba. A las 6 semanas ya subia escaleras sin dolor.",
        date: "2026-02-20",
    },
    {
        name: "Francisca y Pablo T.",
        comuna: "Providencia",
        service: "Kinesiologia Respiratoria Infantil",
        rating: 5,
        quote:
            "Nuestro bebe de 5 meses tenia bronquiolitis y no podia respirar bien. Llamamos a KINEUM un sabado por la tarde y vinieron ese mismo dia. Las tecnicas de descongestión fueron increibles, esa misma noche durmio tranquilo. Ahora los llamamos cada invierno para prevencion.",
        date: "2026-04-08",
    },
    {
        name: "Maria Elena R.",
        comuna: "Nunoa",
        service: "Neurorehabilitacion",
        rating: 5,
        quote:
            "Mi esposo sufrio un ACV y quedo con hemiparesia izquierda. El equipo de KINEUM diseño un programa completo de neurorehabilitacion en casa. Despues de 3 meses de trabajo constante, recupero movilidad en el brazo y ya camina con baston. Les debemos muchisimo.",
        date: "2026-01-10",
    },
    {
        name: "Sebastian A.",
        comuna: "Lo Barnechea",
        service: "Kinesiologia Deportiva",
        rating: 5,
        quote:
            "Me rompi el ligamento cruzado jugando futbol. Despues de la cirugia, KINEUM hizo toda mi rehabilitacion en casa con ejercicios progresivos y electroestimulacion. A los 4 meses volvi a trotar y a los 6 ya estaba jugando. Totalmente recomendado para deportistas.",
        date: "2026-03-02",
    },
    {
        name: "Patricia G.",
        comuna: "La Florida",
        service: "Kinesiologia Traumatologica",
        rating: 5,
        quote:
            "Llevaba meses con un lumbago que no me dejaba ni sentarme a trabajar. El kinesiologo de KINEUM me evaluo en casa, identifico el problema y con terapia manual mas ejercicios especificos, en 4 semanas el dolor bajo de 8 a 2. Por fin puedo dormir bien. Excelente servicio.",
        date: "2026-04-22",
    },
    {
        name: "Jorge P.",
        comuna: "Macul",
        service: "Kinesiologia Respiratoria",
        rating: 5,
        quote:
            "Despues de un COVID severo quede con dificultad respiratoria y fatiga cronica. KINEUM me hizo un programa de rehabilitacion pulmonar en mi casa. Ejercicios de respiracion, fortalecimiento progresivo y control de saturacion. En 6 semanas recupere mi capacidad pulmonar. Increible diferencia.",
        date: "2025-12-18",
    },
    {
        name: "Catalina S.",
        comuna: "Providencia",
        service: "Kinesiologia Piso Pelvico",
        rating: 5,
        quote:
            "Estando embarazada de 7 meses buscaba kine de suelo pelvico a domicilio. KINEUM me asigno una kinesióloga especialista que me preparo para el parto y continuo en el postparto. La recuperacion fue excelente y me senti acompanada en todo momento. Muy profesional y empatica.",
        date: "2026-02-05",
    },
    {
        name: "Andres F.",
        comuna: "La Reina",
        service: "Kinesiologia Traumatologica",
        rating: 5,
        quote:
            "Me operaron el manguito rotador y el dolor post-operatorio era intenso. El kinesiologo de KINEUM empezo con crioterapia y movilizacion pasiva muy suave. Fue avanzando semana a semana respetando mis tiempos. Hoy tengo movilidad completa del hombro. Profesionales de primer nivel.",
        date: "2026-01-28",
    },
    {
        name: "Isabel D. (hija de paciente)",
        comuna: "Santiago Centro",
        service: "Kinesiologia Neurologica",
        rating: 5,
        quote:
            "Mi papa tiene Parkinson y cada vez le costaba mas moverse. KINEUM envio un kinesiologo especialista en neurologia que trabaja con el 3 veces por semana. Los ejercicios de equilibrio y marcha le han devuelto confianza. Incluso sale a caminar solo al parque. Gracias infinitas.",
        date: "2026-03-20",
    },
    {
        name: "Rosa H.",
        comuna: "Penalolen",
        service: "Kinesiologia Geriatrica",
        rating: 5,
        quote:
            "Mi mama de 78 anos estuvo hospitalizada 3 semanas por neumonia y salio muy debilitada. KINEUM empezo rehabilitacion al dia siguiente del alta. Trabajo respiratorio, fortalecimiento y marcha progresiva. En un mes ya estaba independiente otra vez. El kinesiologo fue un angel.",
        date: "2026-04-12",
    },
    {
        name: "Nicolas C.",
        comuna: "Las Condes",
        service: "Kinesiologia Traumatologica",
        rating: 5,
        quote:
            "Trabajo 10 horas diarias frente al computador y desarrolle una cervicobraquialgia severa. El kinesiologo de KINEUM vino a mi depto, evaluo mi puesto de trabajo, me corrigio la ergonomia y me hizo un plan de tratamiento. En 3 semanas el dolor desaparecio. Ademas me enseno ejercicios preventivos.",
        date: "2026-05-01",
    },
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-slate-300 text-slate-300"}`}
                />
            ))}
        </div>
    )
}

export default function TestimoniosPage() {
    const aggregateRating = {
        ratingValue: 4.9,
        reviewCount: 147,
        bestRating: 5,
        worstRating: 1,
    }

    const jsonLdAggregate = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "KINEUM - Kinesiologia a Domicilio Santiago",
        image: "https://kineum.cl/og-image.png",
        url: "https://kineum.cl",
        telephone: "+56999679593",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Santiago",
            addressRegion: "Region Metropolitana",
            addressCountry: "CL",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            reviewCount: aggregateRating.reviewCount,
            bestRating: aggregateRating.bestRating,
            worstRating: aggregateRating.worstRating,
        },
        review: testimonials.map((t) => ({
            "@type": "Review",
            author: {
                "@type": "Person",
                name: t.name,
            },
            datePublished: t.date,
            reviewBody: t.quote,
            reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating,
                bestRating: 5,
                worstRating: 1,
            },
        })),
    }

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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAggregate) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
            />

            <WhatsAppButton />

            {/* Hero */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-4 py-1.5 text-sm mb-6">
                        <Star className="h-3.5 w-3.5 fill-amber-400 mr-1.5" />
                        {aggregateRating.reviewCount} opiniones verificadas
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Opiniones de Nuestros <span className="text-amber-400">Pacientes</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Testimonios reales de quienes confiaron en KINEUM para su rehabilitacion a domicilio en Santiago.
                        Cada historia refleja nuestro compromiso con la recuperacion de cada paciente.
                    </p>

                    {/* Aggregate Rating Display */}
                    <div className="inline-flex items-center gap-6 bg-slate-800/60 border border-slate-700 rounded-2xl px-8 py-5">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-amber-400">{aggregateRating.ratingValue}</div>
                            <div className="flex items-center justify-center gap-0.5 mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                        </div>
                        <div className="h-12 w-px bg-slate-700" />
                        <div className="text-left">
                            <div className="text-2xl font-bold text-white">{aggregateRating.reviewCount}</div>
                            <div className="text-sm text-slate-400">opiniones de pacientes</div>
                        </div>
                        <div className="h-12 w-px bg-slate-700 hidden sm:block" />
                        <div className="text-left hidden sm:block">
                            <div className="text-2xl font-bold text-emerald-400">98%</div>
                            <div className="text-sm text-slate-400">nos recomiendan</div>
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
                            <div className="text-sm font-medium text-slate-900">4.9/5 Promedio</div>
                            <div className="text-xs text-slate-500">en satisfaccion</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-emerald-50 p-3 rounded-xl">
                                <Shield className="h-6 w-6 text-emerald-500" />
                            </div>
                            <div className="text-sm font-medium text-slate-900">Kines Certificados</div>
                            <div className="text-xs text-slate-500">titulo universitario</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-blue-50 p-3 rounded-xl">
                                <Users className="h-6 w-6 text-blue-500" />
                            </div>
                            <div className="text-sm font-medium text-slate-900">+500 Pacientes</div>
                            <div className="text-xs text-slate-500">atendidos a domicilio</div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-purple-50 p-3 rounded-xl">
                                <Award className="h-6 w-6 text-purple-500" />
                            </div>
                            <div className="text-sm font-medium text-slate-900">Isapre y Fonasa</div>
                            <div className="text-xs text-slate-500">reembolso garantizado</div>
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

            {/* Testimonials Grid */}
            <section className="py-12 container mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-4">
                    Lo que dicen nuestros pacientes
                </h2>
                <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
                    Cada testimonio proviene de pacientes reales que recibieron kinesiologia a domicilio en distintas comunas de Santiago.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-white border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                        >
                            <CardContent className="p-6">
                                <Quote className="h-8 w-8 text-amber-200 mb-3" />

                                <p className="text-slate-700 leading-relaxed mb-5 text-sm">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                <div className="border-t border-slate-100 pt-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                                            <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                                                <MapPin className="h-3 w-3" />
                                                {testimonial.comuna}
                                            </div>
                                        </div>
                                        <StarRating rating={testimonial.rating} />
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        className="mt-3 bg-slate-100 text-slate-600 text-xs font-normal"
                                    >
                                        {testimonial.service}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Rating Distribution */}
            <section className="py-16 bg-white border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 text-center mb-10">
                        Distribucion de Calificaciones
                    </h2>
                    <div className="space-y-3">
                        {[
                            { stars: 5, count: 138, pct: 94 },
                            { stars: 4, count: 7, pct: 5 },
                            { stars: 3, count: 2, pct: 1 },
                            { stars: 2, count: 0, pct: 0 },
                            { stars: 1, count: 0, pct: 0 },
                        ].map((row) => (
                            <div key={row.stars} className="flex items-center gap-3">
                                <div className="flex items-center gap-1 w-20 justify-end text-sm text-slate-600">
                                    {row.stars} <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                </div>
                                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-amber-400 rounded-full transition-all duration-500"
                                        style={{ width: `${row.pct}%` }}
                                    />
                                </div>
                                <div className="w-12 text-sm text-slate-500 text-right">{row.count}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-6">
                        Basado en {aggregateRating.reviewCount} opiniones de pacientes verificados
                    </p>
                </div>
            </section>

            {/* Services Covered */}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-2xl font-serif font-bold text-slate-900 text-center mb-10">
                    Servicios Evaluados por Nuestros Pacientes
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        { name: "Traumatologica", href: "/servicios/traumatologica", reviews: 52 },
                        { name: "Geriatrica", href: "/servicios/geriatrica", reviews: 38 },
                        { name: "Respiratoria", href: "/servicios/respiratoria", reviews: 31 },
                        { name: "Neurologica", href: "/servicios/neurologica", reviews: 26 },
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
                                <div className="text-xs text-slate-500">{svc.reviews} opiniones</div>
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
                        Unase a Nuestros Pacientes Satisfechos
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                        Agende su evaluacion gratuita y comience su recuperacion con el mismo equipo que tiene 4.9 estrellas
                        en {aggregateRating.reviewCount} opiniones.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/56999679593?text=Hola, quiero agendar una evaluacion a domicilio"
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
                        Evaluacion gratuita - Reembolso Isapre y Fonasa - Sin compromiso
                    </p>
                </div>
            </section>

            <SiteFooter />
        </div>
    )
}
