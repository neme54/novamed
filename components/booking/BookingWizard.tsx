"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { StepIndicator } from "./StepIndicator";
import { Step1_ConsultType } from "./Step1_ConsultType";
import { Step2_DateTime } from "./Step2_DateTime";
import { Step3_PatientInfo } from "./Step3_PatientInfo";
import { Step4_Review } from "./Step4_Review";
import type { BookingPayload, ConsultFormat } from "@/lib/types/booking";
import { pages } from "@/lib/data/pages";

const INITIAL: Partial<BookingPayload> = {
  consultationType: undefined,
  format: undefined,
  scheduledDate: "",
  scheduledTime: "",
  patientName: "",
  patientPhone: "",
  patientEmail: "",
  patientAge: undefined,
  patientGender: "",
  patientState: "",
  drugName: "",
  notes: "",
  howHeard: "",
};

export function BookingWizard() {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [submitting, setSubmitting] = React.useState(false);
  const [data, setData] = React.useState<Partial<BookingPayload>>(INITIAL);

  const update = React.useCallback((field: keyof BookingPayload, value: string | number | undefined) => {
    setData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const canProceedStep1 = !!data.consultationType;
  const canProceedStep2 = !!data.format && !!data.scheduledDate && !!data.scheduledTime;
  const canProceedStep3 =
    !!data.patientName?.trim() && !!data.patientPhone?.trim() && !!data.patientState?.trim();

  const handleSubmit = React.useCallback(async () => {
    if (!canProceedStep3 || !data.consultationType || !data.format || !data.scheduledDate || !data.scheduledTime) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          consultationType: data.consultationType,
          format: data.format,
          scheduledDate: data.scheduledDate,
          scheduledTime: data.scheduledTime,
          patientName: data.patientName,
          patientPhone: data.patientPhone,
          patientEmail: data.patientEmail || undefined,
          patientAge: data.patientAge ? Number(data.patientAge) : undefined,
          patientGender: data.patientGender || undefined,
          patientState: data.patientState,
          drugName: data.drugName || undefined,
          notes: data.notes || undefined,
          howHeard: data.howHeard || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Booking failed");
      const params = new URLSearchParams({
        ref: json.bookingRef,
        date: json.scheduledDate,
        time: encodeURIComponent(json.scheduledTime),
        type: json.consultationType,
      });
      router.push(`/book-pharmacist/confirmation?${params.toString()}`);
    } catch (e) {
      console.error(e);
      setSubmitting(false);
    }
  }, [data, canProceedStep3, router]);

  return (
    <div className="mx-auto max-w-3xl">
      <StepIndicator currentStep={step} labels={pages.booking.steps} />

      <div className="mt-10">
        {step === 1 && (
          <>
            <p className="mb-4 text-sm text-muted">
              Select one option below to continue.
            </p>
            <Step1_ConsultType
              value={data.consultationType ?? ""}
              onChange={(v) => update("consultationType", v)}
            />
            <div className="mt-10 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-surface transition-colors hover:bg-primary-light disabled:pointer-events-none disabled:opacity-50 focus-visible:focus-ring"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <Step2_DateTime
              format={(data.format as ConsultFormat) ?? ""}
              onFormatChange={(v) => update("format", v)}
              date={data.scheduledDate ?? ""}
              onDateChange={(v) => update("scheduledDate", v)}
              time={data.scheduledTime ?? ""}
              onTimeChange={(v) => update("scheduledTime", v)}
            />
            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-primary hover:bg-highlight focus-visible:focus-ring"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!canProceedStep2}
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-surface transition-colors hover:bg-primary-light disabled:pointer-events-none disabled:opacity-50 focus-visible:focus-ring"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <Step3_PatientInfo
              patientName={data.patientName ?? ""}
              patientPhone={data.patientPhone ?? ""}
              patientEmail={data.patientEmail ?? ""}
              patientAge={data.patientAge !== undefined ? String(data.patientAge) : ""}
              patientGender={data.patientGender ?? ""}
              patientState={data.patientState ?? ""}
              drugName={data.drugName ?? ""}
              notes={data.notes ?? ""}
              howHeard={data.howHeard ?? ""}
              onChange={(field, value) => update(field as keyof BookingPayload, value)}
            />
            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-primary hover:bg-highlight focus-visible:focus-ring"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                disabled={!canProceedStep3}
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-surface transition-colors hover:bg-primary-light disabled:pointer-events-none disabled:opacity-50 focus-visible:focus-ring"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <Step4_Review data={data} />
            <div className="mt-10 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-primary hover:bg-highlight focus-visible:focus-ring"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={submitting}
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-dark transition-colors hover:bg-accent-light disabled:pointer-events-none disabled:opacity-50 focus-visible:focus-ring"
              >
                {submitting ? pages.booking.submitting : pages.booking.submit}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
