import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "Santiago Centro",
    slug: "santiago-centro",
    descripcion: "Kinesiología a domicilio en Santiago Centro: subimos a tu departamento en Lastarria, Barrio Brasil, Yungay, República o Parque Almagro con camilla y equipamiento completo. Ideal para quienes viven en edificios sin necesidad de trasladarse.",
    poblacion: "En Santiago Centro la mayoría vive en departamentos y depende del metro: te evitamos el viaje con todo el tratamiento en tu propio hogar, en horarios compatibles con tu trabajo.",
    sectores: [
        "Barrio Lastarria",
        "Barrio Brasil",
        "Barrio Yungay",
        "Barrio República",
        "Parque Almagro",
        "Barrio Matta",
        "Santa Ana",
        "Parque Forestal",
    ],
    caracteristicas: [
        "Cobertura total en Santiago Centro",
        "Kinesiólogos con equipamiento avanzado",
        "Atención post-operatoria especializada",
        "KTR infantil y adulto",
        "Reembolso Isapre y Fonasa libre elección",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | Kine Isapre y Fonasa | KINEUM`,
    description: `Kinesiólogo a domicilio en Santiago Centro. Rehabilitación post operatoria, respiratoria, geriátrica y neurológica. Isapre y Fonasa. Evaluación gratis.`,
    keywords: [
        `kinesiólogo a domicilio ${comunaData.nombre}`,
        `kine a domicilio ${comunaData.nombre}`,
        `kinesiología a domicilio ${comunaData.nombre}`,
        `kinesiólogo a domicilio ${comunaData.nombre} isapre`,
        `kinesiólogo a domicilio ${comunaData.nombre} fonasa`,
        `kine ${comunaData.nombre} reembolso`,
        `kinesiólogo adulto mayor ${comunaData.nombre}`,
        `kine respiratorio ${comunaData.nombre}`,
        `rehabilitación a domicilio ${comunaData.nombre}`,
        `rehabilitación prótesis rodilla ${comunaData.nombre}`,
        `kinesiólogo post operación ${comunaData.nombre}`,
        `kine respiratorio bebé ${comunaData.nombre}`,
        `kinesiología embarazada ${comunaData.nombre}`,
        `kinesiólogo deportivo ${comunaData.nombre}`,
        `rehabilitación ACV ${comunaData.nombre}`,
        `kinesiólogo adulto mayor caídas ${comunaData.nombre}`,
        `fisioterapeuta a domicilio ${comunaData.nombre}`,
        `kine post cirugía ${comunaData.nombre}`,
        `kinesiología piso pélvico ${comunaData.nombre}`,
        `kinesiólogo urgente ${comunaData.nombre}`,
    ],
    alternates: {
        canonical: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
    },
    openGraph: {
        title: `Kinesiólogo a Domicilio en ${comunaData.nombre} | Kine Isapre y Fonasa | KINEUM`,
        description: `Kinesiología premium a domicilio en ${comunaData.nombre}. Kinesiólogos certificados a su hogar. Reembolso Isapre y Fonasa.`,
        url: `https://kineum.cl/kinesiologo-a-domicilio-${comunaData.slug}`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={comunaData} />
}
