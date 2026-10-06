"use client"

import { useEffect } from "react"

// Medición sin cookies (Umami): un evento por clic a WhatsApp o al teléfono, con la página
// y la ubicación del botón (data-cta, o cabecera/pie/contenido si no lo tiene).
// Solo se monta si existe NEXT_PUBLIC_UMAMI_ID (ver app/layout.tsx).

declare global {
    interface Window {
        umami?: { track: (evento: string, datos?: Record<string, string>) => void }
    }
}

export function MedicionLeads() {
    useEffect(() => {
        const alClic = (e: MouseEvent) => {
            try {
                const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>(
                    'a[href*="wa.me/56999679593"], a[href^="tel:"]',
                )
                if (!a) return
                const ev = a.getAttribute("href")!.startsWith("tel:") ? "clic_telefono" : "clic_whatsapp"
                const ubicacion =
                    a.dataset.cta || (a.closest("header") ? "cabecera" : a.closest("footer") ? "pie" : "contenido")
                window.umami?.track(ev, { pagina: location.pathname, ubicacion })
            } catch {
                // La medición nunca debe romper el clic
            }
        }
        document.addEventListener("click", alClic, true)
        return () => document.removeEventListener("click", alClic, true)
    }, [])
    return null
}
