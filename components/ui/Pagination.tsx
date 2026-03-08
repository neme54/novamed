import Link from "next/link";

import { pages } from "@/lib/data/pages";
import { cn } from "@/lib/utils/cn";

export function Pagination({
  className,
  currentPage = 1,
  totalPages = 5,
}: {
  className?: string;
  currentPage?: number;
  totalPages?: number;
}) {
  const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav
      aria-label="Pagination"
      className={cn("flex flex-wrap items-center gap-2", className)}
    >
      <PageLink disabled={currentPage <= 1} href="#">
        {pages.labels.pagination.previous}
      </PageLink>
      {pagesArr.map((p) => (
        <Link
          key={p}
          href="#"
          aria-current={p === currentPage ? "page" : undefined}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:focus-ring",
            p === currentPage ? "bg-primary text-surface" : "bg-white hover:bg-highlight",
          )}
        >
          {p}
        </Link>
      ))}
      <PageLink disabled={currentPage >= totalPages} href="#">
        {pages.labels.pagination.next}
      </PageLink>
    </nav>
  );
}

function PageLink({
  href,
  disabled,
  children,
}: {
  href: string;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-disabled={disabled}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-dark transition-colors hover:bg-highlight focus-visible:focus-ring",
        disabled ? "pointer-events-none opacity-50" : "",
      )}
    >
      {children}
    </Link>
  );
}

