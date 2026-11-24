"use client"

import { useEffect } from "react"

// Medición por anuncio (plan de Meta, B7): si la visita llega con utm_content=k01…k39, ese código neutro va al
// COMIENZO de cualquier mensaje de WhatsApp que se envíe desde el sitio («k07 · Hola, quiero agendar…»), para saber
// qué anuncio trajo cada conversación. Solo el código: nunca la página ni la especialidad.
// Se monta siempre (no depende de Umami) y vale para todos los enlaces a wa.me, también los del blog.

const CLAVE = "kineum_anuncio"
const CODIGO = /^k\d{2}$/ // solo nuestros códigos: un enlace armado por terceros no puede meter texto en el mensaje

function leer(): string | null {
    try {
        const c = sessionStorage.getItem(CLAVE)
        return c && CODIGO.test(c) ? c : null
    } catch {
        return null
    }
}

export function CodigoAnuncio() {
    useEffect(() => {
        try {
            const c = new URLSearchParams(location.search).get("utm_content")
            if (c && CODIGO.test(c)) sessionStorage.setItem(CLAVE, c)
        } catch {
            // sin almacenamiento (modo privado estricto): el mensaje sale sin código
        }
        const alClic = (e: MouseEvent) => {
            try {
                const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href*="wa.me/"]')
                const c = a && leer()
                if (!a || !c) return
                const [base, query = ""] = a.href.split("?")
                const texto = new URLSearchParams(query).get("text") ?? ""
                if (texto.startsWith(c)) return
                a.href = `${base}?text=${encodeURIComponent(texto ? `${c} · ${texto}` : c)}`
            } catch {
                // el código nunca debe romper el clic
            }
        }
        document.addEventListener("click", alClic, true)
        return () => document.removeEventListener("click", alClic, true)
    }, [])
    return null
}
