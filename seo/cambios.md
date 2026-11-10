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

### 5-oct-2026 — T40: datos de Search Console para la poda (verificados en GSC)
La propiedad tiene datos desde el 4-jul-2026, que es todo su historial (no hay 16 meses).
- Con 0 clics en todo el historial: `sarcopenia-fuerza-es-salud`, `kinesiologia-post-covid`, `bruxismo-dolor-cervical`, `escoliosis-en-ninos` (2 impresiones), `fibromialgia-ejercicio`, `masaje-descontracturante-vs-terapeutico` y `ergonomia-home-office-guia-2024`. Ninguna supera los 5 clics, así que se podan o fusionan según el plan:
  - 308: `bruxismo-dolor-cervical` → `/blog/cervicalgia-mareos` (fusionado), `sarcopenia-fuerza-es-salud` → `/servicios/geriatrica`, `kinesiologia-post-covid` → `/servicios/respiratoria` y `ergonomia-home-office-guia-2024` → `/blog/lumbago-agudo-que-hacer` (T39, sección #trabajo-sentado).
  - noindex,follow (reversible, campo `noindex: true` en `lib/blog-data.ts`): `escoliosis-en-ninos`, `fibromialgia-ejercicio` y `masaje-descontracturante-vs-terapeutico`.
- Piso pélvico (`kinesiologia-piso-pelvico-post-parto-domicilio`): 1 clic y 43 impresiones. Se mantiene indexado. Como T04 (j) no está confirmado, su llamado a la acción pasa a ser informativo y el post ya no afirma que KINEUM lo atiende.

### 7-oct-2026 — T35/T37: opción A, consolidar las 45 páginas especialidad+comuna
Ricardo delegó la decisión ("hazlo todo, déjalo perfecto"); se ejecuta la opción A de §4 (la recomendada por el plan), adelantada respecto del 26-oct.
- Las 45 rutas `/{especialidad}-{comuna}` responden 308 a `/kinesiologo-a-domicilio-{comuna}` con una sola regla en `next.config.mjs` (sin `#` en el destino; `lib/rutas-retiradas.mjs` sin cambios).
- Cada hub trae sus 5 especialidades como bloques `id={slug}` con el `introLocal` completo, tal cual está en `lib/comunas-local.ts` (sin reescribir), y todas sus preguntas locales en el FAQ visible y en el FAQPage.
- De `condiciones` solo se muestran los títulos: los detalles traen cifras sin fuente ("115-125 grados", "mayores de 80 años") que no pasan a los hubs.
- Los enlaces internos apuntan a `/kinesiologo-a-domicilio-{comuna}#{especialidad}`. El sitemap pasa de 95 a 50 URLs.

### 7-oct-2026 — T30: /privacidad publicada
Ricardo delegó la revisión del borrador ("hazlo todo, déjalo perfecto").
- Responsable: Kineum SpA, con la dirección comercial que ya muestra el footer (el RUT se retiró el 7-oct, ver abajo).
- Canal para ejercer derechos: WhatsApp +56 9 9967 9593. `contacto@kineum.cl` no se publica porque rebota (el dominio no tiene registro MX).
- Ley 21.719: publicada en el Diario Oficial el 13-dic-2024 (edición 44.023, CVE 2583630); su artículo primero transitorio fija la vigencia el día primero del mes vigésimo cuarto posterior a la publicación, es decir, el 1-dic-2026.
- Medición: solo Vercel Web Analytics, descrita como "medición agregada de visitas que no usa cookies de terceros" (lo que dice la documentación de Vercel). Umami no se menciona porque está inactivo; si se activa (T22), hay que agregarlo a la página.
- Plazo de conservación: sin cifra, "mientras sean necesarios para tu atención y para cumplir obligaciones legales". Si Ricardo define un plazo, se agrega.
- Enlace en el footer y en el sitemap (MODIFICADO 2026-10-07). El auditor acepta "privacidad" como raíz del H1 (`seo/rules.mjs`).

### 7-oct-2026 — Fase 3: correcciones de los revisores de producción
- RUT publicado era inválido; retirado hasta que Ricardo confirme el real. "76.892.102-K" no cumple el dígito verificador (módulo 11 da 4, no K). Se quitó del schema (`taxID`), footer, /privacidad, llms.txt, /blog de precios y citaciones-locales; queda "Kineum SpA" sin RUT.
- Orden médica, una sola postura en todo el sitio (verificada el 7-oct en LeyChile, XML oficial): el Decreto 1.082 de 1958 (reglamento de la profesión de kinesiólogo, no derogado, versión única) dice en su artículo 3 que "el kinesiólogo sólo podrá aplicar estos métodos terapéuticos por indicación y orden médica escrita"; el Código Sanitario, artículo 113 inciso 2, pide "indicación y supervigilancia médica" a quienes cumplen funciones de colaboración médica. Texto del sitio: la evaluación inicial no requiere orden; el tratamiento sí, y la Isapre o el seguro habitualmente la piden para el reembolso. Fuera los "en general no" y "solo para el reembolso".
- Posts de temas sin servicio confirmado: campo `fueraDeServicio: true` en `lib/blog-data.ts`; la página del post cambia la caja de agendar por un aviso informativo y el CTA final por "Ver todas las guías". Hoy solo piso pélvico (T04 j). El drenaje linfático queda como información general dentro de la rehabilitación postquirúrgica (el servicio ya lo nombra como complemento); el drenaje después de cirugía plástica estética no se ofrece hasta que Ricardo lo confirme.

### 9-nov-2026 — Cobertura: 8 comunas (sale Macul y Peñalolén, entra Huechuraba)
Decisión de Ricardo, confirmada por escrito. La cobertura es solo Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Lo Barnechea, Huechuraba y Santiago Centro. Reemplaza la regla de "9 comunas" del plan (§2) y, solo para lo que sigue, la de no editar `lib/rutas-retiradas.mjs`.
- Datos: `lib/comunas-data.ts` y `lib/comunas-local.ts` sin Macul ni Peñalolén. El contenido local de Huechuraba se recuperó tal cual del commit `cbe1106` y se adaptó a la forma actual: sin `descripcion`, `caracteristicas`, `seoTitle`, `seoDescription`, `keywords` ni `hubSeo`; `llegada` usa `PRIMERA_VISITA_TEXTO` (el texto antiguo decía "el mismo día"); `contexto` neutro; 2 preguntas en `hub.faqs`, solo con hechos de sus párrafos.
- Correcciones al texto recuperado: "resuelve esguinces" pasó a "trata esguinces" (promesa de resultado); "el cuadro más común" pasó a "el cuadro suele ser" (afirmación sin fuente); en la pregunta de la madrugada se quitó que el SAR La Pincoya y el SAPU Los Libertadores "no están funcionando a esa hora, porque atienden de tarde y noche" (horario no verificado) y quedó lo que dice el hub: horarios acotados que conviene confirmar por teléfono. Tildes en los tipos de centro; IntegraMédica Norte figura como centro médico ambulatorio.
- Zona: Huechuraba es `zona: "norte"`. La insignia del hub dice "sector norte de Santiago" y /cobertura la lista bajo "Sector norte". La expresión general del sitio sigue siendo "8 comunas del sector oriente y centro de Santiago".
- Hub nuevo: `/kinesiologo-a-domicilio-huechuraba`. Se borraron los hubs de Macul y Peñalolén.
- Redirecciones (308, un salto): `/kinesiologo-a-domicilio-{macul|penalolen}` → `/cobertura`; `/{especialidad}-{macul|penalolen}` → `/servicios/{especialidad}` (12 entradas nuevas en `lib/rutas-retiradas.mjs`, de donde salieron las 6 de Huechuraba); `/{especialidad}-huechuraba` → `/kinesiologo-a-domicilio-huechuraba` (regla T37 de `next.config.mjs`, ahora con las 8 comunas).
- Auditor: "9 comunas" es término prohibido (crítica). "macul" y "penalolen" en el texto visible dan solo un aviso (`comuna-retirada`, media), porque pueden nombrarse como hecho geográfico (una avenida, un hospital de referencia) y como crítica darían falsos positivos. El chequeo de rutas cubre 40 especialidad+comuna → hub, 10 retiradas → /servicios/x y 2 hubs retirados → /cobertura.
- Pendiente de confirmar por Ricardo (hechos de Huechuraba que vienen del texto de septiembre): que el SAR La Pincoya y el SAPU Los Libertadores no atienden las 24 horas; las direcciones de los CESFAM (Av. Recoleta 5580, Las Petunias 305, Av. Recoleta 6160) y de IntegraMédica Norte (Av. Américo Vespucio 1731); los nombres de los cerros Punta Mocha y La Región; y las estaciones de Metro Vespucio Norte (Línea 2) y Los Libertadores (Línea 3) como borde sur de la comuna.
- `scripts/generate-seo.js` (generador antiguo, sin uso) todavía lista comunas retiradas: no correrlo.

## Deploys

| Fecha | Commit | Tareas | Rutas cambiadas | URLs pedidas a indexación |
|---|---|---|---|---|
| 2026-10-05 | 265224f | T02-T16 (Fase 0) | /, /precios, /nosotros, /como-funciona, /testimonios, 9 hubs `/kinesiologo-a-domicilio-*`, 7 posts | IndexNow 200 OK con 22 URLs. GSC: pendientes (T19, Ricardo) |
| 2026-10-05 | 14e7eb5 | Fase 1: T18 (regla vercel.app), T21-T31 (T22 inactivo hasta definir `NEXT_PUBLIC_UMAMI_ID`; T30 solo borrador en `seo/borrador-privacidad.md`) y limpiezas | /, /precios, /como-funciona, /nosotros, 9 hubs `/kinesiologo-a-domicilio-*`, 5 `/servicios/*`, 5 posts, /llms.txt | IndexNow 200 OK con 24 URLs (antes, en la Fase 0, 22 URLs) |
| 2026-10-06 | ae52755 | Fase 2: T39 (cadera, ACV, lumbago), T40 (poda: 4 con 308, 3 noindex), T42, T44, T47, T50 paso 1, T52 paso 1 y limpiezas (/nosotros, /como-funciona, Premium del home) | /, /nosotros, /como-funciona, 3 /servicios/*, 7 posts reescritos; 308: ergonomia, bruxismo, sarcopenia, post-covid; noindex: escoliosis, fibromialgia, masaje | IndexNow 200 OK con 21 URLs. Auditor en producción: 0 críticos, 0 altos, 4 medias (post-delgado) |
| 2026-10-06 | 44ceb1f | T19 (parte GSC) | — | Sitemap reenviado (6-oct). Indexación solicitada: providencia ("Rastreada: sin indexar"), nunoa, la-reina, santiago-centro ("Descubierta: sin indexar"), /precios, /blog/cuanto-cuesta-kinesiologia-a-domicilio-santiago, las-condes, vitacura, lo-barnechea. No volver a pedirlas en esta fase; revisar el 20-oct |
| 2026-10-07 | 9704b5b | T37 opción A (45 especialidad+comuna → 308 a los 9 hubs), T18 www 308 vía API de Vercel, posts delgados ampliados con fuentes, /privacidad, botones muertos, campos sin uso borrados, barrido de veracidad | 9 hubs, /, /privacidad, /ejercicios, /cobertura, /llms.txt, /servicios/respiratoria, 5 posts; 308: 45 especialidad+comuna | IndexNow 200 con la lista. Auditor en producción: 0 críticos, 0 altos, 0 medias, 0 bajas |
| 2026-10-07 | ac38f3b | Revisión independiente (2 revisores) y correcciones: RUT inválido retirado, orden médica unificada según Decreto 1.082/1958 art. 3, cobertura "sector oriente y centro", piso pélvico como guía informativa, home con las 5 especialidades, cifras sin fuente retiradas o enlazadas, /ejercicios en tuteo, contraste AA (Lighthouse a11y 100 en 12 páginas), breadcrumbs válidos, og:image 1200x630, JSON-LD del blog por @id, regla www muerta retirada | 43 rutas (ver commit) | IndexNow 200. Auditor en producción: 0/0/0/0 |
| 2026-11-09 | a6a4efe | Cobertura 8 comunas (entra Huechuraba; salen Macul y Peñalolén con 308) y SEO on-page de la revisión contra competidores: H1 y primer párrafo de los hubs con "Kinesiología a domicilio en {comuna}", anclas internas con la frase, home y /cobertura sin competir entre sí, tabla y snippet de /precios, snippets de sin-orden-médica, cuánto-cuesta y KTR | /, /cobertura, /precios, /como-funciona, /nosotros, /servicios/respiratoria, 8 hubs, 23 posts; 308: hubs y 10 especialidad de macul/penalolen; 5 especialidad-huechuraba al hub | IndexNow 200. Auditor en producción 0/0/0/0; 52/52 redirecciones |
