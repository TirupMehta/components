# Components

Unique React components I built, with live playgrounds.
Copy the code, own it forever.

Live: https://tirup.in/components

The canonical home is `tirup.in/components` — every URL hangs off the main
domain. The old hosts are kept alive as permanent redirects so old install
links never break:

- `lib.tirup.in/<path>` → `tirup.in/components/<path>` (308)
- `components.tirup.in/<path>` → `tirup.in/components/<path>` (308)

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
URL (env `COMPONENTS_APP_URL`). Legacy hosts are redirected at the Vercel
edge by `vercel.json` (`lib.tirup.in` / `components.tirup.in` /
their www forms → `tirup.in/components/…`, 308), with `proxy.ts` as an
in-app fallback — so the subdomains stay valid forever but never rank.

## License

MIT. Free forever. See [LICENSE](./LICENSE).
