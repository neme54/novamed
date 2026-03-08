import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Pagination } from "@/components/ui/Pagination";
import { pages } from "@/lib/data/pages";
import { getProductCategories, getProducts } from "@/lib/data/products";
import type { Product } from "@/lib/types/product";

export const metadata: Metadata = {
  title: pages.products.title,
  description: pages.products.description,
};

function matchesQuery(p: Product, q: string) {
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  return (
    p.name.toLowerCase().includes(needle) ||
    p.genericName.toLowerCase().includes(needle) ||
    p.nafdacNumber.toLowerCase().includes(needle)
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const all = await getProducts();
  const categories = await getProductCategories();

  const q = typeof searchParams?.q === "string" ? searchParams?.q : "";
  const type = typeof searchParams?.type === "string" ? searchParams?.type : "all";
  const category =
    typeof searchParams?.category === "string" ? searchParams?.category : "";

  const filtered = all.filter((p) => {
    const typeOk =
      type === "all" || type === "export" ? true : p.type === type;
    const categoryOk = !category ? true : p.category === category;
    const qOk = matchesQuery(p, q);
    return typeOk && categoryOk && qOk;
  });

  return (
    <>
      <PageHero
        title={pages.products.title}
        description={pages.products.description}
        image={pages.products.heroImage}
      />

      <section className="bg-surface">
        <div className="container pt-10 pb-16 sm:pb-20">
          <div className="rounded-3xl border border-black/5 bg-surface p-3">
            <ProductFilter categories={categories} />
          </div>

          <div className="mt-10">
            <ProductGrid products={filtered} />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">{pages.products.paginationNote}</p>
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
}

