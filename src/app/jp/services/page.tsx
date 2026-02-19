import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Section kicker="SERVICES" title="サービス" subtitle="アノテーションとBPOを、要件定義から品質管理まで一貫して提供します。">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Annotation</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>2D画像：全般</div>
              <div>動画：トラッキング / イベント</div>
              <div>3D/LiDAR：ポイントクラウド / 連続フレーム</div>
              <div>テキスト分類：日本語対応</div>
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">BPO</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>データ作成・整備</div>
              <div>チェック・分類</div>
              <div>運用補助</div>
            </div>
          </Card>
        </div>
      </Section>

      <Section kicker="QUALITY" title="品質管理" subtitle="品質は偶然ではなく、工程と定義の厳密さによって担保されます。">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">工程分離</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">作業・レビュー・QA・最終確認を分離します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">サンプル検査</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">仕様齟齬を初期に検出し、定義を確定します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">KPI管理</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">精度・修正率・納期を軸に品質を安定化します。</p>
          </Card>
        </div>
      </Section>

      <CTA title="まずはサンプルから" subtitle="サンプル作成 → 見積 → プロジェクト開始。PoCは実施しません。" href="/jp/contact" label="相談する" />
    </main>
  );
}
