"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { DEFAULT_TIME_SLOTS } from "@/lib/utils/nigerianHolidays";

export function TimeSlotPicker({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (time: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
      {DEFAULT_TIME_SLOTS.map((time) => (
        <button
          key={time}
          type="button"
          disabled={disabled}
          onClick={() => onChange(time)}
          className={cn(
            "rounded-lg border py-2.5 text-sm font-medium transition-colors focus-visible:focus-ring",
            value === time
              ? "border-accent bg-accent/15 text-dark"
              : "border-black/10 bg-white text-dark hover:border-accent/40 hover:bg-highlight",
          )}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
