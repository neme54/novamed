import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { getJobBySlug } from "@/lib/data/jobs";
import { pages } from "@/lib/data/pages";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const job = await getJobBySlug(params.slug);
  if (!job) return { title: pages.careers.title };
  return {
    title: job.title,
    description: job.description,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = await getJobBySlug(params.slug);
  if (!job) notFound();

  return (
    <>
      <PageHero title={job.title} description={job.description} image={pages.careers.heroImage}>
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.careers.title, href: "/careers" },
            { label: job.title },
          ]}
        />
      </PageHero>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {pages.careers.jobDetail.overview}
              </p>
              <div className="mt-4 grid gap-2 text-sm text-muted">
                <p>
                  <span className="font-semibold text-dark">{pages.labels.fields.department}:</span>{" "}
                  {job.department}
                </p>
                <p>
                  <span className="font-semibold text-dark">{pages.labels.fields.location}:</span>{" "}
                  {job.location}
                </p>
                <p>
                  <span className="font-semibold text-dark">{pages.labels.fields.type}:</span> {job.type}
                </p>
                <p>
                  <span className="font-semibold text-dark">{pages.labels.fields.level}:</span> {job.level}
                </p>
                <p>
                  <span className="font-semibold text-dark">{pages.labels.deadline}:</span>{" "}
                  <span className="font-mono">{job.deadline}</span>
                </p>
              </div>
            </Card>

            <Card className="mt-6 p-7">
              <p className="font-display text-2xl text-dark">
                {pages.careers.jobDetail.responsibilities}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Card>

            <Card className="mt-6 p-7">
              <p className="font-display text-2xl text-dark">
                {pages.careers.jobDetail.requirements}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                {job.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <p className="font-display text-2xl text-dark">
              {pages.careers.jobDetail.applyHeading}
            </p>
            <div className="mt-4">
              <ApplicationForm jobTitle={job.title} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

