import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { AlertCircle, CheckCircle2, MessageCircle } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { exercises } from "@/lib/exercises-data"

export const metadata: Metadata = {
    title: "Ejercicios de Kinesiología para Hacer en Casa | KINEUM",
    description:
        "Ejercicios de kinesiología para hacer en casa: fuerza, movilidad, equilibrio y respiración, explicados paso a paso por kinesiólogos. Úsalos con seguridad.",
    keywords: [
        "ejercicios kinesiología en casa",
        "ejercicios terapéuticos a domicilio",
        "ejercicios rehabilitación rodilla",
        "ejercicios adulto mayor equilibrio",
        "ejercicios respiratorios kinesiología",
    ],
    alternates: {
        canonical: "https://kineum.cl/ejercicios",
    },
    openGraph: {
        title: "Ejercicios de Kinesiología para Hacer en Casa | KINEUM",
        description:
            "Ejercicios de kinesiología para hacer en casa: fuerza, movilidad, equilibrio y respiración, explicados paso a paso por kinesiólogos. Úsalos con seguridad.",
        url: "https://kineum.cl/ejercicios",
        type: "website",
        locale: "es_CL",
        images: ["/og-image.jpg"],
    },
}

export default function ExercisesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <main id="contenido">
            <header className="bg-slate-900 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <Badge className="mb-4 bg-emerald-600">Biblioteca de ejercicios</Badge>
                    <h1 className="text-4xl font-bold font-serif mb-4">Ejercicios Terapéuticos</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Guía visual de referencia para tus rutinas de rehabilitación.
                        Haz solo los ejercicios que te indicó tu kinesiólogo.
                    </p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exercises.map((exercise) => (
                        <div key={exercise.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
                            <div className="relative aspect-video bg-slate-200">
                                <Image
                                    src={exercise.gifUrl}
                                    alt={exercise.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover mix-blend-multiply"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="backdrop-blur-md bg-white/90">
                                        {exercise.category}
                                    </Badge>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{exercise.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 flex-1">
                                    {exercise.description}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center">
                                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2" />
                                            Pasos Clave
                                        </h4>
                                        <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
                                            {exercise.steps.map((step, idx) => (
                                                <li key={idx}>{step}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                        <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center">
                                            <AlertCircle className="h-4 w-4 text-amber-600 mr-2" />
                                            Errores Comunes
                                        </h4>
                                        <ul className="text-sm text-amber-800 space-y-1 list-disc pl-5">
                                            {exercise.commonErrors.map((error, idx) => (
                                                <li key={idx}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 pt-0 mt-auto">
                                <a
                                    href={`https://wa.me/56999679593?text=${encodeURIComponent(`Hola, quiero saber si el ejercicio "${exercise.title}" me sirve y agendar una evaluación gratuita a domicilio`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cta="ejercicio"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    ¿Es para ti? Consulta por WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
            <SiteFooter />
        </div>
    )
}
