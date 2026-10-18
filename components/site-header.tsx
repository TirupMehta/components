"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { SITE } from "@/lib/site"

const NAV = [
  { label: "Components", href: "/all" },
  { label: "Docs", href: "/docs" },
] as const

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] dark:border-white/[0.08] bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto w-full px-5 md:px-8 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 select-none">
          <span className="flex items-center gap-1" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-[#ff6b6b]" />
            <span className="w-2 h-2 rounded-full bg-[#feca57]" />
            <span className="w-2 h-2 rounded-full bg-[#1dd1a1]" />
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {SITE.name}
          </span>
          <span className="hidden sm:inline text-xs font-normal text-zinc-400 dark:text-zinc-500">
            / tirup.in
          </span>
        </Link>
        <nav className="flex items-center gap-0.5" aria-label="Primary">
          {NAV.map(({ label, href }) => {
            const active = pathname === href || pathname?.startsWith(href + "/")
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={[
                  "py-1.5 px-3 rounded-lg text-sm transition-colors",
                  active
                    ? "text-zinc-900 dark:text-zinc-50 bg-zinc-900/[0.06] dark:bg-white/[0.08] font-medium"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-normal",
                ].join(" ")}
              >
                {label}
              </Link>
            )
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
