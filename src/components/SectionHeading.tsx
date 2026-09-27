import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  lines: string[];
  /** Index of the line rendered in the muted light-italic style. */
  accentLine?: number;
  intro?: string;
};

export default function SectionHeading({ index, label, lines, accentLine, intro }: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-12">
      <Reveal className="eyebrow md:col-span-3">
        <span className="text-ink">{index}</span> / {label}
      </Reveal>
      <div className="md:col-span-9">
        <Reveal variant="" as="h2" className="text-4xl leading-[1.02] font-medium tracking-tight sm:text-6xl">
          {lines.map((line, i) => (
            <span key={line} className="line-mask" style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}>
              <span className={i === accentLine ? "text-ink-2 italic font-light" : undefined}>{line}</span>
            </span>
          ))}
        </Reveal>
        {intro && (
          <Reveal delay={200} as="p" className="mt-6 max-w-xl text-lg text-ink-2">
            {intro}
          </Reveal>
        )}
      </div>
    </div>
  );
}
