"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { SITE } from "@/lib/site"

const NAV = [
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
] as const

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <div className="max-w-4xl mx-auto w-full px-6 md:px-20 pt-6 md:pt-10 pb-0">
      <div className="flex items-center justify-between gap-4 mb-4 md:mb-6">
        <Link href="/" className="flex items-center gap-2.5 select-none group">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]/70 group-hover:scale-125 transition-transform" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#feca57]/70 group-hover:scale-125 transition-transform" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1dd1a1]/70 group-hover:scale-125 transition-transform" />
          </span>
          <span className="text-xl md:text-2xl font-light tracking-tight text-black dark:text-white leading-none">
            {SITE.name}
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {NAV.map(({ label, href }) => {
            const active = pathname === href || pathname?.startsWith(href + "/")
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={[
                  "py-1 px-2 rounded-md text-sm font-light transition-colors",
                  active
                    ? "text-black dark:text-white"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white",
                ].join(" ")}
              >
                {label}
              </Link>
            )
          })}
          <ThemeToggle />
        </div>
      </div>
      <div className="border-b border-black/5 dark:border-white/5" />
    </div>
  )
}
