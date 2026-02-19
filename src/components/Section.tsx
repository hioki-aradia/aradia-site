import { ReactNode } from "react";
import { Container } from "@/components/Container";

export function Section({
  kicker,
  title,
  subtitle,
  children,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-10">
          {kicker ? (
            <div className="mb-3 flex items-center gap-3">
              <div className="h-[2px] w-10 bg-primary" />
              <div className="text-xs font-semibold tracking-wide text-muted">{kicker}</div>
            </div>
          ) : null}
          <h2 className="text-2xl font-semibold leading-tight md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
