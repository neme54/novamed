"use client";

import * as React from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { pages } from "@/lib/data/pages";

export function ContactForm({
  defaultDepartment,
  prefill,
}: {
  defaultDepartment?: string;
  prefill?: { department?: string; subject?: string };
}) {
  const [sending, setSending] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    department:
      prefill?.department ||
      defaultDepartment ||
      pages.contact.departments[0] ||
      "",
    subject: prefill?.subject || "",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      console.log("Contact response", json);
      alert(json?.message || pages.contact.form.successMessage);
      setForm((s) => ({ ...s, name: "", company: "", subject: "", message: "" }));
    } finally {
      setSending(false);
    }
  }

  return (
    <Card className="p-7">
      <p className="font-display text-2xl text-dark">{pages.contact.form.heading}</p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <Field
          label={pages.contact.form.fields.name}
          value={form.name}
          onChange={(v) => setForm((s) => ({ ...s, name: v }))}
          required
        />
        <Field
          label={pages.contact.form.fields.company}
          value={form.company}
          onChange={(v) => setForm((s) => ({ ...s, company: v }))}
        />
        <div>
          <label className="text-sm font-semibold text-dark">
            {pages.contact.form.fields.department}
          </label>
          <select
            value={form.department}
            onChange={(e) => setForm((s) => ({ ...s, department: e.target.value }))}
            className="mt-2 h-12 w-full rounded-2xl border border-black/10 bg-surface px-4 text-sm text-dark focus-visible:focus-ring"
            aria-label={pages.contact.form.fields.department}
          >
            {pages.contact.departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <Field
          label={pages.contact.form.fields.subject}
          value={form.subject}
          onChange={(v) => setForm((s) => ({ ...s, subject: v }))}
          required
        />
        <div>
          <label className="text-sm font-semibold text-dark">
            {pages.contact.form.fields.message}
          </label>
          <textarea
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            required
            rows={6}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm text-dark placeholder:text-muted focus-visible:focus-ring"
          />
        </div>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={sending}
        >
          {sending ? pages.labels.forms.sending : pages.contact.form.submit}
        </Button>
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
        className="mt-2 h-12 w-full rounded-2xl border border-black/10 bg-surface px-4 text-sm text-dark focus-visible:focus-ring"
      />
    </div>
  );
}

