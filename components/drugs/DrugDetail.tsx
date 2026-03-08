"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { cn } from "@/lib/utils/cn";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";
import type { Drug } from "@/lib/types/drug";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";

export function DrugDetail({
  drug,
  related,
}: {
  drug: Drug;
  related: Drug[];
}) {
  const [tab, setTab] = React.useState<(typeof pages.drugs.detail.tabs)[number]>(
    pages.drugs.detail.tabs[0],
  );

  const mainImage =
    drug.image ??
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="bg-surface">
      <div className="container py-10 sm:py-14">
        <nav className="text-sm text-muted" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                className="rounded-md font-semibold hover:text-accent focus-visible:focus-ring"
                href="/"
              >
                {pages.labels.breadcrumbHome}
              </Link>
            </li>
            <li className="text-muted/50">/</li>
            <li>
              <Link
                className="rounded-md font-semibold hover:text-accent focus-visible:focus-ring"
                href="/drugs"
              >
                {pages.drugs.title}
              </Link>
            </li>
            <li className="text-muted/50">/</li>
            <li className="font-semibold">{drug.therapeuticCategory}</li>
            <li className="text-muted/50">/</li>
            <li className="font-semibold text-dark" aria-current="page">
              {drug.brandName}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/12]">
                <Image
                  src={mainImage}
                  alt={`${drug.brandName} — ${drug.dosageForm} ${drug.strength}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                  className="object-cover"
                />
              </div>
            </Card>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="primary">{drug.therapeuticCategory}</Badge>
              <span className="font-mono text-xs font-semibold text-muted">
                NAFDAC {drug.nafdacNumber}
              </span>
              {drug.prescriptionRequired && <Badge tone="warning">Prescription</Badge>}
              {drug.controlledSubstance && <Badge tone="danger">Controlled</Badge>}
            </div>
            <h1 className="mt-3 font-display text-4xl leading-tight text-dark">
              {drug.brandName}
            </h1>
            <p className="mt-2 text-base font-medium text-muted">
              {drug.genericName}
            </p>
            <p className="mt-2 font-mono text-lg font-semibold text-dark">
              {formatCurrency(drug.recommendedRetailPrice)}
            </p>
            <p className="mt-1 text-sm text-muted">
              {drug.dosageForm} · {drug.strength} · {drug.packSize}
            </p>

            <div className="mt-6 grid gap-4 rounded-3xl border border-black/5 bg-white p-6">
              <p className="text-sm leading-relaxed text-muted">
                {drug.indications[0]}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  href={`/contact?department=Sales&subject=${encodeURIComponent(
                    `${pages.labels.orderEnquiry}: ${drug.brandName}`,
                  )}`}
                  variant="secondary"
                >
                  {pages.labels.orderEnquiry}
                </Button>
                <Button
                  href={site.nav.bookPharmacist.href}
                  variant="primary"
                  className="bg-accent text-dark hover:bg-accent-light"
                >
                  📋 {pages.drugs.detail.consultationCta}
                </Button>
              </div>
              <p className="text-xs text-muted">
                {pages.drugs.detail.consultationBlurb}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {pages.drugs.detail.tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:focus-ring",
                  tab === t ? "bg-primary text-surface" : "bg-white hover:bg-highlight",
                )}
                aria-pressed={tab === t}
              >
                {t}
              </button>
            ))}
          </div>

          <Card className="mt-4 overflow-hidden bg-white">
            <div className="p-7">
              {tab === "Overview" ? (
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-muted">
                    {drug.indications.join(". ")}
                  </p>
                  <div className="grid gap-2 text-sm">
                    <p>
                      <span className="font-semibold text-dark">Manufacturer:</span>{" "}
                      <span className="text-muted">{drug.manufacturer}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-dark">NAFDAC No.:</span>{" "}
                      <span className="font-mono text-muted">{drug.nafdacNumber}</span>
                    </p>
                    {drug.storageConditions ? (
                      <p>
                        <span className="font-semibold text-dark">Storage:</span>{" "}
                        <span className="text-muted">{drug.storageConditions}</span>
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : null}

              {tab === "Indications" ? (
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
                  {drug.indications.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : null}

              {tab === "Dosage & Admin" ? (
                <div className="space-y-3 text-sm text-muted">
                  {drug.dosageAdults && (
                    <p>
                      <span className="font-semibold text-dark">Adults:</span> {drug.dosageAdults}
                    </p>
                  )}
                  {drug.dosageChildren && (
                    <p>
                      <span className="font-semibold text-dark">Children:</span> {drug.dosageChildren}
                    </p>
                  )}
                  {!drug.dosageAdults && !drug.dosageChildren && (
                    <p>Dosage should be as prescribed by a qualified healthcare professional and per approved labelling.</p>
                  )}
                </div>
              ) : null}

              {tab === "Side Effects" ? (
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
                  {drug.sideEffectsCommon.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : null}

              {tab === "Storage" ? (
                <p className="text-sm leading-relaxed text-muted">
                  {drug.storageConditions ?? "Store as per product labelling. Keep out of reach of children."}
                </p>
              ) : null}

              {tab === "Downloads" ? (
                <div className="space-y-3">
                  {drug.patientLeafletUrl && (
                    <a
                      href={drug.patientLeafletUrl}
                      className="block rounded-2xl border border-black/10 bg-surface px-5 py-4 text-sm font-semibold text-primary hover:border-accent/40 hover:bg-highlight focus-visible:focus-ring"
                    >
                      Patient Information Leaflet
                    </a>
                  )}
                  {drug.spcUrl && (
                    <a
                      href={drug.spcUrl}
                      className="block rounded-2xl border border-black/10 bg-surface px-5 py-4 text-sm font-semibold text-primary hover:border-accent/40 hover:bg-highlight focus-visible:focus-ring"
                    >
                      Summary of Product Characteristics (SPC)
                    </a>
                  )}
                  {drug.msdsUrl && (
                    <a
                      href={drug.msdsUrl}
                      className="block rounded-2xl border border-black/10 bg-surface px-5 py-4 text-sm font-semibold text-primary hover:border-accent/40 hover:bg-highlight focus-visible:focus-ring"
                    >
                      Material Safety Data Sheet (MSDS)
                    </a>
                  )}
                  {!drug.patientLeafletUrl && !drug.spcUrl && !drug.msdsUrl && (
                    <p className="text-sm text-muted">Documents will be available here when published.</p>
                  )}
                </div>
              ) : null}
            </div>
          </Card>
        </div>

        {related.length ? (
          <div className="mt-14">
            <p className="font-display text-2xl text-dark">
              {pages.drugs.detail.relatedHeading}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((d) => (
                <Card
                  key={d.slug}
                  className="overflow-hidden bg-white transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
                >
                  <div className="p-6">
                    <p className="font-display text-xl text-dark">{d.brandName}</p>
                    <p className="mt-1 text-sm text-muted">{d.genericName}</p>
                    <p className="mt-2 font-mono text-sm font-medium text-dark">
                      {formatCurrency(d.recommendedRetailPrice)}
                    </p>
                    <div className="mt-4">
                      <Link
                        href={`/drugs/${d.slug}`}
                        className="text-sm font-semibold text-primary hover:text-accent focus-visible:focus-ring"
                      >
                        {pages.labels.viewDetails}
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
