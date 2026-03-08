"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { pages } from "@/lib/data/pages";

export function DrugFilterPanel({
  categories,
}: {
  categories: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const q = searchParams.get("q") ?? "";
  const type = searchParams.get("type") ?? "all";
  const category = searchParams.get("category") ?? "";

  const update = React.useCallback(
    (next: Record<string, string | null>) => {
      const sp = new URLSearchParams(searchParams.toString());
      for (const [k, v] of Object.entries(next)) {
        if (!v) sp.delete(k);
        else sp.set(k, v);
      }
      router.push(`${pathname}?${sp.toString()}`);
    },
    [pathname, router, searchParams],
  );

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-xl" id="search">
          <Search
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            value={q}
            onChange={(e) => update({ q: e.target.value || null })}
            placeholder={pages.drugs.searchPlaceholder}
            aria-label={pages.drugs.searchPlaceholder}
            className="h-12 w-full rounded-2xl border border-black/10 bg-surface pl-11 pr-10 text-sm text-dark placeholder:text-muted focus-visible:focus-ring"
          />
          {q ? (
            <button
              type="button"
              aria-label={pages.drugs.clearFilters}
              onClick={() => update({ q: null })}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-black/5 focus-visible:focus-ring"
            >
              <X className="h-4 w-4 text-muted" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="text-sm font-semibold text-dark">
            {pages.drugs.categoryLabel}
          </label>
          <select
            value={category}
            onChange={(e) => update({ category: e.target.value || null })}
            className="h-12 rounded-2xl border border-black/10 bg-surface px-4 text-sm text-dark focus-visible:focus-ring"
            aria-label={pages.drugs.categoryLabel}
          >
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <Button
            variant="ghost"
            size="md"
            onClick={() => router.push(pathname)}
            className="justify-center"
          >
            {pages.drugs.clearFilters}
          </Button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {pages.drugs.typeTabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => update({ type: t.key === "all" ? null : t.key })}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:focus-ring",
              type === t.key || (t.key === "all" && !type)
                ? "bg-primary text-surface"
                : "bg-surface text-dark hover:bg-highlight",
            )}
            aria-pressed={type === t.key || (t.key === "all" && !type)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
