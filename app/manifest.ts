import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    // "." resolves relative to the manifest URL, so these stay correct
    // under tirup.in/components without hardcoding the subpath.
    name: `${SITE.name}: Unique React components I built`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: ".",
    scope: "./",
    display: "standalone",
    background_color: "#090a0d",
    theme_color: "#090a0d",
    icons: [{ src: "./icon", sizes: "512x512", type: "image/png" }],
  }
}
