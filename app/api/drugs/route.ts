import { NextRequest, NextResponse } from "next/server";

import { getPublicDrugs } from "@/lib/data/db/drugs";

export async function GET(req: NextRequest) {
  try {
    const search = req.nextUrl.searchParams.get("q") ?? "";
    const data = await getPublicDrugs(search);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("GET /api/drugs error", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

