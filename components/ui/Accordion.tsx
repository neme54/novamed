"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function Accordion({
  items,
  className,
}: {
  className?: string;
  items: ReadonlyArray<{ id: string; question: string; answer: string }>;
}) {
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const open = item.id === openId;
        const panelId = `${item.id}-panel`;
        const buttonId = `${item.id}-button`;
        return (
          <div key={item.id} className="rounded-2xl border border-black/5 bg-white">
            <button
              id={buttonId}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-dark focus-visible:focus-ring"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenId(open ? null : item.id)}
              type="button"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-muted transition-transform",
                  open ? "rotate-180" : "rotate-0",
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden px-5 transition-[grid-template-rows] duration-300",
                open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 text-sm leading-relaxed text-muted">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

