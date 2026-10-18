/**
 * Single source of truth for site branding + registry URLs.
 * Renaming the site or moving domains = edit here (and scripts/build-registry.mjs).
 *
 * Canonical home is tirup.in/components. The components.tirup.in subdomain
 * is a redirect-only alias (edge 308s in vercel.json) — the canonical
 * subpath is served by that project's proxy (env COMPONENTS_APP_URL).
 */
export const SITE = {
  name: "Components",
  /** Domain every link, install command and canonical URL hangs off. */
  url: "https://tirup.in/components",
  email: "contact@tirup.in",
  namespace: "@mehta",
  tagline: "Unique React components I built. Copy the code, own it forever.",
  description:
    "Unique React components I build and post here, with live playgrounds. Copy the code, own it forever.",
} as const

/**
 * Absolute canonical URL for an app route. Routes are written without the
 * /components prefix (that comes from Next basePath); pass "/liquid-ascii"
 * style paths and this resolves them against the canonical base.
 */
export const absoluteUrl = (route = "/") => {
  const stem = route === "/" || route === "" ? "" : route
  return `${SITE.url}${stem}`
}

export const registryItemUrl = (name: string) => `${SITE.url}/r/${name}.json`

/** Easiest install: one command, no config. */
export const installCommand = (name: string) => `npx shadcn@latest add ${registryItemUrl(name)}`

/** Alternative: register the namespace once, then `npx shadcn@latest add @mehta/<name>`. */
export const namespaceAddCommand = `npx shadcn@latest registry add ${SITE.namespace}=${SITE.url}/r/{name}.json`

/**
 * The human behind the site. Used in metadata + JSON-LD (SEO/GEO) so
 * search and answer engines connect Tirup Mehta with tirup.in/components.
 * The name stays out of most visible copy on purpose.
 */
export const AUTHOR = {
  name: "Tirup Mehta",
  url: "https://tirup.in",
} as const
