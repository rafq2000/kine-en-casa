import type { Metadata } from "next"
import HomeClient from "@/components/home-client"

export const metadata: Metadata = {
  title: "Kinesiólogo a Domicilio Santiago: Reembolso Isapre | KINEUM",
  description:
    "Kinesiólogo a domicilio en Santiago con reembolso Isapre y seguros complementarios. Evaluación inicial gratuita y cobertura en 11 comunas. Agenda hoy.",
  alternates: {
    canonical: "https://kineum.cl",
  },
}

export default function HomePage() {
  return <HomeClient />
}
