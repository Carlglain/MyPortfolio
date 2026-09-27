import LocalTime from "@/components/LocalTime";
import Reveal from "@/components/Reveal";
import { profile } from "@/content/site";

export default function Hero() {
  const [first, last] = profile.name.split(" ");

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden pt-32 pb-10">
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-x relative flex flex-1 flex-col">
        <Reveal className="eyebrow flex flex-wrap justify-between gap-2">
          <span>Portfolio / {new Date().getFullYear()}</span>
          <span>Based in {profile.location}</span>
        </Reveal>

        <div className="flex flex-1 flex-col justify-center py-16">
          <Reveal variant="" delay={150}>
            <p className="mono mb-6 text-sm text-ink-2 sm:text-base">
              &lt;{profile.role.toLowerCase()} /&gt;
              <span className="caret" aria-hidden="true" />
            </p>
          </Reveal>

          <Reveal
            variant=""
            as="h1"
            className="text-[clamp(3.25rem,12vw,11rem)] leading-[0.9] font-semibold tracking-[-0.045em] uppercase"
          >
            <span className="line-mask" style={{ "--delay": "250ms" } as React.CSSProperties}>
              <span>{first}</span>
            </span>
            <span className="line-mask" style={{ "--delay": "350ms" } as React.CSSProperties}>
              <span className="text-ink-2 font-light">{last}</span>
            </span>
          </Reveal>

          <div className="mt-12 grid items-end gap-10 md:grid-cols-12">
            <Reveal delay={550} as="p" className="max-w-lg text-lg leading-relaxed text-ink-2 md:col-span-6">
              {profile.intro}
            </Reveal>
            <Reveal delay={650} className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
              <a href="#work" className="btn btn-solid">
                <span>View my work</span>
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                <span>Get in touch</span>
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal delay={800} className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <span className="flex items-center gap-3 text-sm">
            <span className="pulse-dot" aria-hidden="true" />
            {profile.status}
          </span>
          <div className="flex items-center gap-8">
            <LocalTime />
            <a href="#about" className="eyebrow flex items-center gap-2 hover:text-ink">
              Scroll
              <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
