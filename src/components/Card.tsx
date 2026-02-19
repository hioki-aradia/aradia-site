import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-line bg-card p-6 shadow-soft">{children}</div>;
}
