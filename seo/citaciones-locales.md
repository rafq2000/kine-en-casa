# Citaciones locales y ficha de Google — lo que solo puede hacer Ricardo

El sitio ya tiene lo que casi ningún competidor tiene: página por comuna y especialidad,
precios publicados y schema correcto. Lo que falta es **autoridad de entidad local**: que
Google vea a KINEUM nombrado con los mismos datos fuera de su propio sitio. Sin eso,
Google no gasta presupuesto de rastreo (hoy 42 URLs siguen con "último rastreo: N/D") y el
paquete de mapas es directamente inalcanzable.

Orden de impacto: 1) ficha de Google, 2) directorios de salud, 3) directorios generales.

## Datos exactos (copiar y pegar igual en todas partes)

| Campo | Valor |
|---|---|
| Nombre | KINEUM — Kinesiología a Domicilio |
| Teléfono | +56 9 9967 9593 |
| Sitio | https://kineum.cl |
| Email | contacto@kineum.cl |
| Razón social | Kineum SpA — RUT 76.892.102-K |
| Dirección | Av. Apoquindo 4501, Las Condes (dirección comercial: **ocultarla** y marcar "atiendo a domicilio") |
| Área de servicio | Región Metropolitana de Santiago |
| Categoría principal | Fisioterapeuta / Kinesiólogo |
| Categorías secundarias | Servicio de rehabilitación, Atención domiciliaria de salud |
| Horario | Lunes a viernes 08:00–20:00 · Sábado 09:00–18:00 · Domingo 10:00–16:00 |

La coherencia importa más que el texto: el mismo nombre, el mismo teléfono y la misma URL
en todos lados. Un teléfono distinto en un directorio rompe la señal en vez de sumarla.

**Descripción corta (160 caracteres)**
> Kinesiología a domicilio en la Región Metropolitana. Evaluación inicial gratuita, sesiones de 60 minutos y boleta reembolsable en tu Isapre.

**Descripción larga**
> KINEUM atiende kinesiología y rehabilitación en el domicilio del paciente en la Región Metropolitana: geriátrica, respiratoria (adultos y niños), traumatológica, neurológica y postquirúrgica. El kinesiólogo llega con camilla y equipamiento profesional. La evaluación inicial es gratuita y recién después se define cuántas sesiones se necesitan. Es un servicio particular: se emite boleta de honorarios electrónica el mismo día, reembolsable en la Isapre según la cobertura del plan y en el seguro complementario.

## 1. Google Business Profile (lo primero, sin esto lo demás rinde la mitad)

1. Entrar a https://business.google.com con la cuenta que administra el sitio.
2. Crear el perfil como **negocio de área de servicio**: al preguntar por la dirección,
   marcar que no se atiende a clientes en ella y definir el área = Región Metropolitana
   (o las comunas donde de verdad se atiende).
3. Verificación: Google suele pedir video. Tener a mano el equipamiento (camilla, TENS,
   ultrasonido), el vehículo si lo hay y documentación de Kineum SpA.
4. Completar todo: categorías, horario, servicios (uno por especialidad), fotos reales de
   sesiones (con consentimiento del paciente) y del equipo, y el enlace a https://kineum.cl.
5. Cada servicio del perfil debe apuntar a su página: /servicios/geriatrica,
   /servicios/respiratoria, /servicios/traumatologica, /servicios/neurologica,
   /servicios/postquirurgica.
6. Reseñas: pedirlas a pacientes reales al terminar el tratamiento, con el enlace corto del
   perfil. Nunca comprarlas ni filtrarlas; Google detecta el patrón y suspende la ficha.

Una vez verificada la ficha, avisar: hay que volver a revisar el schema del sitio para que
el nombre, el teléfono y el área calcen exactamente con la ficha.

## 2. Directorios de salud (los que ya rankean en las comunas donde KINEUM no aparece)

| Sitio | Estado | Para qué sirve |
|---|---|---|
| https://www.doctoralia.cl | responde 200 | Perfil profesional por kinesiólogo; es el directorio de salud más fuerte de Chile |
| https://www.agendapro.com/cl | responde 200 | Marketplace que hoy rankea en "kinesiología a domicilio {comuna}" |
| https://cl.physiofinder.net | responde 200 | Directorio específico de kinesiología/fisioterapia |
| https://2x3.cl | bloquea bots, abrir a mano | Aparece en las SERP de kinesiología a domicilio |
| https://firmania.cl | bloquea bots, abrir a mano | Ficha de empresa con NAP |

## 3. Directorios generales (rápidos, valen por la coherencia NAP)

| Sitio | Estado |
|---|---|
| https://www.citiservi.cl | responde 200 |
| https://www.hotfrog.cl | responde 200 |
| https://www.cylex.cl | bloquea bots, abrir a mano |
| https://www.opendi.cl | bloquea bots, abrir a mano |
| https://cl.enrollbusiness.com | bloquea bots, abrir a mano |

## 4. Redes propias

Los perfiles de Instagram y Facebook que declara el sitio están a nombre de la marca
antigua (kineencasa). O se renombran a KINEUM con kineum.cl en la bio, o hay que sacarlos
del schema: hoy le dicen a Google que la entidad se llama de otra forma.

## Cómo medir si funcionó

- Search Console → Indexación: las URLs con "último rastreo N/D" deberían empezar a
  rastrearse dentro de 2 a 4 semanas.
- Search Console → Rendimiento: aparición de consultas con nombre de comuna.
- Google Maps: buscar "kinesiólogo a domicilio" desde una comuna de cobertura y ver si la
  ficha aparece en el paquete local.
