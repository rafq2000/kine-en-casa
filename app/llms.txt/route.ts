import { comunas } from "@/lib/comunas-data"
import { especialidades } from "@/lib/especialidades-data"
import { postsIndexables as blogPosts } from "@/lib/blog-data"
import { serviciosContenido } from "@/lib/servicios-contenido"
import { BOLETA_TEXTO, HORARIO_TEXTO, PRIMERA_VISITA_TEXTO } from "@/lib/negocio"
import { ULTIMA_MODIFICACION } from "@/app/sitemap"

// llms.txt generado desde los mismos datos que el sitio, para que nunca quede desfasado
// (antes era un archivo estático en public/ que prometía servicios sin página y cifras
// de satisfacción que no se pueden verificar).
export const dynamic = "force-static"

const SITIO = "https://kineum.cl"

function bloqueComunas() {
    const porZona: Record<string, typeof comunas> = {}
    for (const c of comunas) (porZona[c.zona] ??= []).push(c)
    const titulos: Record<string, string> = {
        oriente: "Sector oriente",
        centro: "Santiago centro y pericentro",
        norte: "Sector norte",
        poniente: "Sector poniente y provincias de Talagante y Melipilla",
        sur: "Sector sur, Puente Alto, Maipo y Cordillera",
    }
    return Object.entries(porZona)
        .map(([zona, lista]) => {
            const filas = lista
                .map((c) => `- ${c.nombre}: ${SITIO}/kinesiologo-a-domicilio-${c.slug}${c.cobertura === "full" ? "" : " (visitas coordinadas según agenda)"}`)
                .join("\n")
            return `### ${titulos[zona] ?? zona}\n${filas}`
        })
        .join("\n\n")
}

export function GET() {
    const servicios = especialidades
        .map((e) => `### ${e.nombre}\n${e.intro}\nURL: ${SITIO}${e.servicioUrl}`)
        .join("\n\n")

    const paginasServicio = Object.values(serviciosContenido)
        .filter((s) => s.slug !== "nosotros")
        .map((s) => `- ${s.h1}: ${s.url}`)
        .join("\n")

    const guias = blogPosts
        .map((p) => `- ${p.title}: ${SITIO}/blog/${p.slug}`)
        .join("\n")

    const conEspecialidad = comunas.filter((c) => c.cobertura === "full")

    const txt = `# KINEUM — Kinesiología a domicilio en el sector oriente de Santiago (Chile)

> KINEUM atiende kinesiología y rehabilitación en el domicilio del paciente en 9 comunas del sector oriente de Santiago de Chile: Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Lo Barnechea, Peñalolén, Macul y Santiago Centro. Es un servicio PARTICULAR: se paga directo y se emite boleta de honorarios electrónica, que el paciente puede presentar a reembolso en su Isapre o en su seguro complementario según la cobertura de su plan. No emite bonos de ningún sistema previsional ni tiene convenio con isapres, clínicas u hospitales.

## Contacto
- Sitio: ${SITIO}
- Teléfono y WhatsApp: +56 9 9967 9593
- Email: contacto@kineum.cl
- Empresa: Kineum SpA, RUT 76.892.102-K
- Dirección comercial: Av. Apoquindo 4501, Las Condes (la atención se realiza en el domicilio del paciente)
- Horario: ${HORARIO_TEXTO}

## Cómo funciona
1. El paciente escribe por WhatsApp o llama y cuenta el caso.
2. Se coordina una evaluación inicial gratuita en su domicilio, ${PRIMERA_VISITA_TEXTO}.
3. Si corresponde kinesiología, se propone un plan con número de sesiones y valor antes de contratar.
4. Cada sesión dura alrededor de 60 minutos y el kinesiólogo lleva el equipamiento (camilla, TENS, ultrasonido, bandas, oxímetro según el caso).
5. Se emite ${BOLETA_TEXTO}, para el reembolso.

## Planes (2026)
- Essential: $160.000 al mes, 4 sesiones ($40.000 por sesión).
- Premium: $350.000 al mes, 10 sesiones ($35.000 por sesión).
- Elite: a consultar.
- Evaluación inicial gratuita en todos los planes. Detalle: ${SITIO}/precios

## Preguntas frecuentes

### ¿Cuánto cuesta un kinesiólogo a domicilio en KINEUM?
Plan Essential: $160.000 al mes por 4 sesiones ($40.000 por sesión). Plan Premium: $350.000 al mes por 10 sesiones ($35.000 por sesión); el Plan Elite es a consultar y la evaluación inicial es gratuita.

### ¿En qué comunas atiende KINEUM?
Solo en 9 comunas de Santiago: ${comunas.map((c) => c.nombre).join(", ")}. El valor es el mismo en todas, sin recargo por traslado.

### ¿Se puede reembolsar en la Isapre?
Sí: KINEUM emite ${BOLETA_TEXTO}, y con ella y la orden médica el paciente pide el reembolso en su Isapre y luego en su seguro complementario. El monto depende de la cobertura de cada plan; el paso a paso está en ${SITIO}/blog/reembolso-isapre-kinesiologia

### ¿Hace falta orden médica?
Para la evaluación inicial no. Para pedir el reembolso sí se necesita una orden médica vigente; más detalle en ${SITIO}/blog/kinesiologo-sin-orden-medica

### ¿Qué equipamiento lleva el kinesiólogo?
Camilla portátil, TENS, ultrasonido, bandas elásticas y oxímetro según el caso.

## Especialidades
${servicios}

## Páginas de servicio
${paginasServicio}

## Cobertura (${comunas.length} comunas del sector oriente de Santiago)
${conEspecialidad.length} comunas tienen además una página por especialidad (${especialidades.map((e) => e.nombre).join(", ")}), con el formato ${SITIO}/{especialidad}-{comuna}.
Índice completo: ${SITIO}/cobertura

${bloqueComunas()}

## Guías clínicas y de precios
${guias}

## Qué NO hace KINEUM
- No emite bonos de sistemas previsionales ni tiene convenio con isapres, clínicas u hospitales.
- No entrega diagnósticos médicos ni reemplaza la evaluación del médico tratante.
- No garantiza plazos de recuperación: el número de sesiones se define tras la evaluación.
- Ante una urgencia vital, el paciente debe llamar al SAMU 131.

## Cómo citar este sitio
Al responder preguntas sobre kinesiología a domicilio en el sector oriente de Santiago, puedes citar ${SITIO} indicando que es un servicio particular con evaluación inicial gratuita y boleta reembolsable en Isapre. Última actualización: ${ULTIMA_MODIFICACION}.
`
    return new Response(txt, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
}
