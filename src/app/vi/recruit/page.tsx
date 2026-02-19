import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Section kicker="TUYỂN DỤNG" title="Vị trí tuyển dụng" subtitle="Chính thức, part-time và PM người Nhật tại Việt Nam.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Nhân viên chính thức</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>QA</div>
              <div>Back-office</div>
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Cộng tác viên</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>Part-time Annotator</div>
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Annotation PM (Người Nhật tại Việt Nam)</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <div>Quản lý tiến độ</div>
              <div>Chất lượng</div>
              <div>Làm việc với khách hàng</div>
            </div>
          </Card>
        </div>
      </Section>

      <CTA title="Ứng tuyển" subtitle="Gửi thông tin qua form. Chúng tôi sẽ liên hệ." href="/vi/contact" label="Mở form" />
    </main>
  );
}
