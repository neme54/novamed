import { NextRequest, NextResponse } from "next/server";

import { generateBookingRef } from "@/lib/utils/generateRef";
import type { BookingPayload, ConsultType, ConsultFormat } from "@/lib/types/booking";

const VALID_TYPES: ConsultType[] = [
  "DRUG_INFORMATION",
  "PREGNANCY_SAFETY",
  "PAEDIATRIC_ADVICE",
  "DRUG_INTERACTION",
  "CHRONIC_DISEASE",
  "PRESCRIPTION_REVIEW",
  "GENERAL",
];
const VALID_FORMATS: ConsultFormat[] = ["PHONE", "VIDEO", "IN_PERSON"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({})) as Partial<BookingPayload>;

    const {
      consultationType,
      format,
      scheduledDate,
      scheduledTime,
      patientName,
      patientPhone,
      patientState,
    } = body;

    if (
      !consultationType ||
      !VALID_TYPES.includes(consultationType) ||
      !format ||
      !VALID_FORMATS.includes(format) ||
      !scheduledDate ||
      !scheduledTime ||
      !patientName ||
      !patientPhone ||
      !patientState
    ) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 },
      );
    }

    const bookingRef = generateBookingRef();

    // TODO: persist to DB via Prisma when ready
    console.log("Booking received", {
      bookingRef,
      consultationType,
      format,
      scheduledDate,
      scheduledTime,
      patientName,
      patientPhone,
      patientState,
      ...(body.patientEmail && { patientEmail: body.patientEmail }),
      ...(body.drugName && { drugName: body.drugName }),
    });

    return NextResponse.json({
      success: true,
      bookingRef,
      consultationType,
      format,
      scheduledDate,
      scheduledTime,
      patientName,
      patientPhone,
      patientState,
    });
  } catch (e) {
    console.error("Bookings API error", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
