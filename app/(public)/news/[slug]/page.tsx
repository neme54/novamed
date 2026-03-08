import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Linkedin, MessageCircle, Twitter } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PageHero } from "@/components/ui/PageHero";
import { getNews, getNewsBySlug } from "@/lib/data/news";
import { pages } from "@/lib/data/pages";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getNewsBySlug(params.slug);
  if (!article) return { title: pages.news.title };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getNewsBySlug(params.slug);
  if (!article) notFound();

  const all = await getNews();
  const related = all.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero title={article.title} description={article.excerpt} image={article.image}>
        <Breadcrumbs
          items={[
            { label: pages.labels.breadcrumbHome, href: "/" },
            { label: pages.news.title, href: "/news" },
            { label: article.title },
          ]}
        />
      </PageHero>

      <article className="bg-surface">
        <div className="container pt-10 pb-16 sm:pb-20">
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={`${article.image}&w=1600&q=80`}
                alt={article.title}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_DATA_URL}
                className="object-cover"
                priority
              />
            </div>
            <div className="p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="primary">{article.category}</Badge>
                <span className="text-sm font-semibold text-muted">
                  {article.author}
                </span>
                <span className="text-sm text-muted/50">•</span>
                <span className="text-sm font-semibold text-muted">
                  {new Date(article.date).toLocaleDateString("en-NG", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  })}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <ShareButton label={pages.labels.share.twitter} Icon={Twitter} />
                <ShareButton label={pages.labels.share.linkedin} Icon={Linkedin} />
                <ShareButton label={pages.labels.share.whatsapp} Icon={MessageCircle} />
              </div>

              <div className="prose prose-lg mt-10 max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {article.content}
                </ReactMarkdown>
              </div>
            </div>
          </Card>

          {related.length ? (
            <div className="mt-14">
              <p className="font-display text-2xl text-dark">
                {pages.news.relatedHeading}
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((a) => (
                  <Card key={a.slug} className="p-6">
                    <Badge tone="primary">{a.category}</Badge>
                    <p className="mt-3 font-display text-xl text-dark">
                      <Link
                        href={`/news/${a.slug}`}
                        className="rounded-md focus-visible:focus-ring"
                      >
                        {a.title}
                      </Link>
                    </p>
                    <p className="mt-3 text-sm text-muted">{a.excerpt}</p>
                  </Card>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}

function ShareButton({
  label,
  Icon,
}: {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-dark hover:bg-highlight focus-visible:focus-ring"
      onClick={() => console.log(label)}
    >
      <Icon className="h-4 w-4 text-muted" />
      <span>{label}</span>
    </button>
  );
}

