import { HeroVI } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <HeroVI />
      <Section kicker="VĂN HOÁ" title="Trẻ, thông minh, đoàn kết" subtitle="Tinh thần gia đình, kỷ luật trong công việc, và khát vọng phát triển.">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">Đào tạo</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Học từ cơ bản đến nâng cao, có lộ trình rõ ràng.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Chất lượng</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Quy trình Review và QA để đảm bảo độ chính xác.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Đồng đội</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Hợp tác, hỗ trợ nhau, cùng trưởng thành theo dự án.</p>
          </Card>
        </div>
      </Section>

      <CTA title="Ứng tuyển ngay" subtitle="Chúng tôi tuyển dụng liên tục. Hãy gửi thông tin qua form." href="/vi/recruit" label="Xem vị trí" />
    </main>
  );
}
