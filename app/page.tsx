import type { Metadata } from "next"
import HomeClient from "@/components/home-client"

export const metadata: Metadata = {
  title: "Kinesiólogo a Domicilio Santiago | Reembolso Isapre | KINEUM",
  description:
    "Kinesiólogo a domicilio en Santiago con reembolso Isapre y seguros complementarios. Rehabilitación traumatológica, respiratoria, neurológica y geriátrica.",
  alternates: {
    canonical: "https://kineum.cl",
  },
}

export default function HomePage() {
  return <HomeClient />
}
