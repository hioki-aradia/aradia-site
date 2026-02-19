import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export default function Page() {
  return (
    <main>
      <Section kicker="LIÊN HỆ" title="Liên hệ / Ứng tuyển" subtitle="Gửi thông tin. Chúng tôi sẽ phản hồi sớm.">
        <ContactForm locale="vi" intent="recruit" />
      </Section>
    </main>
  );
}
