import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Browse all pages on the Aibishter Engineering Services website — services, service areas, blog, and more.",
  alternates: {
    canonical: "https://aibishter.com/sitemap-page",
  },
};

export default function SitemapPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
