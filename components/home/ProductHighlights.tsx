"use client";

import Link from "next/link";
import * as React from "react";
import {
  Activity,
  AirVent,
  Baby,
  Dna,
  Eye,
  Heart,
  Layers,
  Microscope,
  Shield,
  Stethoscope,
  Sun,
  Wind,
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/lib/data/site";

const icons = {
  Microscope,
  Heart,
  Shield,
  Activity,
  AirVent,
  Baby,
  Sun,
  Layers,
  Wind,
  Dna,
  Eye,
  Stethoscope,
} as const;

export function ProductHighlights() {
  return (
    <section className="bg-surface py-16 sm:py-20" id="categories">
      <div className="container">
        <SectionHeader
          eyebrow={site.shortName}
          title={site.home.therapeutic.title}
          description={site.home.therapeutic.description}
        />

        <div className="mt-10 hidden grid-cols-2 gap-5 md:grid lg:grid-cols-3">
          {site.therapeuticAreas.map((a, idx) => (
            <ScrollReveal key={a.name} delay={idx * 0.03}>
              <AreaCard {...a} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {site.therapeuticAreas.map((a) => (
              <div key={a.name} className="min-w-[84%]">
                <AreaCard {...a} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AreaCard({
  name,
  description,
  icon,
  href,
}: {
  name: string;
  description: string;
  icon: keyof typeof icons;
  href: string;
}) {
  const Icon = icons[icon] ?? Microscope;
  return (
    <Card className="group h-full overflow-hidden bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-highlight text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display text-xl text-dark">{name}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent focus-visible:focus-ring"
          >
            {site.home.labels.viewProducts}
          </Link>
        </div>
      </div>
    </Card>
  );
}

