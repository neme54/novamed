import { NextRequest, NextResponse } from "next/server";

import { getPublicDrugBySlug } from "@/lib/data/db/drugs";

type Params = {
  params: { slug: string };
};

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const drug = await getPublicDrugBySlug(params.slug);
    if (!drug) {
      return NextResponse.json(
        { error: "Not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ data: drug });
  } catch (error) {
    console.error("GET /api/drugs/[slug] error", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

