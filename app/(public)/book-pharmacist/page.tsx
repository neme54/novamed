import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: `${pages.booking.title} | ${site.name}`,
  description: pages.booking.description,
};

export default function BookPharmacistPage() {
  return (
    <>
      <PageHero
        title={pages.booking.title}
        description={pages.booking.description}
        image={pages.booking.heroImage}
      />
      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <BookingWizard />
        </div>
      </section>
    </>
  );
}
