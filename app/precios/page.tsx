import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Heart,
  Star,
  Crown,
  Shield,
  Phone,
  ArrowRight,
  Clock,
  FileText,
  Building2,
  CircleDollarSign,
  HelpCircle,
  Sparkles,
  Activity,
  MessageCircle,
  ChevronRight,
} from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Precios Kinesiologia a Domicilio Santiago 2026 | KINEUM",
  description:
    "Precios de kinesiologia a domicilio en Santiago desde $160.000/mes. Planes con 4, 10 o sesiones ilimitadas. Reembolso Isapre (50-80%) y Fonasa libre eleccion. Evaluacion inicial gratis. +56 9 9967 9593",
  keywords: [
    "precio kinesiologo a domicilio",
    "cuanto cuesta kinesiologo domicilio",
    "valor sesion kinesiologia",
    "kinesiologo a domicilio precio santiago",
    "precio kinesiologia a domicilio",
    "costo kinesiologo a domicilio",
    "tarifas kinesiologia domicilio",
    "precio kine a domicilio",
    "valor kinesiologo a domicilio santiago",
    "kinesiologo a domicilio precio isapre",
    "kinesiologo a domicilio precio fonasa",
    "cuanto sale kinesiologo a domicilio",
    "precio sesion kinesiologia santiago",
    "kinesiologo domicilio reembolso isapre",
    "kinesiologia a domicilio las condes precio",
    "kinesiologia a domicilio vitacura precio",
    "kinesiologia a domicilio providencia precio",
  ],
  alternates: {
    canonical: "https://kineum.cl/precios",
  },
  openGraph: {
    title: "Precios Kinesiologia a Domicilio Santiago 2026 | KINEUM",
    description:
      "Planes desde $160.000/mes con evaluacion gratis. Reembolso Isapre hasta 80% y Fonasa libre eleccion. Consulta nuestros precios.",
    url: "https://kineum.cl/precios",
    type: "website",
    locale: "es_CL",
    siteName: "KINEUM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Precios Kinesiologia a Domicilio Santiago - KINEUM",
      },
    ],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kinesiologia a Domicilio Santiago",
  provider: {
    "@type": "LocalBusiness",
    name: "KINEUM",
    url: "https://kineum.cl",
    telephone: "+56999679593",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressRegion: "Region Metropolitana",
      addressCountry: "CL",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Santiago",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes de Kinesiologia a Domicilio",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Plan Essential - 4 Sesiones de Kinesiologia a Domicilio",
        description:
          "4 sesiones mensuales de kinesiologia a domicilio en Santiago. Incluye evaluacion inicial gratuita y seguimiento basico.",
        price: "160000",
        priceCurrency: "CLP",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://kineum.cl/precios",
      },
      {
        "@type": "Offer",
        name: "Plan Premium - 10 Sesiones de Kinesiologia a Domicilio",
        description:
          "10 sesiones mensuales de kinesiologia a domicilio en Santiago. Incluye evaluacion digital, kit de recuperacion, portal de paciente y prioridad en agendamiento.",
        price: "350000",
        priceCurrency: "CLP",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://kineum.cl/precios",
      },
      {
        "@type": "Offer",
        name: "Plan Elite - Sesiones Ilimitadas de Kinesiologia a Domicilio",
        description:
          "Sesiones ilimitadas mensuales con kinesiologo dedicado asignado, prioridad absoluta y red de especialistas preferente.",
        url: "https://kineum.cl/precios",
      },
    ],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cuanto cuesta un kinesiologo a domicilio en Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En KINEUM, el Plan Essential de 4 sesiones mensuales cuesta $160.000 CLP/mes y el Plan Premium de 10 sesiones cuesta $350.000 CLP/mes. Ambos incluyen evaluacion inicial gratuita. Ademas, puedes solicitar reembolso por Isapre (50-80%) o Fonasa libre eleccion (25-50%), reduciendo significativamente el costo real.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto reembolsa la Isapre por kinesiologia a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El reembolso de Isapre por kinesiologia a domicilio varia segun tu plan de salud. Generalmente las Isapres reembolsan entre un 50% y 80% del valor de cada sesion. Necesitas una orden medica vigente y la boleta de honorarios que emitimos despues de cada atencion. Esto aplica para Colmena, Cruz Blanca, Banmedica, Consalud, Vida Tres y Nueva Masvida.",
      },
    },
    {
      "@type": "Question",
      name: "Fonasa cubre la kinesiologia a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. En KINEUM trabajamos con Fonasa modalidad libre eleccion. Pagas la sesion y luego solicitas el reembolso con tu orden medica y nuestra boleta. El monto reembolsado depende de tu tramo (A, B, C o D), generalmente entre un 25% y 50%. El tramite se realiza facilmente desde la app Mi Fonasa.",
      },
    },
    {
      "@type": "Question",
      name: "La evaluacion inicial tiene costo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, la evaluacion inicial es completamente gratuita en todos nuestros planes. Nuestro kinesiologo evalua tu condicion, define objetivos de tratamiento y diseña un plan de rehabilitacion personalizado sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "Cual es la diferencia de precio entre ir a una clinica y la kinesiologia a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una sesion en clinica privada en Santiago cuesta entre $40.000 y $60.000, pero sumando traslado, estacionamiento y tiempo perdido, el costo real sube. Con KINEUM, el costo por sesion parte desde $35.000 en el Plan Premium (10 sesiones por $350.000), sin costos de traslado, con sesiones de 60 minutos dedicados y equipamiento profesional en tu hogar.",
      },
    },
    {
      "@type": "Question",
      name: "Se puede pagar en cuotas o con tarjeta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, aceptamos transferencia bancaria, tarjeta de debito y tarjeta de credito. Consulta por opciones de pago en cuotas contactandonos por WhatsApp al +56 9 9967 9593.",
      },
    },
    {
      "@type": "Question",
      name: "Que incluye cada sesion de kinesiologia a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada sesion dura aproximadamente 60 minutos e incluye: evaluacion del progreso, terapia manual especializada, ejercicios terapeuticos guiados, uso de equipamiento profesional (TENS, ultrasonido, bandas elasticas) y educacion al paciente y familia. El kinesiologo lleva todo el equipamiento a tu domicilio.",
      },
    },
  ],
}

