# Components

Unique React components I built, with live playgrounds.
Copy the code, own it forever.

Live: https://tirup.in/components

The canonical home is `tirup.in/components` — every URL hangs off the main
domain, and the pages' canonical tags point there, so search equity lands
on tirup.in. `components.tirup.in` is kept as a redirect-only alias
(host-conditioned 308s at the edge in `vercel.json`) so nothing that ever
pointed at the subdomain dead-ends, while it never ranks or serves.

## Components

- **Liquid Ascii** (`liquid-ascii`): FLIP fluid simulation rendered as ASCII characters. Live at `/liquid-ascii`.

## Getting started

```bash
npm install
npm run dev
```

Install any component in one command. No setup:

```bash
npx shadcn@latest add https://tirup.in/components/r/liquid-ascii.json
```

Optional namespace (register once, then short names):

```bash
npx shadcn@latest registry add @mehta=https://tirup.in/components/r/{name}.json
npx shadcn@latest add @mehta/liquid-ascii
```

## Registry

Source of truth is `components/*.tsx`. Never hand-edit `public/r`.

```bash
npm run registry
```

Runs automatically on `prebuild`.

### Serving under tirup.in

The app sets `basePath: "/components"` and is proxied from the main site:
the tirup.in project rewrites `/components/*` to this project's deployment
URL (env `COMPONENTS_APP_URL`). The old `components.tirup.in` alias is
redirected at the Vercel edge by `vercel.json` (→
`tirup.in/components/…`, 308), with `proxy.ts` as an in-app fallback —
so the subdomain stays valid forever but never ranks.

## License

MIT. Free forever. See [LICENSE](./LICENSE).
