import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost";

export function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const cls = variant === "primary" ? "btn btn-primary" : "btn btn-ghost";
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  type = "button",
}: {
  children: ReactNode;
  variant?: Variant;
  type?: "button" | "submit";
}) {
  const cls = variant === "primary" ? "btn btn-primary" : "btn btn-ghost";
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
}
