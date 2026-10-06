import { rutasRetiradas } from './lib/rutas-retiradas.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true, // Commented out to enable optimization
  },
  async redirects() {
    return [
      // T18: el dominio de Vercel no debe servir el sitio duplicado. Host exacto, para no afectar las previews.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'kine-en-casa.vercel.app' }],
        destination: 'https://kineum.cl/:path*',
        permanent: true,
      },
      // Comunas fuera de cobertura desde el 29-09-2026 (solo sector oriente)
      ...rutasRetiradas.map((r) => ({ source: r.de, destination: r.a, permanent: true })),
      {
        source: '/blog/drenaje-linfatico-manual',
        destination: '/blog/drenaje-linfatico-post-operatorio-domicilio',
        permanent: true,
      },
      {
        source: '/blog/suelo-pelvico-mujer',
        destination: '/blog/kinesiologia-piso-pelvico-post-parto-domicilio',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kineum.cl',
          },
        ],
        destination: 'https://kineum.cl/:path*',
        permanent: true, // 301 redirect for SEO
      },
      // Contenido Fonasa retirado: KINEUM es servicio particular.
      // 301 hacia las guias de reembolso/precios que si aplican.
      {
        source: '/blog/kinesiologia-fonasa-libre-eleccion',
        destination: '/blog/reembolso-isapre-kinesiologia',
        permanent: true,
      },
      {
        source: '/blog/codigos-fonasa-kinesiologia-2026',
        destination: '/blog/cuanto-cuesta-kinesiologia-a-domicilio-santiago',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
