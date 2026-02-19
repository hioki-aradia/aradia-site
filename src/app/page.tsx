import Link from "next/link";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <main>
      <section className="border-b border-line py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-semibold md:text-4xl">Aradia</h1>
            <p className="mt-4 text-base text-muted">日本法人向け / ベトナム法人向け</p>
            <div className="mt-10 flex justify-center gap-3">
              <Link href="/jp" className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-95">
                日本語（JP）
              </Link>
              <Link href="/vi" className="rounded-xl border border-line px-6 py-3 text-sm font-semibold hover:bg-black/5">
                Tiếng Việt（VI）
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
