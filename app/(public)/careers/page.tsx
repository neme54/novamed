import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JobCard } from "@/components/careers/JobCard";
import { DepartmentFilter } from "@/components/careers/DepartmentFilter";
import { getDepartments, getJobs } from "@/lib/data/jobs";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

export const metadata: Metadata = {
  title: pages.careers.title,
  description: pages.careers.description,
};

export default async function CareersPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const jobs = await getJobs();
  const departments = await getDepartments();
  const dept = typeof searchParams?.dept === "string" ? searchParams.dept : "all";

  const filtered = dept === "all" ? jobs : jobs.filter((j) => j.department === dept);

  return (
    <>
      <PageHero
        title={pages.careers.heroHeading}
        description={pages.careers.description}
        image={pages.careers.heroImage}
      >
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.careers.title },
          ]}
        />
      </PageHero>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.careers.headings.why}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pages.careers.valueProps.map((v) => (
              <Card key={v.title} className="p-7">
                <p className="font-display text-2xl text-dark">{v.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.careers.headings.life}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pages.careers.lifeImages.map((src, idx) => (
              <Card key={src} className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`${pages.careers.headings.life} ${pages.labels.image} ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
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

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow={site.shortName}
              title={pages.careers.headings.roles}
              description={pages.careers.description}
            />
            <div className="sm:shrink-0">
              <DepartmentFilter departments={departments} />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {filtered.map((j) => (
              <JobCard key={j.slug} job={j} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

