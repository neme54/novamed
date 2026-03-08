"use client";

import * as React from "react";
import { pages } from "@/lib/data/pages";

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

export function Step3_PatientInfo({
  patientName,
  patientPhone,
  patientEmail,
  patientAge,
  patientGender,
  patientState,
  drugName,
  notes,
  howHeard,
  onChange,
}: {
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  patientAge: string;
  patientGender: string;
  patientState: string;
  drugName: string;
  notes: string;
  howHeard: string;
  onChange: (field: string, value: string | number) => void;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="patientName" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.patientName} *
        </label>
        <input
          id="patientName"
          type="text"
          required
          value={patientName}
          onChange={(e) => onChange("patientName", e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        />
      </div>
      <div>
        <label htmlFor="patientPhone" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.patientPhone} *
        </label>
        <input
          id="patientPhone"
          type="tel"
          required
          value={patientPhone}
          onChange={(e) => onChange("patientPhone", e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        />
      </div>
      <div>
        <label htmlFor="patientEmail" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.patientEmail}
        </label>
        <input
          id="patientEmail"
          type="email"
          value={patientEmail}
          onChange={(e) => onChange("patientEmail", e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        />
      </div>
      <div>
        <label htmlFor="patientState" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.patientState} *
        </label>
        <select
          id="patientState"
          required
          value={patientState}
          onChange={(e) => onChange("patientState", e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        >
          <option value="">Select state</option>
          {NIGERIAN_STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="patientAge" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.patientAge}
        </label>
        <input
          id="patientAge"
          type="number"
          min={1}
          max={120}
          value={patientAge}
          onChange={(e) => onChange("patientAge", e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        />
      </div>
      <div>
        <label htmlFor="patientGender" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.patientGender}
        </label>
        <select
          id="patientGender"
          value={patientGender}
          onChange={(e) => onChange("patientGender", e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="drugName" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.drugName}
        </label>
        <input
          id="drugName"
          type="text"
          value={drugName}
          onChange={(e) => onChange("drugName", e.target.value)}
          className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="notes" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.notes}
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => onChange("notes", e.target.value)}
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-dark focus-visible:focus-ring"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="howHeard" className="mb-1 block text-sm font-semibold text-dark">
          {pages.booking.form.howHeard}
        </label>
        <input
          id="howHeard"
          type="text"
          value={howHeard}
          onChange={(e) => onChange("howHeard", e.target.value)}
          placeholder="e.g. Website, doctor, pharmacy"
          className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-dark focus-visible:focus-ring"
        />
      </div>
    </div>
  );
}
