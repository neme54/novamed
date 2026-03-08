import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

export const metadata: Metadata = {
  title: pages.csr.title,
  description: pages.csr.description,
};

export default function CsrPage() {
  return (
    <>
      <PageHero title={pages.csr.description} description={pages.csr.title} image={pages.csr.heroImage}>
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.csr.breadcrumb },
          ]}
        />
      </PageHero>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.csr.headings.pillars}
            description={pages.csr.description}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pages.csr.pillars.map((p) => (
              <Card key={p.title} className="overflow-hidden">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-2xl text-dark">{p.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeader eyebrow={site.shortName} title={pages.csr.headings.impact} />
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {pages.csr.impactStats.map((s) => (
              <Card key={s.label} className="bg-surface p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </dt>
                <dd className="mt-3 font-mono text-2xl font-semibold text-dark">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
              </Card>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.csr.headings.spotlights}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pages.csr.pillars.slice(0, 3).map((p) => (
              <Card key={p.title} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <p className="font-display text-2xl text-dark">{p.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
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
            title={pages.csr.headings.partnerships}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pages.csr.partnerships.map((p) => (
              <Card key={p} className="flex items-center justify-center p-7">
                <span className="text-sm font-semibold text-muted">{p}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.csr.headings.gallery}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pages.csr.gallery.map((src, idx) => (
              <Card key={src} className="overflow-hidden">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={src}
                    alt={`${pages.csr.headings.gallery} ${pages.labels.image} ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <Card className="p-10">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="font-display text-3xl text-dark">{pages.csr.cta.heading}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {pages.csr.cta.body}
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Button href={pages.csr.cta.href} variant="secondary" size="lg">
                  {pages.csr.cta.button}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

