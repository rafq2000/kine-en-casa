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

export const metadata: Metadata = {
  title: "Como Funciona | Kinesiologo a Domicilio Santiago | KINEUM",
  description:
    "Agenda tu kinesiologo a domicilio en Santiago en 4 pasos simples. Evaluacion inicial gratuita, plan personalizado y reembolso Isapre y Fonasa libre eleccion. Llama al +56 9 9967 9593.",
  keywords: [
    "como funciona kinesiologo a domicilio",
    "pedir kinesiologo a domicilio santiago",
    "agendar kinesiologo a domicilio",
    "kinesiologo a domicilio paso a paso",
    "kinesiologia a domicilio como funciona",
    "kine a domicilio santiago proceso",
    "evaluacion kinesiologica a domicilio",
    "kinesiologo a domicilio isapre fonasa",
    "kinesiologo a domicilio reembolso",
  ],
  alternates: {
    canonical: "https://kineum.cl/como-funciona",
  },
  openGraph: {
    title: "Como Funciona | Kinesiologo a Domicilio Santiago | KINEUM",
    description:
      "4 pasos simples para recibir kinesiologia profesional en tu hogar. Evaluacion gratuita, reembolso Isapre y Fonasa.",
    url: "https://kineum.cl/como-funciona",
    siteName: "KINEUM",
    locale: "es_CL",
    type: "website",
  },
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como agendar un kinesiologo a domicilio en Santiago",
  description:
    "Proceso paso a paso para solicitar kinesiologia a domicilio con KINEUM en Santiago de Chile. Evaluacion inicial gratuita y reembolso Isapre/Fonasa.",
  totalTime: "PT5M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "CLP",
    value: "0",
    name: "Evaluacion inicial gratuita",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Contactanos por WhatsApp o telefono",
      text: "Escribenos por WhatsApp o llama al +56 9 9967 9593. Cuentanos tu situacion y coordinamos una visita en el horario que te acomode.",
      url: "https://kineum.cl/como-funciona#paso-1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Evaluacion inicial gratuita en tu hogar",
      text: "Un kinesiologo titulado va a tu casa, evalua tu condicion fisica, revisa examenes y diagnostico medico sin costo.",
      url: "https://kineum.cl/como-funciona#paso-2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Plan de tratamiento personalizado",
      text: "Disenamos un plan de rehabilitacion con objetivos claros, cantidad de sesiones estimadas y frecuencia semanal adaptada a tus necesidades.",
      url: "https://kineum.cl/como-funciona#paso-3",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Sesiones de kinesiologia en tu hogar con seguimiento",
      text: "Realizamos las sesiones en la comodidad de tu hogar con equipamiento profesional. Reevaluamos tu progreso y ajustamos el tratamiento.",
      url: "https://kineum.cl/como-funciona#paso-4",
    },
  ],
  tool: [
    { "@type": "HowToTool", name: "Camilla portatil profesional" },
    { "@type": "HowToTool", name: "Electroestimulador TENS" },
    { "@type": "HowToTool", name: "Ultrasonido terapeutico" },
    { "@type": "HowToTool", name: "Bandas elasticas y accesorios de rehabilitacion" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cuanto demora en llegar el kinesiologo a mi casa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coordinamos la visita dentro de 24 a 48 horas habiles desde tu primer contacto. En casos urgentes, podemos agendar para el mismo dia segun disponibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "Necesito orden medica para pedir kinesiologo a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para la evaluacion inicial no necesitas orden medica. Sin embargo, si deseas reembolso por Isapre o Fonasa libre eleccion, necesitaras una orden medica vigente.",
      },
    },
    {
      "@type": "Question",
      name: "La evaluacion inicial realmente es gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, la primera visita de evaluacion es completamente gratuita y sin compromiso. El kinesiologo evalua tu condicion y te explica el plan de tratamiento recomendado.",
      },
    },
    {
      "@type": "Question",
      name: "En que comunas de Santiago atienden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos en Las Condes, Vitacura, Providencia, Nunoa, La Reina, Lo Barnechea, La Florida, Penalolen, Macul, San Joaquin y Santiago Centro, entre otras comunas.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona el reembolso con Isapre y Fonasa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emitimos boleta de honorarios por cada sesion. Con tu orden medica y la boleta, solicitas el reembolso directamente en tu Isapre o en Fonasa libre eleccion (tramo B, C o D). El porcentaje de reembolso depende de tu plan.",
      },
    },
    {
      "@type": "Question",
      name: "Cuantas sesiones necesitare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de tu diagnostico. En la evaluacion inicial el kinesiologo estima la cantidad de sesiones. En promedio, un tratamiento estandar va de 8 a 12 sesiones con frecuencia de 2 a 3 veces por semana.",
      },
    },
  ],
}

