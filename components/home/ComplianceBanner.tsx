"use client";

import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/lib/data/site";

export function ComplianceBanner() {
  return (
    <section className="bg-dark py-16 text-surface">
      <div className="container">
        <ScrollReveal>
          <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-1">
              <p className="font-display text-3xl leading-tight">
                {site.home.compliance.title}
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                {site.home.compliance.badges.map((b) => (
                  <Badge key={b} tone="accent" className="bg-white/5 text-accent">
                    {b}
                  </Badge>
                ))}
              </div>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-surface/80 sm:text-lg">
                {site.home.compliance.body}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

