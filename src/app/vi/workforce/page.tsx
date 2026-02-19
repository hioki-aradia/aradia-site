import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function Page() {
  return (
    <main>
      <Section kicker="ĐỘI NGŨ" title="Nhân sự & vận hành" subtitle="Tuyển dụng, đào tạo, phân ca và kiểm soát chất lượng.">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">Tuyển dụng</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Tuyển liên tục, ưu tiên thái độ và tinh thần học hỏi.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Đào tạo</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Training theo tiêu chuẩn, kiểm tra định kỳ.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">QA</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Annotator → Reviewer → QA, đảm bảo độ chính xác.</p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
