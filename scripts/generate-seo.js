const fs = require('fs');
const path = require('path');

const comunas = [
    { slug: 'las-condes', nombre: 'Las Condes' },
    { slug: 'vitacura', nombre: 'Vitacura' },
    { slug: 'providencia', nombre: 'Providencia' },
    { slug: 'nunoa', nombre: 'Ñuñoa' },
    { slug: 'la-reina', nombre: 'La Reina' },
    { slug: 'lo-barnechea', nombre: 'Lo Barnechea' },
    { slug: 'la-florida', nombre: 'La Florida' },
    { slug: 'penalolen', nombre: 'Peñalolén' },
    { slug: 'macul', nombre: 'Macul' },
    { slug: 'san-joaquin', nombre: 'San Joaquín' },
    { slug: 'santiago-centro', nombre: 'Santiago Centro' },
];

const especialidades = [
    {
        slug: 'kinesiologia-geriatrica',
        nombre: 'Kinesiología Geriátrica',
        descTemplate: 'Rehabilitación geriátrica para el adulto mayor a domicilio en {comuna}. Tratamiento de Sarcopenia, prevención de caídas y artrosis.',
    },
    {
        slug: 'rehabilitacion-postquirurgica',
        nombre: 'Rehabilitación Postquirúrgica',
        descTemplate: 'Recuperación postquirúrgica especializada a domicilio en {comuna}. Kinesiólogos expertos para una rehabilitación segura y efectiva.'
    },
    {
        slug: 'kinesiologia-respiratoria',
        nombre: 'Kinesiología Respiratoria',
        descTemplate: 'Kinesiología respiratoria pediátrica y adulto a domicilio en {comuna}. Tratamiento experto para bronquitis, neumonía, y EPOC.'
    },
    {
        slug: 'rehabilitacion-neurologica',
        nombre: 'Rehabilitación Neurológica',
        descTemplate: 'Rehabilitación neurológica a domicilio en {comuna}. Apoyo kinesiológico experto post-ACV, Parkinson y enfermedades neurodegenerativas.'
    },
    {
        slug: 'kinesiologia-traumatologica',
        nombre: 'Kinesiología Traumatológica',
        descTemplate: 'Rehabilitación traumatológica a domicilio en {comuna}. Recupérese de esguinces, fracturas y lesiones deportivas sin salir de casa.'
    }
];

const appDir = path.join(__dirname, '..', 'app');

console.log('Generando páginas de Comunas puras...');
comunas.forEach(comuna => {
    const folderSlug = `kinesiologo-a-domicilio-${comuna.slug}`;
    const folderPath = path.join(appDir, folderSlug);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const fileContent = `import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const comunaData = {
    nombre: "${comuna.nombre}",
    slug: "${comuna.slug}",
    descripcion: "Servicio de kinesiología a domicilio en ${comuna.nombre} con kinesiólogos profesionales certificados. Cobertura total y atención personalizada.",
    poblacion: "Atendemos a cientos de pacientes en ${comuna.nombre} que buscan rehabilitación premium sin salir de casa.",
    sectores: [
        "Todo ${comuna.nombre}",
        "Sectores residenciales",
    ],
    caracteristicas: [
        "Cobertura total en ${comuna.nombre}",
        "Kinesiólogos con equipamiento avanzado",
        "Atención post-operatoria especializada",
        "KTR infantil y adulto",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: \`Kinesiólogo a Domicilio en \${comunaData.nombre} | KINEUM\`,
    description: \`Kinesiólogo a domicilio en \${comunaData.nombre}. Kinesiología respiratoria, motora y neurológica. Agende hoy al +56 9 9967 9593.\`,
    keywords: [
        \`kinesiólogo a domicilio \${comunaData.nombre}\`,
        \`kinesiología a domicilio \${comunaData.nombre}\`,
        \`kinesiologo \${comunaData.nombre} domicilio\`,
    ],
    alternates: {
        canonical: \`https://kineum.cl/kinesiologo-a-domicilio-\${comunaData.slug}\`,
    },
    openGraph: {
        title: \`Kinesiólogo a Domicilio en \${comunaData.nombre} | KINEUM\`,
        description: \`Kinesiología premium a domicilio en \${comunaData.nombre}. Kinesiólogos certificados a su hogar.\`,
        url: \`https://kineum.cl/kinesiologo-a-domicilio-\${comunaData.slug}\`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={comunaData} />
}
`;

    // We only overwrite if it doesn't already exist to preserve custom modifications like in Las Condes
    if (!fs.existsSync(path.join(folderPath, 'page.tsx'))) {
        fs.writeFileSync(path.join(folderPath, 'page.tsx'), fileContent);
        console.log(`Creado: ${folderPath}`);
    }
});

console.log('Generando matriz SEO Especialidad x Comuna...');
especialidades.forEach(espec => {
    comunas.forEach(comuna => {
        const folderSlug = `${espec.slug}-${comuna.slug}`;
        const folderPath = path.join(appDir, folderSlug);

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const desc = espec.descTemplate.replace('{comuna}', comuna.nombre);

        // We will reuse ComunaPage but tailor it for the specialty
        const fileContent = `import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"

const pageData = {
    nombre: "${comuna.nombre}",
    slug: "${comuna.slug}",
    especialidad: "${espec.nombre}",
    descripcion: "${desc}",
    poblacion: "Especialistas en ${espec.nombre} disponibles en ${comuna.nombre}.",
    sectores: [
        "Todo ${comuna.nombre}"
    ],
    caracteristicas: [
        "Cobertura total en ${comuna.nombre}",
        "Especialistas en ${espec.nombre}",
        "Asistente AI 24/7 y Portal de Paciente",
        "Kit Premium en Domicilio",
        "Reembolso Isapre",
        "Disponibilidad inmediata",
    ],
}

export const metadata: Metadata = {
    title: \`${espec.nombre} a Domicilio en \${pageData.nombre} | KINEUM\`,
    description: \`${desc} Agende hoy al +56 9 9967 9593.\`,
    keywords: [
        \`\${pageData.especialidad.toLowerCase()} a domicilio \${pageData.nombre}\`,
        \`\${pageData.especialidad.toLowerCase()} \${pageData.nombre}\`,
        \`kinesiólogo a domicilio \${pageData.nombre}\`,
    ],
    alternates: {
        canonical: \`https://kineum.cl/${folderSlug}\`,
    },
    openGraph: {
        title: \`${espec.nombre} a Domicilio en \${pageData.nombre} | KINEUM\`,
        description: \`${desc}\`,
        url: \`https://kineum.cl/${folderSlug}\`,
        type: "website",
        locale: "es_CL",
    },
}

export default function Page() {
    return <ComunaPage data={pageData} />
}
`;

        fs.writeFileSync(path.join(folderPath, 'page.tsx'), fileContent);
        console.log(`Creado: ${folderPath}`);
    });
});

console.log('¡Generación local SEO completa!');
