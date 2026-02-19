import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { SITE } from "@/lib/site";

export default function Page() {
  return (
    <main>
      <Section kicker="CÔNG TY" title="Aradia Vietnam" subtitle="Thông tin liên hệ.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Email</div>
            <div className="mt-2 text-sm text-muted">{SITE.contactEmail}</div>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Ghi chú</div>
            <div className="mt-2 text-sm text-muted">Nội dung sẽ được cập nhật theo thông tin chính thức.</div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
