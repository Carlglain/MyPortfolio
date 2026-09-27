import Reveal from "@/components/Reveal";
import { awards, profile } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-surface pt-28 pb-10 sm:pt-40">
      <div className="container-x">
        <Reveal className="eyebrow">
          <span className="text-ink">04</span> / Let&apos;s talk
        </Reveal>

        <Reveal
          variant=""
          as="h2"
          className="mt-10 text-[clamp(2.75rem,9vw,8.5rem)] leading-[0.92] font-semibold tracking-[-0.04em] uppercase"
        >
          <span className="line-mask">
            <span>Let&apos;s build</span>
          </span>
          <span className="line-mask" style={{ "--delay": "100ms" } as React.CSSProperties}>
            <span className="font-light text-ink-2">something</span>
          </span>
          <span className="line-mask" style={{ "--delay": "200ms" } as React.CSSProperties}>
            <span>
              reliable<span className="text-accent">.</span>
            </span>
          </span>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal delay={200} className="md:col-span-6">
            <p className="max-w-md text-lg text-ink-2">
              Open to full-time roles, contract work and interesting product problems, especially in fintech.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block border-b border-line pb-1 text-xl break-all transition-colors hover:border-ink sm:text-2xl"
            >
              {profile.email}
            </a>
            <p className="mono mt-4 text-sm text-ink-2">{profile.phone}</p>
          </Reveal>

          <Reveal delay={300} className="grid gap-10 sm:grid-cols-2 md:col-span-6">
            <div>
              <div className="eyebrow">Connect</div>
              <ul className="mt-4 space-y-2">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-2 text-lg"
                    >
                      {s.label}
                      <span
                        aria-hidden="true"
                        className="text-ink-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        &#8599;
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={profile.cvPath} download className="group flex items-center gap-2 text-lg">
                    CV (PDF)
                    <span aria-hidden="true" className="text-ink-2 group-hover:text-accent">
                      &darr;
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="eyebrow">Recognition</div>
              <ul className="mt-4 space-y-4">
                {awards.map((a) => (
                  <li key={a.title}>
                    <div>{a.title}</div>
                    <div className="mono text-xs text-ink-2">{[a.by, a.year].filter(Boolean).join(" · ")}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <footer className="mt-28 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <span className="mono text-xs text-ink-2">
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="eyebrow hover:!text-ink">
            Back to top &uarr;
          </a>
        </footer>
      </div>
    </section>
  );
}
