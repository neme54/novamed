import Link from "next/link";

import { cn } from "@/lib/utils/cn";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-surface/80">
        {items.map((c, idx) => {
          const last = idx === items.length - 1;
          return (
            <li key={`${c.label}-${idx}`} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link
                  href={c.href}
                  className="rounded-md font-semibold text-surface/85 hover:text-accent focus-visible:focus-ring"
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "font-semibold",
                    last ? "text-surface" : "text-surface/85",
                  )}
                  aria-current={last ? "page" : undefined}
                >
                  {c.label}
                </span>
              )}
              {!last ? <span className="text-surface/40">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

