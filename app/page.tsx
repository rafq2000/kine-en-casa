import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Heart,
  Users,
  Home,
  Stethoscope,
  Brain,
  Dumbbell,
  GraduationCap,
  UserCheck,
  Star,
  Shield,
  Award,
  Check,
  Sparkles,
  Crown,
  Zap,
  MessageCircle,
  Smartphone,
  Activity,
  Package,
  TrendingUp,
  Database,
  BookOpen,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

import { WhatsAppButton } from "@/components/whatsapp-button"
import { SiteFooter } from "@/components/site-footer"
import {
  HeroCtaButton,
  ServiceWhatsAppButton,
  PlanCtaButton,
  GuaranteeCtaButton,
  CustomPlanButton,
  ContactPhoneButton,
  ContactWhatsAppButton,
  ComunaConsultButton,
  HeaderCtaButton,
} from "@/components/homepage-interactive"

export const metadata: Metadata = {
  title: "Kinesiólogo a Domicilio Santiago | Kine a Domicilio Isapre y Fonasa | KINEUM",
  description:
    "Kinesiólogo a domicilio en Santiago con reembolso Isapre y Fonasa libre elección. Kinesiología respiratoria, geriátrica, traumatológica y neurológica en tu hogar. Evaluación gratis. ☎ +56 9 9967 9593",
  keywords: [
    "kinesiólogo a domicilio",
    "kine a domicilio",
    "fisioterapeuta a domicilio",
    "terapia física a domicilio",
    "kinesiólogo a domicilio isapre",
    "kinesiólogo a domicilio fonasa",
    "kinesiología a domicilio con reembolso",
    "kine a domicilio santiago",
    "kinesiólogo a domicilio precio",
    "kinesiólogo a domicilio cerca de mí",
    "kinesiólogo a domicilio urgente",
    "kinesiólogo con orden médica",
    "kinesiólogo adulto mayor a domicilio",
    "kinesiólogo deportivo a domicilio",
    "kinesiología embarazada a domicilio",
    "kine post operación a domicilio",
    "kinesiólogo respiratorio a domicilio",
    "rehabilitación a domicilio santiago",
    "rehabilitación post hospitalización domicilio",
  ],
  alternates: {
    canonical: "https://kineum.cl",
  },
  openGraph: {
    title: "Kinesiólogo a Domicilio Santiago | Reembolso Isapre y Fonasa | KINEUM",
    description:
      "Kine a domicilio en Santiago. Reembolso Isapre y Fonasa libre elección. Kinesiólogos certificados, evaluación gratuita. Llámanos hoy.",
    url: "https://kineum.cl",
    type: "website",
    locale: "es_CL",
    siteName: "KINEUM",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "KINEUM - Kinesiólogo a Domicilio Santiago - Isapre y Fonasa" }],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una sesión de kinesiología a domicilio en Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de una sesión de kinesiología a domicilio en el sector oriente de Santiago varía según el tipo de tratamiento y la comuna. Ofrecemos evaluación inicial gratuita. Contáctanos al +56 9 9967 9593 para una cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué comunas atienden en Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Lo Barnechea, Peñalolén, La Florida, Macul, San Joaquín y Santiago Centro. Todos los tratamientos se realizan directamente en tu hogar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con Fonasa o Isapre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, emitimos boleta de honorarios para que puedas solicitar el reembolso en tu Isapre (Colmena, Cruz Blanca, Banmédica, Consalud, Vida Tres, Nueva Masvida). Para Fonasa, aceptamos modalidad libre elección: pagas la sesión y solicitas el reembolso según tu tramo. Solo necesitas una orden médica vigente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona el reembolso de kinesiología a domicilio por Isapre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestro kinesiólogo emite una boleta de honorarios profesional después de cada sesión. Con esa boleta y tu orden médica, presentas el reembolso en tu Isapre (app, sucursal o web). El monto reembolsado depende de tu plan de salud, generalmente entre un 50% y 80% del valor de la sesión.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito orden médica para kinesiología a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para solicitar el reembolso por Isapre o Fonasa, sí necesitas una orden médica que indique 'kinesiología' o 'rehabilitación'. Si no tienes orden médica, igual puedes atenderte de forma particular. Te ayudamos a coordinar con tu médico si lo necesitas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto reembolsa Fonasa por kinesiología a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El reembolso de Fonasa por kinesiología varía según tu tramo (A, B, C o D) y modalidad libre elección. Generalmente cubre entre un 25% y 50% del valor de la sesión. Necesitas orden médica y la boleta que emitimos después de cada atención. El trámite es simple y se puede hacer en la app Mi Fonasa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipos de kinesiología ofrecen a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos kinesiología geriátrica, respiratoria, traumatológica, neurológica, rehabilitación postquirúrgica y educación familiar. Nuestros kinesiólogos tienen más de 5 años de experiencia clínica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura una sesión de kinesiología a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada sesión tiene una duración de 60 minutos aproximadamente. El tiempo puede variar según las necesidades específicas del paciente y el tipo de tratamiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden adultos mayores con movilidad reducida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, somos especialistas en atención a adultos mayores con movilidad reducida. Llevamos todo el equipamiento necesario a tu hogar y adaptamos cada sesión a las capacidades del paciente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede hacer kinesiología respiratoria infantil a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, realizamos kinesiología respiratoria para bebés y niños a domicilio en Santiago. Tratamos bronquitis, neumonía, bronquiolitis y obstrucción bronquial con técnicas pediátricas especializadas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas sesiones de kinesiología necesito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cantidad de sesiones depende de tu diagnóstico y evolución. Generalmente, un plan de rehabilitación dura entre 4 y 12 sesiones. En la evaluación inicial gratuita, nuestro kinesiólogo diseña un plan personalizado con objetivos claros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es lo mismo un kinesiólogo que un fisioterapeuta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Chile, el kinesiólogo es el equivalente al fisioterapeuta de otros países. Ambos términos se refieren al profesional de salud que realiza rehabilitación física, terapia manual, ejercicios terapéuticos y tratamiento del dolor. En KINEUM, nuestros kinesiólogos (fisioterapeutas) atienden a domicilio en todo Santiago con reembolso Isapre y Fonasa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo pedir un kinesiólogo a domicilio de urgencia para hoy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, en KINEUM tenemos disponibilidad para atención el mismo día en la mayoría de las comunas de Santiago. Contáctanos por WhatsApp al +56 9 9967 9593 y coordinamos la visita lo antes posible. Atendemos de lunes a domingo, incluyendo feriados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen kinesiología deportiva a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, atendemos lesiones deportivas a domicilio: esguinces, desgarros musculares, tendinitis, rehabilitación post artroscopia y retorno deportivo. Nuestros kinesiólogos llevan equipamiento profesional (bandas elásticas, electroestimulación, ultrasonido) a tu hogar. Reembolsable por Isapre con orden médica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden kinesiología para embarazadas a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, realizamos kinesiología prenatal y postnatal a domicilio. Tratamos dolor lumbar del embarazo, preparación al parto, rehabilitación de piso pélvico post parto y recuperación post cesárea. Todo desde la comodidad de tu hogar con reembolso Isapre y Fonasa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen rehabilitación post hospitalización a domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, uno de nuestros servicios más solicitados es la rehabilitación inmediata después del alta hospitalaria. Atendemos post cirugías, post UCI, post ACV, post fracturas y cualquier condición que requiera rehabilitación. Comenzar la kinesiología temprana en casa acelera la recuperación y evita complicaciones.",
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
  ],
}

