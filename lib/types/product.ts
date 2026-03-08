export type ProductType = "prescription" | "otc" | "paediatric";

export interface Product {
  slug: string;
  name: string;
  genericName: string;
  category: string;
  type: ProductType;
  nafdacNumber: string;
  dosageForm: string;
  indications: string[];
  contraindications: string[];
  sideEffects: string[];
  storageConditions: string;
  manufacturer: string;
  image: string;
  featured: boolean;
  shortDescription: string;
}

