/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /**
   * Serves the app under tirup.in/components — canonical URLs get the equity,
   * not the subdomains. middleware.ts 308s every legacy host path here.
   */
  basePath: "/components",
  async redirects() {
    return [
      // The old listing route flattens to the homepage under the subpath
      // (tirup.in/components/components would be silly). Exact match only —
      // a /components/:path* catch-all would loop on the /r registry routes.
      { source: "/components", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
