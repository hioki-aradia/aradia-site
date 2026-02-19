import { Section } from "@/components/Section";

export default function Page() {
  return (
    <main>
      <Section kicker="CHÍNH SÁCH" title="Privacy" subtitle="Trang này sẽ được cập nhật nội dung chính thức.">
        <div className="prose max-w-none text-sm text-muted">Chúng tôi chỉ sử dụng dữ liệu để phản hồi liên hệ.</div>
      </Section>
    </main>
  );
}
