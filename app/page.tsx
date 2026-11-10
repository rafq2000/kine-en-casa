import type { Metadata } from "next"
import HomeClient from "@/components/home-client"

export const metadata: Metadata = {
  title: "Kinesiología a Domicilio en Santiago | Kinesiólogos KINEUM",
  description:
    "Kinesiología a domicilio en Santiago oriente y centro: un kinesiólogo en tu casa, sesiones de 60 min desde $35.000, evaluación inicial gratis y boleta.",
  alternates: {
    canonical: "https://kineum.cl",
  },
  openGraph: {
    title: "Kinesiología a Domicilio en Santiago | Kinesiólogos KINEUM",
    description:
      "Kinesiología a domicilio en Santiago oriente y centro: un kinesiólogo en tu casa, sesiones de 60 min desde $35.000, evaluación inicial gratis y boleta.",
    url: "https://kineum.cl",
    siteName: "KINEUM",
    locale: "es_CL",
    type: "website",
    images: ["/og-image.jpg"],
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kineum.cl/#website",
  name: "KINEUM",
  alternateName: ["Kineum"],
  url: "https://kineum.cl/",
  inLanguage: "es-CL",
  publisher: { "@id": "https://kineum.cl/#organization" },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <HomeClient />
    </>
  )
}
