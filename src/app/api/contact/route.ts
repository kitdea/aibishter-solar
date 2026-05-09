import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL ?? "";
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL ?? "";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-().]{7,20}$/;
const VALID_SERVICES = new Set(["residential", "commercial", "electrical", "maintenance"]);

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

  const { firstName, lastName, email, phone, location, service, message, _honey } = body as Record<string, string>;

  if (_honey) {
    return NextResponse.json({ success: true });
  }

  const first = firstName?.trim();
  const last = lastName?.trim();
  const mail = email?.trim().toLowerCase();
  const tel = phone?.trim() ?? "";
  const loc = location?.trim() ?? "";
  const svc = VALID_SERVICES.has(service) ? service : "residential";
  const msg = message?.trim();

  if (!first || !last || !mail || !msg) {
    return NextResponse.json({ error: "Required fields missing." }, { status: 422 });
  }

  if (!EMAIL_REGEX.test(mail)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  }

  if (tel && !PHONE_REGEX.test(tel)) {
    return NextResponse.json({ error: "Invalid phone number." }, { status: 422 });
  }

  const payload = {
    firstName: first,
    lastName: last,
    email: mail,
    phone: tel,
    location: loc,
    service: svc,
    message: msg,
    submittedAt: new Date().toISOString(),
    notifyEmail: NOTIFY_EMAIL,
  };

  console.log("[contact] Sending to Apps Script:", APPS_SCRIPT_URL);
  console.log("[contact] Payload:", JSON.stringify(payload));

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    const text = await res.text();
    console.log("[contact] Apps Script response status:", res.status);
    console.log("[contact] Apps Script response body:", text);

    if (!res.ok) throw new Error("Apps Script error: " + text);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
