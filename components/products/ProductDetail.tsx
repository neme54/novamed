"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils/cn";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";
import type { Product } from "@/lib/types/product";
import { pages } from "@/lib/data/pages";

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [tab, setTab] = React.useState<(typeof pages.options.productTabs)[number]>(
    pages.options.productTabs[0],
  );
  const [activeImg, setActiveImg] = React.useState(0);

  const gallery = [
    `${product.image}&crop=center`,
    `${product.image}&crop=top`,
    `${product.image}&crop=entropy`,
  ];

  return (
    <div className="bg-surface">
      <div className="container py-10 sm:py-14">
        <nav className="text-sm text-muted" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="rounded-md font-semibold hover:text-accent focus-visible:focus-ring" href="/">
                {pages.labels.breadcrumbHome}
              </Link>
            </li>
            <li className="text-muted/50">/</li>
            <li>
              <Link className="rounded-md font-semibold hover:text-accent focus-visible:focus-ring" href="/products">
                {pages.products.title}
              </Link>
            </li>
            <li className="text-muted/50">/</li>
            <li className="font-semibold">{product.category}</li>
            <li className="text-muted/50">/</li>
            <li className="font-semibold text-dark" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/12]">
                <Image
                  src={gallery[activeImg] ?? product.image}
                  alt={`${product.name} — ${product.dosageForm}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                  className="object-cover"
                />
              </div>
            </Card>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {gallery.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImg(idx)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border bg-white focus-visible:focus-ring",
                    idx === activeImg ? "border-accent" : "border-black/10",
                  )}
                  aria-label={`${product.name} image ${idx + 1}`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={src}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      placeholder="blur"
                      blurDataURL={DEFAULT_BLUR_DATA_URL}
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="primary">{product.category}</Badge>
              <span className="font-mono text-xs font-semibold text-muted">
                {product.nafdacNumber}
              </span>
            </div>
            <h1 className="mt-3 font-display text-4xl leading-tight text-dark">
              {product.name}
            </h1>
            <p className="mt-2 text-base font-medium text-muted">
              {product.genericName}
            </p>

            <div className="mt-6 grid gap-4 rounded-3xl border border-black/5 bg-white p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-dark">
                  {product.dosageForm}
                </p>
                <p className="text-sm text-muted">{product.type}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {product.shortDescription}
              </p>
              <div>
                <Button
                  href={`/contact?department=Sales&subject=${encodeURIComponent(
                    `${pages.labels.orderEnquiry}: ${product.name}`,
                  )}`}
                  variant="secondary"
                >
                  {pages.labels.orderEnquiry}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {pages.options.productTabs.map((t) => (
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
                    {product.shortDescription}
                  </p>
                  <div className="grid gap-2 text-sm">
                    <p>
                      <span className="font-semibold text-dark">Manufacturer:</span>{" "}
                      <span className="text-muted">{product.manufacturer}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-dark">Storage:</span>{" "}
                      <span className="text-muted">{product.storageConditions}</span>
                    </p>
                  </div>
                </div>
              ) : null}

              {tab === "Indications" ? (
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
                  {product.indications.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : null}

              {tab === "Dosage & Admin" ? (
                <div className="space-y-3 text-sm text-muted">
                  {pages.products.detail.dosageCopy.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ) : null}

              {tab === "Side Effects" ? (
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
                  {product.sideEffects.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : null}

              {tab === "Storage" ? (
                <p className="text-sm leading-relaxed text-muted">
                  {product.storageConditions}
                </p>
              ) : null}

              {tab === "Downloads" ? (
                <div className="space-y-3">
                  {pages.products.detail.downloads.map((d) => (
                    <a
                      key={d.label}
                      href={d.href}
                      className="block rounded-2xl border border-black/10 bg-surface px-5 py-4 text-sm font-semibold text-primary hover:border-accent/40 hover:bg-highlight focus-visible:focus-ring"
                    >
                      {d.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </Card>
        </div>

        {related.length ? (
          <div className="mt-14">
            <p className="font-display text-2xl text-dark">
              {pages.products.detail.relatedHeading}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((p) => (
                <Card
                  key={p.slug}
                  className="overflow-hidden bg-white transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
                >
                  <div className="p-6">
                    <p className="font-display text-xl text-dark">{p.name}</p>
                    <p className="mt-1 text-sm text-muted">{p.genericName}</p>
                    <div className="mt-4">
                      <Link
                        href={`/products/${p.slug}`}
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

