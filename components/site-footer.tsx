import { Activity, Star, Shield, Phone, MapPin, MessageCircle, Home } from "lucide-react"
import Link from "next/link"
import { comunas } from "@/lib/comunas-data"

export function SiteFooter() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-20 pb-24 md:pb-20 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                                <Activity className="h-6 w-6 text-amber-500" />
                            </div>
                            <Link href="/">
                                <div>
                                    <h3 className="text-xl font-bold text-white font-serif tracking-widest">KINEUM</h3>
                                    <p className="text-xs text-slate-500 uppercase">Kinesiología a domicilio</p>
                                </div>
                            </Link>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Kinesiología a domicilio particular en 9 comunas del sector oriente y centro de Santiago, de lunes a domingo. Evaluación inicial gratuita.
                        </p>
                        <div className="flex space-x-3">
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:border-amber-900/50 transition-colors">
                                <Star className="h-4 w-4 text-amber-500" />
                            </div>
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:border-emerald-900/50 transition-colors">
                                <Shield className="h-4 w-4 text-emerald-500" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Especialidades</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/neurologica">Rehabilitación neurológica a domicilio</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/respiratoria">Kinesiología respiratoria (KTR)</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/traumatologica">Kinesiología traumatológica</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/postquirurgica">Rehabilitación Postquirúrgica</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/servicios/geriatrica">Kinesiología geriátrica (adulto mayor)</Link>
                            </li>
                        </ul>
                        <h4 className="font-bold text-white mb-4 mt-8 text-sm uppercase tracking-wider">Información</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/cobertura">Cobertura por comuna</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/precios">Precios y planes</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/como-funciona">Cómo funciona</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/nosotros">Quiénes somos</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className="hover:text-amber-400 transition-colors cursor-pointer">
                                <Link href="/ejercicios">Ejercicios terapéuticos</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Cobertura</h4>
                        <ul className="space-y-3 text-sm">
                            {comunas.map((c) => (
                                <li key={c.slug} className="hover:text-amber-400 transition-colors">
                                    <Link href={`/kinesiologo-a-domicilio-${c.slug}`}>{c.nombre}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Contacto</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-amber-500 mt-0.5" />
                                <div>
                                    <a href="tel:+56999679593" className="block text-white font-medium hover:text-amber-400 transition-colors">
                                        +56 9 9967 9593
                                    </a>
                                    <span className="text-xs">WhatsApp y teléfono</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                                <div>
                                    <span className="block text-white font-medium">Kineum SpA</span>
                                    <span className="text-xs block">Av. Apoquindo 4501, Las Condes</span>
                                    <span className="text-xs block">Santiago, Chile</span>
                                    <span className="text-xs block mt-1 text-slate-500">Dirección comercial: la atención es en tu domicilio</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MessageCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                                <div>
                                    <a
                                        href={`https://wa.me/56999679593?text=${encodeURIComponent("Hola, quiero agendar una evaluación gratuita de kinesiología a domicilio. Mi comuna es: ")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-white font-medium hover:text-amber-400 transition-colors"
                                    >
                                        Chat WhatsApp
                                    </a>
                                    <span className="text-xs">Lunes a domingo</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-900 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} KINEUM. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-slate-600">
                        <Link href="/privacidad" className="hover:text-slate-400">Privacidad</Link>
                        <a href="/sitemap.xml" className="hover:text-slate-400">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
