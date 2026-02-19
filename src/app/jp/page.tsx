import { HeroJP } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <HeroJP />
      <Section
        kicker="WHY"
        title="大手製造業のAI部門が直面する課題"
        subtitle="品質のばらつき、仕様の曖昧さ、納期の制約。これらは工程設計と品質管理でしか解けません。"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">品質の再現性</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">定義の厳密化と工程分離により、品質を安定させます。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">要件の理解</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">日本語での要件定義とサンプル作成で、齟齬を初期に潰します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">複雑領域への対応</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">2D画像・動画・3D/LiDAR・テキスト分類まで対応します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">責任の所在</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">窓口・品質責任は日本法人が担い、プロジェクトを統括します。</p>
          </Card>
        </div>
      </Section>

      <CTA
        title="要件が固まっていなくても構いません"
        subtitle="サンプル作成から仕様を確定し、見積提示後にプロジェクトを開始します。"
        href="/jp/contact"
        label="見積を相談する"
      />
    </main>
  );
}
