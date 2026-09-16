import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, ArrowRight, FlaskConical, MoonStar, Gauge } from "lucide-react"
import { LiquidAsciiDemo } from "@/components/liquid-ascii-demo"
import { CodeBlock } from "@/components/code-block"
import { SITE, installCommand } from "@/lib/site"

export const metadata: Metadata = {
  title: `${SITE.name}: Unique React components I built`,
  description: SITE.description,
  alternates: { canonical: "/" },
}

const PILLARS = [
  {
    icon: FlaskConical,
    title: "Live before you copy",
    body: "Every component I post ships with an interactive playground. Tune props, feel it, then take the code.",
  },
  {
    icon: MoonStar,
    title: "Yours, not rented",
    body: "Single-file components, zero third-party dependencies. No license keys, no lock-in. Installed from my registry.",
  },
  {
    icon: Gauge,
    title: "Theme-aware and fast",
    body: "Dark mode out of the box, reduced-motion respected, simulations sleep when settled.",
  },
]

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-20 pt-10 md:pt-16 pb-14 max-w-4xl mx-auto w-full">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-5">
          Built by me · Zero dependencies
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-black dark:text-white leading-[1.05]">
          Unique components
          <br />I built myself.
        </h1>
        <p className="mt-6 text-base md:text-lg font-light text-black/70 dark:text-white/70 leading-relaxed max-w-2xl">
          I design and code original React components and post them here with
          live playgrounds. One command installs them. Own the code forever.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/components"
            className="group inline-flex items-center gap-1.5 pl-5 pr-4 h-10 text-sm font-medium rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition-opacity active:scale-[0.98]"
          >
            Browse components
            <ArrowRight size={15} className="icon-arrow-hover" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center h-10 px-5 text-sm font-light rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
          >
            Docs
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-20 pb-14 max-w-4xl mx-auto w-full">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
            My components
          </h2>
          <Link
            href="/components"
            className="group inline-flex items-center gap-1 text-xs md:text-sm font-light text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors"
          >
            All components <ArrowUpRight size={13} className="icon-arrow-hover" />
          </Link>
        </div>
        <Link
          href="/components/liquid-ascii"
          className="group block rounded-xl border border-black/10 dark:border-white/10 overflow-hidden hover:border-black/25 dark:hover:border-white/25 transition-colors"
        >
          <div className="h-[280px] md:h-[320px] relative">
            <LiquidAsciiDemo autoWave cellSize={10} />
            <p className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 max-w-[calc(100%-2rem)] truncate rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur-md px-3.5 py-1 text-[11px] font-light text-black/55 dark:text-white/55 whitespace-nowrap">
              drag to stir
            </p>
          </div>
          <div className="flex items-center justify-between px-5 py-4 border-t border-black/10 dark:border-white/10">
            <div>
              <p className="font-medium text-black dark:text-white">Liquid Ascii</p>
              <p className="text-sm font-light text-black/55 dark:text-white/55">
                FLIP fluid simulation rendered as ASCII characters
              </p>
            </div>
            <span className="text-[11px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-[#1dd1a1]/15 text-[#0d8a68] dark:text-[#5eeab8]">
              Live
            </span>
          </div>
        </Link>

        <div className="mt-10 rounded-xl border border-black/10 dark:border-white/10 p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
            Install in one command, no setup
          </p>
          <CodeBlock lang="bash" code={installCommand("liquid-ascii")} />
          <p className="mt-3 text-sm font-light text-black/55 dark:text-white/55">
            Drops the component straight into your project.{" "}
            <Link href="/docs" className="link-hover hover:text-accent">
              Getting started guide
            </Link>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-black/10 dark:border-white/10 p-5"
            >
              <Icon size={17} className="text-accent mb-3" />
              <h3 className="font-medium text-black dark:text-white mb-1.5">{title}</h3>
              <p className="text-sm font-light text-black/60 dark:text-white/60 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 pb-4 max-w-4xl mx-auto w-full">
        <div className="rounded-xl border border-dashed border-black/15 dark:border-white/15 p-6 md:p-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-2">
            What&apos;s next
          </p>
          <h2 className="text-xl md:text-2xl font-light tracking-tight text-black dark:text-white">
            I post new components here as I build them.
          </h2>
          <p className="mt-2 text-sm font-light text-black/55 dark:text-white/55">
            Everything stays free and open. Each drop ships with a playground and build notes.
          </p>
        </div>
      </section>
    </>
  )
}