const services = [
  {
    title: "Kinesiología Geriátrica",
    description: "Mejoramos la movilidad y prevenimos caídas en adultos mayores",
    icon: Users,
    image: "/elderly-physio-home.png",
    href: "/servicios/geriatrica",
    features: ["Prevención de caídas", "Rehabilitación post hospitalización", "Mejora de movilidad", "Fortalecimiento muscular"],
  },
  {
    title: "Kinesiología Respiratoria",
    description: "Tratamiento especializado para problemas respiratorios en adultos y niños",
    icon: Stethoscope,
    image: "/respiratory-therapy-baby.png",
    href: "/servicios/respiratoria",
    features: ["Recuperación post COVID", "Tratamiento EPOC", "Rehabilitación neumonía", "KTR infantil y pediátrica"],
  },
  {
    title: "Kinesiología Traumatológica",
    description: "Rehabilitación de lesiones, fracturas y lesiones deportivas en casa",
    icon: Dumbbell,
    image: "/knee-rehabilitation.png",
    href: "/servicios/traumatologica",
    features: ["Recuperación de fracturas", "Rehabilitación esguinces", "Post prótesis rodilla/cadera", "Ejercicios guiados"],
  },
  {
    title: "Rehabilitación Postquirúrgica",
    description: "Recuperación especializada después de cirugías ortopédicas",
    icon: Heart,
    image: "/home-rehab-guidance.png",
    href: "/servicios/traumatologica",
    features: ["Post cirugías ortopédicas", "Rehabilitación abdominal", "Recuperación cardíaca", "Seguimiento personalizado"],
  },
  {
    title: "Kinesiología Neurológica",
    description: "Rehabilitación para condiciones neurológicas en domicilio",
    icon: Brain,
    image: "/neurological-physiotherapy.png",
    href: "/servicios/neurologica",
    features: ["Rehabilitación ACV", "Tratamiento Parkinson", "Terapia Alzheimer", "Esclerosis múltiple"],
  },
  {
    title: "Educación Familiar",
    description: "Capacitamos a familiares y cuidadores para la rehabilitación",
    icon: GraduationCap,
    image: "/physiotherapy-elderly-care.png",
    href: "/servicios/geriatrica",
    features: ["Entrenamiento cuidadores", "Ejercicios simples", "Técnicas de movilización", "Cuidados preventivos"],
  },
]