const breadcrumbSchema = {
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
      name: "Precios",
      item: "https://kineum.cl/precios",
    },
  ],
}

const plans = [
  {
    name: "Plan Essential",
    subtitle: "Mantenimiento y lesiones leves",
    icon: Heart,
    sessions: "4 Sesiones/mes",
    price: "160.000",
    perSession: "40.000",
    features: [
      "4 sesiones de 60 min a domicilio",
      "Evaluacion inicial gratuita",
      "Seguimiento de evolucion basico",
      "Boleta para reembolso Isapre/Fonasa",
      "Asistente AI 24/7",
    ],
    popular: false,
    gradient: "from-emerald-600 to-emerald-800",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    badgeColor: "bg-emerald-50 text-emerald-700",
    whatsappMsg: "Hola, me interesa el Plan Essential de 4 sesiones",
  },
  {
    name: "Plan Premium",
    subtitle: "El mas elegido para rehabilitacion completa",
    icon: Star,
    sessions: "10 Sesiones/mes",
    price: "350.000",
    perSession: "35.000",
    features: [
      "10 sesiones de 60 min a domicilio",
      "Evaluacion digital completa",
      "Prioridad en agendamiento",
      "Reportes de progreso detallados",
      "Kit de recuperacion incluido",
      "Portal del paciente con ejercicios",
      "Boleta para reembolso Isapre/Fonasa",
      "Asistente AI 24/7",
    ],
    popular: true,
    gradient: "from-amber-600 to-amber-800",
    borderColor: "border-amber-300",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    badgeColor: "bg-amber-50 text-amber-700",
    whatsappMsg: "Hola, me interesa el Plan Premium de 10 sesiones",
  },
  {
    name: "Plan Elite",
    subtitle: "Rehabilitacion intensiva sin limites",
    icon: Crown,
    sessions: "Sesiones Ilimitadas",
    price: "Consultar",
    perSession: null,
    features: [
      "Sesiones ILIMITADAS todo el mes",
      "Kinesiologo dedicado asignado",
      "Prioridad absoluta en agenda",
      "Red de especialistas preferente",
      "Todo el pack Premium incluido",
      "Consultas ilimitadas entre sesiones",
      "Boleta para reembolso Isapre/Fonasa",
    ],
    popular: false,
    gradient: "from-slate-700 to-slate-900",
    borderColor: "border-slate-300",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    badgeColor: "bg-slate-100 text-slate-700",
    whatsappMsg: "Hola, me interesa el Plan Elite con sesiones ilimitadas",
  },
]

