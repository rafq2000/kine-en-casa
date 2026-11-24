// Contacto de KINEUM. Si cambia el número de WhatsApp (que es también el teléfono), se cambia SOLO aquí:
// formato internacional sin «+» ni espacios (56 + 9 + 8 dígitos). Todo el sitio, el schema y el auditor lo leen de este archivo.
// Ojo, fuera del sitio también está en la ficha de Google (Perfil de Empresa), en la página de Facebook «Kineum»
// (facebook.com/profile.php?id=61596589874417, Información de contacto) y en seo/citaciones-locales.md.
export const WHATSAPP = "56999679593"
export const TEL = `+${WHATSAPP}`
export const TEL_DISPLAY = `+${WHATSAPP.slice(0, 2)} ${WHATSAPP[2]} ${WHATSAPP.slice(3, 7)} ${WHATSAPP.slice(7)}`
