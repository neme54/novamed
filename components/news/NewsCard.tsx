import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { site } from "@/lib/data/site";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";
import type { NewsArticle } from "@/lib/types/news";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Card as="article" className="group overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={`${article.image}&w=1200&q=80`}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary">{article.category}</Badge>
          <span className="text-xs font-semibold text-muted">
            {new Date(article.date).toLocaleDateString("en-NG", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-dark">
          <Link
            href={`/news/${article.slug}`}
            className="rounded-md focus-visible:focus-ring"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        <div className="mt-5">
          <Link
            href={`/news/${article.slug}`}
            className="text-sm font-semibold text-primary hover:text-accent focus-visible:focus-ring"
          >
            {site.home.labels.readMore}
          </Link>
        </div>
      </div>
    </Card>
  );
}

