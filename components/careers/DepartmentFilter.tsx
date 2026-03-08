"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils/cn";
import { pages } from "@/lib/data/pages";

export function DepartmentFilter({ departments }: { departments: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dept = searchParams.get("dept") ?? "all";

  const setDept = React.useCallback(
    (next: string) => {
      const sp = new URLSearchParams(searchParams.toString());
      if (next === "all") sp.delete("dept");
      else sp.set("dept", next);
      router.push(`${pathname}?${sp.toString()}`);
    },
    [pathname, router, searchParams],
  );

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 text-sm font-semibold text-dark">
        {pages.careers.headings.filterLabel}
      </span>
      <button
        type="button"
        onClick={() => setDept("all")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:focus-ring",
          dept === "all" ? "bg-primary text-surface" : "bg-white hover:bg-highlight",
        )}
        aria-pressed={dept === "all"}
      >
        {pages.labels.all}
      </button>
      {departments.map((d) => (
        <button
          key={d}
          type="button"
          onClick={() => setDept(d)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:focus-ring",
            dept === d ? "bg-primary text-surface" : "bg-white hover:bg-highlight",
          )}
          aria-pressed={dept === d}
        >
          {d}
        </button>
      ))}
    </div>
  );
}

