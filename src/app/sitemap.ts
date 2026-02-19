import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const routes = [
    "/",
    "/jp",
    "/jp/services",
    "/jp/industries",
    "/jp/quality",
    "/jp/process",
    "/jp/company",
    "/jp/careers",
    "/jp/contact",
    "/jp/privacy",
    "/jp/terms",
    "/vi",
    "/vi/services",
    "/vi/workforce",
    "/vi/recruit",
    "/vi/company",
    "/vi/contact",
    "/vi/privacy",
    "/vi/terms",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
