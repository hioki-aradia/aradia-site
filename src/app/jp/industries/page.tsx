import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Section kicker="INDUSTRIES" title="業界別アノテーション事例" subtitle="実績は非公開前提のため、代表的なユースケース例として整理しています。">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">製造</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">検査・設備・現場データの画像/動画ラベリング、3D/LiDARの構造化。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">AI開発会社</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">多タスク・短納期のデータ作成、仕様策定支援、品質工程の構築。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">小売</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">棚・商品・行動の画像/動画アノテーション、分類体系の設計。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">メディア</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">コンテンツ分類、タグ付け、テキスト分類データの作成。</p>
          </Card>
        </div>
      </Section>

      <CTA title="要件に合わせて設計します" subtitle="業界やタスクにより最適な定義・工程は変わります。まずは概要を共有ください。" href="/jp/contact" label="相談する" />
    </main>
  );
}
