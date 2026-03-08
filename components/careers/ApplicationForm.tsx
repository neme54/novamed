"use client";

import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { pages } from "@/lib/data/pages";

export function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [sending, setSending] = React.useState(false);
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    years: "",
    coverLetter: "",
    cvFileName: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const payload = { ...form, jobTitle };
      // UI-only upload: we send filename for backend integration later.
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      console.log("Apply response", json);
      alert(json?.message || pages.careers.application.successMessage);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        years: "",
        coverLetter: "",
        cvFileName: "",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <Card className="p-7">
      <form onSubmit={onSubmit} className="grid gap-4">
        <Field
          label={pages.careers.application.fields.fullName}
          value={form.fullName}
          onChange={(v) => setForm((s) => ({ ...s, fullName: v }))}
          required
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={pages.careers.application.fields.email}
            value={form.email}
            onChange={(v) => setForm((s) => ({ ...s, email: v }))}
            type="email"
            required
          />
          <Field
            label={pages.careers.application.fields.phone}
            value={form.phone}
            onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
            type="tel"
            required
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label={pages.careers.application.fields.linkedin}
            value={form.linkedin}
            onChange={(v) => setForm((s) => ({ ...s, linkedin: v }))}
            type="url"
          />
          <Field
            label={pages.careers.application.fields.years}
            value={form.years}
            onChange={(v) => setForm((s) => ({ ...s, years: v }))}
            type="number"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-dark">
            {pages.careers.application.fields.coverLetter}
          </label>
          <textarea
            value={form.coverLetter}
            onChange={(e) =>
              setForm((s) => ({ ...s, coverLetter: e.target.value }))
            }
            rows={6}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm text-dark placeholder:text-muted focus-visible:focus-ring"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-dark">
            {pages.careers.application.fields.cv}
          </label>
          <div className="mt-2 flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-surface px-4 py-3">
            <span className="text-sm text-muted">
              {form.cvFileName || pages.careers.application.cvPlaceholder}
            </span>
            <input
              type="file"
              aria-label={pages.careers.application.fields.cv}
              onChange={(e) =>
                setForm((s) => ({
                  ...s,
                  cvFileName: e.target.files?.[0]?.name ?? "",
                }))
              }
              className="text-sm"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            variant="secondary"
            size="lg"
            className="w-full"
            disabled={sending}
            type="submit"
          >
            {sending ? pages.labels.forms.sending : pages.careers.application.submitLabel}
          </Button>
        </div>
      </form>
    </Card>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  const id = React.useId();
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-dark">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        required={required}
        className="mt-2 h-12 w-full rounded-2xl border border-black/10 bg-surface px-4 text-sm text-dark placeholder:text-muted focus-visible:focus-ring"
      />
    </div>
  );
}

