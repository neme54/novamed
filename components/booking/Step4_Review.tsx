"use client";

import * as React from "react";
import { pages } from "@/lib/data/pages";
import type { BookingPayload, ConsultType, ConsultFormat } from "@/lib/types/booking";

function getConsultLabel(value: ConsultType): string {
  const found = pages.booking.consultTypes.find((c) => c.value === value);
  return found?.label ?? value;
}

function getFormatLabel(value: ConsultFormat): string {
  const found = pages.booking.formats.find((f) => f.value === value);
  return found?.label ?? value;
}

export function Step4_Review({ data }: { data: Partial<BookingPayload> }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-surface-dark p-6">
      <h3 className="font-display text-xl text-dark">Booking summary</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-muted">Consultation</dt>
          <dd className="font-medium text-dark">{data.consultationType ? getConsultLabel(data.consultationType) : "—"}</dd>
        </div>
        <div>
          <dt className="font-semibold text-muted">Format</dt>
          <dd className="font-medium text-dark">{data.format ? getFormatLabel(data.format) : "—"}</dd>
        </div>
        <div>
          <dt className="font-semibold text-muted">Date & time</dt>
          <dd className="font-mono font-medium text-dark">
            {data.scheduledDate && data.scheduledTime
              ? `${data.scheduledDate} at ${data.scheduledTime}`
              : "—"}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-muted">Name</dt>
          <dd className="font-medium text-dark">{data.patientName || "—"}</dd>
        </div>
        <div>
          <dt className="font-semibold text-muted">Phone</dt>
          <dd className="font-mono font-medium text-dark">{data.patientPhone || "—"}</dd>
        </div>
        <div>
          <dt className="font-semibold text-muted">State</dt>
          <dd className="font-medium text-dark">{data.patientState || "—"}</dd>
        </div>
        {data.patientEmail && (
          <div>
            <dt className="font-semibold text-muted">Email</dt>
            <dd className="font-medium text-dark">{data.patientEmail}</dd>
          </div>
        )}
        {data.drugName && (
          <div>
            <dt className="font-semibold text-muted">Drug (if relevant)</dt>
            <dd className="font-medium text-dark">{data.drugName}</dd>
          </div>
        )}
        {data.notes && (
          <div>
            <dt className="font-semibold text-muted">Notes</dt>
            <dd className="font-medium text-dark">{data.notes}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
