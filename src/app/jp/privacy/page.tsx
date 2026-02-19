import { Section } from "@/components/Section";

export default function Page() {
  return (
    <main>
      <Section kicker="PRIVACY" title="プライバシーポリシー" subtitle="このページは後で確定原稿に差し替えてください。">
        <div className="prose max-w-none text-sm text-muted">
          個人情報はお問い合わせ対応の目的でのみ利用します。
        </div>
      </Section>
    </main>
  );
}