const isapres = [
  { name: "Colmena", reembolso: "50-70%" },
  { name: "Cruz Blanca", reembolso: "50-80%" },
  { name: "Banmedica", reembolso: "60-80%" },
  { name: "Consalud", reembolso: "50-70%" },
  { name: "Vida Tres", reembolso: "50-75%" },
  { name: "Nueva Masvida", reembolso: "50-70%" },
]

const faqs = [
  {
    question: "Cuanto cuesta un kinesiologo a domicilio en Santiago?",
    answer:
      "En KINEUM ofrecemos planes desde $160.000/mes (4 sesiones) hasta $350.000/mes (10 sesiones). El Plan Elite con sesiones ilimitadas tiene precio a consultar. Todos los planes incluyen evaluacion inicial gratuita, equipamiento profesional completo y boleta para reembolso.",
  },
  {
    question: "Cuanto reembolsa mi Isapre por kinesiologia a domicilio?",
    answer:
      "El porcentaje de reembolso depende de tu plan de salud. En general, las Isapres reembolsan entre un 50% y 80% del valor de cada sesion. Por ejemplo, en el Plan Premium ($35.000/sesion), podrias recuperar entre $17.500 y $28.000 por sesion, dejando tu costo real entre $7.000 y $17.500.",
  },
  {
    question: "Fonasa cubre kinesiologia a domicilio?",
    answer:
      "Si, trabajamos con Fonasa modalidad libre eleccion. Pagas la sesion y solicitas reembolso con tu orden medica y nuestra boleta de honorarios. El reembolso varia segun tu tramo (A, B, C o D), cubriendo entre un 25% y 50% del valor. El tramite se hace facilmente en la app Mi Fonasa.",
  },
  {
    question: "La evaluacion inicial tiene costo?",
    answer:
      "No. La evaluacion inicial es 100% gratuita y sin compromiso en todos nuestros planes. Tu kinesiologo evalua tu condicion, define objetivos claros y diseña un plan de rehabilitacion personalizado.",
  },
  {
    question: "Que necesito para pedir el reembolso?",
    answer:
      "Necesitas una orden medica vigente que indique 'kinesiologia' o 'rehabilitacion', y la boleta de honorarios que emitimos despues de cada sesion. Con ambos documentos, presentas el reembolso en tu Isapre (app, web o sucursal) o en Fonasa (app Mi Fonasa).",
  },
  {
    question: "Puedo cambiar de plan durante el mes?",
    answer:
      "Si, puedes escalar tu plan en cualquier momento. Si empezaste con el Essential y necesitas mas sesiones, te ajustamos la diferencia al Plan Premium. Contactanos por WhatsApp y lo coordinamos.",
  },
  {
    question: "Que incluye cada sesion de kinesiologia?",
    answer:
      "Cada sesion de 60 minutos incluye: evaluacion del progreso, terapia manual especializada, ejercicios terapeuticos guiados, uso de equipamiento profesional (TENS, ultrasonido, bandas elasticas), educacion al paciente y familia, y recomendaciones para el hogar.",
  },
  {
    question: "Aceptan tarjeta de credito o pago en cuotas?",
    answer:
      "Si, aceptamos transferencia bancaria, tarjeta de debito y tarjeta de credito. Consultanos por WhatsApp al +56 9 9967 9593 para opciones de pago en cuotas.",
  },
]

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WhatsAppButton />

      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-amber-600 p-2 rounded-xl shadow-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold font-serif text-white tracking-widest">
                  KINEUM
                </span>
                <p className="text-xs text-slate-300 uppercase tracking-widest">
                  Clinical Home Care
                </p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/#servicios"
                className="hover:text-amber-400 transition-colors font-medium text-slate-200"
              >
                Especialidades
              </Link>
              <Link
                href="/precios"
                className="text-amber-400 font-medium"
              >
                Precios
              </Link>
              <Link
                href="/blog"
                className="hover:text-amber-400 transition-colors font-medium text-slate-200"
              >
                Blog
              </Link>
              <Link
                href="/nosotros"
                className="hover:text-amber-400 transition-colors font-medium text-slate-200"
              >
                Equipo Clinico
              </Link>
              <Link
                href="/#contacto"
                className="hover:text-amber-400 transition-colors font-medium text-slate-200"
              >
                Contacto
              </Link>
            </nav>
            <a
              href="https://wa.me/56999679593?text=Hola, quiero consultar por precios"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors text-sm"
            >
              <Phone className="h-4 w-4 mr-2" />
              Cotizar Ahora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 py-20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-amber-700 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="text-slate-900 font-medium">Precios</li>
            </ol>
          </nav>

          <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
            <CircleDollarSign className="h-4 w-4 mr-2 text-amber-400" />
            Precios Transparentes 2026
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif leading-tight">
            Precios Kinesiologia
            <br />
            <span className="text-amber-700">a Domicilio en Santiago</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed max-w-4xl mx-auto">
            Planes desde <strong>$160.000/mes</strong> con evaluacion inicial{" "}
            <strong>gratuita</strong>. Reembolso por Isapre (50-80%) y Fonasa libre eleccion
            (25-50%). Sin costo de traslado, sin esperas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#planes"
              className="inline-flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg rounded-full font-medium transition-colors"
            >
              Ver Planes y Precios
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://wa.me/56999679593?text=Hola, quiero consultar por los precios de kinesiologia a domicilio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full font-medium transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planes" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Planes de Kinesiologia a Domicilio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tu necesidad de rehabilitacion. Todos incluyen
              evaluacion gratuita y equipamiento profesional completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-amber-400 shadow-xl scale-[1.02]"
                    : "border border-slate-200 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                    Mas Elegido
                  </div>
                )}

                <CardHeader className={`text-center ${plan.popular ? "pt-14" : "pt-8"} pb-4`}>
                  <div
                    className={`${plan.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <plan.icon className={`h-8 w-8 ${plan.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 font-serif">
                    {plan.name}
                  </CardTitle>
                  <p className="text-slate-500 text-sm mt-1">{plan.subtitle}</p>

                  <div className="mt-6">
                    <Badge className={`${plan.badgeColor} mb-3 text-xs font-semibold`}>
                      {plan.sessions}
                    </Badge>
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.price === "Consultar" ? (
                        <span className="text-3xl font-bold text-slate-900 font-serif">
                          Consultar
                        </span>
                      ) : (
                        <>
                          <span className="text-lg text-slate-500">$</span>
                          <span className="text-5xl font-bold text-slate-900 font-serif">
                            {plan.price}
                          </span>
                        </>
                      )}
                    </div>
                    {plan.price !== "Consultar" && (
                      <p className="text-slate-500 text-sm mt-1">CLP / mes</p>
                    )}
                    {plan.perSession && (
                      <p className="text-amber-700 font-semibold text-sm mt-2">
                        = ${plan.perSession} por sesion
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-2 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/56999679593?text=${encodeURIComponent(plan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center py-4 px-6 rounded-full font-bold text-white transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-200"
                        : "bg-slate-900 hover:bg-slate-800"
                    }`}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    {plan.price === "Consultar" ? "Solicitar Cotizacion" : "Contratar Ahora"}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-10 text-sm max-w-2xl mx-auto">
            Todos los planes incluyen equipamiento profesional completo (camilla, TENS, ultrasonido,
            bandas elasticas) y boleta de honorarios para reembolso Isapre y Fonasa.
          </p>
        </div>
      </section>

      {/* Isapre Reimbursement Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/15 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-700 text-white border-none shadow-lg">
              <Shield className="h-4 w-4 mr-2" />
              Reembolso Isapre
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
              Cuanto Reembolsa tu Isapre
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                por Kinesiologia a Domicilio?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Emitimos boleta de honorarios profesional para que recuperes entre el 50% y 80% del
              valor de cada sesion con tu Isapre.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 max-w-5xl mx-auto">
            {isapres.map((isapre) => (
              <div
                key={isapre.name}
                className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-5 text-center border border-slate-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <Building2 className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <p className="font-bold text-white text-sm">{isapre.name}</p>
                <p className="text-amber-400 font-semibold text-lg mt-1">{isapre.reembolso}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center font-serif">
              Ejemplo: Costo Real con Reembolso Isapre
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600">
                <p className="text-slate-400 text-sm mb-2">Valor sesion Plan Premium</p>
                <p className="text-3xl font-bold text-white font-serif">$35.000</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-amber-500/30">
                <p className="text-slate-400 text-sm mb-2">Reembolso Isapre (70%)</p>
                <p className="text-3xl font-bold text-amber-400 font-serif">-$24.500</p>
              </div>
              <div className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/30">
                <p className="text-slate-400 text-sm mb-2">Tu costo real por sesion</p>
                <p className="text-3xl font-bold text-emerald-400 font-serif">$10.500</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm mb-4">
                * El porcentaje exacto depende de tu plan de salud. Consulta con tu Isapre para
                conocer tu cobertura especifica.
              </p>

              <h4 className="text-lg font-bold text-white mb-3">Como pedir tu reembolso:</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-full">
                  <span className="bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <span className="text-slate-200">Obtener orden medica</span>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
                <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-full">
                  <span className="bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <span className="text-slate-200">Recibir tu sesion</span>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
                <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-full">
                  <span className="bg-amber-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <span className="text-slate-200">Subir boleta a tu Isapre</span>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500 hidden md:block" />
                <div className="flex items-center gap-2 bg-emerald-700/50 px-4 py-2 rounded-full">
                  <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  <span className="text-slate-200">Recibir reembolso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonasa Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                <FileText className="h-4 w-4 mr-2" />
                Fonasa Libre Eleccion
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
                Kinesiologia a Domicilio con Fonasa
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Tambien trabajamos con Fonasa modalidad libre eleccion. Pagas la sesion y solicitas
                el reembolso segun tu tramo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">
                  Reembolso segun Tramo Fonasa
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">Tramo A y B</span>
                    <Badge className="bg-emerald-50 text-emerald-700">Hasta 50%</Badge>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">Tramo C</span>
                    <Badge className="bg-amber-50 text-amber-700">Hasta 38%</Badge>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-700 font-medium">Tramo D</span>
                    <Badge className="bg-amber-50 text-amber-700">Hasta 25%</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">
                  Como solicitar tu reembolso Fonasa
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-amber-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mr-3 mt-0.5">
                      1
                    </span>
                    <span className="text-slate-700">
                      Consigue una <strong>orden medica</strong> que indique
                      &quot;kinesiologia&quot;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mr-3 mt-0.5">
                      2
                    </span>
                    <span className="text-slate-700">
                      Recibe tus sesiones con KINEUM y guarda tu <strong>boleta</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-amber-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mr-3 mt-0.5">
                      3
                    </span>
                    <span className="text-slate-700">
                      Ingresa a la <strong>app Mi Fonasa</strong> y sube la boleta + orden medica
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mr-3 mt-0.5">
                      4
                    </span>
                    <span className="text-slate-700">
                      Recibe tu <strong>reembolso</strong> en pocos dias habiles
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              KINEUM vs. Clinica Privada
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Compara el costo real de ir a una clinica versus recibir kinesiologia a domicilio con
              KINEUM.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <thead>
                <tr>
                  <th className="text-left p-5 bg-slate-100 text-slate-700 font-semibold text-sm uppercase tracking-wider">
                    Concepto
                  </th>
                  <th className="p-5 bg-slate-100 text-slate-700 font-semibold text-sm uppercase tracking-wider text-center">
                    Clinica Privada
                  </th>
                  <th className="p-5 bg-amber-50 text-amber-800 font-semibold text-sm uppercase tracking-wider text-center border-l-2 border-amber-200">
                    KINEUM a Domicilio
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-5 text-slate-700 font-medium">Valor por sesion</td>
                  <td className="p-5 text-center text-slate-600">$40.000 - $60.000</td>
                  <td className="p-5 text-center font-bold text-amber-700 border-l-2 border-amber-100">
                    Desde $35.000
                  </td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-5 text-slate-700 font-medium">Traslado (bencina + estacionamiento)</td>
                  <td className="p-5 text-center text-slate-600">$5.000 - $10.000</td>
                  <td className="p-5 text-center font-bold text-emerald-600 border-l-2 border-amber-100">
                    $0 (Gratis)
                  </td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-5 text-slate-700 font-medium">Tiempo de espera</td>
                  <td className="p-5 text-center text-slate-600">15-40 min en sala</td>
                  <td className="p-5 text-center font-bold text-emerald-600 border-l-2 border-amber-100">
                    0 min (en tu hogar)
                  </td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-5 text-slate-700 font-medium">Duracion sesion</td>
                  <td className="p-5 text-center text-slate-600">30-40 min compartidos</td>
                  <td className="p-5 text-center font-bold text-amber-700 border-l-2 border-amber-100">
                    60 min exclusivos
                  </td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-5 text-slate-700 font-medium">Equipamiento profesional</td>
                  <td className="p-5 text-center text-slate-600">Si</td>
                  <td className="p-5 text-center font-bold text-emerald-600 border-l-2 border-amber-100">
                    Si (completo en tu casa)
                  </td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-5 text-slate-700 font-medium">Evaluacion inicial</td>
                  <td className="p-5 text-center text-slate-600">$30.000 - $45.000</td>
                  <td className="p-5 text-center font-bold text-emerald-600 border-l-2 border-amber-100">
                    GRATIS
                  </td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-5 text-slate-700 font-medium">Reembolso Isapre/Fonasa</td>
                  <td className="p-5 text-center text-slate-600">Si</td>
                  <td className="p-5 text-center font-bold text-emerald-600 border-l-2 border-amber-100">
                    Si (boleta de honorarios)
                  </td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-5 text-slate-700 font-medium">Asistente AI 24/7</td>
                  <td className="p-5 text-center text-slate-600">No</td>
                  <td className="p-5 text-center font-bold text-emerald-600 border-l-2 border-amber-100">
                    Incluido
                  </td>
                </tr>
                <tr className="border-t-2 border-slate-200 bg-slate-100">
                  <td className="p-5 text-slate-900 font-bold text-lg">Costo real por sesion</td>
                  <td className="p-5 text-center text-red-600 font-bold text-lg">
                    $50.000 - $70.000
                  </td>
                  <td className="p-5 text-center text-emerald-700 font-bold text-lg border-l-2 border-amber-200">
                    Desde $35.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-slate-500 mt-6 text-sm">
            * Los precios de clinica son referenciales y pueden variar segun el establecimiento.
            Costo real incluye traslado.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              <HelpCircle className="h-4 w-4 mr-2" />
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Preguntas sobre Precios y Reembolsos
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-amber-600 text-2xl font-light flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Sparkles className="h-10 w-10 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
            Comienza tu Recuperacion Hoy
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Evaluacion inicial gratuita. Te contactamos en menos de 2 horas y agendamos tu primera
            sesion de kinesiologia a domicilio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <a
              href="https://wa.me/56999679593?text=Hola, quiero agendar mi evaluacion gratuita de kinesiologia a domicilio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 text-lg rounded-full font-bold transition-colors shadow-lg shadow-emerald-900/30"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Agendar Evaluacion Gratis
            </a>
            <a
              href="tel:+56999679593"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-10 py-5 text-lg rounded-full font-bold transition-colors border border-white/20"
            >
              <Phone className="mr-3 h-6 w-6" />
              +56 9 9967 9593
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              Evaluacion gratis
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              Sin compromiso
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              Reembolso Isapre y Fonasa
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber-400" />
              Lun-Dom 8:00 a 20:00
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
