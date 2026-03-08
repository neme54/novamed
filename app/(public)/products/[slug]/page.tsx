import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/products/ProductDetail";
import { getProductBySlug, getProducts } from "@/lib/data/products";
import { site } from "@/lib/data/site";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: site.metadata.defaultTitle };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) notFound();

  const all = await getProducts();
  const related = all.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  );

  return <ProductDetail product={product} related={related} />;
}

