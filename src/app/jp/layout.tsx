import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { navJP } from "@/config/nav.jp";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="jp">
      <Header brandHref="/jp" items={navJP} right={null} />
      {children}
      <Footer localeBase="/jp" />
    </div>
  );
}
