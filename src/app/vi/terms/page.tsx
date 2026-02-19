import { Section } from "@/components/Section";

export default function Page() {
  return (
    <main>
      <Section kicker="ĐIỀU KHOẢN" title="Terms" subtitle="Trang này sẽ được cập nhật nội dung chính thức.">
        <div className="prose max-w-none text-sm text-muted">Điều khoản sử dụng website.</div>
      </Section>
    </main>
  );
}
