# Borrador de /privacidad (T30) — PUBLICADO EL 7-OCT-2026

Estado: **publicado en `app/privacidad/page.tsx`** (Ricardo delegó la revisión el 7-oct-2026). Diferencias con este borrador: el canal para ejercer derechos es el WhatsApp +56 9 9967 9593 (contacto@kineum.cl rebota: el dominio no tiene MX); no se menciona Umami (inactivo) y sí Vercel Web Analytics; el plazo de conservación quedó sin cifra; la Ley 21.719 se cita con fechas verificadas en el Diario Oficial (publicada el 13-dic-2024, vigencia el 1-dic-2026). El texto de abajo queda como historial.

Antes de aprobar, Ricardo debe confirmar:
1. **Las citas legales y las fechas de vigencia.** El borrador cita la Ley N° 19.628, sobre protección de la vida privada, y la Ley N° 21.719, que la modifica y crea la Agencia de Protección de Datos Personales. Según lo que el modelo tiene registrado, la Ley 21.719 se publicó en el Diario Oficial en diciembre de 2024 y su régimen principal entra en vigencia el 1 de diciembre de 2026. **Verificar ambas fechas, el nombre exacto de cada ley y si conviene citar artículos.**
2. Que el correo `contacto@kineum.cl` existe y que alguien lo revisa.
3. Si la medición sin cookies (Umami, T22) está activa al publicar. Si no lo está, se borra el párrafo marcado con [SOLO SI T22 ESTÁ ACTIVO].
4. Cuánto tiempo se guardan los datos (el borrador deja un espacio en blanco: no se inventó un plazo).
5. Si la información clínica de la ficha (evaluación, evolución) se trata como dato sensible y quién la custodia.

Al aprobar: crear `app/privacidad/page.tsx`, agregar `/privacidad` al sitemap con la fecha del deploy, poner `<Link href="/privacidad">Privacidad</Link>` en `components/site-footer.tsx` (junto a "Sitemap") y anotar la aprobación en `seo/cambios.md` › Decisiones.

Metadata propuesta:
- title: `Política de Privacidad | KINEUM` (31 caracteres)
- description: `Cómo KINEUM usa los datos que nos das por WhatsApp o teléfono para coordinar tu atención a domicilio y emitir la boleta, y cómo ejercer tus derechos.` (149 caracteres)

---

## Texto de la página

# Política de privacidad

Última actualización: [FECHA DEL DEPLOY]

### Quién es responsable de tus datos

El responsable del tratamiento de tus datos personales es **Kineum SpA**, con dirección comercial en Av. Apoquindo 4501, Las Condes, Santiago. Para cualquier consulta sobre tus datos, escríbenos a **contacto@kineum.cl**.

### Qué datos recibimos

Recibimos solo los datos que tú nos entregas cuando nos escribes por WhatsApp o nos llamas por teléfono para coordinar una atención:

- Tu nombre y el del paciente, si es otra persona.
- Tu número de teléfono.
- La dirección donde se hará la atención y la comuna.
- El motivo de consulta y, si nos los envías, la orden médica, la epicrisis u otros antecedentes clínicos.
- Los datos necesarios para emitir la boleta de honorarios.

### Para qué los usamos

Usamos tus datos solo para:

- Coordinar la evaluación inicial y las sesiones a domicilio.
- Que el kinesiólogo prepare y realice la atención.
- Emitir la boleta de honorarios que presentas a reembolso.
- Responder tus consultas.

**No vendemos ni arrendamos tus datos**, y no los usamos para publicidad de terceros.

### Con quién se comparten

- **WhatsApp** es un servicio de Meta Platforms. Cuando nos escribes por WhatsApp, el mensaje pasa por sus servidores y se rige también por la política de privacidad de WhatsApp.
- El kinesiólogo que te atiende recibe los datos necesarios para la atención.
- Entregamos datos a autoridades solo cuando la ley lo exige.

### Datos de salud

Los antecedentes clínicos que nos envías son datos sensibles. Los usamos únicamente para tu atención y los conocen solo las personas que participan en ella.

### Medición del sitio [SOLO SI T22 ESTÁ ACTIVO]

Para saber qué páginas del sitio ayudan a que la gente nos contacte, usamos Umami, una herramienta de medición que **no usa cookies** y no identifica a las personas: registra la página visitada y si se tocó un botón de WhatsApp o de teléfono.

### Cuánto tiempo los guardamos

Guardamos tus datos mientras dure la atención y durante [PLAZO A DEFINIR POR RICARDO] después, salvo que una ley exija conservarlos por más tiempo (por ejemplo, los registros tributarios de la boleta).

### Tus derechos

Puedes pedir en cualquier momento:

- **Acceso:** saber qué datos tuyos tenemos.
- **Rectificación:** corregir datos inexactos o incompletos.
- **Cancelación o supresión:** que eliminemos tus datos cuando ya no sean necesarios.
- **Oposición:** que dejemos de usar tus datos para un fin determinado.

Para ejercerlos, escríbenos a **contacto@kineum.cl** indicando tu nombre y lo que necesitas. Te responderemos dentro de los plazos que fija la ley.

### Marco legal

Tratamos tus datos conforme a la Ley N° 19.628, sobre protección de la vida privada, y a sus modificaciones, incluida la Ley N° 21.719. [RICARDO: CONFIRMAR CITA Y VIGENCIA ANTES DE PUBLICAR]

### Cambios a esta política

Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha de actualización.
