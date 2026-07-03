import type { Metadata } from "next"
import HomeClient from "@/components/home-client"

export const metadata: Metadata = {
  title: "Kinesiólogo a Domicilio Santiago | Kine Isapre y Fonasa | KINEUM",
  description:
    "Kinesiólogo a domicilio en Santiago con reembolso Isapre y Fonasa libre elección. Rehabilitación traumatológica, respiratoria, neurológica y geriátrica en su hogar. Evaluación gratis. ☎ +56 9 9967 9593",
  alternates: {
    canonical: "https://kineum.cl",
  },
}

export default function HomePage() {
  return <HomeClient />
}
