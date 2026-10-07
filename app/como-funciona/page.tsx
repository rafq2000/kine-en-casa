import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  ClipboardCheck,
  UserCheck,
  CalendarCheck,
  Stethoscope,
  Check,
  ChevronRight,
  ShieldCheck,
  Briefcase,
  HelpCircle,
  ArrowRight,
} from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SiteFooter } from "@/components/site-footer"
import { BOLETA_TEXTO, PRIMERA_VISITA_TEXTO } from "@/lib/negocio"

export const metadata: Metadata = {
  title: "Cómo Funciona la Kinesiología a Domicilio | KINEUM",
  description:
    "Kinesiólogo a domicilio en Santiago en 4 pasos: evaluación inicial gratuita, plan personalizado y sesiones en tu casa. Revisa qué equipos lleva a tu hogar.",
  keywords: [
    "cómo funciona kinesiólogo a domicilio",
    "pedir kinesiólogo a domicilio santiago",
    "agendar kinesiólogo a domicilio",
    "kinesiólogo a domicilio paso a paso",
    "kinesiología a domicilio cómo funciona",
    "kine a domicilio santiago proceso",
    "evaluación kinesiológica a domicilio",
    "kinesiólogo a domicilio isapre",
    "kinesiólogo a domicilio reembolso",
  ],
  alternates: {
    canonical: "https://kineum.cl/como-funciona",
  },
  openGraph: {
    title: "Cómo Funciona la Kinesiología a Domicilio | KINEUM",
    description:
      "Kinesiólogo a domicilio en Santiago en 4 pasos: evaluación inicial gratuita, plan personalizado y sesiones en tu casa. Revisa qué equipos lleva a tu hogar.",
    url: "https://kineum.cl/como-funciona",
    siteName: "KINEUM",
    locale: "es_CL",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo agendar un kinesiólogo a domicilio en Santiago",
  description:
    "Kinesiólogo a domicilio en Santiago en 4 pasos: evaluación inicial gratuita, plan personalizado y sesiones en tu casa. Revisa qué equipos lleva a tu hogar.",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "CLP",
    value: "0",
    name: "Evaluación inicial gratuita",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Contáctanos por WhatsApp o teléfono",
      text: "Escríbenos por WhatsApp o llama al +56 9 9967 9593. Cuéntanos tu situación y coordinamos una visita en un horario que acordamos contigo.",
      url: "https://kineum.cl/como-funciona#paso-1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Evaluación inicial gratuita en tu hogar",
      text: "Un kinesiólogo titulado va a tu casa, evalúa tu condición física, revisa exámenes y diagnóstico médico sin costo.",
      url: "https://kineum.cl/como-funciona#paso-2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Plan de tratamiento personalizado",
      text: "Diseñamos un plan de rehabilitación con objetivos claros, cantidad de sesiones estimadas y frecuencia semanal adaptada a tus necesidades.",
      url: "https://kineum.cl/como-funciona#paso-3",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Sesiones de kinesiología en tu hogar con seguimiento",
      text: "Realizamos las sesiones en la comodidad de tu hogar con equipamiento profesional. Reevaluamos tu progreso y ajustamos el tratamiento.",
      url: "https://kineum.cl/como-funciona#paso-4",
    },
  ],
  tool: [
    { "@type": "HowToTool", name: "Camilla portátil profesional" },
    { "@type": "HowToTool", name: "Electroestimulador TENS" },
    { "@type": "HowToTool", name: "Ultrasonido terapéutico" },
    { "@type": "HowToTool", name: "Bandas elásticas y accesorios de rehabilitación" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto demora en llegar el kinesiólogo a mi casa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Coordinamos la primera visita ${PRIMERA_VISITA_TEXTO} desde tu primer contacto, cualquier día de la semana.`,
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito orden médica para pedir kinesiólogo a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para la evaluación inicial no necesitas orden médica. Para iniciar el tratamiento sí: el reglamento de la profesión (Decreto 1.082 de 1958, artículo 3) dice que el kinesiólogo aplica sus terapias por indicación y orden médica escrita, y esa orden es también la que habitualmente te pide tu Isapre o seguro complementario para el reembolso.",
      },
    },
    {
      "@type": "Question",
      name: "¿La evaluación inicial realmente es gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la primera visita de evaluación es completamente gratuita y sin compromiso. El kinesiólogo evalúa tu condición y te explica el plan de tratamiento recomendado.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué comunas de Santiago atienden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos solo en 9 comunas: Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Lo Barnechea, Peñalolén, Macul y Santiago Centro.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona el reembolso con Isapre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emitimos boleta de honorarios por cada sesión. Con tu orden médica y la boleta, solicitas el reembolso directamente en tu Isapre (según la cobertura de tu plan) y luego el copago restante en tu seguro complementario si tienes uno.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas sesiones necesitaré?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de tu diagnóstico y de cómo evolucionas. El número de sesiones y la frecuencia los define la evaluación inicial, que es gratuita, y se ajustan según cómo respondes al tratamiento.",
      },
    },
  ],
}

const steps = [
  {
    id: "paso-1",
    number: "01",
    icon: MessageCircle,
    title: "Contáctanos por WhatsApp o Teléfono",
    description:
      "Escríbenos por WhatsApp o llama al +56 9 9967 9593. Cuéntanos tu situación y coordinamos una visita en un horario que acordamos contigo.",
    detail: "Cuéntanos tu comuna y el motivo de consulta.",
    color: "amber",
  },
  {
    id: "paso-2",
    number: "02",
    icon: ClipboardCheck,
    title: "Evaluación Inicial Gratuita en tu Hogar",
    description:
      "Un kinesiólogo titulado va a tu casa, evalúa tu condición física, revisa exámenes y diagnóstico médico sin costo.",
    detail: "Sin costo y sin compromiso de contratar.",
    color: "emerald",
  },
  {
    id: "paso-3",
    number: "03",
    icon: UserCheck,
    title: "Plan de Tratamiento Personalizado",
    description:
      "Diseñamos un plan de rehabilitación con objetivos claros, cantidad de sesiones estimadas y frecuencia semanal adaptada a tus necesidades.",
    detail: "Te explicamos todo antes de comenzar. Sin letra chica.",
    color: "amber",
  },
  {
    id: "paso-4",
    number: "04",
    icon: CalendarCheck,
    title: "Sesiones en tu Hogar con Seguimiento",
    description:
      "Realizamos las sesiones en la comodidad de tu hogar con equipamiento profesional. Reevaluamos tu progreso y ajustamos el tratamiento.",
    detail: `Emitimos ${BOLETA_TEXTO}, para el reembolso en tu Isapre.`,
    color: "emerald",
  },
]

const equipment = [
  {
    name: "Camilla Portátil Profesional",
    description: "Camilla profesional plegable, para trabajar en la posición correcta.",
  },
  {
    name: "Electroestimulador TENS",
    description: "Electroestimulación analgésica para el dolor muscular, articular y neuropático, cuando el caso lo requiere.",
  },
  {
    name: "Ultrasonido Terapéutico",
    description: "Ultrasonido terapéutico para contracturas e inflamación, cuando el caso lo requiere.",
  },
  {
    name: "Bandas Elásticas y Accesorios",
    description: "Bandas elásticas, pesas livianas y elementos de equilibrio para el ejercicio terapéutico.",
  },
]

const faqs = [
  {
    question: "¿Cuánto demora en llegar el kinesiólogo a mi casa?",
    answer:
      `Coordinamos la primera visita ${PRIMERA_VISITA_TEXTO} desde tu primer contacto, cualquier día de la semana.`,
  },
  {
    question: "¿Necesito orden médica para pedir kinesiólogo a domicilio?",
    answer:
      "Para la evaluación inicial no necesitas orden médica. Para iniciar el tratamiento sí: el reglamento de la profesión (Decreto 1.082 de 1958, artículo 3) dice que el kinesiólogo aplica sus terapias por indicación y orden médica escrita, y esa orden es también la que habitualmente te pide tu Isapre o seguro complementario para el reembolso.",
  },
  {
    question: "¿La evaluación inicial realmente es gratis?",
    answer:
      "Sí, la primera visita de evaluación es completamente gratuita y sin compromiso. El kinesiólogo evalúa tu condición y te explica el plan de tratamiento recomendado antes de que decidas.",
  },
  {
    question: "¿En qué comunas de Santiago atienden?",
    answer:
      "Atendemos solo en 9 comunas: Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Lo Barnechea, Peñalolén, Macul y Santiago Centro.",
  },
  {
    question: "¿Cómo funciona el reembolso con Isapre?",
    answer:
      "Emitimos boleta de honorarios por cada sesión. Con tu orden médica vigente y la boleta, solicitas el reembolso directamente en tu Isapre (según la cobertura de tu plan) y luego el copago restante en tu seguro complementario si tienes uno.",
  },
  {
    question: "¿Cuántas sesiones necesitaré?",
    answer:
      "Depende de tu diagnóstico y de cómo evolucionas. El número de sesiones y la frecuencia los define la evaluación inicial, que es gratuita, y se ajustan según cómo respondes al tratamiento.",
  },
]

export default function ComoFuncionaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        <WhatsAppButton />

        <main id="contenido">
{/* Hero */}
        <section className="bg-slate-900 text-white py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 mb-6 text-sm">
              Evaluación Inicial Gratuita
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Así de Fácil es Agendar tu{" "}
              <span className="text-amber-400">Kinesiólogo a Domicilio</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              En 4 pasos simples recibes kinesiología profesional en tu hogar en Santiago.
              Sin traslados y con boleta para pedir reembolso en tu Isapre o seguro complementario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/56999679593?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20a%20domicilio"
                data-cta="hero"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 text-lg rounded-full font-medium transition-colors duration-200 gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar por WhatsApp
              </a>
              <a
                href="tel:+56999679593"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 text-lg rounded-full font-medium transition-colors duration-200 border border-white/20 gap-2"
              >
                <Phone className="w-5 h-5" />
                +56 9 9967 9593
              </a>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Proceso Paso a Paso
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Desde tu primer mensaje hasta el alta kinesiológica, así funciona cada etapa.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isAmber = step.color === "amber"
                return (
                  <div key={step.id} id={step.id} className="relative">
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-24 w-0.5 h-16 bg-slate-200 hidden md:block" />
                    )}
                    <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-start gap-6">
                          <div
                            className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${
                              isAmber ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600"
                            }`}
                          >
                            <Icon className="w-7 h-7" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`text-sm font-bold ${
                                  isAmber ? "text-amber-500" : "text-emerald-500"
                                }`}
                              >
                                PASO {step.number}
                              </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                              {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-3">
                              {step.description}
                            </p>
                            <p
                              className={`text-sm font-medium ${
                                isAmber ? "text-amber-600" : "text-emerald-600"
                              }`}
                            >
                              {step.detail}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 mb-4 text-sm">
                Equipamiento Profesional
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Qué Llevan los Kinesiólogos a tu Hogar
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Nuestros profesionales llevan todo el equipamiento necesario para una sesión completa. No necesitas comprar ni preparar nada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {equipment.map((item) => (
                <div
                  key={item.name}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-200"
                >
                  <Briefcase className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reembolso Isapre y Seguros */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 text-sm">
                  Reembolso según tu plan
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Reembolso Isapre y Seguros Complementarios
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Recupera parte del costo de tus sesiones de kinesiología a domicilio a través de tu seguro de salud.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-slate-200 shadow-sm">
                  <CardContent className="p-8">
                    <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Isapre</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Reembolso según la cobertura de tu plan de salud</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Necesitas orden médica vigente y boleta de honorarios</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>La mayoría de las isapres permite pedirlo en línea; confírmalo en tu sucursal virtual</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm">
                  <CardContent className="p-8">
                    <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Seguros Complementarios</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Metlife, Chilena Consolidada, BICE, Zurich y seguros de empresa</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Reembolsa el copago que tu Isapre no cubrió</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Emitimos boleta para que gestiones tu reembolso</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-center text-sm text-slate-500 mt-8">
                Te ayudamos con el proceso de reembolso. Consúltanos por WhatsApp si tienes dudas sobre tu cobertura.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Preguntas Frecuentes
                </h2>
                <p className="text-lg text-slate-600">
                  Las dudas más comunes sobre nuestro servicio de kinesiología a domicilio en Santiago.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 leading-relaxed pl-8">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agenda tu Evaluación Gratuita Hoy
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-10">
              Escríbenos por WhatsApp o llámanos. Coordinamos la visita de un kinesiólogo a tu hogar {PRIMERA_VISITA_TEXTO}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/56999679593?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20gratuita%20a%20domicilio"
                data-cta="cierre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg rounded-full font-bold transition-colors duration-200 gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: +56 9 9967 9593
              </a>
              <a
                href="tel:+56999679593"
                className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 text-lg rounded-full font-medium transition-colors duration-200 border border-emerald-500 gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-emerald-200">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Evaluación gratis
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Reembolso Isapre/Seguros
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Kinesiólogos titulados
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Atención de lunes a domingo
              </span>
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                <Link
                  href="/servicios/traumatologica"
                  className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors text-sm p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-200"
                >
                  <ChevronRight className="w-4 h-4" />
                  Kine Traumatológica
                </Link>
                <Link
                  href="/servicios/geriatrica"
                  className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors text-sm p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-200"
                >
                  <ChevronRight className="w-4 h-4" />
                  Kine Geriátrica
                </Link>
                <Link
                  href="/servicios/respiratoria"
                  className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors text-sm p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-200"
                >
                  <ChevronRight className="w-4 h-4" />
                  Kine Respiratoria
                </Link>
                <Link
                  href="/servicios/neurologica"
                  className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors text-sm p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-200"
                >
                  <ChevronRight className="w-4 h-4" />
                  Kine Neurológica
                </Link>
                <Link
                  href="/servicios/postquirurgica"
                  className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors text-sm p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-200"
                >
                  <ChevronRight className="w-4 h-4" />
                  Kine Postquirúrgica
                </Link>
              </div>
            </div>
          </div>
        </section>

        </main>
<SiteFooter />
      </div>
    </>
  )
}
