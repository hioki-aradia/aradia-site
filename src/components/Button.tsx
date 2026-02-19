import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost";

function classes(variant: Variant) {
  return variant === "primary"
    ? "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95 active:opacity-90"
    : "inline-flex items-center justify-center rounded-xl border border-line bg-transparent px-5 py-3 text-sm font-semibold text-fg transition hover:bg-black/5 active:bg-black/10";
}

export function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <Link href={href} className={classes(variant)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}: {
  children: ReactNode;
  variant?: Variant;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button type={type} onClick={onClick} className={classes(variant)}>
      {children}
    </button>
  );
}
