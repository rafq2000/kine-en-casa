import { getPostBySlug, blogPosts, postsIndexables } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Home, Phone, MessageCircle, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { especialidades } from "@/lib/especialidades-data"
import { comunas } from "@/lib/comunas-data"

const TEL = "+56999679593"
const TEL_DISPLAY = "+56 9 9967 9593"

const PROSE =
    "prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-strong:font-bold prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-800"

interface BlogPostProps {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) return { title: "Artículo no encontrado" }

    // seoTitle/seoDescription son los optimizados para buscador; el title y el
    // subtitle siguen siendo los editoriales que se ven en la pagina.
    const seoTitle = (post as any).seoTitle || `${post.title} | KINEUM`
    const seoDescription = (post as any).seoDescription || post.subtitle

    return {
        title: seoTitle,
        description: seoDescription,
        alternates: {
            canonical: `https://kineum.cl/blog/${post.slug}`,
        },
        // T40: posts delgados sin clics quedan fuera del índice, pero sus enlaces se siguen
        ...(post.noindex ? { robots: { index: false, follow: true } } : {}),
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: `https://kineum.cl/blog/${post.slug}`,
            type: "article",
            locale: "es_CL",
            images: [{ url: `https://kineum.cl${post.image}` }],
        },
    }
}

// Publica como FAQPage las preguntas que el propio articulo ya muestra (h3 + respuesta).
// Si el post no tiene bloque de preguntas frecuentes visible, no se emite marcado.
function faqsDelPost(html: string) {
    const inicio = html.search(/<h2>[^<]*[Ff]recuentes[^<]*<\/h2>/)
    if (inicio < 0) return []
    let bloque = html.slice(inicio)
    const siguienteH2 = bloque.indexOf("<h2>", 4)
    if (siguienteH2 > 0) bloque = bloque.slice(0, siguienteH2)
    const faqs: { q: string; a: string }[] = []
    const re = /<h3>([\s\S]*?)<\/h3>\s*((?:<p>[\s\S]*?<\/p>|<ul>[\s\S]*?<\/ul>|<ol>[\s\S]*?<\/ol>)+)/g
    let m: RegExpExecArray | null
    while ((m = re.exec(bloque)) !== null) {
        const q = m[1].replace(/<[^>]+>/g, "").trim()
        const a = m[2]
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .trim()
        if (q && a.length > 20) faqs.push({ q, a })
    }
    return faqs.slice(0, 10)
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const Icon = post.icon
    // Temas que KINEUM no ofrece como servicio confirmado (T04 j): guía informativa, sin llamados a agendar
    const fueraDeServicio = post.fueraDeServicio === true

    // Mensaje de WhatsApp: dice desde qué post viene el lead
    const waMensaje = fueraDeServicio
        ? "Hola, tengo una consulta sobre KINEUM. Mi comuna es: "
        : post.category.toLowerCase().startsWith("precios")
          ? "Hola, tengo Isapre y quiero cotizar kinesiología a domicilio. Mi comuna es: "
          : `Hola, leí "${post.title}" y quiero agendar una evaluación gratuita. Mi comuna es: `
    const waLink = `https://wa.me/56999679593?text=${encodeURIComponent(waMensaje)}`

    // La caja de contacto va antes del primer H2 del artículo (o al final si no tiene H2)
    const corte = post.content.indexOf("<h2")
    const contenidoAntes = corte < 0 ? post.content : post.content.slice(0, corte)
    const contenidoDespues = corte < 0 ? "" : post.content.slice(corte)

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.subtitle,
        image: `https://kineum.cl${post.image}`,
        datePublished: post.dateISO,
        dateModified: post.updatedISO ?? post.dateISO,
        inLanguage: "es-CL",
        author: {
            "@type": "Organization",
            "@id": "https://kineum.cl/#organization",
            name: "KINEUM",
            url: "https://kineum.cl",
        },
        publisher: {
            "@type": "Organization",
            "@id": "https://kineum.cl/#organization",
            name: "KINEUM",
            url: "https://kineum.cl",
            logo: {
                "@type": "ImageObject",
                url: "https://kineum.cl/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://kineum.cl/blog/${post.slug}`,
        },
    }

    // Relacionados: misma categoria primero, para que cada post reparta autoridad
    const relacionados = [
        ...postsIndexables.filter((p) => p.slug !== post.slug && p.category === post.category),
        ...postsIndexables.filter((p) => p.slug !== post.slug && p.category !== post.category),
    ].slice(0, 3)
    const servicioRelacionado = especialidades.find((e) => e.articulos.some((a) => a.url === `/blog/${post.slug}`))

    const faqs = faqsDelPost(post.content)
    const faqSchema = faqs.length
        ? {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
          }
        : null

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://kineum.cl" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://kineum.cl/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://kineum.cl/blog/${post.slug}` },
        ],
    }

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Cabecera simple: logo y teléfono a la vista */}
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
                        <span className="hidden sm:inline">Llamar {TEL_DISPLAY}</span>
                        <span className="sm:hidden">Llamar</span>
                    </a>
                </div>
            </header>
