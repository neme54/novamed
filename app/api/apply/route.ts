import { NextResponse } from "next/server";

import { pages } from "@/lib/data/pages";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  console.log("Application payload", body);
  return NextResponse.json({
    success: true,
    message: pages.careers.application.successMessage,
  });
}

