"use client";

import { type ElementType, type ReactNode, useEffect, useRef } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Use "reveal" for fade-up, or "" when children handle their own motion (line masks, rules). */
  variant?: "reveal" | "";
  children: ReactNode;
};

// Adds `is-visible` once the element scrolls into view; the CSS does the rest.
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "reveal",
  children,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${variant} ${className}`.trim()}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
