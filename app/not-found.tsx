import Link from "next/link"

export default function NotFound() {
  return (
    <section className="px-5 md:px-8 py-24 max-w-6xl mx-auto w-full">
      <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4">
        404 — not found
      </p>
      <h1 className="font-semibold tracking-[-0.04em] leading-[0.95] text-zinc-900 dark:text-zinc-50 text-5xl md:text-7xl">
        lost in the fluid
      </h1>
      <p className="mt-5 text-base text-zinc-500 dark:text-zinc-400">
        This page doesn&apos;t exist yet.{" "}
        <Link href="/components" className="link-hover">
          Browse components
        </Link>
        .
      </p>
    </section>
  )
}
