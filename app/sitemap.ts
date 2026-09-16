import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

const BASE = SITE.url
// Static date keeps sitemap output stable across builds (no cache churn).
const MODIFIED = new Date("2026-09-01")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/components`, lastModified: MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/components/liquid-ascii`, lastModified: MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/docs`, lastModified: MODIFIED, changeFrequency: "monthly", priority: 0.6 },
  ]
}
