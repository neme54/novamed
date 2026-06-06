import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DrugDetail } from "@/components/drugs/DrugDetail";
import { getDrugBySlug, getDrugs } from "@/lib/data/drugs";
import { pages } from "@/lib/data/pages";
import { site } from "@/lib/data/site";
import { getPublicDrugBySlug, getPublicDrugs } from "@/lib/data/db/drugs";
import type { Drug } from "@/lib/types/drug";

async function resolveDrug(slug: string): Promise<Drug | null> {
  try {
    const fromDb = await getPublicDrugBySlug(slug);
    if (fromDb) return fromDb as unknown as Drug;
  } catch {
    /* DB optional — static catalogue fallback */
  }
  return getDrugBySlug(slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const drug = await resolveDrug(params.slug);
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
  const drug = await resolveDrug(params.slug);
  if (!drug) notFound();

  const dbAll = await getPublicDrugs().catch(() => null);
  const all: Drug[] = dbAll ? (dbAll as unknown as Drug[]) : await getDrugs();
  const related = all.filter(
    (d) => d.slug !== drug.slug && d.therapeuticCategory === drug.therapeuticCategory,
  );

  return <DrugDetail drug={drug} related={related} />;
}
