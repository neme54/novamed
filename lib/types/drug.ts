export type DrugType = "PRESCRIPTION" | "OTC" | "CONTROLLED" | "PAEDIATRIC";

export type DosageForm =
  | "TABLET"
  | "CAPSULE"
  | "SYRUP"
  | "INJECTION"
  | "CREAM"
  | "DROPS"
  | "INHALER"
  | "SUPPOSITORY"
  | "POWDER"
  | "SACHET"
  | "PATCH";

export interface Drug {
  id?: string;
  slug: string;
  brandName: string;
  genericName: string;
  therapeuticCategory: string;
  subCategory?: string;
  type: DrugType;
  dosageForm: DosageForm;
  strength: string;
  packSize: string;
  nafdacNumber: string;
  manufacturer: string;
  indications: string[];
  contraindications: string[];
  sideEffectsCommon: string[];
  sideEffectsSerious?: string[];
  dosageAdults?: string;
  dosageChildren?: string;
  storageConditions?: string;
  prescriptionRequired: boolean;
  controlledSubstance: boolean;
  pregnancyCategory?: string;
  breastfeedingSafe?: boolean;
  recommendedRetailPrice: number;
  currency: string;
  availableInNigeria: boolean;
  image?: string;
  thumbnailImage?: string;
  patientLeafletUrl?: string;
  spcUrl?: string;
  msdsUrl?: string;
  featured: boolean;
  status: "ACTIVE" | "DISCONTINUED" | "PENDING_APPROVAL" | "RECALLED";
  tags: string[];
}
