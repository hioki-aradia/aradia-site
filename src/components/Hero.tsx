import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";

export function HeroJP() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 pointer-events-none" />
      <Container>
        <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="badge">AI開発会社 / 製造業AI部門 向け</div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              品質で選ばれる
              <br />
              アノテーション / BPO
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              実績は非公開前提。だからこそ、QA体制・検査・KPI・教育フローを公開し、判断できる情報を出します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/jp/contact">相談する</LinkButton>
              <LinkButton href="/jp/services" variant="ghost">
                サービスを見る
              </LinkButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="card p-5">
                <div className="text-xs font-semibold text-muted">対応</div>
                <div className="mt-2 text-sm font-semibold">2D画像</div>
              </div>
              <div className="card p-5">
                <div className="text-xs font-semibold text-muted">対応</div>
                <div className="mt-2 text-sm font-semibold">動画</div>
              </div>
              <div className="card p-5">
                <div className="text-xs font-semibold text-muted">対応</div>
                <div className="mt-2 text-sm font-semibold">3D / LiDAR</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card p-10">
              <div className="badge">公開可能な範囲</div>
              <h2 className="mt-4 text-2xl font-semibold">Annotationの対応範囲</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                粒度・例外・受入基準を最初に決め、サンプル作成で品質の期待値を揃えます。
              </p>
              <div className="mt-8 grid gap-3 text-sm">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>日本語対応</span>
                  <span className="text-muted">テキスト分類</span>
                </div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>画像</span>
                  <span className="text-muted">2D 全般</span>
                </div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>動画</span>
                  <span className="text-muted">追跡 / イベント</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>3D</span>
                  <span className="text-muted">点群（LiDAR）</span>
                </div>
              </div>
              <div className="mt-8 card p-6">
                <div className="text-xs font-semibold text-muted">品質の基本方針</div>
                <div className="mt-3 text-sm text-muted">
                  二重チェック / 抜取検査 / KPI測定 / 教育更新
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HeroVI() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container>
        <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-24">
          <div>
            <div className="badge">Tuyển dụng</div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Tham gia đội ngũ
              <br />
              Annotation chất lượng cao
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Môi trường trẻ, kỷ luật, đoàn kết. Làm việc cùng AI và phát triển theo lộ trình rõ ràng.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/vi/recruit">Ứng tuyển ngay</LinkButton>
              <LinkButton href="/vi/workforce" variant="ghost">
                Xem đội ngũ
              </LinkButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="card p-5">
                <div className="text-xs font-semibold text-muted">Culture</div>
                <div className="mt-2 text-sm font-semibold">Teamwork</div>
              </div>
              <div className="card p-5">
                <div className="text-xs font-semibold text-muted">Growth</div>
                <div className="mt-2 text-sm font-semibold">Career Path</div>
              </div>
              <div className="card p-5">
                <div className="text-xs font-semibold text-muted">Tech</div>
                <div className="mt-2 text-sm font-semibold">AI Data</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card p-10">
              <div className="badge">Why Aradia</div>
              <h2 className="mt-4 text-2xl font-semibold">Bạn sẽ học được gì?</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Quy trình rõ ràng, tiêu chuẩn chất lượng, và cơ hội lên Reviewer/QA/Leader khi bạn phát triển.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="card p-6">
                  <div className="text-xs font-semibold text-muted">Training</div>
                  <div className="mt-2 text-sm font-semibold">Đào tạo bài bản</div>
                  <div className="mt-2 text-sm text-muted">Guideline + case study + feedback liên tục.</div>
                </div>
                <div className="card p-6">
                  <div className="text-xs font-semibold text-muted">Quality</div>
                  <div className="mt-2 text-sm font-semibold">Tiêu chuẩn rõ ràng</div>
                  <div className="mt-2 text-sm text-muted">Review + QA giúp bạn nâng chất lượng nhanh.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
