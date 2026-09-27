import Image from "next/image";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { nkwaWork, projects, type Work as WorkItem } from "@/content/site";

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="mono rounded-full bg-surface-2 px-3 py-1 text-[0.7rem]">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <article className="card flex h-full flex-col p-7 sm:p-9">
      <div className="flex items-start justify-between gap-4">
        <span className="card-index mono text-xs text-ink-2">{String(index + 1).padStart(2, "0")}</span>
        <span className="eyebrow text-right">{item.kind}</span>
      </div>
      <h3 className="mt-10 text-2xl font-medium tracking-tight sm:text-3xl">{item.title}</h3>
      <p className="mt-4 mb-8 leading-relaxed text-ink-2">{item.summary}</p>
      <div className="mt-auto">
        <Tags tags={item.tags} />
      </div>
    </article>
  );
}

function BrowserFrame({ url, children }: { url?: string; children: React.ReactNode }) {
  return (
    <div className="shot">
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="size-2 rounded-full bg-ink/15" />
        </span>
        {url && <span className="mono truncate text-[0.65rem] text-ink-2">{url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>}
      </div>
      {children}
    </div>
  );
}

function ProjectRow({ item, index }: { item: WorkItem; index: number }) {
  const [main, back] = item.images ?? [];
  const flip = index % 2 === 1;

  return (
    <article className="project grid items-center gap-10 border-t border-line py-14 md:grid-cols-12 md:gap-16 md:py-20">
      <Reveal className={`relative md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        {back && (
          <div className="shot-back absolute -top-5 -right-3 hidden w-3/5 sm:block" aria-hidden="true">
            <BrowserFrame>
              <Image src={back.src} alt="" width={back.width} height={back.height} className="block w-full" />
            </BrowserFrame>
          </div>
        )}
        {main && (
          <div className={`shot-main relative ${back ? "sm:mr-16 sm:mt-10" : ""}`}>
            {item.imageFit === "contain" ? (
              <div className="shot">
                <Image
                  src={main.src}
                  alt={main.alt}
                  width={main.width}
                  height={main.height}
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="block w-full"
                />
              </div>
            ) : (
              <BrowserFrame url={item.href}>
                <div className="overflow-hidden">
                  <Image
                    src={main.src}
                    alt={main.alt}
                    width={main.width}
                    height={main.height}
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="block w-full"
                  />
                </div>
              </BrowserFrame>
            )}
          </div>
        )}
      </Reveal>

      <Reveal delay={120} className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <div className="flex items-baseline gap-4">
          <span className="mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="eyebrow">{item.kind}</span>
        </div>
        <h3 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">{item.title}</h3>
        <p className="mt-5 text-lg leading-relaxed text-ink-2">{item.summary}</p>
        <div className="mt-8">
          <Tags tags={item.tags} />
        </div>
        {item.href && (
          <a href={item.href} target="_blank" rel="noreferrer" className="btn btn-ghost mt-10">
            <span>{item.linkLabel ?? "Visit"}</span>
            <span className="arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
        )}
      </Reveal>
    </article>
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

        <Reveal className="eyebrow mt-24 mb-2">Projects</Reveal>
        <div>
          {projects.map((item, i) => (
            <ProjectRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
