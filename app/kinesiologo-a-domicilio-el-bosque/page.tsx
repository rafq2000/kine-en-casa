import type { Metadata } from "next"
import ComunaPage from "@/components/comuna-page"
import { datosHub, metaHub } from "@/lib/seo-local"

export const metadata: Metadata = metaHub("el-bosque")

export default function Page() {
    return <ComunaPage data={datosHub("el-bosque")} />
}
