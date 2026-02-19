import Link from "next/link";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export function Footer({ localeBase }: { localeBase: "/jp" | "/vi" }) {
  const isJP = localeBase === "/jp";
  return (
    <footer className="border-t border-line">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">Aradia</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {isJP ? "高品質アノテーションを、確実に、再現性をもって。" : "We build a high-quality annotation team."}
            </p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">{isJP ? "リンク" : "Liên kết"}</div>
            <div className="mt-3 grid gap-2 text-muted">
              <Link href={`${localeBase}/services`} className="hover:text-fg">
                {isJP ? "サービス" : "Dịch vụ"}
              </Link>
              <Link href={`${localeBase}/company`} className="hover:text-fg">
                {isJP ? "会社情報" : "Công ty"}
              </Link>
              <Link href={`${localeBase}/privacy`} className="hover:text-fg">
                {isJP ? "プライバシー" : "Chính sách"}
              </Link>
              <Link href={`${localeBase}/terms`} className="hover:text-fg">
                {isJP ? "利用規約" : "Điều khoản"}
              </Link>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">{isJP ? "お問い合わせ" : "Liên hệ"}</div>
            <div className="mt-3 text-muted">{SITE.contactEmail}</div>
            <Link
              href={`${localeBase}/contact`}
              className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
            >
              {isJP ? "フォームへ" : "Gửi form"}
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-line py-6 text-xs text-muted">
          <div>© {new Date().getFullYear()} Aradia</div>
          <div className="flex items-center gap-4">
            <Link href="/jp" className="hover:text-fg">
              JP
            </Link>
            <Link href="/vi" className="hover:text-fg">
              VI
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
