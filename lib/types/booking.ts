export type ConsultType =
  | "DRUG_INFORMATION"
  | "PREGNANCY_SAFETY"
  | "PAEDIATRIC_ADVICE"
  | "DRUG_INTERACTION"
  | "CHRONIC_DISEASE"
  | "PRESCRIPTION_REVIEW"
  | "GENERAL";

export type ConsultFormat = "PHONE" | "VIDEO" | "IN_PERSON";

export interface BookingPayload {
  consultationType: ConsultType;
  format: ConsultFormat;
  scheduledDate: string; // YYYY-MM-DD
  scheduledTime: string; // e.g. "10:00 AM"
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  patientAge?: number;
  patientGender?: string;
  patientState: string;
  drugName?: string;
  notes?: string;
  howHeard?: string;
}

export interface BookingConfirmation {
  bookingRef: string;
  consultationType: string;
  format: string;
  scheduledDate: string;
  scheduledTime: string;
  patientName: string;
  patientPhone: string;
  patientState: string;
}
