import type { Metadata } from "next"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"
import { SITE, installCommand, namespaceAddCommand } from "@/lib/site"

export const metadata: Metadata = {
  title: "Docs",
  description: "Install the components I built: registry setup, theming, mobile, performance.",
  alternates: { canonical: "/docs" },
}

export default function DocsPage() {
  return (
    <section className="px-6 md:px-20 pt-10 md:pt-14 pb-10 max-w-4xl mx-auto w-full">
      <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-4">
        Docs
      </p>
      <h1 className="text-3xl md:text-5xl font-light tracking-tight text-black dark:text-white">
        Getting started
      </h1>

      <div className="mt-8 space-y-8 max-w-2xl">
        <div>
          <h2 className="font-medium text-black dark:text-white mb-2">1 · Pick a component</h2>
          <p className="text-sm md:text-base font-light text-black/60 dark:text-white/60 leading-relaxed">
            Browse{" "}
            <Link href="/components" className="link-hover hover:text-accent">
              components
            </Link>
            , open one, tune the playground until it feels right, then copy
            the usage snippet. It follows your settings live.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-black dark:text-white mb-2">2 · Install in one command</h2>
          <p className="text-sm md:text-base font-light text-black/60 dark:text-white/60 leading-relaxed mb-3">
            No setup. This drops the component straight into your project.
            Single files, zero third-party dependencies. Copy the exact
            command from the component&apos;s page, or use the pattern:
          </p>
          <div className="space-y-4">
            <CodeBlock lang="bash" code={installCommand("<name>")} />
            <p className="text-sm font-light text-black/55 dark:text-white/55">
              Prefer short names? Register my namespace once, then use{" "}
              <code className="font-mono text-[13px] px-1 rounded bg-black/[0.05] dark:bg-white/[0.08]">{SITE.namespace}/{"<name>"}</code>:
            </p>
            <CodeBlock lang="bash" code={`${namespaceAddCommand}\nnpx shadcn@latest add ${SITE.namespace}/<name>`} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-black dark:text-white mb-2">3 · Theming</h2>
          <p className="text-sm md:text-base font-light text-black/60 dark:text-white/60 leading-relaxed">
            Components read the <code className="font-mono text-[13px] px-1 rounded bg-black/[0.05] dark:bg-white/[0.08]">dark</code> class
            on <code className="font-mono text-[13px] px-1 rounded bg-black/[0.05] dark:bg-white/[0.08]">{"<html>"}</code> and
            adapt automatically. Reduced-motion users get a still frame, and
            simulations sleep when settled.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-black dark:text-white mb-2">4 · Mobile</h2>
          <p className="text-sm md:text-base font-light text-black/60 dark:text-white/60 leading-relaxed">
            Interactive demos are desktop-first. Gate heavy components behind
            a pointer or screen-size check, load them client-side only, and
            skip them entirely on small screens.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-black dark:text-white mb-2">5 · Performance</h2>
          <p className="text-sm md:text-base font-light text-black/60 dark:text-white/60 leading-relaxed">
            Cost scales with the size of the box. Demos sleep when settled,
            pause offscreen and in hidden tabs, and render one still frame
            for reduced-motion users.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-black dark:text-white mb-2">6 · License</h2>
          <p className="text-sm md:text-base font-light text-black/60 dark:text-white/60 leading-relaxed">
            MIT. Free forever. Every component is yours once installed:
            copy it, modify it, ship it. No keys, no lock-in, no paid core.
          </p>
        </div>
        <div>
          <h2 className="font-medium text-black dark:text-white mb-2">7 · Credit</h2>
          <p className="text-sm md:text-base font-light text-black/60 dark:text-white/60 leading-relaxed">
            Liquid Ascii was inspired by{" "}
            <a
              href="https://pro.reactbits.dev/docs/components/liquid-ascii"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover hover:text-accent"
            >
              React Bits&apos; Liquid ASCII
            </a>
            . The implementation here is my own, written from scratch.
          </p>
        </div>
      </div>
    </section>
  )
}
