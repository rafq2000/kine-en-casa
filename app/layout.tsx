import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { comunas } from "@/lib/comunas-data"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const siteUrl = "https://kineum.cl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kinesiología a Domicilio Premium Santiago | KINEUM",
  description:
    "Kinesiología a domicilio en 9 comunas del sector oriente y centro de Santiago. Evaluación inicial gratuita, sesiones de 60 minutos y boleta para tu Isapre.",
  keywords: [
    "kinesiólogo a domicilio",
    "kinesiología a domicilio",
    "kine a domicilio santiago",
    "kinesiología a domicilio las condes",
    "kinesiología a domicilio vitacura",
    "kinesiología respiratoria a domicilio",
    "neurorehabilitación a domicilio",
    "fisioterapia geriatrica santiago",
  ],
  authors: [{ name: "KINEUM" }],
  creator: "KINEUM",
  publisher: "KINEUM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KINEUM: Kinesiólogo a Domicilio en Santiago Oriente",
    description:
      "Kinesiología a domicilio en 9 comunas del sector oriente y centro de Santiago. Evaluación inicial gratuita, sesiones de 60 minutos y boleta para tu Isapre.",
    type: "website",
    locale: "es_CL",
    siteName: "KINEUM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KINEUM, kinesiología a domicilio en Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google3150a05fdaef1b10",
  },
  category: "Salud",
  generator: "Next.js",
}

// Schema.org LocalBusiness structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "KINEUM",
  description:
    "Kinesiología a domicilio en 9 comunas del sector oriente y centro de Santiago. Evaluación inicial gratuita, sesiones de 60 minutos y boleta para tu Isapre.",
  url: siteUrl,
  telephone: "+56999679593",
  email: "contacto@kineum.cl",
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/logo.png`,
  priceRange: "$$",
  currenciesAccepted: "CLP",
  paymentAccepted: "Efectivo, Transferencia, Tarjeta de Crédito, Tarjeta de Débito",
  // Negocio de area de servicio: atiende en el domicilio del paciente, no recibe publico
  // en una direccion. Publicar una calle aqui contradice la ficha de Google que se cree despues.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.4189,
    longitude: -70.6003,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Región Metropolitana de Santiago, Chile" },
    ...comunas.map((c) => ({
      "@type": "City",
      name: c.nombre,
      containedInPlace: { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" },
    })),
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Plan Essential: 4 sesiones de kinesiología a domicilio",
      description: "4 sesiones mensuales de 60 minutos en el domicilio del paciente, con evaluación inicial gratuita.",
      price: "160000",
      priceCurrency: "CLP",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/precios`,
    },
    {
      "@type": "Offer",
      name: "Plan Premium: 10 sesiones de kinesiología a domicilio",
      description: "10 sesiones mensuales de 60 minutos en el domicilio del paciente (35.000 pesos por sesión), con evaluación inicial gratuita.",
      price: "350000",
      priceCurrency: "CLP",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/precios`,
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Kinesiología a Domicilio",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Kinesiología Geriátrica",
          description: "Rehabilitación especializada para adultos mayores en su hogar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Kinesiología Respiratoria",
          description: "Tratamiento de problemas respiratorios, EPOC, post-COVID y neumonía",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Kinesiología Traumatológica",
          description: "Rehabilitación de fracturas, esguinces y lesiones deportivas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Kinesiología Neurológica",
          description: "Tratamiento post-ACV, Parkinson, Alzheimer y esclerosis múltiple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Rehabilitación Postquirúrgica",
          description: "Recuperación especializada después de cirugías ortopédicas",
        },
      },
    ],
  },
  sameAs: [
    "https://www.instagram.com/kineencasa",
    "https://www.facebook.com/kineencasa",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
