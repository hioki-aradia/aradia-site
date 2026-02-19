"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";

type Props = {
  locale: "jp" | "vi";
  intent: "sales" | "recruit";
};

export function ContactForm({ locale, intent }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  const labels = useMemo(() => {
    if (locale === "jp") {
      return {
        title: intent === "recruit" ? "応募フォーム" : "お問い合わせ",
        name: "お名前",
        company: "会社名",
        email: "メールアドレス",
        phone: "電話番号（任意）",
        type: "種別",
        message: "内容",
        submit: status === "sending" ? "送信中..." : "送信する",
        sent: "送信しました。担当よりご連絡します。",
        sales: "営業・見積",
        recruit: "採用",
      };
    }
    return {
      title: intent === "recruit" ? "Form ứng tuyển" : "Liên hệ",
      name: "Họ và tên",
      company: "Công ty",
      email: "Email",
      phone: "Số điện thoại (tuỳ chọn)",
      type: "Phân loại",
      message: "Nội dung",
      submit: status === "sending" ? "Đang gửi..." : "Gửi",
      sent: "Đã gửi. Chúng tôi sẽ liên hệ lại.",
      sales: "Khách hàng",
      recruit: "Ứng tuyển",
    };
  }, [locale, intent, status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Failed");
        setStatus("error");
        return;
      }
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setError("Network error");
    }
  }

  return (
    <div className="rounded-xl border border-line bg-card p-8 shadow-soft">
      <div className="text-lg font-semibold">{labels.title}</div>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input name="hp" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="locale" value={locale} />
        <input type="hidden" name="intent" value={intent} />

        <div className="grid gap-2">
          <label className="text-sm text-muted">{labels.name}</label>
          <input name="name" required className="h-11 rounded-xl border border-line bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-primary/20" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-muted">{labels.company}</label>
          <input name="company" className="h-11 rounded-xl border border-line bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-primary/20" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-muted">{labels.email}</label>
          <input name="email" type="email" required className="h-11 rounded-xl border border-line bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-primary/20" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-muted">{labels.phone}</label>
          <input name="phone" className="h-11 rounded-xl border border-line bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-primary/20" />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-muted">{labels.type}</label>
          <select name="type" defaultValue={intent === "recruit" ? "recruit" : "sales"} className="h-11 rounded-xl border border-line bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-primary/20">
            <option value="sales">{labels.sales}</option>
            <option value="recruit">{labels.recruit}</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-muted">{labels.message}</label>
          <textarea name="message" required rows={6} className="rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20" />
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit">{labels.submit}</Button>
          {status === "sent" ? <div className="text-sm text-muted">{labels.sent}</div> : null}
          {status === "error" ? <div className="text-sm text-red-600">{error}</div> : null}
        </div>
      </form>
    </div>
  );
}
