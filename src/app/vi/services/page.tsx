import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export default function Page() {
  return (
    <main>
      <Section kicker="DỊCH VỤ" title="Annotation" subtitle="Chúng tôi chuyên về annotation dữ liệu cho AI.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Image / Video</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Labeling, tracking, classification theo quy trình chuẩn.</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">LiDAR / 3D</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">Xử lý point cloud và khung hình liên tiếp theo định nghĩa.</p>
          </Card>
        </div>
      </Section>

      <CTA title="Tham gia đội ngũ" subtitle="Nếu bạn muốn phát triển trong lĩnh vực AI data, hãy ứng tuyển." href="/vi/recruit" label="Ứng tuyển" />
    </main>
  );
}
