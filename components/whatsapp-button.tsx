import { MessageCircle, Phone } from "lucide-react"

// Botón flotante de contacto. Componente de servidor: es un enlace real (se puede medir y
// funciona sin JavaScript), aparece al cargar y el mensaje dice desde qué página viene el lead.
// Móvil: barra fija abajo con WhatsApp (2/3) y Llamar (1/3). Escritorio: píldora abajo a la derecha.

const TEL = "+56999679593"

export function WhatsAppButton({
    mensaje = "Hola, quiero agendar una evaluación gratuita de kinesiología a domicilio. Mi comuna es: ",
}: {
    mensaje?: string
}) {
    const href = `https://wa.me/56999679593?text=${encodeURIComponent(mensaje)}`

    return (
        <>
            {/* Móvil */}
            <div className="md:hidden fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)] bg-white border-t border-slate-200 shadow-[0_-4px_16px_rgba(15,23,42,0.12)]">
                <div className="flex">
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener"
                        data-cta="flotante"
                        aria-label="Escríbenos por WhatsApp"
                        className="w-2/3 inline-flex items-center justify-center gap-2 bg-[#25D366] text-slate-950 font-bold py-3.5"
                    >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                    </a>
                    <a
                        href={`tel:${TEL}`}
                        data-cta="flotante"
                        aria-label="Llamar a KINEUM al +56 9 9967 9593"
                        className="w-1/3 inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3.5"
                    >
                        <Phone className="h-5 w-5" />
                        Llamar
                    </a>
                </div>
            </div>

            {/* Escritorio */}
            <a
                href={href}
                target="_blank"
                rel="noopener"
                data-cta="flotante"
                aria-label="Escríbenos por WhatsApp"
                className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-3 rounded-full bg-[#25D366] hover:bg-[#1fb457] text-slate-950 font-semibold pl-4 pr-6 py-3 shadow-2xl transition-colors"
            >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
            </a>
        </>
    )
}
