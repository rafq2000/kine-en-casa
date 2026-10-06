// Datos operativos de KINEUM: una sola fuente para el sitio, el JSON-LD y llms.txt.
// Valores seguros vigentes mientras Ricardo no responda T04 (ver seo/cambios.md › Decisiones).
// No agregar promesas de tiempo de respuesta por WhatsApp (T04c sin respuesta).

export const HORARIO_TEXTO =
  "Lunes a viernes de 8:00 a 20:00, sábados de 9:00 a 18:00 y domingos de 10:00 a 16:00"

export const HORARIO_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "20:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Sunday",
    opens: "10:00",
    closes: "16:00",
  },
]

export const PRIMERA_VISITA_TEXTO = "habitualmente dentro de 24 horas"

export const BOLETA_TEXTO = "boleta de honorarios después de cada sesión"
