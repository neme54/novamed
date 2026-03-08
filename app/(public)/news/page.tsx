import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Pagination } from "@/components/ui/Pagination";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsFilter } from "@/components/news/NewsFilter";
import { getNews } from "@/lib/data/news";
import { pages } from "@/lib/data/pages";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

export const metadata: Metadata = {
  title: pages.news.title,
  description: pages.news.description,
};

export default async function NewsPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const all = await getNews();
  const category =
    typeof searchParams?.category === "string" ? searchParams.category : "All";

  const filtered =
    category === "All" ? all : all.filter((a) => a.category === category);

  const featured = filtered[0] ?? all[0];
  const rest = filtered.filter((a) => a.slug !== featured?.slug);

  return (
    <>
      <PageHero title={pages.news.title} description={pages.news.description} image={pages.news.heroImage}>
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.news.title },
          ]}
        />
      </PageHero>

      <section className="bg-surface">
        <div className="container pt-10 pb-16 sm:pb-20">
          <div className="rounded-3xl border border-black/5 bg-surface p-3">
            <div className="rounded-3xl border border-black/5 bg-white p-6">
              <NewsFilter />
            </div>
          </div>

          {featured ? (
            <div className="mt-10">
              <Card className="overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-12">
                  <div className="relative aspect-video lg:col-span-7 lg:aspect-auto">
                    <Image
                      src={`${featured.image}&w=1600&q=80`}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      placeholder="blur"
                      blurDataURL={DEFAULT_BLUR_DATA_URL}
                      className="object-cover"
                    />
                    <div className="absolute left-5 top-5">
                      <Badge tone="accent">{pages.news.featuredLabel}</Badge>
                    </div>
                  </div>
                  <div className="lg:col-span-5 p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="primary">{featured.category}</Badge>
                      <span className="text-xs font-semibold text-muted">
                        {new Date(featured.date).toLocaleDateString("en-NG", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="mt-4 font-display text-3xl leading-tight text-dark">
                      <Link
                        href={`/news/${featured.slug}`}
                        className="rounded-md focus-visible:focus-ring"
                      >
                        {featured.title}
                      </Link>
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {featured.excerpt}
                    </p>
                    <p className="mt-6 text-sm font-semibold text-primary">
                      <Link
                        href={`/news/${featured.slug}`}
                        className="rounded-md hover:text-accent focus-visible:focus-ring"
                      >
                        {pages.labels.viewDetails}
                      </Link>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ) : null}

          <div className="mt-10">
            <NewsGrid articles={rest} />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">{pages.news.paginationNote}</p>
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
}

