import Link from "next/link"

export default function NotFound() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto w-full text-center">
      <h1 className="text-4xl font-light tracking-tight">Lost in the fluid</h1>
      <p className="mt-4 text-black/60 dark:text-white/60 font-light">
        This page doesn&apos;t exist yet.{" "}
        <Link href="/components" className="link-hover hover:text-accent">
          Browse components
        </Link>
        .
      </p>
    </section>
  )
}
