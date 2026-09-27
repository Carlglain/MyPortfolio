"use client";

import { useSyncExternalStore } from "react";

const format = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Douala",
  }).format(new Date());

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
};

// Live time in Buea, so visitors know when to expect a reply.
export default function LocalTime() {
  const time = useSyncExternalStore(subscribe, format, () => null);

  return (
    <span className="mono text-xs text-ink-2 tabular-nums">
      Buea <span className="text-ink">{time ?? "--:--"}</span> WAT
    </span>
  );
}
