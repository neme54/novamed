"use client";

import { motion } from "framer-motion";

export function Timeline({
  items,
}: {
  items: ReadonlyArray<{ year: number; title: string; detail: string }>;
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6">
      <div className="hidden grid-cols-6 gap-4 lg:grid">
        {items.map((m) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl bg-surface p-4"
          >
            <p className="font-mono text-sm font-semibold text-primary">{m.year}</p>
            <p className="mt-2 font-semibold text-dark">{m.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{m.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="lg:hidden">
        <div className="flex gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((m) => (
            <div key={m.year} className="min-w-[84%] rounded-2xl bg-surface p-5">
              <p className="font-mono text-sm font-semibold text-primary">{m.year}</p>
              <p className="mt-2 font-semibold text-dark">{m.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

