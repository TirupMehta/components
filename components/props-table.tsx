export type PropRow = {
  name: string
  type: string
  defaultValue: string
  description: string
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="border-b border-black/10 dark:border-white/10 bg-black/[0.025] dark:bg-white/[0.025] text-left">
              <th className="px-4 py-2.5 font-medium text-xs uppercase tracking-wider text-black/50 dark:text-white/50">Prop</th>
              <th className="px-4 py-2.5 font-medium text-xs uppercase tracking-wider text-black/50 dark:text-white/50">Type</th>
              <th className="px-4 py-2.5 font-medium text-xs uppercase tracking-wider text-black/50 dark:text-white/50">Default</th>
              <th className="px-4 py-2.5 font-medium text-xs uppercase tracking-wider text-black/50 dark:text-white/50">Description</th>
            </tr>
          </thead>
          <tbody className="font-light">
            {rows.map((r) => (
              <tr
                key={r.name}
                className="border-b border-black/5 dark:border-white/5 last:border-0 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] transition-colors"
              >
                <td className="px-4 py-2.5 font-mono text-[13px] text-accent whitespace-nowrap">{r.name}</td>
                <td className="px-4 py-2.5 font-mono text-xs text-black/60 dark:text-white/60 whitespace-nowrap">{r.type}</td>
                <td className="px-4 py-2.5 font-mono text-xs text-black/60 dark:text-white/60 whitespace-nowrap">{r.defaultValue}</td>
                <td className="px-4 py-2.5 text-black/70 dark:text-white/70">{r.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
