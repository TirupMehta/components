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
    <footer className="mt-20 border-t border-zinc-900/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8 py-12 grid gap-8 sm:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="flex items-center gap-1.5 mb-3" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-[#ff6b6b]" />
            <span className="w-2 h-2 rounded-full bg-[#feca57]" />
            <span className="w-2 h-2 rounded-full bg-[#1dd1a1]" />
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed">
            Uncommon components for React. Copy the code, own it forever.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              {c.title}
            </p>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="py-5 px-6 text-center border-t border-zinc-900/10 dark:border-white/10">
        <p className="text-zinc-400 dark:text-zinc-500 text-sm" suppressHydrationWarning>
          © {year} {SITE.name}. Designed and built by me.
        </p>
      </div>
    </footer>
  )
}
