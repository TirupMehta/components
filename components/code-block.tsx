"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { copyText } from "@/lib/utils"

export function CodeBlock({ code, lang = "tsx" }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await copyText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }
  return (
    <div className="relative rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.025] dark:bg-white/[0.025] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-black/10 dark:border-white/10">
        <span className="font-mono text-xs text-black/45 dark:text-white/45 lowercase">{lang}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied to clipboard" : `Copy ${lang} code to clipboard`}
          className="inline-flex items-center gap-1.5 text-xs font-light text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
        >
          {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-black/85 dark:text-white/85">
        {code}
      </pre>
    </div>
  )
}
