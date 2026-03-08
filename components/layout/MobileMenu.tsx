"use client";

import Link from "next/link";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils/cn";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-dark/60"
            onClick={onClose}
            type="button"
          />
          <motion.aside
            className="absolute right-0 top-0 h-full w-full max-w-md bg-primary text-surface"
            initial={{ x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 24, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <p className="font-display text-xl">{site.shortName}</p>
              <button
                className="rounded-full p-2 hover:bg-white/10 focus-visible:focus-ring"
                aria-label="Close menu"
                onClick={onClose}
                type="button"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="px-6 py-6">
              <div className="space-y-2">
                <MobileLink href="/about" onNavigate={onClose}>
                  {site.nav.about.label}
                </MobileLink>
                <div className="pl-3">
                  {site.nav.about.items.map((i) => (
                    <MobileLink
                      key={i.href}
                      href={i.href}
                      onNavigate={onClose}
                      small
                    >
                      {i.label}
                    </MobileLink>
                  ))}
                </div>

                <MobileLink href="/products" onNavigate={onClose}>
                  {site.nav.products.label}
                </MobileLink>
                <div className="pl-3">
                  {site.nav.products.items.map((i) => (
                    <MobileLink
                      key={i.href}
                      href={i.href}
                      onNavigate={onClose}
                      small
                    >
                      {i.label}
                    </MobileLink>
                  ))}
                </div>

                {site.nav.links.map((l) => (
                  <MobileLink key={l.href} href={l.href} onNavigate={onClose}>
                    {l.label}
                  </MobileLink>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button
                  href={site.nav.bookPharmacist.href}
                  variant="primary"
                  size="lg"
                  className="w-full bg-accent text-dark hover:bg-accent-light"
                  onClick={onClose}
                >
                  📋 {site.nav.bookPharmacist.label}
                </Button>
                <Button
                  href={site.nav.cta.href}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={onClose}
                >
                  {site.nav.cta.label}
                </Button>
              </div>
            </nav>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MobileLink({
  href,
  children,
  onNavigate,
  small,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: () => void;
  small?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-xl px-3 py-3 font-semibold hover:bg-white/10 focus-visible:focus-ring",
        small ? "text-sm font-medium text-surface/90" : "text-base",
      )}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}

