"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";
import type { ConsultFormat } from "@/lib/types/booking";
import { pages } from "@/lib/data/pages";
import { TimeSlotPicker } from "./TimeSlotPicker";

export function Step2_DateTime({
  format,
  onFormatChange,
  date,
  onDateChange,
  time,
  onTimeChange,
}: {
  format: ConsultFormat | "";
  onFormatChange: (v: ConsultFormat) => void;
  date: string;
  onDateChange: (v: string) => void;
  time: string;
  onTimeChange: (v: string) => void;
}) {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  const minDate = `${y}-${m}-${d}`;

  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxY = maxDate.getFullYear();
  const maxM = String(maxDate.getMonth() + 1).padStart(2, "0");
  const maxD = String(maxDate.getDate()).padStart(2, "0");
  const maxDateStr = `${maxY}-${maxM}-${maxD}`;

  return (
    <div className="space-y-8">
      <div>
        <p className="mb-3 text-sm font-semibold text-dark">Consultation format</p>
        <div className="flex flex-wrap gap-3">
          {pages.booking.formats.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => onFormatChange(f.value as ConsultFormat)}
              className={cn(
                "rounded-xl border-2 px-5 py-3 text-sm font-semibold transition-colors focus-visible:focus-ring",
                format === f.value
                  ? "border-accent bg-accent/10 text-dark"
                  : "border-black/10 bg-white text-dark hover:border-accent/40",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="booking-date" className="mb-2 block text-sm font-semibold text-dark">
          Preferred date
        </label>
        <input
          id="booking-date"
          type="date"
          min={minDate}
          max={maxDateStr}
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="h-12 w-full max-w-xs rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        />
        <p className="mt-2 text-xs text-muted">
          Mon–Fri only. We&apos;re closed on Nigerian public holidays.
        </p>
      </div>

      <div>
        <label className="mb-3 block text-sm font-semibold text-dark">
          Preferred time (WAT)
        </label>
        <TimeSlotPicker value={time} onChange={onTimeChange} />
      </div>
    </div>
  );
}
