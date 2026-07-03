"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Check } from "lucide-react"

export function HeroCtaButton() {
  return (
    <Button
      size="lg"
      className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500 transform hover:scale-105"
      onClick={() => window.open("https://wa.me/56999679593?text=Hola, quiero verificar disponibilidad para evaluación kinesiologica", "_blank")}
    >
      <MessageCircle className="h-6 w-6 mr-3" />
      <span className="flex flex-col items-start text-left">
        <span className="font-bold">Verificar Disponibilidad</span>
        <span className="text-xs font-normal opacity-90">Respuesta en menos de 5 min</span>
      </span>
    </Button>
  )
}

export function ServiceWhatsAppButton() {
  return (
    <Button
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 border border-emerald-500"
      onClick={() => window.open("https://wa.me/56999679593", "_blank")}
    >
      <MessageCircle className="h-4 w-4 mr-2" />
      Consultar por WhatsApp
    </Button>
  )
}

export function PlanCtaButton({ planName, popular }: { planName: string; popular: boolean }) {
  return (
    <Button
      className={`w-full text-lg py-6 font-bold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${popular ? "bg-amber-600 hover:bg-amber-700 text-white border-amber-500" : "bg-slate-900 hover:bg-slate-800 text-white"}`}
      onClick={() =>
        window.open(
          `https://wa.me/56999679593?text=Hola, quiero aprovechar la oferta del ${planName}.`,
          "_blank",
        )
      }
    >
      <MessageCircle className="h-5 w-5 mr-2" />
      Quiero este Plan
    </Button>
  )
}

export function GuaranteeCtaButton() {
  return (
    <Button
      size="lg"
      className="text-lg px-8 py-6 bg-white text-slate-900 hover:bg-slate-100 font-bold shadow-xl transition-all duration-300"
      onClick={() => window.open("https://wa.me/56999679593?text=Hola, quiero agendar mi primera sesión con Garantía de Satisfacción", "_blank")}
    >
      <Check className="h-5 w-5 mr-2 text-emerald-600" />
      Agendar mi Primera Sesión Segura
    </Button>
  )
}

export function CustomPlanButton() {
  return (
    <Button
      variant="link"
      className="text-emerald-700 font-semibold text-base p-0 h-auto"
      onClick={() =>
        window.open(
          "https://wa.me/56999679593?text=Hola, necesito información sobre un plan personalizado",
          "_blank",
        )
      }
    >
      Consulta por un Plan Personalizado →
    </Button>
  )
}

export function ContactPhoneButton() {
  return (
    <Button
      size="lg"
      variant="secondary"
      className="text-lg px-10 py-6 bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border border-slate-300"
      onClick={() => window.open("tel:+56999679593")}
    >
      <Phone className="h-5 w-5 mr-3" />
      +56 9 9967 9593
    </Button>
  )
}

export function ContactWhatsAppButton() {
  return (
    <Button
      size="lg"
      className="text-lg px-10 py-6 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border border-emerald-500"
      onClick={() => window.open("https://wa.me/56999679593", "_blank")}
    >
      <MessageCircle className="h-5 w-5 mr-3" />
      Enviar WhatsApp
    </Button>
  )
}

export function ComunaConsultButton() {
  return (
    <Button
      className="bg-emerald-600 hover:bg-emerald-700 text-white"
      onClick={() => window.open("https://wa.me/56999679593?text=Hola, ¿atienden kinesiología a domicilio en mi comuna?", "_blank")}
    >
      <MessageCircle className="h-4 w-4 mr-2" />
      Consultar otra comuna
    </Button>
  )
}

export function HeaderCtaButton() {
  return (
    <Button
      variant="secondary"
      className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-slate-900 hover:bg-slate-100 border border-slate-300"
      onClick={() => window.open("https://wa.me/56999679593?text=Hola, quiero agendar una evaluación", "_blank")}
    >
      <Phone className="h-4 w-4 mr-2" />
      Agendar Evaluación
    </Button>
  )
}
