import { Section } from "@/components/Section";

export default function Page() {
  return (
    <main>
      <Section kicker="TERMS" title="利用規約" subtitle="このページは後で確定原稿に差し替えてください。">
        <div className="prose max-w-none text-sm text-muted">本サイトの利用条件を定めます。</div>
      </Section>
    </main>
  );
}
