import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KINEUM - Kinesiología a Domicilio Santiago",
    short_name: "KINEUM",
    description:
      "Kinesiología a domicilio en 9 comunas de Santiago: Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Lo Barnechea, Peñalolén, Macul y Santiago Centro. Geriátrica, respiratoria, traumatológica, neurológica y postquirúrgica.",
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
