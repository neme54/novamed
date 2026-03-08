"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { site } from "@/lib/data/site";

export function StatsBar() {
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="container py-10">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {site.stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-surface px-4 py-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {s.label}
              </dt>
              <dd className="mt-2 font-mono text-2xl font-semibold text-dark">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

