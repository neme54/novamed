import type { NewsArticle } from "@/lib/types/news";
import { NewsCard } from "./NewsCard";

export function NewsGrid({ articles }: { articles: NewsArticle[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <NewsCard key={a.slug} article={a} />
      ))}
    </div>
  );
}

