"use client";

import { useEffect, useState } from "react";

import { nav, profile } from "@/content/site";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const item of nav) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <div className="container-x">
        <nav
          className={`nav-shell flex items-center justify-between rounded-2xl py-3 pr-3 pl-5 ${scrolled ? "is-scrolled" : ""}`}
        >
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-semibold tracking-tight">{profile.shortName}</span>
            <span className="eyebrow hidden sm:inline">/ Software Developer</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link flex items-baseline gap-1.5 text-sm"
                  aria-current={active === item.id}
                >
                  <span className="mono text-[0.65rem] text-ink-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={profile.cvPath} download className="btn btn-solid !py-2.5 text-sm">
              <span>Download CV</span>
            </a>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-line md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </nav>

        <div
          className={`nav-shell mt-2 overflow-hidden rounded-2xl md:hidden ${open ? "max-h-80" : "invisible max-h-0"}`}
          style={{ transition: "max-height .5s var(--ease), visibility .5s" }}
        >
          <ul className="p-2">
            {nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 rounded-xl px-3 py-3 text-lg hover:bg-surface-2"
                >
                  <span className="mono text-xs text-ink-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
