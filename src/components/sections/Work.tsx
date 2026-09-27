import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { nkwaWork, projects, type Work as WorkItem } from "@/content/site";

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="card-index mono text-xs text-ink-2">{String(index + 1).padStart(2, "0")}</span>
        <span className="eyebrow text-right">{item.kind}</span>
      </div>
      <h3 className="mt-10 text-2xl font-medium tracking-tight sm:text-3xl">{item.title}</h3>
      <p className="mt-4 leading-relaxed text-ink-2">{item.summary}</p>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <ul className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li key={tag} className="mono rounded-full bg-surface-2 px-3 py-1 text-[0.7rem]">
              {tag}
            </li>
          ))}
        </ul>
        {item.href && (
          <span className="flex items-center gap-1.5 text-sm font-medium">
            {item.linkLabel ?? "Visit"} <span aria-hidden="true">&#8599;</span>
          </span>
        )}
      </div>
    </>
  );

  return item.href ? (
    <a href={item.href} target="_blank" rel="noreferrer" className="card flex h-full flex-col p-7 sm:p-9">
      {body}
    </a>
  ) : (
    <article className="card flex h-full flex-col p-7 sm:p-9">{body}</article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-28 sm:py-40">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Selected work"
          lines={["Built for real", "users and real money."]}
          accentLine={1}
          intro="Production features from my work at Nkwa, followed by projects I've built outside of it."
        />

        <Reveal className="eyebrow mt-20 mb-6">At Nkwa</Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {nkwaWork.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 120}>
              <WorkCard item={item} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="eyebrow mt-20 mb-6">Projects</Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <WorkCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
