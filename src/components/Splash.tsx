"use client";

import { useEffect, useState } from "react";

const DURATION = 1400;

// Short counter-to-100 intro, shown once per browser session.
export default function Splash() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame = 0;
    // The inline script in layout.tsx sets this before first paint, so the
    // splash is already hidden by CSS; this just unmounts it.
    if (document.documentElement.dataset.splash === "skip") {
      frame = requestAnimationFrame(() => setHidden(true));
      return () => cancelAnimationFrame(frame);
    }

    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDone(true);
        document.documentElement.style.overflow = "";
        try {
          sessionStorage.setItem("splash-seen", "1");
        } catch {}
        setTimeout(() => setHidden(true), 900);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`splash ${done ? "is-done" : ""}`} aria-hidden="true">
      <div className="w-[min(420px,80vw)]">
        <div className="eyebrow flex justify-between">
          <span>Carl / Portfolio</span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className="mt-10 flex items-end justify-between">
          <span className="eyebrow">Loading</span>
          <span className="mono text-6xl font-light tabular-nums tracking-tight">
            {String(progress).padStart(2, "0")}
            <span className="text-ink-2 text-2xl">%</span>
          </span>
        </div>
        <div
          className="splash-bar mt-4"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
}
