import { Metadata } from 'next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Shield, Award, CheckCircle, FileText } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Nuestro Equipo Clínico | KINEUM',
    description: 'Conoce a los kinesiólogos certificados de KINEUM. Profesionales inscritos en la Superintendencia de Salud. Kinesiología a domicilio en Santiago.',
    keywords: [
        "kineum",
        "kinesiólogos certificados santiago",
        "equipo kineum",
        "kinesiólogos a domicilio santiago",
        "fisioterapeutas certificados",
        "kineum opiniones",
        "kinesiólogos superintendencia salud",
        "kinesiólogos experiencia santiago",
    ],
    alternates: {
        canonical: 'https://kineum.cl/nosotros',
    },
}

export default function NosotrosPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <WhatsAppButton />

            <section className="bg-slate-900 text-white py-20 relative">
                <div className="container mx-auto px-4 z-10 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-amber-500 text-sm font-semibold mb-4 border border-slate-700">
                            Excelencia Clínica Comprobada
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Nuestro Equipo Clínico
                        </h1>
                        <p className="text-xl text-slate-300">
                            En KINEUM, su salud está en manos de profesionales Universitarios certificados,
                            con experiencia clínica demostrable y registro activo en la Superintendencia de Salud.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Institucional Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12 flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 w-full md:w-1/3 flex-shrink-0 text-center">
                            <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Respaldo Institucional</h3>
                            <p className="text-sm text-slate-600 mb-4">Empresa prestadora de salud legalmente constituida en Chile.</p>
                            <div className="space-y-2 text-xs font-mono bg-slate-100 p-3 rounded text-left text-slate-700">
                                <div><span className="font-bold">Empresa:</span> Kineum SpA</div>
                                <div><span className="font-bold">RUT:</span> 76.892.102-K</div>
                                <div><span className="font-bold">Dirección:</span> Av. Apoquindo 4501, Las Condes</div>
                            </div>
                        </div>

                        <div className="flex-1 w-full">
                            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-4">Por qué puede confiar en nosotros</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                A diferencia de plataformas de "uberización" de la salud, KINEUM opera como un Centro Clínico domiciliario presencial.
                                Todos nuestros profesionales son rigurosamente seleccionados y monitoreados por nuestra dirección médica para garantizar
                                los más altos estándares de calidad (E-E-A-T: Experiencia, Conocimiento, Autoridad y Confianza).
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-slate-700"><strong>Título Universitario</strong> verificado en universidades tradicionales.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-slate-700">Inscripción activa en el <strong>Registro Nacional de Prestadores Individuales de Salud</strong> (Superintendencia de Salud).</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    <span className="text-slate-700">Evaluación continua de satisfacción por parte de nuestros pacientes.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Dirección Médica */}
                    <h2 className="text-3xl font-bold font-serif text-slate-900 mb-8 text-center">Dirección Clínica</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Director example (Dummy data to be updated by user) */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="h-48 bg-slate-200 relative">
                                <Image
                                    src="/placeholder.jpg"
                                    alt="Director Clínico KINEUM"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <Badge className="mb-3 bg-amber-100 text-amber-800 border-amber-200">Dirección Médica</Badge>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Director Clínico KINEUM</h3>
                                <p className="text-sm text-slate-500 mb-4 font-mono">Registro MINSAL: Verificado</p>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    Kinesiólogo egresado de la <strong>Universidad Finis Terrae</strong>. Profesional con Diplomado en Neurorrehabilitación Adulto y en Kinesiología Músculoesquelética.
                                    Más de 10 años de experiencia clínica liderando equipos de rehabilitación de primer nivel a domicilio en el sector oriente.
                                </p>
                                <div className="flex items-center text-sm font-medium text-emerald-700">
                                    <Award className="w-4 h-4 mr-2" />
                                    Kinesiólogo Titulado
                                </div>
                            </div>
                        </div>

                        {/* Additional team member */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="h-48 bg-slate-200 relative">
                                <Image
                                    src="/placeholder.jpg"
                                    alt="Kinesiólogo Especialista"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <Badge className="mb-3 bg-slate-100 text-slate-800 border-slate-200">Red de Profesionales</Badge>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Especialistas KINEUM</h3>
                                <p className="text-sm text-slate-500 mb-4 font-mono">Registro MINSAL: Verificado</p>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    Nuestros kinesiólogos son titulados de la <strong>Universidad Finis Terrae</strong> con postítulos y Diplomados en Kinesiología Gerontológica, Respiratoria, entre otros.
                                    Expertos en el manejo integral del adulto mayor, prevención de caídas y recuperación intensiva en su hogar.
                                </p>
                                <div className="flex items-center text-sm font-medium text-emerald-700">
                                    <Award className="w-4 h-4 mr-2" />
                                    Kinesiólogos Titulados
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="https://wa.me/56999679593?text=Hola, me gustaría agendar con uno de sus especialistas."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transition-transform hover:-translate-y-1"
                        >
                            Agendar con un Especialista
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
            {children}
        </span>
    )
}
