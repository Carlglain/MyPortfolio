import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface py-28 sm:py-40">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Experience"
          lines={["Where I've", "been shipping."]}
          accentLine={1}
        />

        <ol className="mt-16">
          {experience.map((role) => (
            <Reveal key={`${role.company}-${role.title}`} as="li" variant="" className="group">
              <div className="rule-draw" />
              <div className="grid gap-6 py-10 md:grid-cols-12">
                <div className="md:col-span-3">
                  <div className="mono text-sm text-ink-2">{role.period}</div>
                </div>
                <div className="md:col-span-9">
                  <Reveal>
                    <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{role.title}</h3>
                    <p className="mt-1 text-ink-2">
                      {role.company} <span aria-hidden="true">·</span> {role.place}
                    </p>
                    <ul className="mt-6 grid gap-3 lg:grid-cols-2 lg:gap-x-10">
                      {role.points.map((point) => (
                        <li key={point} className="flex gap-3 text-ink-2 leading-relaxed">
                          <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
