import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DrugDetail } from "@/components/drugs/DrugDetail";
import { getDrugBySlug, getDrugs } from "@/lib/data/drugs";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";
import { getPublicDrugBySlug, getPublicDrugs } from "@/lib/data/db/drugs";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Prefer DB; fall back to static data
  let drug = await getPublicDrugBySlug(params.slug);
  if (!drug) {
    drug = await getDrugBySlug(params.slug);
  }
  if (!drug) return { title: site.metadata.defaultTitle };
  return {
    title: `${drug.brandName} | ${pages.drugs.title}`,
    description: drug.indications[0],
    openGraph: {
      title: drug.brandName,
      description: drug.indications[0],
      images: drug.image ? [{ url: drug.image }] : undefined,
    },
  };
}

export default async function DrugPage({
  params,
}: {
  params: { slug: string };
}) {
  // Prefer DB; fall back to static data
  let drug = await getPublicDrugBySlug(params.slug);
  if (!drug) {
    drug = await getDrugBySlug(params.slug);
  }
  if (!drug) notFound();

  let all = await getPublicDrugs().catch(() => null);
  if (!all) {
    all = await getDrugs();
  }
  const related = all.filter(
    (d) => d.slug !== drug.slug && d.therapeuticCategory === drug.therapeuticCategory,
  );

  return <DrugDetail drug={drug} related={related} />;
}
