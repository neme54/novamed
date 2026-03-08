"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/lib/data/site";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-primary text-surface">
      <div className="absolute inset-0">
        <Image
          src={site.images.hero}
          alt="Doctor in a professional laboratory setting"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/78 to-primary/90" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative container flex min-h-[92vh] flex-col justify-center pb-16 pt-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl"
          >
            {site.home.hero.headline}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg leading-relaxed text-surface/85 sm:text-xl"
          >
            {site.home.hero.subheadline}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href={site.home.hero.ctaPrimary.href}
              variant="primary"
              size="lg"
            >
              {site.home.hero.ctaPrimary.label}
            </Button>
            <Button
              href={site.home.hero.ctaSecondary.href}
              variant="outline"
              size="lg"
            >
              {site.home.hero.ctaSecondary.label}
            </Button>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute right-5 top-24 hidden max-w-xs lg:block">
          <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
            <p className="text-xs font-semibold tracking-wide text-surface/90">
              {site.complianceRibbon}
            </p>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-8 flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center gap-2 text-surface/80"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-semibold tracking-wide">
              {site.home.hero.scrollLabel}
            </span>
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 lg:hidden">
          {site.complianceRibbon.split("|").map((s) => (
            <Badge key={s} tone="accent">
              {s.trim()}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

