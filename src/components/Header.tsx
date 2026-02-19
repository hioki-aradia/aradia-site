import Link from "next/link";
import { Container } from "@/components/Container";

export function Header({
  brandHref,
  items,
  right,
}: {
  brandHref: string;
  items: readonly { href: string; label: string; cta?: boolean }[];
  right?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href={brandHref} className="text-sm font-semibold tracking-wide">
            Aradia
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {items
              .filter((x) => !x.cta)
              .map((x) => (
                <Link key={x.href} href={x.href} className="text-sm text-muted hover:text-fg">
                  {x.label}
                </Link>
              ))}
            {items.find((x) => x.cta) ? (
              <Link
                href={items.find((x) => x.cta)!.href}
                className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
              >
                {items.find((x) => x.cta)!.label}
              </Link>
            ) : null}
          </nav>
          <div className="flex items-center gap-3">{right}</div>
        </div>
      </Container>
    </header>
  );
}
