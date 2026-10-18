import { NextResponse, type NextRequest } from "next/server"

/**
 * The only legacy host left is components.tirup.in — every request on it
 * 308s to the canonical root domain, so all traffic, links and search
 * equity land on tirup.in and that subdomain never ranks.
 *
 * IMPORTANT: with basePath set, Next (and this proxy) only runs for paths
 * under /components — a request to "/" on a legacy host never reaches the
 * app at all (Vercel edge returns a bare 404 first). The real redirects
 * therefore live in vercel.json (edge-level, host-conditioned), which fires
 * before everything. This file stays as an in-app fallback for
 * under-basePath paths only and keeps every old deep link alive:
 *   components.tirup.in/liquid-ascii  -> tirup.in/components/liquid-ascii
 *   components.tirup.in/docs          -> tirup.in/components/docs
 */
const LEGACY_HOSTS = new Set(["components.tirup.in", "www.components.tirup.in"])
const CANONICAL_ORIGIN = "https://tirup.in"
const CANONICAL_BASE = `${CANONICAL_ORIGIN}/components`

export default function proxy(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase().replace(/:\d+$/, "")
  if (!LEGACY_HOSTS.has(host)) return NextResponse.next()

  const path = req.nextUrl.pathname
  // Legacy paths that already carry the /components prefix map 1:1.
  if (path === "/components" || path.startsWith("/components/")) {
    return redirect(`${CANONICAL_ORIGIN}${path}`, req)
  }
  return redirect(`${CANONICAL_BASE}${path === "/" ? "" : path}`, req)
}

function redirect(to: string, req: NextRequest) {
  const target = new URL(to)
  target.search = req.nextUrl.search
  return NextResponse.redirect(target, 308)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)", "/"],
}
