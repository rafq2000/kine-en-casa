# Panel de visibilidad de KINEUM en las IA (T31)

Objetivo: medir una vez al mes si los asistentes de IA mencionan o citan a KINEUM cuando alguien pregunta por kinesiología a domicilio en Santiago. La primera medición es la línea base.

## Cómo medir (Ricardo, una vez al mes)

1. Abrir cada motor en una **sesión nueva, sin historial y sin haber iniciado sesión** (o en una ventana de incógnito). Si el motor exige cuenta, usar una que no haya hablado antes de KINEUM.
2. Pegar las 12 preguntas tal cual, una por conversación, sin agregar contexto.
3. Motores: ChatGPT con búsqueda, Perplexity, Gemini, Copilot y Google AI Mode.
4. Por cada respuesta, anotar en la tabla: si menciona a KINEUM (sí/no), la URL de kineum.cl que cita (si cita alguna) y los competidores que nombra o cita.
5. No corregir ni "enseñarle" nada al motor durante la medición.

## Las 12 preguntas fijas (no cambiarlas entre meses)

| # | Tema | Pregunta |
|---|---|---|
| 1 | Recomendación | ¿Qué kinesiólogo a domicilio me recomiendas en Santiago? |
| 2 | Recomendación, comuna | ¿Qué kinesiólogo a domicilio me recomiendas en Las Condes? |
| 3 | Recomendación, comuna | Necesito un kinesiólogo a domicilio en Providencia para mi papá, ¿a quién llamo? |
| 4 | Comuna, Isapre | ¿Kinesiólogo a domicilio en Ñuñoa con boleta para Isapre? |
| 5 | Comuna | ¿Hay kinesiología a domicilio en Peñalolén? |
| 6 | Precio | ¿Cuánto cuesta un kinesiólogo a domicilio en Santiago? |
| 7 | Precio | ¿Cuánto vale un plan de 10 sesiones de kinesiología a domicilio? |
| 8 | Reembolso | ¿Cómo pido el reembolso de kinesiología en Colmena? |
| 9 | Reembolso | ¿Qué documentos necesito para que la Isapre me reembolse la kinesiología a domicilio? |
| 10 | Reembolso | ¿El seguro complementario cubre la kinesiología a domicilio? |
| 11 | Especialidad | ¿Dónde encuentro kinesiología respiratoria a domicilio para un niño en Santiago? |
| 12 | Especialidad | ¿Qué servicio de kinesiología a domicilio atiende adultos mayores en el sector oriente de Santiago? |

## Registro mensual

Una fila por pregunta y motor (12 × 5 = 60 filas por mes). "Menciona" = KINEUM aparece en el texto; "URL citada" = enlace a kineum.cl en las fuentes.

| Fecha | Motor | Pregunta (#) | ¿Menciona a KINEUM? | URL citada | Competidores citados |
|---|---|---|---|---|---|
| | | | | | |

## Resumen por mes

| Mes | Preguntas con mención (de 12, en al menos un motor) | Menciones totales (de 60) | URLs de kineum.cl citadas | Notas |
|---|---|---|---|---|
| | | | | |

Meta (ver `seo/cambios.md`): línea base el mes 1; después, +2 preguntas con mención.

## Consultas conversacionales en Google Search Console

GSC → Rendimiento → Consulta → "Coincide con regex personalizada":

```
^(cu[aá]l|y si|qu[eé]|c[oó]mo|context|los valores)
```

Sirve para ver las consultas largas o de tipo pregunta que suelen venir de AI Mode y de los asistentes. Anotar cada mes el total de impresiones y clics de ese filtro en el resumen.
