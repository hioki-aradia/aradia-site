import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export default function Page() {
  return (
    <main>
      <Section kicker="CONTACT" title="お問い合わせ" subtitle="内容を確認のうえ、担当よりご連絡します。">
        <ContactForm locale="jp" intent="sales" />
      </Section>
    </main>
  );
}