<main id="contenido">

            {/* Blog Header */}
            <header className="bg-slate-950 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Volver al Journal
                    </Link>

                    <div className="max-w-4xl">
                        <Badge className="mb-6 bg-amber-600 hover:bg-amber-700 border-none text-white px-4 py-1">
                            {post.category}
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed max-w-2xl">
                            {post.subtitle}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-6">
                            <div className="flex items-center">
                                <div className="bg-slate-800 p-2 rounded-full mr-3">
                                    <Icon className="h-4 w-4 text-amber-500" />
                                </div>
                                <span className="font-medium text-slate-200">{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                {post.date}
                                {post.updatedISO &&
                                    ` · Actualizado el ${new Date(post.updatedISO).toLocaleDateString("es-CL", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                        timeZone: "UTC",
                                    })}`}
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <article className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <div className={PROSE} data-contenido-post dangerouslySetInnerHTML={{ __html: contenidoAntes }} />

                    {/* Llamado a la acción al inicio: antes del primer H2 (en temas fuera de servicio, aviso informativo) */}
                    {fueraDeServicio ? (
                        <aside className="not-prose my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                            <p className="text-lg font-bold text-slate-900 font-serif mb-2">Guía informativa</p>
                            <p className="text-slate-700">
                                KINEUM no ofrece hoy atención a domicilio de este tema. Esta guía es para que sepas qué
                                preguntar y a quién consultar: tu médico, matrona o ginecólogo puede derivarte a una
                                profesional con formación específica.
                            </p>
                        </aside>
                    ) : (
                    <aside className="not-prose my-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8">
                        <p className="text-xl font-bold text-slate-900 font-serif mb-4">
                            ¿Necesitas kinesiología a domicilio en el sector oriente o centro de Santiago?
                        </p>
                        <ul className="space-y-2 mb-6 text-slate-700">
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                                <span>Evaluación inicial gratuita en tu casa</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                                <span>
                                    Boleta de honorarios por cada sesión, para reembolso en tu Isapre y seguro complementario
                                    según la cobertura de tu plan
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                                <span>
                                    {comunas.map((c, i) => (
                                        <span key={c.slug}>
                                            <Link
                                                href={`/kinesiologo-a-domicilio-${c.slug}`}
                                                className="text-emerald-800 font-medium underline-offset-2 hover:underline"
                                            >
                                                {c.nombre}
                                            </Link>
                                            {i < comunas.length - 2 ? ", " : i === comunas.length - 2 ? " y " : ""}
                                        </span>
                                    ))}
                                </span>
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cta="blog-intro"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                            >
                                <MessageCircle className="h-5 w-5" />
                                Escríbenos por WhatsApp
                            </a>
                            <a
                                href={`tel:${TEL}`}
                                data-cta="blog-intro"
                                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3 rounded-xl transition-colors"
                            >
                                <Phone className="h-5 w-5" />
                                Llamar
                            </a>
                        </div>
                        <p className="text-sm text-slate-600">
                            Si vives en otra comuna, esta guía te sirve igual con cualquier kinesiólogo que emita boleta.
                        </p>
                    </aside>
                    )}

                    {contenidoDespues && (
                        <div className={PROSE} data-contenido-post dangerouslySetInnerHTML={{ __html: contenidoDespues }} />
                    )}

                    {/* CTA Footer */}
                    <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">
                            {fueraDeServicio ? "¿Te sirvió esta guía?" : "¿Quieres que un kinesiólogo vea tu caso en tu casa?"}
                        </h3>
                        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                            {fueraDeServicio
                                ? "Compártela con quien la pueda necesitar o revisa el resto de nuestras guías de kinesiología."
                                : "La evaluación inicial es gratuita y después te decimos cuántas sesiones necesitas y cuánto cuestan, antes de que decidas."}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            {fueraDeServicio ? (
                                <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                                    <Link href="/blog">Ver todas las guías</Link>
                                </Button>
                            ) : (
                            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                <a href={waLink} target="_blank" rel="noopener noreferrer" data-cta="blog-final">
                                    Agendar evaluación gratuita
                                </a>
                            </Button>
                            )}
                            <Button asChild variant="outline" size="lg" className="border-slate-300">
                                <a
                                    href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — https://kineum.cl/blog/${post.slug}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Compartir Artículo
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Sigue leyendo: el blog dejaba de enlazar al resto del sitio */}
                <div className="max-w-3xl mx-auto mt-16 border-t border-slate-200 pt-10">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Sigue leyendo</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {relacionados.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/blog/${r.slug}`}
                                className="block bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-amber-300 transition-colors"
                            >
                                <span className="block text-sm font-semibold text-slate-900 leading-snug">{r.title}</span>
                                <span className="block text-xs text-slate-500 mt-2">{r.category}</span>
                            </Link>
                        ))}
                    </div>
                    <p className="text-slate-600 mt-8">
                        ¿Necesitas atención?{" "}
                        {servicioRelacionado ? (
                            <Link href={servicioRelacionado.servicioUrl} className="text-amber-700 font-medium hover:underline">
                                {servicioRelacionado.nombre} a domicilio
                            </Link>
                        ) : (
                            <Link href="/" className="text-amber-700 font-medium hover:underline">
                                kinesiólogo a domicilio en Santiago
                            </Link>
                        )}
                        ,{" "}
                        <Link href="/precios" className="text-amber-700 font-medium hover:underline">
                            precios y planes
                        </Link>{" "}
                        o{" "}
                        <Link href="/cobertura" className="text-amber-700 font-medium hover:underline">
                            nuestra cobertura
                        </Link>
                        .
                    </p>
                    <p className="text-slate-600 mt-3">
                        Kinesiólogo a domicilio en{" "}
                        {comunas.map((c, i) => (
                            <span key={c.slug}>
                                <Link href={`/kinesiologo-a-domicilio-${c.slug}`} className="text-amber-700 font-medium hover:underline">
                                    {c.nombre}
                                </Link>
                                {i < comunas.length - 2 ? ", " : i === comunas.length - 2 ? " y " : "."}
                            </span>
                        ))}
                    </p>
                </div>
            </article>
            </main>
<SiteFooter />
            <WhatsAppButton mensaje={waMensaje} />
        </div>
    )
}
