import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Section kicker="CAREERS" title="採用" subtitle="日本人アノテーションPM（ベトナム現地駐在）を募集します。">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">役割</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>要件定義</div>
              <div>品質管理</div>
              <div>進行管理</div>
              <div>クライアント対応</div>
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">求める人物像</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>AI/データプロジェクト経験</div>
              <div>マネジメント経験</div>
              <div>海外勤務に前向き</div>
            </div>
          </Card>
        </div>
      </Section>

      <CTA title="応募する" subtitle="フォームからご連絡ください。担当より返信します。" href="/jp/contact" label="応募フォームへ" />
    </main>
  );
}
