import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Section kicker="PROCESS" title="依頼プロセス" subtitle="PoCは実施しません。サンプル作成で仕様を確定し、見積提示後に開始します。">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">1. 要件ヒアリング</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">目的・定義・成果物・納期を整理します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">2. サンプル作成</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">仕様齟齬を潰し、定義を確定します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">3. 見積提示</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">単価・納期・体制・検収条件を提示します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">4. プロジェクト開始</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">キックオフ後、工程に沿って進行します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">5. 納品・検収</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">品質基準に基づき納品し、検収を行います。</p>
          </Card>
        </div>
      </Section>

      <CTA title="まずは概要だけで構いません" subtitle="未確定の前提はサンプルで確定させます。最短で開始します。" href="/jp/contact" label="相談する" />
    </main>
  );
}