const steps = [
  {
    id: "paso-1",
    number: "01",
    icon: MessageCircle,
    title: "Contactanos por WhatsApp o Telefono",
    description:
      "Escribenos al WhatsApp o llama al +56 9 9967 9593. Cuentanos brevemente que te sucede y coordinamos una visita en el dia y horario que mas te acomode.",
    detail: "Respondemos en menos de 30 minutos en horario laboral.",
    color: "amber",
  },
  {
    id: "paso-2",
    number: "02",
    icon: ClipboardCheck,
    title: "Evaluacion Inicial Gratuita en tu Hogar",
    description:
      "Un kinesiologo titulado y colegiado va a tu casa. Evalua tu condicion fisica, revisa tus examenes y diagnostico medico. Sin costo y sin compromiso.",
    detail: "La evaluacion dura aprox. 30 minutos.",
    color: "emerald",
  },
  {
    id: "paso-3",
    number: "03",
    icon: UserCheck,
    title: "Plan de Tratamiento Personalizado",
    description:
      "Disenamos un plan de rehabilitacion con objetivos concretos, cantidad de sesiones estimadas y frecuencia semanal adaptada a tu ritmo de vida y necesidades clinicas.",
    detail: "Te explicamos todo antes de comenzar. Sin letra chica.",
    color: "amber",
  },
  {
    id: "paso-4",
    number: "04",
    icon: CalendarCheck,
    title: "Sesiones en tu Hogar con Seguimiento",
    description:
      "Realizamos cada sesion con equipamiento profesional en la comodidad de tu hogar. Reevaluamos tu progreso periodicamente y ajustamos el tratamiento si es necesario.",
    detail: "Emitimos boleta para reembolso Isapre/Fonasa.",
    color: "emerald",
  },
]

const equipment = [
  {
    name: "Camilla Portatil Profesional",
    description: "Camilla plegable de aluminio con regulacion de altura para tratamiento comodo y seguro.",
  },
  {
    name: "Electroestimulador TENS",
    description: "Electroterapia analgesica para alivio del dolor muscular, articular y neuropatico.",
  },
  {
    name: "Ultrasonido Terapeutico",
    description: "Equipo de ultrasonido para reducir inflamacion, acelerar cicatrizacion y tratar contracturas profundas.",
  },
  {
    name: "Bandas Elasticas y Accesorios",
    description: "Kit completo de bandas de resistencia, pelotas, foam roller y accesorios para ejercicio terapeutico.",
  },
]

