"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";
import { buildIcsContent } from "@/lib/utils/ics";

function getConsultLabel(type: string): string {
  const found = pages.booking.consultTypes.find((c) => c.value === type);
  return found?.label ?? type;
}

export function BookingConfirmation({
  bookingRef,
  date,
  time,
  consultationType,
}: {
  bookingRef: string;
  date: string;
  time: string;
  consultationType: string;
}) {
  const handleAddToCalendar = React.useCallback(() => {
    const title = `NovaMed Pharmacist — ${getConsultLabel(consultationType)}`;
    const ics = buildIcsContent({ bookingRef, title, date, time });
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `novamed-booking-${bookingRef}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  }, [bookingRef, date, time, consultationType]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348108217791";
  const text = encodeURIComponent(
    `My NovaMed pharmacist booking is confirmed. Ref: ${bookingRef}, ${date} at ${time}. ${getConsultLabel(consultationType)}.`,
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

  const dateDisplay = date
    ? new Date(date + "T12:00:00").toLocaleDateString("en-NG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="mx-auto max-w-xl text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success text-white"
      >
        <Check className="h-10 w-10" strokeWidth={3} />
      </motion.div>
      <h1 className="mt-6 font-display text-3xl text-dark">
        {pages.booking.confirmation.title}
      </h1>
      <p className="mt-2 font-mono text-lg font-semibold text-primary">
        {pages.booking.confirmation.refLabel}: {bookingRef}
      </p>

      <Card className="mt-8 p-6 text-left">
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="font-semibold text-muted">Consultation</dt>
            <dd className="font-medium text-dark">{getConsultLabel(consultationType)}</dd>
          </div>
          <div>
            <dt className="font-semibold text-muted">Date</dt>
            <dd className="font-medium text-dark">{dateDisplay}</dd>
          </div>
          <div>
            <dt className="font-semibold text-muted">Time</dt>
            <dd className="font-mono font-medium text-dark">{time}</dd>
          </div>
        </dl>
      </Card>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button
          variant="secondary"
          size="md"
          onClick={handleAddToCalendar}
          leftIcon={<span className="text-lg">📅</span>}
        >
          {pages.booking.confirmation.addToCalendar}
        </Button>
        <Button
          href={whatsappUrl}
          variant="outline"
          size="md"
          external
          leftIcon={<span className="text-lg">WhatsApp</span>}
          className="border-success/40 text-success hover:bg-success/10"
        >
          {pages.booking.confirmation.shareWhatsApp}
        </Button>
      </div>

      <p className="mt-8 text-sm text-muted">
        We&apos;ll contact you on the scheduled date. For changes, contact us at{" "}
        <a href={`mailto:${site.contacts.email}`} className="font-semibold text-primary hover:underline">
          {site.contacts.email}
        </a>
        .
      </p>

      <div className="mt-10">
        <Button href="/" variant="ghost" size="md">
          {pages.booking.confirmation.backHome}
        </Button>
      </div>
    </div>
  );
}
