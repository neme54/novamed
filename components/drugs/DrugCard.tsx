import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";
import type { Drug } from "@/lib/types/drug";
import { pages } from "@/lib/data/pages";

export function DrugCard({ drug }: { drug: Drug }) {
  return (
    <Card
      as="article"
      className="group overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
    >
      <div className="relative aspect-[16/11]">
        <Image
          src={drug.image ?? "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"}
          alt={`${drug.brandName} — ${drug.dosageForm} ${drug.strength}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary">{drug.therapeuticCategory}</Badge>
          <span className="font-mono text-xs font-semibold text-muted">
            {drug.nafdacNumber}
          </span>
          {drug.prescriptionRequired && (
            <Badge tone="warning">Rx</Badge>
          )}
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-dark">
          <Link
            href={`/drugs/${drug.slug}`}
            className="rounded-md focus-visible:focus-ring"
          >
            {drug.brandName}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">{drug.genericName}</p>
        <p className="mt-2 font-mono text-sm font-medium text-dark">
          {formatCurrency(drug.recommendedRetailPrice)}
        </p>
        <p className="mt-2 text-xs text-muted">
          {drug.dosageForm} · {drug.strength} · {drug.packSize}
        </p>
        <div className="mt-5">
          <Link
            href={`/drugs/${drug.slug}`}
            className="text-sm font-semibold text-primary hover:text-accent focus-visible:focus-ring"
          >
            {pages.labels.viewDetails}
          </Link>
        </div>
      </div>
    </Card>
  );
}
