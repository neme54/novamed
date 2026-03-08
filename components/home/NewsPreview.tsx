import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { NewsGrid } from "@/components/news/NewsGrid";
import { site } from "@/lib/data/site";
import type { NewsArticle } from "@/lib/types/news";

export function NewsPreview({ articles }: { articles: NewsArticle[] }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow={site.shortName}
            title={site.home.news.title}
            description={site.home.news.body}
          />
          <div className="sm:shrink-0">
            <Button href={site.home.news.cta.href} variant="ghost">
              {site.home.news.cta.label}
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <NewsGrid articles={articles} />
        </div>
      </div>
    </section>
  );
}

