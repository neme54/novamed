import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { AfricaPresenceMap } from "@/components/about/AfricaPresenceMap";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";
import { getBoard, getLeadershipTeam, getMilestones } from "@/lib/data/team";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

export const metadata: Metadata = {
  title: pages.about.title,
  description: pages.about.description,
};

export default async function AboutPage() {
  const leadership = await getLeadershipTeam();
  const board = await getBoard();
  const milestones = await getMilestones();

  return (
    <>
      <PageHero
        title={pages.about.title}
        description={pages.about.description}
        image={pages.about.heroImage}
      >
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.about.title },
          ]}
        />
      </PageHero>

      <section className="bg-surface py-16 sm:py-20" id="story">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={site.shortName}
                title={pages.about.story.heading}
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                {pages.about.story.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.about.headings.timeline}
            description={pages.about.description}
          />
          <div className="mt-10">
            <Timeline items={milestones} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.about.headings.missionVisionValues}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {pages.about.mvvLabels.missionEyebrow}
              </p>
              <p className="mt-3 font-display text-2xl text-dark">
                {pages.about.mvvLabels.missionTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pages.about.missionVisionValues.mission}
              </p>
            </Card>
            <Card className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {pages.about.mvvLabels.visionEyebrow}
              </p>
              <p className="mt-3 font-display text-2xl text-dark">
                {pages.about.mvvLabels.visionTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pages.about.missionVisionValues.vision}
              </p>
            </Card>
            <Card className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {pages.about.mvvLabels.valuesEyebrow}
              </p>
              <p className="mt-3 font-display text-2xl text-dark">
                {pages.about.mvvLabels.valuesTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {pages.about.missionVisionValues.values.map((v) => (
                  <li key={v.title} className="rounded-2xl bg-surface p-4">
                    <p className="font-semibold text-dark">{v.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{v.body}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" id="leadership">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.about.headings.leadership}
            description={pages.about.leadershipDescription}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((m) => (
              <Card key={m.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.title} at ${site.name}`}
                      fill
                      sizes="150px"
                      placeholder="blur"
                      blurDataURL={DEFAULT_BLUR_DATA_URL}
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 font-semibold text-dark">{m.name}</p>
                  <p className="mt-1 text-sm font-medium text-muted">{m.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.about.headings.board}
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {board.map((b) => (
              <Card key={b.id} className="p-7">
                <p className="font-display text-2xl text-dark">{b.name}</p>
                <p className="mt-1 text-sm font-semibold text-primary">{b.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {b.background}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <AfricaPresenceMap />
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20" id="awards">
        <div className="container">
          <SectionHeader
            eyebrow={site.shortName}
            title={pages.about.recognitions.heading}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pages.about.recognitions.items.map((x) => (
              <Card key={x} className="p-7">
                <p className="font-semibold text-dark">{x}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

