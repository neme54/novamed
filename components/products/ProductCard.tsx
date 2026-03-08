import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { pages } from "@/lib/data/pages";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/images/blur";
import type { Product } from "@/lib/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      as="article"
      className="group overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
    >
      <div className="relative aspect-[16/11]">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.dosageForm}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary">{product.category}</Badge>
          <span className="font-mono text-xs font-semibold text-muted">
            {product.nafdacNumber}
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-dark">
          <Link
            href={`/products/${product.slug}`}
            className="rounded-md focus-visible:focus-ring"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">{product.genericName}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>
        <div className="mt-5">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-semibold text-primary hover:text-accent focus-visible:focus-ring"
          >
            {pages.labels.viewDetails}
          </Link>
        </div>
      </div>
    </Card>
  );
}

