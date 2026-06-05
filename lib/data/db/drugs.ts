import { prisma } from "@/lib/db";

// Public-facing fields only (no cost/distributorPrice/stockLevel)
export async function getPublicDrugs(search?: string) {
  const q = search?.trim();
  return prisma.drug.findMany({
    where: q
      ? {
          OR: [
            { brandName: { contains: q, mode: "insensitive" } },
            { genericName: { contains: q, mode: "insensitive" } },
            { nafdacNumber: { contains: q, mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: { brandName: "asc" },
    select: {
      slug: true,
      brandName: true,
      genericName: true,
      therapeuticCategory: true,
      type: true,
      dosageForm: true,
      strength: true,
      packSize: true,
      nafdacNumber: true,
      indications: true,
      recommendedRetailPrice: true,
      image: true,
      storageConditions: true,
      featured: true,
      status: true,
      tags: true,
    },
  });
}

export async function getPublicDrugBySlug(slug: string) {
  return prisma.drug.findUnique({
    where: { slug },
    select: {
      slug: true,
      brandName: true,
      genericName: true,
      therapeuticCategory: true,
      type: true,
      dosageForm: true,
      strength: true,
      packSize: true,
      nafdacNumber: true,
      indications: true,
      contraindications: true,
      sideEffectsCommon: true,
      storageConditions: true,
      recommendedRetailPrice: true,
      image: true,
      patientLeafletUrl: true,
      spcUrl: true,
      msdsUrl: true,
      featured: true,
      status: true,
      tags: true,
    },
  });
}

