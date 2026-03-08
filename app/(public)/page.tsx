import type { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { ComplianceBanner } from "@/components/home/ComplianceBanner";
import { ManufacturingPreview } from "@/components/home/ManufacturingPreview";
import { NewsPreview } from "@/components/home/NewsPreview";
import { CsrPreview } from "@/components/home/CsrPreview";
import { getNews } from "@/lib/data/news";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: site.metadata.defaultTitle,
  description: site.description,
};

export default async function Home() {
  const articles = (await getNews()).slice(0, 3);
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProductHighlights />
      <ComplianceBanner />
      <ManufacturingPreview />
      <NewsPreview articles={articles} />
      <CsrPreview />
    </>
  );
}
