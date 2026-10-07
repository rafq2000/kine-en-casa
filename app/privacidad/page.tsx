import type { Metadata } from "next"
import Link from "next/link"
import { Home, Phone, MessageCircle } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const TEL = "+56999679593"
const TEL_DISPLAY = "+56 9 9967 9593"
const URL = "https://kineum.cl/privacidad"
const WHATSAPP = `https://wa.me/56999679593?text=${encodeURIComponent("Hola, quiero hacer una consulta sobre mis datos personales")}`

const title = "Política de Privacidad | KINEUM"
const description =
    "Cómo KINEUM usa los datos que nos das por WhatsApp o teléfono para coordinar tu atención a domicilio y emitir la boleta, y cómo ejercer tus derechos."

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: {
        title,
        description,
        url: URL,
        type: "website",
        locale: "es_CL",
        siteName: "KINEUM",
        images: ["/og-image.jpg"],
    },
}

// Texto aprobado a partir de seo/borrador-privacidad.md (Ricardo delegó la revisión, 7-oct-2026).
// Ley 21.719: publicada en el Diario Oficial el 13-dic-2024; su artículo primero transitorio fija la
// vigencia el día primero del mes vigésimo cuarto posterior a la publicación (1-dic-2026).
const h2 = "text-2xl font-bold text-slate-900 font-serif mt-12 mb-4"
const p = "text-slate-700 leading-relaxed mb-4"
const ul = "list-disc pl-6 space-y-2 text-slate-700 leading-relaxed mb-4"

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
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
                        <span className="hidden sm:inline">{TEL_DISPLAY}</span>
                        <span className="sm:hidden">Llamar</span>
                    </a>
                </div>
            </header>

            <main id="contenido" className="container mx-auto px-4 py-14 md:py-20">
                <article className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight mb-4">
                        Política de privacidad
                    </h1>
                    <p className="text-sm text-slate-500 mb-8">Última actualización: 7 de octubre de 2026</p>
                    <p className={p}>
                        En esta página te contamos qué datos recibimos cuando nos contactas para una atención de
                        kinesiología a domicilio, para qué los usamos, con quién se comparten y cómo puedes ejercer tus
                        derechos sobre ellos.
                    </p>

                    <h2 className={h2}>Quién es responsable de tus datos</h2>
                    <p className={p}>
                        El responsable del tratamiento de tus datos personales es <strong>Kineum SpA</strong>, con
                        dirección comercial en Av. Apoquindo 4501, Las Condes, Santiago. Para cualquier
                        consulta sobre tus datos, escríbenos por WhatsApp o llámanos al <strong>{TEL_DISPLAY}</strong>.
                    </p>

                    <h2 className={h2}>Qué datos recibimos</h2>
                    <p className={p}>
                        Recibimos solo los datos que tú nos entregas cuando nos escribes por WhatsApp o nos llamas por
                        teléfono para coordinar una atención:
                    </p>
                    <ul className={ul}>
                        <li>Tu nombre y el del paciente, si es otra persona.</li>
                        <li>Tu número de teléfono.</li>
                        <li>La dirección donde se hará la atención y la comuna.</li>
                        <li>
                            El motivo de consulta y, si nos los envías, la orden médica, la epicrisis u otros
                            antecedentes clínicos.
                        </li>
                        <li>Los datos necesarios para emitir la boleta de honorarios.</li>
                    </ul>

                    <h2 className={h2}>Para qué los usamos</h2>
                    <p className={p}>Usamos tus datos solo para:</p>
                    <ul className={ul}>
                        <li>Coordinar la evaluación inicial y las sesiones a domicilio.</li>
                        <li>Que el kinesiólogo prepare y realice la atención.</li>
                        <li>Emitir la boleta de honorarios que presentas a reembolso.</li>
                        <li>Responder tus consultas.</li>
                    </ul>
                    <p className={p}>
                        <strong>No vendemos ni arrendamos tus datos</strong>, y no los usamos para publicidad de terceros.
                    </p>

                    <h2 className={h2}>Con quién se comparten</h2>
                    <ul className={ul}>
                        <li>
                            <strong>WhatsApp</strong> es un servicio de Meta Platforms. Cuando nos escribes por WhatsApp,
                            el mensaje pasa por sus servidores y se rige también por la política de privacidad de
                            WhatsApp.
                        </li>
                        <li>El kinesiólogo que te atiende recibe los datos necesarios para la atención.</li>
                        <li>Entregamos datos a autoridades solo cuando la ley lo exige.</li>
                    </ul>

                    <h2 className={h2}>Datos de salud</h2>
                    <p className={p}>
                        Los antecedentes clínicos que nos envías son datos sensibles. Los usamos únicamente para tu
                        atención y los conocen solo las personas que participan en ella.
                    </p>

                    <h2 className={h2}>Medición del sitio</h2>
                    <p className={p}>
                        Para saber cuántas personas visitan el sitio y qué páginas leen, usamos una medición agregada de
                        visitas (Vercel Web Analytics), que no usa cookies de terceros y no identifica a las personas.
                        Registra datos como la página visitada, el sitio desde el que llegaste, el país o la ciudad
                        aproximados, el tipo de dispositivo y el navegador. El sitio no tiene formularios: los datos
                        personales solo nos llegan si nos escribes o nos llamas.
                    </p>

                    <h2 className={h2}>Cuánto tiempo los guardamos</h2>
                    <p className={p}>
                        Conservamos tus datos mientras sean necesarios para tu atención y para cumplir obligaciones
                        legales, por ejemplo las tributarias asociadas a la boleta. Cuando ya no sean necesarios, puedes
                        pedirnos que los eliminemos.
                    </p>

                    <h2 className={h2}>Tus derechos</h2>
                    <p className={p}>Puedes pedir en cualquier momento:</p>
                    <ul className={ul}>
                        <li>
                            <strong>Acceso:</strong> saber qué datos tuyos tenemos.
                        </li>
                        <li>
                            <strong>Rectificación:</strong> corregir datos inexactos o incompletos.
                        </li>
                        <li>
                            <strong>Cancelación o supresión:</strong> que eliminemos tus datos cuando ya no sean
                            necesarios.
                        </li>
                        <li>
                            <strong>Oposición:</strong> que dejemos de usar tus datos para un fin determinado.
                        </li>
                    </ul>
                    <p className={p}>
                        Para ejercerlos, escríbenos por WhatsApp al {TEL_DISPLAY} indicando tu nombre y lo que necesitas.
                        Te responderemos dentro de los plazos que fija la ley.
                    </p>
                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl shadow transition-colors mb-4"
                    >
                        <MessageCircle className="h-5 w-5" />
                        Consultar sobre mis datos por WhatsApp
                    </a>

                    <h2 className={h2}>Marco legal</h2>
                    <p className={p}>
                        Tratamos tus datos conforme a la Ley N° 19.628, sobre protección de la vida privada, y a sus
                        modificaciones. La Ley N° 21.719, que regula la protección y el tratamiento de los datos
                        personales y crea la Agencia de Protección de Datos Personales, se publicó en el Diario Oficial
                        el 13 de diciembre de 2024 y sus modificaciones a la Ley N° 19.628 entran en vigencia el 1 de
                        diciembre de 2026. Desde esa fecha, esta política se aplicará conforme a ese nuevo marco.
                    </p>

                    <h2 className={h2}>Cambios a esta política</h2>
                    <p className={p}>
                        Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha de
                        actualización.
                    </p>
                </article>
            </main>

            <SiteFooter />
            <WhatsAppButton />
        </div>
    )
}
