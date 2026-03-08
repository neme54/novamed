import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: pages.regulatory.title,
  description: pages.regulatory.description,
};

export default function RegulatoryPage() {
  return (
    <>
      <PageHero
        title={pages.regulatory.title}
        description={pages.regulatory.description}
        image={pages.regulatory.heroImage}
      >
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.regulatory.title },
          ]}
        />
      </PageHero>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.regulatory.headings.commitment}
            description={pages.regulatory.intro}
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Card className="p-7">
            <p className="font-display text-2xl text-dark">{pages.regulatory.headings.nafdac}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{pages.regulatory.nafdac}</p>
          </Card>
          <Card className="p-7">
            <p className="font-display text-2xl text-dark">{pages.regulatory.headings.who}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{pages.regulatory.who}</p>
          </Card>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.regulatory.headings.certifications}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pages.regulatory.certs.map((c) => (
              <Card key={c.name} className="p-7">
                <p className="font-semibold text-dark">{c.name}</p>
                <p className="mt-3 text-sm text-muted">{c.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {c.year} • {c.scope}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" id="downloads">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.regulatory.headings.downloads}
            description={pages.regulatory.downloadsDescription}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pages.regulatory.downloads.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="block rounded-2xl border border-black/10 bg-surface px-6 py-5 text-sm font-semibold text-primary hover:border-accent/40 hover:bg-highlight focus-visible:focus-ring"
              >
                {d.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Card className="p-7">
            <p className="font-display text-2xl text-dark">{pages.regulatory.headings.pharmacovigilance}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {pages.regulatory.pharmacovigilance}
            </p>
          </Card>
          <Card className="p-7">
            <p className="font-display text-2xl text-dark">{pages.regulatory.headings.recall}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {pages.regulatory.recall}
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.regulatory.headings.faqs}
          />
          <div className="mt-10">
            <Accordion items={pages.regulatory.faqs} />
          </div>
        </div>
      </section>
    </>
  );
}

