/**
 * Single source of truth for site branding + registry URLs.
 * Renaming the site or moving domains = edit here (and scripts/build-registry.mjs).
 */
export const SITE = {
  name: "Lib",
  url: "https://lib.tirup.in",
  email: "contact@tirup.in",
  namespace: "@mehta",
  tagline: "Unique React components I built. Copy the code, own it forever.",
  description:
    "Unique React components I build and post here, with live playgrounds. Copy the code, own it forever.",
} as const

export const registryItemUrl = (name: string) => `${SITE.url}/r/${name}.json`

/** Easiest install: one command, no config. */
export const installCommand = (name: string) => `npx shadcn@latest add ${registryItemUrl(name)}`

/** Alternative: register the namespace once, then `npx shadcn@latest add @mehta/<name>`. */
export const namespaceAddCommand = `npx shadcn@latest registry add ${SITE.namespace}=${SITE.url}/r/{name}.json`

/**
 * The human behind the site. Used in metadata + JSON-LD (SEO/GEO) so
 * search and answer engines connect Tirup Mehta with lib.tirup.in.
 * The name stays out of most visible copy on purpose.
 */
export const AUTHOR = {
  name: "Tirup Mehta",
  url: "https://lib.tirup.in",
} as const
