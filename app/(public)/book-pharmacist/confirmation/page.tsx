import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageHero } from "@/components/ui/PageHero";
import { BookingConfirmation } from "@/components/booking/BookingConfirmation";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: `Booking confirmed | ${site.name}`,
  description: pages.booking.confirmation.title,
};

export default function BookingConfirmationPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const ref = typeof searchParams?.ref === "string" ? searchParams.ref : "";
  const date = typeof searchParams?.date === "string" ? searchParams.date : "";
  const time = typeof searchParams?.time === "string" ? decodeURIComponent(searchParams.time) : "";
  const type = typeof searchParams?.type === "string" ? searchParams.type : "";

  if (!ref || !date || !time || !type) {
    redirect("/book-pharmacist");
  }

  return (
    <>
      <PageHero
        title={pages.booking.confirmation.title}
        description={`Reference: ${ref}`}
        image={pages.booking.heroImage}
      />
      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <BookingConfirmation
            bookingRef={ref}
            date={date}
            time={time}
            consultationType={type}
          />
        </div>
      </section>
    </>
  );
}
