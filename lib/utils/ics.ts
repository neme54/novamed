/**
 * Generate .ics content for a pharmacist booking.
 * Date format: YYYY-MM-DD, time format: "10:00 AM"
 */
export function buildIcsContent(params: {
  bookingRef: string;
  title: string;
  date: string;
  time: string;
  durationMinutes?: number;
}): string {
  const { bookingRef, title, date, time, durationMinutes = 30 } = params;
  // Parse "10:00 AM" -> 10:00 (floating local time)
  const normalized = time.replace(/\s/g, "").toUpperCase();
  const match = normalized.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);
  const hStr = match?.[1] ?? "9";
  const mStr = match?.[2] ?? "0";
  const period = (match?.[3] ?? "AM").toUpperCase();
  let h = Math.min(23, Math.max(0, parseInt(hStr, 10) || 0));
  const m = Math.min(59, Math.max(0, parseInt(mStr, 10) || 0));
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  const start = `${date.replace(/-/g, "")}T${String(h).padStart(2, "0")}${String(m).padStart(2, "0")}00`;
  const endMin = m + durationMinutes;
  const endH = h + Math.floor(endMin / 60);
  const endM = endMin % 60;
  const endStr = `${date.replace(/-/g, "")}T${String(endH).padStart(2, "0")}${String(endM).padStart(2, "0")}00`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NovaMed//Book Pharmacist//EN",
    "BEGIN:VEVENT",
    `UID:${bookingRef}@novamedpharma.com`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${endStr}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:NovaMed Pharmacist Consultation. Ref: ${bookingRef}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
