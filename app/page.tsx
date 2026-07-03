import type { Metadata } from "next"
import HomeClient from "@/components/home-client"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kineum.cl",
  },
}

export default function HomePage() {
  return <HomeClient />
}
