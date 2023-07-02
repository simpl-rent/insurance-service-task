import { NextResponse } from "next/server";

import { getAll } from "@/db";
import { createInsurance } from "@/db/helpers";

export async function GET() {
  const sql = "SELECT * FROM insurance";

  const rows = await getAll(sql);

  return NextResponse.json({ data: rows });
}

export async function POST(request) {
  const { policyNumber } = await request.json();

  const state = "INSURED";

  try {
    await createInsurance(policyNumber, state);
    return NextResponse.json({ status: "ok" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