const plans = [
  {
    name: "Plan Essential",
    description: "Para lesiones leves y mantenimiento.",
    icon: Heart,
    features: ["4 Sesiones de Kinesiología (1 hr)", "Seguimiento de evolución básico", "Atención a domicilio garantizada"],
    bonuses: [
      { name: "Evaluación Inicial", value: "$45.000", price: "GRATIS" },
      { name: "Asistente AI 24/7", value: "$30.000", price: "GRATIS" },
    ],
    popular: false,
    gradient: "from-emerald-600 to-emerald-800",
    price: "160.000",
    totalValue: "$235.000",
  },
  {
    name: "Plan Premium",
    description: "El protocolo acelerado para eliminar el dolor.",
    icon: Star,
    features: ["10 Sesiones de Kinesiología Expert", "Prioridad en agendamiento", "Reportes de progreso detallados"],
    bonuses: [
      { name: "Evaluación Digital", value: "$45.000", price: "GRATIS" },
      { name: "Asistente AI 24/7", value: "$30.000", price: "GRATIS" },
      { name: "Kit de Recuperación", value: "$25.000", price: "GRATIS" },
      { name: "Portal de Paciente", value: "Invaluable", price: "GRATIS" },
    ],
    popular: true,
    gradient: "from-amber-600 to-amber-800",
    price: "350.000",
    totalValue: "$500.000+",
  },
  {
    name: "Plan Elite",
    description: "La experiencia definitiva sin límites.",
    icon: Crown,
    features: [
      "Sesiones ILIMITADAS (Todo el mes)",
      "Kinesiólogo dedicado asignado",
      "Prioridad absoluta en agenda",
      "Red de especialistas preferente",
    ],
    bonuses: [
      { name: "Todo el Pack Premium", value: "$400.000", price: "INCLUIDO" },
      { name: "Consultas Ilimitadas", value: "Invaluable", price: "INCLUIDO" },
    ],
    popular: false,
    gradient: "from-slate-700 to-slate-900",
    price: "Consultar",
    totalValue: "Incalculable",
  },
]

