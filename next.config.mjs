/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /**
   * Serves the app under tirup.in/components — canonical URLs get the equity,
   * not the subdomains.
   *
   * Serving model:
   *  - tirup.in/components/*  canonical; proxied from the main site via the
   *    COMPONENTS_APP_URL rewrite on that project
   *  - components.tirup.in/*  serves the same app directly — a host-keyed
   *    edge rewrite in vercel.json maps its root onto /components, so the
   *    subdomain works with zero extra dashboard wiring
   *
   * If COMPONENTS_APP_URL is unset on the main site, that project falls back
   * to a 308 redirect to the subdomain instead of 404ing.
   */
  basePath: "/components",
}

export default nextConfig
