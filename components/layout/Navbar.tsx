"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils/cn";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-colors",
          scrolled
            ? "border-black/10 bg-surface/80 backdrop-blur"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container">
          <div className="flex h-16 items-center justify-between py-4">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-2xl px-2 py-1 focus-visible:focus-ring"
              aria-label={`${site.shortName} home`}
            >
              <LogoIcon className="h-9 w-9 text-accent" />
              <div className="leading-tight">
                <p className="font-display text-xl text-primary">
                  {site.shortName}
                </p>
                <p className="text-xs font-semibold tracking-wide text-muted">
                  {site.tagline}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              <NavDropdown
                label={site.nav.about.label}
                active={pathname.startsWith("/about")}
                items={site.nav.about.items}
              />
              <NavDropdown
                label={site.nav.products.label}
                active={pathname.startsWith("/products")}
                items={site.nav.products.items}
              />
              {site.nav.links.map((l) => (
                <NavLink
                  key={l.href}
                  href={l.href}
                  active={pathname === l.href}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button href={site.nav.cta.href} variant="secondary" size="md">
                {site.nav.cta.label}
              </Button>
              <Button
                href={site.nav.bookPharmacist.href}
                variant="primary"
                size="md"
                className="bg-accent text-dark hover:bg-accent-light"
              >
                📋 {site.nav.bookPharmacist.label}
              </Button>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-full p-3 text-primary hover:bg-highlight focus-visible:focus-ring lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              type="button"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-full px-4 py-2 text-sm font-semibold text-primary/90 transition-colors hover:bg-highlight hover:text-primary focus-visible:focus-ring",
        active ? "text-primary" : "",
      )}
      aria-current={active ? "page" : undefined}
    >
      {children}
      {active ? (
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-accent"
        />
      ) : null}
    </Link>
  );
}

function NavDropdown({
  label,
  items,
  active,
}: {
  label: string;
  items: ReadonlyArray<{ label: string; href: string }>;
  active?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (buttonRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-primary/90 transition-colors hover:bg-highlight hover:text-primary focus-visible:focus-ring",
          active ? "text-primary" : "",
        )}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {label}
        <ChevronDown className="h-4 w-4 text-muted" aria-hidden="true" />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full mt-2 w-64 origin-top-left rounded-2xl border border-black/10 bg-white p-2 shadow-lift",
          open ? "block" : "hidden",
        )}
        role="menu"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            role="menuitem"
            className="block rounded-xl px-3 py-2 text-sm font-semibold text-dark hover:bg-highlight focus-visible:focus-ring"
          >
            {i.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 7c7.6 0 13 5.9 13 13.3 0 10.7-13 22.6-13 22.6S19 31 19 20.3C19 12.9 24.4 7 32 7Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 20v37"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M20 36c4.3-3.2 7.6-3.2 12 0 4.4 3.2 7.7 3.2 12 0"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M22 49h20"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

