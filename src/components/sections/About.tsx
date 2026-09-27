import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, education } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-40">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          lines={["The developer", "behind the flows."]}
          accentLine={1}
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed md:col-span-6 md:col-start-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p} as="p" delay={i * 120} className={i === 0 ? "text-ink" : "text-ink-2"}>
                {p}
              </Reveal>
            ))}
            <Reveal delay={240} className="flex items-baseline justify-between gap-4 border-t border-line pt-6 text-base">
              <span>
                {education.degree}, {education.school}
              </span>
              <span className="mono shrink-0 text-sm text-ink-2">{education.period}</span>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:col-span-3 md:grid-cols-1">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 120} className="card p-6">
                <div className="text-5xl font-semibold tracking-tight tabular-nums">{stat.value}</div>
                <div className="mt-2 text-sm text-ink-2">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
