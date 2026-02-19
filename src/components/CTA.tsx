import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";

export function CTA({
  title,
  subtitle,
  href,
  label,
}: {
  title: string;
  subtitle: string;
  href: string;
  label: string;
}) {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-xl border border-line bg-card p-10 shadow-soft">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{subtitle}</p>
            </div>
            <LinkButton href={href}>{label}</LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
