import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Section kicker="QUALITY" title="品質管理" subtitle="品質は工程で作ります。定義の厳密さとチェック体制が、再現性を生みます。">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">工程</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>作業</div>
              <div>レビュー</div>
              <div>QA</div>
              <div>最終確認</div>
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">管理体制</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>プロジェクト責任者</div>
              <div>品質管理責任者</div>
              <div>承認工程</div>
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">情報管理・守秘</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>NDA</div>
              <div>アクセス権限管理</div>
              <div>データ管理ルール</div>
              <div>教育</div>
            </div>
          </Card>
        </div>
      </Section>

      <Section kicker="IMPROVEMENT" title="仕様齟齬への対応" subtitle="不一致を放置せず、定義の再確認と是正で品質を安定化します。">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">是正</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">サンプル再作成と定義更新により、解釈を統一します。</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">再検査</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">修正範囲と再検査手順を明確化し、再発を防ぎます。</p>
          </Card>
        </div>
      </Section>

      <CTA title="品質体制について相談する" subtitle="品質基準や検収条件を含め、前提を明確にした上で進行します。" href="/jp/contact" label="相談する" />
    </main>
  );
}
