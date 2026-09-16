import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { LiquidAsciiDemo } from "@/components/liquid-ascii-demo"

export const metadata: Metadata = {
  title: "Components",
  description: "Unique React components I built. Live, self-owned, dependency-free.",
  alternates: { canonical: "/components" },
}

export default function ComponentsPage() {
  return (
    <section className="px-6 md:px-20 pt-10 md:pt-14 pb-10 max-w-4xl mx-auto w-full">
      <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-4">
        My builds
      </p>
      <h1 className="text-3xl md:text-5xl font-light tracking-tight text-black dark:text-white">
        Components
      </h1>
      <p className="mt-4 text-base md:text-lg font-light text-black/60 dark:text-white/60 max-w-2xl">
        Unique components I build and post here. Self-owned single files.
        Read the source, tune the playground, copy the code into your project.
      </p>

      <div className="mt-10">
        <Link
          href="/components/liquid-ascii"
          className="group block rounded-xl border border-black/10 dark:border-white/10 overflow-hidden hover:border-black/25 dark:hover:border-white/25 transition-colors cursor-pointer"
        >
          <div className="h-44 relative pointer-events-none" aria-hidden="true">
            <LiquidAsciiDemo autoWave cellSize={18} />
          </div>
          <div className="px-5 py-4 border-t border-black/10 dark:border-white/10">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] uppercase tracking-[0.15em] text-black/40 dark:text-white/40">
                Cursor Effects
              </span>
              <span className="text-[11px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-[#1dd1a1]/15 text-[#0d8a68] dark:text-[#5eeab8]">
                Live
              </span>
            </div>
            <h2 className="font-medium text-lg text-black dark:text-white flex items-center gap-1.5">
              Liquid Ascii
              <ArrowUpRight size={15} className="opacity-40 icon-arrow-hover" />
            </h2>
            <p className="mt-1 text-sm font-light text-black/55 dark:text-white/55">
              FLIP fluid simulation rendered as ASCII characters
            </p>
          </div>
        </Link>

        <p className="mt-8 text-sm font-light text-black/45 dark:text-white/45">
          I post new components here as I build them. Each one ships with a
          live playground and a full write-up of how it works.
        </p>
      </div>
    </section>
  )
}
