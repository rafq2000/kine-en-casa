import type { Metadata } from "next"
import HomeClient from "@/components/home-client"

export const metadata: Metadata = {
  title: "Kinesiólogo a Domicilio Santiago: Reembolso Isapre | KINEUM",
  description:
    "Kinesiólogo a domicilio en Santiago oriente, de Las Condes a Santiago Centro. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
  alternates: {
    canonical: "https://kineum.cl",
  },
  openGraph: {
    title: "Kinesiólogo a Domicilio Santiago: Reembolso Isapre | KINEUM",
    description:
      "Kinesiólogo a domicilio en Santiago oriente, de Las Condes a Santiago Centro. Sesión desde $35.000, evaluación inicial gratis y boleta para tu Isapre.",
    url: "https://kineum.cl",
    siteName: "KINEUM",
    locale: "es_CL",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

export default function HomePage() {
  return <HomeClient />
}
