"use client"

import Link from "next/link"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto w-full text-center">
      <h1 className="text-4xl font-light tracking-tight text-black dark:text-white">
        Something splashed wrong
      </h1>
      <p className="mt-4 text-black/60 dark:text-white/60 font-light">
        The simulation hit an unexpected state. Try again, or head back to safety.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center h-10 px-5 text-sm font-medium rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition-opacity active:scale-[0.98] cursor-pointer"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center h-10 px-5 text-sm font-light rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
        >
          Go home
        </Link>
      </div>
    </section>
  )
}
