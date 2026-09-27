import Reveal from "@/components/Reveal";
import { shippingLog } from "@/content/site";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthLabel = (ym: string) => MONTHS[Number(ym.slice(5, 7)) - 1];

// Bar per month of merged PRs; bars grow in when scrolled into view.
export default function ShippingLog() {
  const { months, total, promotedAt } = shippingLog;
  const max = Math.max(...months.map((m) => m.count));
  const promotedIndex = months.findIndex((m) => m.month === promotedAt);

  return (
    <Reveal className="card mt-20 p-6 sm:p-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="eyebrow">Shipping log</div>
          <p className="mt-3 max-w-md text-2xl font-medium tracking-tight sm:text-3xl">
            {total} pull requests merged into production at Nkwa.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-ink-2">
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-sm bg-ink-2/40" aria-hidden="true" /> Intern
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-sm bg-ink" aria-hidden="true" /> Junior developer
          </span>
        </div>
      </div>

      <Reveal variant="" className="log-chart relative mt-12">
        <ol
          className="grid h-48 items-end gap-1.5 sm:h-56 sm:gap-3"
          style={{ gridTemplateColumns: `repeat(${months.length}, minmax(0, 1fr))` }}
          aria-label="Merged pull requests per month"
        >
          {months.map((m, i) => (
            <li key={m.month} className="group relative flex h-full flex-col justify-end">
              {i === promotedIndex && (
                <span
                  className="absolute inset-y-0 -left-[3px] border-l border-dashed border-accent sm:-left-[7px]"
                  aria-hidden="true"
                >
                  <span className="mono absolute -top-6 left-2 text-[0.65rem] whitespace-nowrap text-accent">
                    Promoted
                  </span>
                </span>
              )}
              <span className="mono mb-1.5 text-center text-[0.65rem] text-ink-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {m.count}
              </span>
              <span
                className={`log-bar block rounded-t-md ${i >= promotedIndex ? "bg-ink" : "bg-ink-2/40"} group-hover:bg-accent`}
                style={
                  {
                    height: `${Math.max((m.count / max) * 100, 3)}%`,
                    "--delay": `${i * 55}ms`,
                  } as React.CSSProperties
                }
              >
                <span className="sr-only">
                  {monthLabel(m.month)} {m.month.slice(0, 4)}: {m.count} merged
                </span>
              </span>
            </li>
          ))}
        </ol>
        <div className="rule-draw" />
        <ol
          className="mono mt-3 grid gap-1.5 text-[0.6rem] text-ink-2 sm:gap-3 sm:text-xs"
          style={{ gridTemplateColumns: `repeat(${months.length}, minmax(0, 1fr))` }}
          aria-hidden="true"
        >
          {months.map((m, i) => (
            <li key={m.month} className={`text-center ${i % 2 ? "max-sm:invisible" : ""}`}>
              {monthLabel(m.month)}
              {m.month.endsWith("-01") || i === 0 ? (
                <span className="block text-ink-2/60">{m.month.slice(2, 4)}</span>
              ) : null}
            </li>
          ))}
        </ol>
      </Reveal>
    </Reveal>
  );
}
