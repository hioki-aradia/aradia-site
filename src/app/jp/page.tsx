import { HeroJP } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";

function Proof() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-8">
            <div className="badge">品質</div>
            <h3 className="mt-4 text-xl font-semibold">二重チェック + サンプル検査</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              基準定義→教育→検査→再教育。品質を「人」ではなく「仕組み」で担保します。
            </p>
          </div>
          <div className="card p-8">
            <div className="badge">対応範囲</div>
            <h3 className="mt-4 text-xl font-semibold">画像 / 動画 / LiDAR / テキスト</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              公開可能な範囲で明示。日本語テキスト分類、2D、動画、3D（点群）まで。
            </p>
          </div>
          <div className="card p-8">
            <div className="badge">運用</div>
            <h3 className="mt-4 text-xl font-semibold">最短で始める：サンプル→見積→開始</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              PoC前提にしない。サンプル作成で要件と粒度を合わせ、即プロジェクト開始。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="section-title">依頼プロセス</h2>
            <p className="section-lead">
              仕様が曖昧でも進められる設計。初期のすり合わせ精度が、後工程のコストを決めます。
            </p>
            <div className="mt-8 grid gap-4">
              <div className="card p-6">
                <div className="text-xs font-semibold text-muted">1</div>
                <div className="mt-2 font-semibold">要件ヒアリング</div>
                <div className="mt-2 text-sm text-muted">粒度 / クラス定義 / 例外 / 受入基準を確定します。</div>
              </div>
              <div className="card p-6">
                <div className="text-xs font-semibold text-muted">2</div>
                <div className="mt-2 font-semibold">サンプル作成</div>
                <div className="mt-2 text-sm text-muted">最小サンプルで手戻りの原因を早期に潰します。</div>
              </div>
              <div className="card p-6">
                <div className="text-xs font-semibold text-muted">3</div>
                <div className="mt-2 font-semibold">見積 & 開始</div>
                <div className="mt-2 text-sm text-muted">体制・KPI・検査方法を合意し、そのまま着手します。</div>
              </div>
            </div>
          </div>
          <div className="card p-10">
            <div className="badge">信頼の作り方</div>
            <h3 className="mt-4 text-2xl font-semibold">実績は非公開でも、品質は公開できる</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              顧客・案件は非公開前提。代わりに、QA体制・検査・KPI・教育フローを明示し、判断可能な情報を出します。
            </p>
            <div className="mt-8 grid gap-3 text-sm">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span>品質KPI</span>
                <span className="text-muted">定義→測定→改善</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span>教育</span>
                <span className="text-muted">基準 / 例外 / NG集</span>
              </div>
              <div className="flex items-center justify-between">
                <span>検査</span>
                <span className="text-muted">二重チェック / 抜取</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <HeroJP />
      <Proof />
      <HowWeWork />
      <CTA
        title="まずは要件を共有してください"
        subtitle="データ形式・粒度・納期の仮説があれば十分です。サンプル作成でズレを潰し、見積の精度を上げます。"
        href="/jp/contact"
        label="相談する"
      />
    </>
  );
}
