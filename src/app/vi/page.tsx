import { HeroVI } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/Container";

function Culture() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-8">
            <div className="badge">Team</div>
            <h3 className="mt-4 text-xl font-semibold">Tinh thần đồng đội</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Làm việc có kỷ luật nhưng ấm áp. Cùng nhau cải thiện từng ngày theo tiêu chuẩn chất lượng.
            </p>
          </div>
          <div className="card p-8">
            <div className="badge">Growth</div>
            <h3 className="mt-4 text-xl font-semibold">Lộ trình phát triển rõ ràng</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Từ Annotator → Reviewer → QA → Leader. Đào tạo theo chuẩn dự án và tiêu chí đánh giá.
            </p>
          </div>
          <div className="card p-8">
            <div className="badge">Tech</div>
            <h3 className="mt-4 text-xl font-semibold">Công việc gắn với AI</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Dữ liệu là nền tảng của AI. Bạn sẽ góp phần tạo ra dataset chất lượng cao cho các sản phẩm AI.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Positions() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="card p-10">
            <div className="badge">Open Roles</div>
            <h3 className="mt-4 text-2xl font-semibold">Vị trí tuyển dụng</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Tuyển theo 3 nhóm: Full-time (QA/Backoffice), Part-time, và Japanese PM tại VN (không thường xuyên).
            </p>
            <div className="mt-8 grid gap-3 text-sm">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span>QA / Reviewer</span>
                <span className="text-muted">Full-time</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span>Backoffice</span>
                <span className="text-muted">Full-time</span>
              </div>
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span>Annotator</span>
                <span className="text-muted">Part-time / Full-time</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Annotation PM (Japanese)</span>
                <span className="text-muted">VN resident</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="section-title">Cách chúng tôi làm việc</h2>
            <p className="section-lead">
              Chất lượng không đến từ may mắn. Chúng tôi xây dựng quy trình: tiêu chuẩn → đào tạo → kiểm tra → cải tiến.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="card p-6">
                <div className="text-xs font-semibold text-muted">1</div>
                <div className="mt-2 font-semibold">Training</div>
                <div className="mt-2 text-sm text-muted">Onboarding + guideline + case study theo dự án.</div>
              </div>
              <div className="card p-6">
                <div className="text-xs font-semibold text-muted">2</div>
                <div className="mt-2 font-semibold">Review</div>
                <div className="mt-2 text-sm text-muted">Reviewer/QA kiểm tra và phản hồi theo tiêu chí.</div>
              </div>
              <div className="card p-6">
                <div className="text-xs font-semibold text-muted">3</div>
                <div className="mt-2 font-semibold">Improve</div>
                <div className="mt-2 text-sm text-muted">Cải tiến guideline và nâng level theo thời gian.</div>
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
      <HeroVI />
      <Culture />
      <Positions />
      <CTA
        title="Sẵn sàng tham gia cùng chúng tôi?"
        subtitle="Ứng tuyển nhanh. Chúng tôi sẽ liên hệ để trao đổi về ca làm, yêu cầu và lộ trình phát triển."
        href="/vi/recruit"
        label="Ứng tuyển"
      />
    </>
  );
}