const faqs = [
  {
    question: "Cuanto demora en llegar el kinesiologo a mi casa?",
    answer:
      "Coordinamos la visita dentro de 24 a 48 horas habiles desde tu primer contacto. En casos urgentes, podemos agendar para el mismo dia segun disponibilidad.",
  },
  {
    question: "Necesito orden medica para pedir kinesiologo a domicilio?",
    answer:
      "Para la evaluacion inicial no necesitas orden medica. Sin embargo, si deseas reembolso por Isapre o Fonasa libre eleccion, necesitaras una orden medica vigente emitida por tu doctor.",
  },
  {
    question: "La evaluacion inicial realmente es gratis?",
    answer:
      "Si, la primera visita de evaluacion es completamente gratuita y sin compromiso. El kinesiologo evalua tu condicion y te explica el plan de tratamiento recomendado antes de que decidas.",
  },
  {
    question: "En que comunas de Santiago atienden?",
    answer:
      "Atendemos en Las Condes, Vitacura, Providencia, Nunoa, La Reina, Lo Barnechea, La Florida, Penalolen, Macul, San Joaquin y Santiago Centro, entre otras comunas del sector oriente y sur.",
  },
  {
    question: "Como funciona el reembolso con Isapre y Fonasa?",
    answer:
      "Emitimos boleta de honorarios por cada sesion. Con tu orden medica vigente y la boleta, solicitas el reembolso directamente en tu Isapre o en Fonasa libre eleccion (tramo B, C o D). El porcentaje de devolucion depende de tu plan de salud.",
  },
  {
    question: "Cuantas sesiones necesitare?",
    answer:
      "Depende de tu diagnostico y evolucion. En la evaluacion inicial el kinesiologo estima la cantidad de sesiones. Un tratamiento estandar promedia entre 8 y 12 sesiones, con frecuencia de 2 a 3 veces por semana.",
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

        {/* Hero */}
        <section className="bg-slate-900 text-white py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 mb-6 text-sm">
              Evaluacion Inicial Gratuita
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Asi de Facil es Agendar tu{" "}
              <span className="text-amber-400">Kinesiologo a Domicilio</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              En 4 pasos simples recibes kinesiologia profesional en tu hogar en Santiago.
              Sin traslados, sin esperas, con reembolso Isapre y Fonasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/56999679593?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20a%20domicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full font-medium transition-colors duration-200 gap-2"
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
                Desde tu primer mensaje hasta tu recuperacion completa, te acompanamos en cada etapa.
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
                Que Llevan los Kinesiologos a tu Hogar
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Nuestros profesionales llevan todo el equipamiento necesario para una sesion completa. No necesitas comprar ni preparar nada.
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

        {/* Reembolso Isapre y Fonasa */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 text-sm">
                  Reembolso Garantizado
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Reembolso Isapre y Fonasa Libre Eleccion
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Recupera parte del costo de tus sesiones de kinesiologia a domicilio a traves de tu seguro de salud.
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
                        <span>Reembolso segun tu plan de salud (habitualmente entre 50% y 80%)</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Necesitas orden medica vigente y boleta de honorarios</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Proceso 100% online en la mayoria de las Isapres</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm">
                  <CardContent className="p-8">
                    <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Fonasa Libre Eleccion</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Disponible para tramos B, C y D de Fonasa</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <Check className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Bono de atencion kinesiologica en modalidad libre eleccion</span>
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
                Te ayudamos con el proceso de reembolso. Consultanos por WhatsApp si tienes dudas sobre tu cobertura.
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
                  Las dudas mas comunes sobre nuestro servicio de kinesiologia a domicilio en Santiago.
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
              Agenda tu Evaluacion Gratuita Hoy
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-10">
              Escríbenos por WhatsApp o llamanos. Coordinamos la visita de un kinesiologo a tu hogar en menos de 48 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/56999679593?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n%20gratuita%20a%20domicilio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg rounded-full font-bold transition-colors duration-200 gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: +56 9 9967 9593
              </a>
              <a
                href="tel:+56999679593"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-lg rounded-full font-medium transition-colors duration-200 border border-emerald-500 gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-emerald-200">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Evaluacion gratis
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Reembolso Isapre/Fonasa
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Kinesiologos titulados
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" /> Respuesta en 30 min
              </span>
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                <Link
                  href="/servicios/traumatologica"
                  className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors text-sm p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-200"
                >
                  <ChevronRight className="w-4 h-4" />
                  Kine Traumatologica
                </Link>
                <Link
                  href="/servicios/geriatrica"
                  className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors text-sm p-3 bg-white rounded-lg border border-slate-200 hover:border-amber-200"
                >
                  <ChevronRight className="w-4 h-4" />
                  Kine Geriatrica
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
                  Kine Neurologica
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}
