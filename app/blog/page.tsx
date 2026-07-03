import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { blogPosts } from "@/lib/blog-data"
import { BookOpen, Clock, Calendar, ArrowRight, ChevronRight, MapPin, Stethoscope } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog de Kinesiología y Rehabilitación a Domicilio | KINEUM",
  description:
    "Artículos de kinesiología, rehabilitación y salud. Guías de ejercicios, consejos de kinesiólogos y novedades sobre rehabilitación a domicilio en Santiago. KINEUM.",
  keywords: [
    "blog kinesiología",
    "artículos rehabilitación",
    "ejercicios terapéuticos",
    "consejos kinesiólogo",
    "rehabilitación a domicilio guía",
    "kinesiología respiratoria artículos",
    "lumbago tratamiento blog",
    "rehabilitación ACV guía",
    "ejercicios adulto mayor",
    "kinesiología embarazo blog",
    "post operación rehabilitación consejos",
    "kinesiólogo santiago blog",
  ],
  alternates: {
    canonical: "https://kineum.cl/blog",
  },
  openGraph: {
    title: "Blog de Kinesiología y Rehabilitación | KINEUM",
    description:
      "Artículos clínicos sobre rehabilitación, kinesiología respiratoria, geriátrica, traumatológica y neurológica a domicilio.",
    url: "https://kineum.cl/blog",
    type: "website",
    locale: "es_CL",
    siteName: "KINEUM",
  },
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog de Kinesiología KINEUM",
  description: "Artículos clínicos sobre kinesiología, rehabilitación y salud a domicilio en Santiago de Chile.",
  url: "https://kineum.cl/blog",
  publisher: {
    "@type": "Organization",
    name: "KINEUM",
    url: "https://kineum.cl",
  },
  blogPost: blogPosts.slice(0, 10).map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.subtitle,
    url: `https://kineum.cl/blog/${post.slug}`,
    author: { "@type": "Person", name: post.author },
    datePublished: post.dateISO,
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://kineum.cl" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kineum.cl/blog" },
  ],
}

export default function BlogPage() {
  const featuredPosts = blogPosts.slice(0, 3)
  const restPosts = blogPosts.slice(3)

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white font-medium">Blog</span>
          </nav>

          <Badge className="mb-6 bg-amber-600 hover:bg-amber-700 border-none text-white px-4 py-1">
            <BookOpen className="h-4 w-4 mr-2" />
            Journal Clínico KINEUM
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            Blog de Kinesiología
            <br />
            <span className="text-amber-400">y Rehabilitación</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Artículos escritos por nuestro equipo de kinesiólogos. Guías de recuperación, ejercicios terapéuticos,
            consejos de prevención y todo sobre kinesiología a domicilio en Santiago.
          </p>
        </div>
      </header>

      {/* Featured Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 font-serif">Artículos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => {
              const Icon = post.icon
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-slate-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">{post.category}</Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors font-serif">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">{post.subtitle}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" />{post.date}</span>
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" />{post.readTime}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 font-serif">Todos los Artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restPosts.map((post) => {
              const Icon = post.icon
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <Card className="hover:shadow-lg transition-all duration-300 border border-slate-200 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs border-slate-300">{post.category}</Badge>
                        <span className="text-xs text-slate-400">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-serif leading-snug">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{post.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{post.author}</span>
                        <span className="text-sm font-semibold text-emerald-600 flex items-center">
                          Leer <ArrowRight className="h-3 w-3 ml-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">
            ¿Necesitas un Kinesiólogo a Domicilio?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Nuestros kinesiólogos aplican la evidencia clínica de estos artículos en cada sesión a domicilio.
            Evaluación inicial gratuita.
          </p>
          <a
            href="https://wa.me/56999679593?text=Hola, quiero agendar una evaluación kinesiológica a domicilio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg text-lg"
          >
            Agendar Evaluación Gratuita
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-3 flex items-center text-sm">
                <Stethoscope className="h-4 w-4 mr-2" /> Servicios
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li><Link href="/servicios/respiratoria" className="text-slate-600 hover:text-amber-700">Kinesiología Respiratoria</Link></li>
                <li><Link href="/servicios/geriatrica" className="text-slate-600 hover:text-amber-700">Kinesiología Geriátrica</Link></li>
                <li><Link href="/servicios/traumatologica" className="text-slate-600 hover:text-amber-700">Kinesiología Traumatológica</Link></li>
                <li><Link href="/servicios/neurologica" className="text-slate-600 hover:text-amber-700">Rehabilitación Neurológica</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-3 flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2" /> Comunas
              </h3>
              <ul className="space-y-1.5 text-sm">
                {["las-condes", "vitacura", "providencia", "nunoa", "la-reina", "lo-barnechea", "la-florida", "penalolen", "macul"].map((c) => (
                  <li key={c}>
                    <Link href={`/kinesiologo-a-domicilio-${c}`} className="text-slate-600 hover:text-amber-700 capitalize">
                      Kinesiólogo en {c.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-3 flex items-center text-sm">
                <BookOpen className="h-4 w-4 mr-2" /> Recursos
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li><Link href="/ejercicios" className="text-slate-600 hover:text-amber-700">Biblioteca de Ejercicios</Link></li>
                <li><Link href="/nosotros" className="text-slate-600 hover:text-amber-700">Nuestro Equipo Clínico</Link></li>
                <li><Link href="/" className="text-slate-600 hover:text-amber-700">Inicio - KINEUM</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
