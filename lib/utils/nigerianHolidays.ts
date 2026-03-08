/**
 * Nigerian public holidays 2025–2027 (YYYY-MM-DD).
 * Used to exclude dates from pharmacist booking slots.
 */
const HOLIDAYS: string[] = [
  "2025-01-01", "2025-04-18", "2025-04-21", "2025-05-01", "2025-05-29",
  "2025-06-12", "2025-10-01", "2025-12-25", "2025-12-26",
  "2026-01-01", "2026-04-03", "2026-04-06", "2026-05-01", "2026-05-29",
  "2026-06-12", "2026-10-01", "2026-12-25", "2026-12-26",
  "2027-01-01", "2027-03-26", "2027-03-29", "2027-05-01", "2027-05-29",
  "2027-06-12", "2027-10-01", "2027-12-25", "2027-12-26",
];

export function isNigerianHoliday(date: Date): boolean {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return HOLIDAYS.includes(`${y}-${m}-${d}`);
}

export function isWeekday(date: Date): boolean {
  const day = date.getDay();
  return day >= 1 && day <= 5;
}

/** Monday–Friday, 8am–5pm WAT. 30-minute slots. */
export const DEFAULT_TIME_SLOTS = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
];
