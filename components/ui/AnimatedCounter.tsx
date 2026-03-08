"use client";

import * as React from "react";

function format(value: number) {
  return value.toLocaleString("en-NG");
}

export function AnimatedCounter({
  value,
  durationMs = 900,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const start = () => {
      if (started) return;
      started = true;
      const startTs = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - startTs) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start();
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [durationMs, value]);

  return (
    <span ref={ref} className={className}>
      {format(display)}
      {suffix}
    </span>
  );
}