const comunasPrincipales = [
  { name: "Las Condes", slug: "las-condes" },
  { name: "Vitacura", slug: "vitacura" },
  { name: "Providencia", slug: "providencia" },
  { name: "Ñuñoa", slug: "nunoa" },
  { name: "La Reina", slug: "la-reina" },
  { name: "Lo Barnechea", slug: "lo-barnechea" },
]

const comunasSecundarias = [
  { name: "La Florida", slug: "la-florida" },
  { name: "Peñalolén", slug: "penalolen" },
  { name: "Macul", slug: "macul" },
  { name: "San Joaquín", slug: "san-joaquin" },
  { name: "Santiago Centro", slug: "santiago-centro" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WhatsAppButton />

      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-600 p-2 rounded-xl shadow-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold font-serif text-white tracking-widest">KINEUM</span>
                <p className="text-xs text-slate-300 uppercase tracking-widest">Clinical Home Care</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicios" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Especialidades
              </a>
              <a href="#planes" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Membresías
              </a>
              <Link href="/blog" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Blog
              </Link>
              <Link href="/nosotros" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Equipo Clínico
              </Link>
              <a href="#contacto" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Contacto
              </a>
            </nav>
            <HeaderCtaButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                <Sparkles className="h-4 w-4 mr-2 text-amber-400" />
                Kinesiología a Domicilio en Santiago
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 font-serif leading-tight">
                Kinesiólogo a Domicilio
                <br />
                <span className="text-amber-700">en Santiago de Chile</span>
                <br />
                <span className="text-3xl md:text-4xl text-slate-600 font-sans font-normal block mt-4">
                  Rehabilitación Profesional Sin Salir de Casa
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed max-w-4xl mx-auto">
              Somos <strong>KINEUM</strong>, especialistas en kinesiología a domicilio con{" "}
              <strong>Tecnología de Monitoreo + Asistente AI 24/7</strong>. Kinesiología respiratoria, geriátrica,
              traumatológica y neurológica en tu hogar. Evaluación inicial gratuita.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <HeroCtaButton />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Cobertura Santiago</h3>
                <p className="text-slate-600 font-medium">Las Condes, Vitacura, Providencia, Ñuñoa, La Florida y más</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Horarios Flexibles</h3>
                <p className="text-slate-600 font-medium">Lunes a Domingo - 8:00 a 20:00</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Kinesiólogos Certificados</h3>
                <p className="text-slate-600 font-medium">+5 años de experiencia clínica. Fonasa e Isapre.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              <Stethoscope className="h-4 w-4 mr-2" />
              Servicios de Kinesiología a Domicilio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Tratamientos Profesionales
              <br />
              <span className="text-amber-700">a Domicilio en Santiago</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos kinesiología a domicilio con equipamiento profesional completo. Nuestros kinesiólogos llevan
              camilla, TENS, ultrasonido y todo lo necesario directamente a tu hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={service.href || "#contacto"} key={index} className="block h-full group">
                <Card className="hover:shadow-2xl transition-all duration-500 border border-slate-200 shadow-lg bg-white hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden rounded-t-xl h-56">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={`${service.title} a domicilio en Santiago - KINEUM`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-slate-900 text-white shadow-lg border-slate-800">
                        <service.icon className="h-4 w-4 mr-2" />
                        Especializado
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900 font-serif group-hover:text-amber-700 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="h-2 w-2 bg-slate-700 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="font-medium text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <ServiceWhatsAppButton />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-700 text-white border-none shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />
              Nuevo: Kine Privé
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Más que Kinesiología:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
                Un Ecosistema de Salud a Domicilio
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Hemos revolucionado la rehabilitación domiciliaria integrando tecnología avanzada, inteligencia artificial y
              equipamiento premium para tu recuperación en casa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-900/20">
                <Brain className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Asistente AI 24/7</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Chat inteligente especializado que responde tus dudas, guía tus ejercicios y monitorea tu dolor entre
                sesiones.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-900/20">
                <Smartphone className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Portal del Paciente</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Tu historial clínico, gráficos de evolución, fotos de rango de movimiento y playlist de ejercicios.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                <Package className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Kit Premium</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Llevamos camilla pro, TENS, ultrasonido y te dejamos un kit de bandas y elementos para tu recuperación.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-900/20">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Gamificación</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Gana puntos por completar ejercicios, mantén tu racha diaria y desbloquea descuentos por tu compromiso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-24 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              <Zap className="h-4 w-4 mr-2" />
              Planes de Kinesiología a Domicilio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Elige el Plan Perfecto
              <br />
              <span className="text-amber-700">para tu Recuperación</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Planes de kinesiología a domicilio adaptados a tus necesidades.
              <span className="text-slate-900 font-semibold"> Primera evaluación gratuita</span> para todos nuestros planes. Compatible con Fonasa e Isapre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-500 border border-slate-300 shadow-lg bg-white hover:-translate-y-3 flex flex-col ${plan.popular ? "ring-4 ring-amber-500 scale-105 z-10" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full text-center">
                    <Badge className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-2 shadow-xl border-amber-500 text-sm font-bold tracking-wider uppercase">
                      <Crown className="h-4 w-4 mr-2" />
                      Opción Recomendada
                    </Badge>
                  </div>
                )}
                <div className={`h-3 bg-gradient-to-r ${plan.gradient} rounded-t-xl`}></div>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} p-0.5 shadow-md`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <plan.icon className="h-8 w-8 text-slate-700" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 font-serif mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed min-h-[40px]">
                    {plan.description}
                  </CardDescription>
                  <div className="my-6">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">Valor Total</p>
                    <span className="text-lg font-bold text-slate-400 line-through decoration-red-500 decoration-2">
                      {plan.totalValue}
                    </span>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">${plan.price}</span>
                      {plan.price !== "Consultar" && <span className="text-slate-500 font-semibold self-end mb-1">/mes</span>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex-grow">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center">
                        <Shield className="h-3 w-3 mr-1" /> Lo que incluye:
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="font-medium text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.bonuses && (
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                        <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3 flex items-center">
                          <Sparkles className="h-3 w-3 mr-1" /> Bonuses (Gratis):
                        </h4>
                        <ul className="space-y-2">
                          {plan.bonuses.map((bonus, bIndex) => (
                            <li key={bIndex} className="flex items-center justify-between text-xs">
                              <span className="text-slate-700 font-medium flex items-center">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mr-2"></span>
                                {bonus.name}
                              </span>
                              <div className="flex flex-col items-end">
                                <span className="text-slate-400 line-through text-[10px]">{bonus.value}</span>
                                <span className="text-emerald-600 font-bold uppercase tracking-wider bg-emerald-100 px-1.5 rounded-[2px]">
                                  {bonus.price}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <PlanCtaButton planName={plan.name} popular={plan.popular} />
                </div>
              </Card>
            ))}
          </div>

          {/* Guarantee */}
          <div className="max-w-4xl mx-auto mt-20 mb-16">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              <Badge className="mb-6 px-6 py-2 text-sm font-bold bg-amber-500 text-slate-900 border-none shadow-lg">
                <Shield className="h-4 w-4 mr-2" />
                RIESGO CERO
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Garantía &quot;Primera Sesión Perfecta&quot;
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Si no sientes que recibiste una atención de excelencia en tu primera visita de kinesiología a domicilio,{" "}
                <span className="text-white font-bold border-b-2 border-amber-500">te devolvemos el 100% de tu dinero</span>.
                Sin letra chica.
              </p>
              <div className="flex justify-center">
                <GuaranteeCtaButton />
              </div>
            </div>
          </div>

          <div className="text-center opacity-80 hover:opacity-100 transition-opacity">
            <p className="text-slate-600 mb-2">¿Tienes una condición compleja?</p>
            <CustomPlanButton />
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                <Shield className="h-4 w-4 mr-2" />
                Confianza y Experiencia
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight">
                ¿Por qué elegir
                <br />
                <span className="text-amber-700">KINEUM?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Somos un equipo de kinesiólogos profesionales especializados en atención domiciliaria en Santiago.
                La comodidad del hogar es fundamental para una recuperación exitosa y personalizada.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                    <Award className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Kinesiólogos Certificados</h3>
                    <p className="text-slate-600">
                      Titulados con más de 5 años de experiencia en atención domiciliaria. Acreditados por la Superintendencia de Salud.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                    <Heart className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Fonasa e Isapre</h3>
                    <p className="text-slate-600">
                      Emitimos boletas reembolsables por Isapre. Atendemos Fonasa modalidad libre elección.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                    <Stethoscope className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Equipamiento Profesional Completo</h3>
                    <p className="text-slate-600">
                      Camilla, TENS, ultrasonido, bandas elásticas y todo lo necesario directamente en tu hogar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-amber-200 rounded-2xl blur-2xl opacity-30"></div>
              <Image
                src="/physiotherapist-elderly-exercise.png"
                alt="Kinesiólogo a domicilio atendiendo adulto mayor en Santiago - KINEUM"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl w-full hover:shadow-3xl transition-shadow duration-500 border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-8 px-6 py-2 text-sm font-medium bg-amber-600 text-white border-amber-500">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contacto Inmediato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
            Agenda tu Kinesiólogo
            <br />
            <span className="text-amber-400">a Domicilio Hoy</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Contáctanos y agenda tu primera sesión de kinesiología a domicilio en Santiago.
            <span className="font-semibold text-amber-400"> Evaluación inicial gratuita</span> para nuevos pacientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <ContactPhoneButton />
            <ContactWhatsAppButton />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <MapPin className="h-10 w-10 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold text-xl mb-3">Cobertura Completa Santiago</h3>
              <p className="text-slate-300 leading-relaxed">
                Las Condes, Vitacura, Providencia, Ñuñoa, La Florida, Lo Barnechea, Peñalolén, Macul, San Joaquín, Santiago Centro
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <Clock className="h-10 w-10 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold text-xl mb-3">Horarios Flexibles</h3>
              <p className="text-slate-300 leading-relaxed">
                Lunes a Domingo<br /><span className="font-semibold">8:00 - 20:00 hrs</span><br />Emergencias 24/7
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <MessageCircle className="h-10 w-10 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold text-xl mb-3">Respuesta Rápida</h3>
              <p className="text-slate-300 leading-relaxed">
                Respuesta inmediata por WhatsApp<br /><span className="font-semibold">Agenda flexible</span><br />Primera consulta gratis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comunas */}
      <section id="comunas" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              <MapPin className="h-4 w-4 mr-2" />
              Kinesiólogo a Domicilio por Comuna
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Kinesiología a Domicilio en
              <br />
              <span className="text-amber-700">Santiago de Chile</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Atendemos kinesiología a domicilio en las principales comunas de Santiago. Haz clic en tu comuna para ver servicios disponibles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {comunasPrincipales.map((comuna) => (
              <Link
                key={comuna.slug}
                href={`/kinesiologo-a-domicilio-${comuna.slug}`}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 text-center"
              >
                <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{comuna.name}</h3>
                <p className="text-sm text-slate-600 mt-1">Ver más →</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-6 font-serif">Más comunas con kinesiología a domicilio:</h4>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {comunasSecundarias.map((comuna) => (
                <Link
                  key={comuna.slug}
                  href={`/kinesiologo-a-domicilio-${comuna.slug}`}
                  className="bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm"
                >
                  {comuna.name}
                </Link>
              ))}
            </div>
            <ComunaConsultButton />
          </div>
        </div>
      </section>

      {/* Blog / Journal Section */}
      <section id="journal" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-100 text-slate-800 border-slate-200">
              <BookOpen className="h-4 w-4 mr-2" />
              Blog de Kinesiología
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Artículos de <span className="text-amber-700">Rehabilitación y Salud</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Guías de recuperación, ejercicios terapéuticos y consejos de nuestros kinesiólogos para tu bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Link href="/blog/neuroplasticidad-recuperacion-acv" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <Image
                  src="/neurological-physiotherapy.png"
                  alt="Neuroplasticidad y recuperación post ACV - Kinesiología neurológica a domicilio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">Rehabilitación</Badge>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors font-serif">
                Neuroplasticidad: Acelerando la recuperación post-ACV
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Cómo la tecnología y los ejercicios cognitivos potencian la capacidad del cerebro para sanar.
              </p>
              <span className="text-sm font-semibold text-emerald-600 flex items-center">
                Leer artículo <ArrowRight className="h-3 w-3 ml-2" />
              </span>
            </Link>

            <Link href="/blog/lumbago-agudo-que-hacer" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <Image
                  src="/home-rehab-guidance.png"
                  alt="Lumbago agudo tratamiento - Kinesiología traumatológica a domicilio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">Columna</Badge>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors font-serif">
                Lumbago Agudo: ¿Reposo o Movimiento?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                La guía clínica para manejar el dolor de espalda baja en las primeras 48 horas.
              </p>
              <span className="text-sm font-semibold text-emerald-600 flex items-center">
                Leer artículo <ArrowRight className="h-3 w-3 ml-2" />
              </span>
            </Link>

            <Link href="/blog/sarcopenia-fuerza-es-salud" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <Image
                  src="/physiotherapist-elderly-exercise.png"
                  alt="Sarcopenia en adulto mayor - Kinesiología geriátrica a domicilio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">Geriatría</Badge>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors font-serif">
                Sarcopenia: Por qué la fuerza es salud
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Estrategias para mantener la vitalidad muscular en la tercera edad con kinesiología geriátrica.
              </p>
              <span className="text-sm font-semibold text-emerald-600 flex items-center">
                Leer artículo <ArrowRight className="h-3 w-3 ml-2" />
              </span>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Ver todos los artículos del blog
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Todo sobre Kinesiología
              <br />
              <span className="text-amber-700">a Domicilio en Santiago</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.name}</h3>
                <p className="text-slate-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links SEO Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg font-serif">Servicios de Kinesiología a Domicilio</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/servicios/geriatrica" className="text-slate-600 hover:text-amber-700">Kinesiología Geriátrica a Domicilio</Link></li>
                <li><Link href="/servicios/respiratoria" className="text-slate-600 hover:text-amber-700">Kinesiología Respiratoria a Domicilio</Link></li>
                <li><Link href="/servicios/traumatologica" className="text-slate-600 hover:text-amber-700">Kinesiología Traumatológica a Domicilio</Link></li>
                <li><Link href="/servicios/neurologica" className="text-slate-600 hover:text-amber-700">Rehabilitación Neurológica a Domicilio</Link></li>
                <li><Link href="/ejercicios" className="text-slate-600 hover:text-amber-700">Biblioteca de Ejercicios Terapéuticos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg font-serif">Kinesiólogo a Domicilio por Comuna</h3>
              <ul className="space-y-2 text-sm">
                {[...comunasPrincipales, ...comunasSecundarias].map((c) => (
                  <li key={c.slug}>
                    <Link href={`/kinesiologo-a-domicilio-${c.slug}`} className="text-slate-600 hover:text-amber-700">
                      Kinesiólogo a domicilio en {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg font-serif">Artículos Destacados del Blog</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/lumbago-agudo-que-hacer" className="text-slate-600 hover:text-amber-700">Lumbago Agudo: ¿Reposo o Movimiento?</Link></li>
                <li><Link href="/blog/kinesiologia-post-covid" className="text-slate-600 hover:text-amber-700">Rehabilitación Respiratoria Post-COVID</Link></li>
                <li><Link href="/blog/fractura-cadera-adulto-mayor" className="text-slate-600 hover:text-amber-700">Fractura de Cadera: Volver a Caminar</Link></li>
                <li><Link href="/blog/protesis-rodilla-recuperacion" className="text-slate-600 hover:text-amber-700">Vida Después de la Prótesis de Rodilla</Link></li>
                <li><Link href="/blog/ciatica-sintomas-tratamiento" className="text-slate-600 hover:text-amber-700">Ciática: Síntomas y Tratamiento</Link></li>
                <li><Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold">Ver todos los artículos →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
