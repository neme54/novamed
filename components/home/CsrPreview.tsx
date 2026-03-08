"use client";

import Image from "next/image";
import { HeartPulse, MapPin, Shield } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/lib/data/site";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

const icons = { HeartPulse, Shield, MapPin } as const;

export function CsrPreview() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <ScrollReveal className="lg:col-span-5">
            <p className="font-display text-3xl leading-tight text-dark sm:text-4xl">
              {site.home.csr.title}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {site.home.csr.body}
            </p>
            <div className="mt-8">
              <Button href={site.home.csr.cta.href} variant="secondary">
                {site.home.csr.cta.label}
              </Button>
            </div>

            <div className="mt-8 grid gap-4">
              {site.home.csr.pillars.map((p) => {
                const Icon = icons[p.icon as keyof typeof icons] ?? HeartPulse;
                return (
                  <Card key={p.title} className="bg-white p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-highlight text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="font-semibold text-dark">{p.title}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.06}>
            <Card className="relative overflow-hidden">
              <div className="relative aspect-[16/11]">
                <Image
                  src={site.images.csrPreview}
                  alt="Community health outreach programme"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-primary/30" />
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

