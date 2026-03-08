import type { Metadata } from "next";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/ui/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: pages.contact.title,
  description: pages.contact.description,
};

const socials = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
  { label: "Twitter/X", href: site.social.twitter, Icon: Twitter },
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "YouTube", href: site.social.youtube, Icon: Youtube },
];

export default function ContactPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const department =
    typeof searchParams?.department === "string" ? searchParams.department : undefined;
  const subject =
    typeof searchParams?.subject === "string" ? searchParams.subject : undefined;
  return (
    <>
      <PageHero title={pages.contact.title} description={pages.contact.description} image={pages.contact.heroImage}>
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.contact.title },
          ]}
        />
      </PageHero>

      <section className="bg-surface">
        <div className="container pt-10 pb-16 sm:pb-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-7">
                <p className="font-display text-2xl text-dark">{pages.contact.headings.info}</p>
                <div className="mt-4 space-y-3 text-sm text-muted">
                  <p>
                    <span className="font-semibold text-dark">
                      {pages.labels.fields.location}:
                    </span>{" "}
                    {site.contacts.address}
                  </p>
                  <p>
                    <span className="font-semibold text-dark">{pages.contact.labels.phone}:</span>{" "}
                    <span className="font-mono">{site.contacts.phone}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-dark">{pages.contact.labels.email}:</span>{" "}
                    <a className="hover:text-accent" href={`mailto:${site.contacts.email}`}>
                      {site.contacts.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-dark">{pages.contact.labels.medical}:</span>{" "}
                    <a className="hover:text-accent" href={`mailto:${site.contacts.medical}`}>
                      {site.contacts.medical}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-dark">{pages.contact.labels.media}:</span>{" "}
                    <a className="hover:text-accent" href={`mailto:${site.contacts.media}`}>
                      {site.contacts.media}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-dark">{pages.contact.labels.hours}:</span>{" "}
                    {site.contacts.hours}
                  </p>
                </div>

                <div className="mt-6 rounded-3xl bg-highlight p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-primary">{pages.contact.mapLabel}</p>
                    <p className="text-xs font-semibold text-muted">
                      {pages.contact.labels.mapStatusReady}
                    </p>
                  </div>
                  <div className="mt-4">
                    <ContactMap />
                  </div>
                </div>
              </Card>

              <Card className="p-7">
                <p className="font-display text-2xl text-dark">{pages.contact.headings.social}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-dark hover:bg-highlight focus-visible:focus-ring"
                    >
                      <Icon className="h-4 w-4 text-muted" aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <ContactForm prefill={{ department, subject }} />
            </div>
          </div>

          <div className="mt-14">
            <Card className="p-10">
              <p className="font-display text-2xl text-dark">{pages.contact.headings.offices}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pages.contact.offices.map((o) => (
                  <div key={o.city} className="rounded-2xl bg-surface p-5">
                    <p className="font-semibold text-dark">{o.city}</p>
                    <p className="mt-1 text-sm text-muted">{o.line}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

