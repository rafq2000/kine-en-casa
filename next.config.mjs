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
