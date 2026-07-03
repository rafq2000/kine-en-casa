import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KINEUM - Kinesiologia a Domicilio Santiago",
    short_name: "KINEUM",
    description:
      "Kinesiologia a domicilio en Santiago de Chile. Rehabilitacion traumatologica, neurologica, respiratoria y geriatrica en la comodidad de tu hogar. Kinesiologo profesional a domicilio en Las Condes, Providencia, Vitacura, Nunoa, La Reina y Lo Barnechea.",
    start_url: "/",
    display: "standalone",
    theme_color: "#0f172a",
    background_color: "#f8fafc",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
