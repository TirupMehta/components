import Link from "next/link"
import { SITE } from "@/lib/site"

const COLS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Components",
    links: [
      { label: "All components", href: "/components" },
      { label: "Liquid Ascii", href: "/components/liquid-ascii" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "MIT license (free forever)", href: "/docs" },
    ],
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto w-full px-6 md:px-20 py-10 grid gap-8 sm:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="flex items-center gap-1.5 mb-3" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-[#ff6b6b]/70" />
            <span className="w-2 h-2 rounded-full bg-[#feca57]/70" />
            <span className="w-2 h-2 rounded-full bg-[#1dd1a1]/70" />
          </p>
          <p className="text-sm font-light text-black/55 dark:text-white/55 max-w-xs leading-relaxed">
            Unique React components I built. Copy the code, own it forever.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
              {c.title}
            </p>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm font-light text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="py-5 px-6 text-center border-t border-black/10 dark:border-white/10">
        <p className="text-black/50 dark:text-white/50 text-sm font-light" suppressHydrationWarning>
          © {year} {SITE.name}. Unique components built by me.
        </p>
      </div>
    </footer>
  )
}
