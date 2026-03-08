import type { Metadata } from "next";

import { PageHero } from "@/components/ui/PageHero";
import { DrugFilterPanel } from "@/components/drugs/DrugFilterPanel";
import { DrugGrid } from "@/components/drugs/DrugGrid";
import { Pagination } from "@/components/ui/Pagination";
import { pages } from "@/lib/data/pages";
import { getDrugCategories, getDrugs } from "@/lib/data/drugs";
import type { Drug } from "@/lib/types/drug";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: `${pages.drugs.title} | ${site.name}`,
  description: pages.drugs.description,
};

function matchesQuery(d: Drug, q: string) {
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  return (
    d.brandName.toLowerCase().includes(needle) ||
    d.genericName.toLowerCase().includes(needle) ||
    d.nafdacNumber.toLowerCase().includes(needle)
  );
}

export default async function DrugsPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const all = await getDrugs();
  const categories = await getDrugCategories();

  const q = typeof searchParams?.q === "string" ? searchParams.q : "";
  const type = typeof searchParams?.type === "string" ? searchParams.type : "all";
  const category =
    typeof searchParams?.category === "string" ? searchParams.category : "";

  const filtered = all.filter((d) => {
    const typeOk = type === "all" || !type ? true : d.type === type;
    const categoryOk = !category ? true : d.therapeuticCategory === category;
    const qOk = matchesQuery(d, q);
    return typeOk && categoryOk && qOk;
  });

  return (
    <>
      <PageHero
        title={pages.drugs.title}
        description={pages.drugs.description}
        image={pages.drugs.heroImage}
      />

      <section className="bg-surface">
        <div className="container pt-10 pb-16 sm:pb-20">
          <div className="rounded-3xl border border-black/5 bg-surface p-3">
            <DrugFilterPanel categories={categories} />
          </div>

          <div className="mt-10">
            <DrugGrid drugs={filtered} />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">{pages.drugs.paginationNote}</p>
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
}
