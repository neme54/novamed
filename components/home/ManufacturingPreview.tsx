"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/lib/data/site";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

export function ManufacturingPreview() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <ScrollReveal className="lg:col-span-7">
            <Card className="relative overflow-hidden">
              <div className="relative aspect-[16/11]">
                <Image
                  src={site.images.manufacturingPreview}
                  alt="Pharmaceutical manufacturing production line"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-transparent to-accent/20" />
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" delay={0.06}>
            <p className="font-display text-3xl leading-tight text-dark sm:text-4xl">
              {site.home.manufacturing.title}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {site.home.manufacturing.body}
            </p>
            <ul className="mt-6 space-y-3">
              {site.home.manufacturing.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-dark">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={site.home.manufacturing.cta.href} variant="secondary">
                {site.home.manufacturing.cta.label}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

