# Bitácora SEO de kineum.cl

Plan vigente: `seo/plan-posicionamiento-2026-10-05.md`.

## Línea base 5-oct-2026

Filtros de GSC (Rendimiento → Página o Consulta → "Coincide con regex personalizada"):
- Páginas vigentes: `^https://kineum\.cl/($|precios|servicios/|blog/|nosotros|cobertura|como-funciona|(kinesiologo-a-domicilio|kinesiologia-geriatrica|kinesiologia-respiratoria|kinesiologia-traumatologica|rehabilitacion-neurologica|rehabilitacion-postquirurgica)-(las-condes|vitacura|providencia|nunoa|la-reina|lo-barnechea|penalolen|macul|santiago-centro)$)`
- Consultas de las 9 comunas: `(?i)(kine|kinesi).*(las condes|vitacura|providencia|ñuñoa|nunoa|la reina|lo barnechea|peñalol[eé]n|penalolen|macul|santiago centro)`

| KPI | Dónde se mira | Línea base (5-oct) | Meta a 4 semanas (~2-nov) | Meta a 12 semanas (~28-dic) |
|---|---|---|---|---|
| Clics semanales en páginas vigentes | GSC, filtro de vigentes, 7 días | ~23/sem (42 − 19 retiradas) | ≥25/sem | 35-45/sem |
| Hubs indexados | Inspección de URL | 5/9 | 9/9 | 9/9 |
| Clics e impresiones de los hubs (28 días) | GSC Páginas | 11 clics / 340 imp | ≥450 imp, 9 hubs con impresiones | ≥25 clics |
| Posición por hub | GSC Páginas | Macul 8,6 · Lo Barnechea 6,6 · Peñalolén 8,5 · Las Condes 10,2 · Vitacura 10,7 · 4 sin datos | 9/9 con posición medida | ≥5 hubs en posición ≤8 |
| Consultas de las 9 comunas | GSC, filtro de consultas | ~21 imp, 0 clics | ≥40 imp | ≥10 clics/28 días |
| "kinesiólogo a domicilio santiago" | GSC Consulta | posición 17,5, 0 clics | <15 | ≤10 (el top 3 requiere ficha y reseñas; no se promete) |
| CTR de /precios | GSC Páginas | 0,6 % (4/623), posición 7,8 | ≥1,5 % | ≥2 %, misma posición |
| CTR de la guía Isapre | GSC Páginas | 2,2 % (24/1.112), posición 4,6 | no bajar de 24 clics ni de 2,2 % | ≥3,5 % |
| CTR del post de precios | GSC Páginas | 1,0 % (6/582) | ≥2 % | ≥2,5 % |
| CTR de los 4 hubs indexados con snippet nuevo (LC, VI, LB, PE) | GSC Páginas | 1,3 % (3/232); Macul 7,4 % como control | ≥2 % | ≥3 % |
| Estado de las 45 especialidad+comuna (o de sus 308) | GSC Páginas / curl | ~11 con impresiones | decisión T35 tomada | A: 45 en 308 · C: ≥20 indexadas |
| /servicios/* con impresiones | GSC Páginas | 3/5 | 5/5 | 5/5 en posición ≤12 |
| Leads de WhatsApp atribuidos | Etiquetas de WhatsApp Business + Umami `clic_whatsapp` por página | sin medición | 2 semanas de línea base con ≥80 % de chats etiquetados | +30 % de leads web frente a esa línea base (meta, no promesa) |
| Reseñas en Google | Ficha | 0 (sin ficha) | ficha verificada y ≥3 reseñas | ≥10 reseñas, 100 % respondidas |
| Menciones externas | GSC Enlaces y búsqueda "kineum" | 0 | ficha y 2x3 | ≥3 dominios externos que nombran a KINEUM |
| Visibilidad en IA (12 preguntas) | `seo/ia-visibilidad.md` | se mide en el mes 1 | línea base | +2 preguntas con mención |

Cómo leer las cifras:
- El total de clics va a bajar a medida que Google procese las 258 redirecciones. "Página con redirección" en el informe de indexación subirá hasta unas 260. Las dos cosas son esperables y no son motivo para revertir.
- Las decisiones se toman con las páginas vigentes y con los leads, nunca con el total.
- Cada cambio de title se evalúa a los 28 días contra los 28 días previos, con Macul como control.

## Decisiones de Ricardo

### 5-oct-2026 — T01 hecho
`seo-autopilot-kineum` y `kineum-cola-indexacion` desactivadas (`enabled:false`). No se borraron.

### 5-oct-2026 — Valores seguros aplicados mientras Ricardo no responda T04 (revisables)
- (a) Dirección: no se declara calle en el schema.
- (b) Horario: el del schema, L-V 08:00-20:00, S 09:00-18:00, D 10:00-16:00.
- (c) Tiempo de respuesta por WhatsApp: sin promesa.
- (d) Primera visita: "habitualmente dentro de 24 horas".
- (e) Boleta: "después de cada sesión".
- (f) Medios de pago: no se declaran.
- (g) Plan Elite: solo "Plan a medida para tratamientos intensivos o prolongados; precio a consultar". Sin "red de especialistas", "consultas ilimitadas" ni "kinesiólogo dedicado".
- (h) Registro Nacional de Prestadores Individuales: no se afirma inscripción.
- (i) Testimonios: ninguno confirmado, así que /testimonios queda sin testimonios.
- (j) Kinesiología deportiva y de piso pélvico: no confirmadas, solo CTA informativo.
- (k) Sectores "Barrio Italia" (Ñuñoa) y "Los Presidentes" (Macul): sin cambios hasta confirmación.
- (l) `sameAs` de las redes "kineencasa": se retira.
- (m) FAQs de cambio de plan y de pago en cuotas: se borran.

## Deploys

| Fecha | Commit | Tareas | Rutas cambiadas | URLs pedidas a indexación |
|---|---|---|---|---|
