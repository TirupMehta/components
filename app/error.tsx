"use client"

import Link from "next/link"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="px-5 md:px-8 py-24 max-w-6xl mx-auto w-full">
      <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4">
        Error — splashed
      </p>
      <h1 className="font-semibold tracking-[-0.04em] leading-[0.95] text-zinc-900 dark:text-zinc-50 text-5xl md:text-7xl">
        something splashed wrong
      </h1>
      <p className="mt-5 text-base text-zinc-500 dark:text-zinc-400 max-w-md">
        The simulation hit an unexpected state. Try again, or head back to safety.
      </p>
      <div className="mt-8 flex items-center gap-2.5">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center h-10 px-5 text-sm font-medium rounded-full bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:opacity-85 transition-opacity active:scale-[0.98] cursor-pointer"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center h-10 px-5 text-sm rounded-full border border-zinc-900/15 dark:border-white/15 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-900/[0.04] dark:hover:bg-white/[0.06] transition-colors active:scale-[0.98]"
        >
          Go home
        </Link>
      </div>
    </section>
  )
}
