"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils/cn";
import { pages } from "@/lib/data/pages";

export function NewsFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "All";

  const setCategory = React.useCallback(
    (next: string) => {
      const sp = new URLSearchParams(searchParams.toString());
      if (next === "All") sp.delete("category");
      else sp.set("category", next);
      router.push(`${pathname}?${sp.toString()}`);
    },
    [pathname, router, searchParams],
  );

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 text-sm font-semibold text-dark">
        {pages.news.filterLabel}
      </span>
      {pages.news.categories.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setCategory(c)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:focus-ring",
            category === c ? "bg-primary text-surface" : "bg-white hover:bg-highlight",
          )}
          aria-pressed={category === c}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

