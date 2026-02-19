import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { navVI } from "@/config/nav.vi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="vi" className="page-bg">
      <Header brandHref="/vi" items={navVI} right={null} />
      {children}
      <Footer localeBase="/vi" />
    </div>
  );
}
