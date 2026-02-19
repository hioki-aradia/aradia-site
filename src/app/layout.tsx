import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Aradia",
    template: "%s | Aradia",
  },
  description: "Annotation services.",
  openGraph: {
    title: "Aradia",
    description: "Annotation services.",
    url: SITE.domain,
    siteName: "Aradia",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/og-default.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
