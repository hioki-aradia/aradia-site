import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validate";
import { SITE } from "@/lib/site";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const data = parsed.data;
  if (data.hp && data.hp.trim().length > 0) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) return NextResponse.json({ error: "Server not configured" }, { status: 500 });

  const subjectPrefix = data.type === "recruit" ? "Recruit" : "Inquiry";
  const subject = `[Aradia ${data.locale.toUpperCase()} ${subjectPrefix}] ${data.company ? `${data.company} / ` : ""}${data.name}`;
  const text =
    `Name: ${data.name}\n` +
    `Company: ${data.company}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n` +
    `Locale: ${data.locale}\n` +
    `Intent: ${data.intent}\n` +
    `Type: ${data.type}\n\n` +
    `${data.message}\n`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [SITE.contactEmail],
      subject,
      text,
      reply_to: data.email,
    }),
  });

  if (!res.ok) {
    const t = await res.text().catch(() => "");
    return NextResponse.json({ error: "Email failed", detail: t.slice(0, 300) }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
