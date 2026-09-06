# Sistema de auto-mejora SEO — kineum.cl

Mide el sitio en producción contra un conjunto de reglas, corrige solo lo que puede
corregirse sin criterio editorial, valida con un build y despliega. Lo que requiere
criterio queda en una lista aparte para resolver con Claude.

## Uso

```bash
node seo/audit.mjs          # audita producción y escribe el reporte
node seo/audit.mjs --local  # audita http://localhost:3000
node seo/autofix.mjs --dry  # muestra qué corregiría, sin tocar nada
node seo/autofix.mjs        # aplica las correcciones
node seo/ciclo.mjs          # ciclo completo: auditar → corregir → build → desplegar
node seo/ciclo.mjs --dry    # ensayo completo sin modificar nada
```

## Archivos

| Archivo | Qué hace |
|---|---|
| `rules.mjs` | Las reglas: largos de título y descripción, H1, mínimo de contenido, términos prohibidos, umbrales de rendimiento. **Editar aquí cambia todo el sistema.** |
| `audit.mjs` | Rastrea el sitemap, mide cada página, detecta duplicados, páginas huérfanas y enlaces rotos. Escribe `last-report.json` y `reports/audit-FECHA.json`. |
| `autofix.mjs` | Aplica las correcciones deterministas. Deja el resto en `pendientes-humano.json`. |
| `ciclo.mjs` | Encadena todo y despliega. Revierte si el build falla. |
| `historial.json` | Registro de cada ciclo ejecutado. |

## Qué corrige solo

- Títulos sobre 60 caracteres (recorta por separadores limpios, prioriza conservar la keyword sobre la marca).
- Sufijos que gastan espacio (`| KINEUM Journal` → `| KINEUM`).
- Descripciones sobre 158 caracteres (corta en oración completa; si no puede, por palabra).

## Qué NO toca nunca

Estos guardarraíles están en el código, no son sugerencias:

- No borra páginas ni archivos.
- No modifica afirmaciones clínicas, precios ni cifras del negocio.
- No aplica un recorte que haga perder la keyword principal.
- No deja títulos con paréntesis o corchetes sin cerrar, ni terminados en preposición.
- No despliega si el build falla: revierte con `git checkout -- .`.
- No corre sobre un árbol de trabajo sucio.

## Qué queda para criterio editorial

`pendientes-humano.json` acumula lo que necesita decisión: títulos que no admiten
recorte limpio, descripciones demasiado cortas, páginas con poco contenido y problemas
de H1. Esa lista es la entrada para el trabajo con Claude.

## Reglas actuales

- Título: 25–60 caracteres, con la keyword principal.
- Descripción: 110–158 caracteres.
- Un solo `<h1>` por página, con la keyword (el logo debe ser `span`, nunca `h1`).
- Mínimo 300 palabras de texto visible.
- Prohibido mencionar Fonasa: el negocio no ofrece ese servicio.
- TTFB bajo 1200 ms, HTML bajo 250 KB.

## Ejecucion desatendida (sin Claude)

La capa determinista puede correr sola. Registrar la tarea en Windows (una sola vez):

```
schtasks /create /tn "KINEUM SEO" /tr "C:\Users\rude_\Downloads\kine-en-casa\seo\ciclo-automatico.bat" /sc weekly /d MON,THU /st 09:23
```

Corre lunes y jueves a las 9:23 y deja el registro en `seo/ciclo.log`.
Para quitarla: `schtasks /delete /tn "KINEUM SEO" /f`

La capa de criterio editorial (reescribir titulos, ampliar contenido, decidir keywords)
la ejecuta Claude leyendo `pendientes-humano.json`.
