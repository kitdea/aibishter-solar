import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL ?? "";

export async function POST(req: NextRequest) {
  if (!APPS_SCRIPT_URL) {
    return NextResponse.json({ error: "Service unavailable." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, service, message } = body as Record<string, string>;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Required fields missing." }, { status: 422 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() ?? "",
        service: service ?? "residential",
        message: message.trim(),
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) throw new Error("Apps Script error");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
