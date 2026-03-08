import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stepper } from "@/components/ui/Stepper";
import { Button } from "@/components/ui/Button";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

export const metadata: Metadata = {
  title: pages.manufacturing.title,
  description: pages.manufacturing.description,
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title={pages.manufacturing.title}
        description={pages.manufacturing.description}
        image={pages.manufacturing.heroImage}
      >
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.manufacturing.title },
          ]}
        />
      </PageHero>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.manufacturing.description}
            description={pages.manufacturing.overview}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pages.manufacturing.plants.map((p) => (
              <Card
                key={p.name}
                className="group overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-2xl text-dark">{p.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.focus}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.manufacturing.headings.qa}
            description={pages.manufacturing.overview}
          />
          <div className="mt-10">
            <Stepper steps={pages.manufacturing.qaFlow} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.manufacturing.headings.certifications}
            description={pages.manufacturing.overview}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pages.manufacturing.certifications.map((c) => (
              <Card key={c} className="p-7">
                <p className="font-semibold text-dark">{c}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/11]">
                <Image
                  src={pages.manufacturing.rd.image}
                  alt={pages.manufacturing.rd.heading}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
          <div className="lg:col-span-6">
            <p className="font-display text-3xl leading-tight text-dark sm:text-4xl">
              {pages.manufacturing.rd.heading}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {pages.manufacturing.rd.body}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <Card className="p-10">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-display text-3xl text-dark">
                  {pages.manufacturing.contract.heading}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {pages.manufacturing.contract.body}
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Button
                  href={`/contact?department=Sales&subject=${encodeURIComponent(
                    pages.manufacturing.contract.subject,
                  )}`}
                  variant="secondary"
                  size="lg"
                >
                  {pages.manufacturing.contract.ctaLabel}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

