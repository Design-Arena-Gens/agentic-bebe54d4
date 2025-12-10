"use server";

import { NextResponse } from "next/server";

const requiredFields = [
  "name",
  "email",
  "deviceType",
  "issue",
  "preferredDate",
  "serviceLevel"
];

export async function POST(request: Request) {
  const payload = await request.json();
  const missing = requiredFields.filter((field) => !payload?.[field]);

  if (missing.length) {
    return NextResponse.json(
      {
        success: false,
        message: `Missing required fields: ${missing.join(", ")}`
      },
      { status: 400 }
    );
  }

  const reference = `CS-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  return NextResponse.json({
    success: true,
    reference,
    receivedAt: new Date().toISOString(),
    payload
  });
}
