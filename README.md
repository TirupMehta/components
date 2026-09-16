# lib.tirup.in

Components library. Unique React components I built, with live playgrounds.
Copy the code, own it forever.

Live: https://lib.tirup.in

## Components

- **Liquid Ascii** (`liquid-ascii`): FLIP fluid simulation rendered as ASCII characters. Live at `/components/liquid-ascii`.

## Getting started

```bash
npm install
npm run dev
```

Install any component in one command. No setup:

```bash
npx shadcn@latest add https://lib.tirup.in/r/liquid-ascii.json
```

Optional namespace (register once, then short names):

```bash
npx shadcn@latest registry add @mehta=https://lib.tirup.in/r/{name}.json
npx shadcn@latest add @mehta/liquid-ascii
```

## Registry

Source of truth is `components/*.tsx`. Never hand-edit `public/r`.

```bash
npm run registry
```

Runs automatically on `prebuild`.

## License

MIT. Free forever. See [LICENSE](./LICENSE).
