"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";
import type { ConsultType } from "@/lib/types/booking";
import { pages } from "@/lib/data/pages";

export function Step1_ConsultType({
  value,
  onChange,
}: {
  value: ConsultType | "";
  onChange: (v: ConsultType) => void;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pages.booking.consultTypes.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value as ConsultType)}
          className={cn(
            "rounded-2xl border-2 p-6 text-left transition-all focus-visible:focus-ring",
            value === opt.value
              ? "border-accent bg-accent/10 shadow-md"
              : "border-black/10 bg-white hover:border-accent/40 hover:bg-highlight",
          )}
        >
          <span className="font-semibold text-dark">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
