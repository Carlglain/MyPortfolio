import Reveal from "@/components/Reveal";
import { stack } from "@/content/site";

function Row({ items, direction, duration }: { items: string[]; direction: "left" | "right"; duration: number }) {
  // Two identical tracks side by side make the loop seamless; each track repeats
  // the list so short groups still fill wide screens.
  const repeated = [...items, ...items];
  const track = (hidden: boolean) => (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {repeated.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm whitespace-nowrap"
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="marquee"
      data-direction={direction}
      style={{ "--duration": `${duration}s` } as React.CSSProperties}
    >
      {track(false)}
      {track(true)}
    </div>
  );
}

export default function Stack() {
  return (
    <section className="overflow-hidden pt-24 sm:pt-32" aria-label="Tech stack">
      <div className="container-x">
        <Reveal className="eyebrow mb-12 flex justify-between">
          <span>
            <span className="text-ink">Stack</span> / Tools I ship with
          </span>
          <span className="hidden sm:inline">Hover to pause</span>
        </Reveal>

        <div className="space-y-8">
          {stack.map((group, i) => (
            <Reveal key={group.group} delay={i * 80}>
              <div className="mono mb-3 text-xs text-ink-2">
                {String(i + 1).padStart(2, "0")} / {group.group}
              </div>
              <Row items={group.items} direction={i % 2 === 0 ? "left" : "right"} duration={34 + i * 6} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
