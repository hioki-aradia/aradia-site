import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";

export function HeroJP() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent" />
      <Container>
        <div className="grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-4 text-xs font-semibold tracking-wide text-muted">For Manufacturing / AI Teams</div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              再現性のある
              <br />
              アノテーションを。
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              画像・動画・LiDAR・テキスト分類まで。要件定義から品質管理まで、一貫して担います。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/jp/contact">見積を相談する</LinkButton>
              <LinkButton href="/jp/services" variant="ghost">
                サービスを見る
              </LinkButton>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-line bg-card p-8 shadow-soft">
              <div className="text-xs font-semibold text-muted">Scope</div>
              <div className="mt-3 grid gap-3 text-sm">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>2D Image</span>
                  <span className="text-muted">All tasks</span>
                </div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>Video</span>
                  <span className="text-muted">Tracking / Events</span>
                </div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span>3D / LiDAR</span>
                  <span className="text-muted">Point cloud</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Text</span>
                  <span className="text-muted">Japanese OK</span>
                </div>
              </div>
              <div className="mt-8 rounded-xl bg-black/[0.03] p-4 text-sm text-muted">
                実績は非公開前提。工程と品質で信頼をつくります。
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary2/10" />
      <Container>
        <div className="grid items-center gap-10 py-20 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-4 text-xs font-semibold tracking-wide text-muted">Tuyển dụng</div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Xây dựng đội ngũ
              <br />
              Annotation chất lượng cao.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              Môi trường ổn định, đào tạo bài bản, tinh thần đồng đội. Cùng nhau trưởng thành theo từng dự án.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/vi/recruit">Ứng tuyển ngay</LinkButton>
              <LinkButton href="/vi/workforce" variant="ghost">
                Xem đội ngũ
              </LinkButton>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-line bg-card p-8 shadow-soft">
              <div className="text-xs font-semibold text-muted">Chúng tôi coi trọng</div>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="rounded-xl bg-primary/5 p-4">Đào tạo và chất lượng</div>
                <div className="rounded-xl bg-primary2/5 p-4">Tinh thần gia đình và kỷ luật</div>
                <div className="rounded-xl bg-black/[0.03] p-4">Cơ hội phát triển lên Reviewer / QA / Leader</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
