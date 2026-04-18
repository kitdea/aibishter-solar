import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Blog & News",
  description:
    "Stay informed with the latest solar energy guides, battery storage tips, and industry insights from Aibishter Engineering Services.",
  keywords: [
    "solar blog",
    "solar news",
    "solar energy guides",
    "battery storage tips",
    "renewable energy Philippines",
  ],
  openGraph: {
    title: "Solar Blog & News | Aibishter Solar",
    description:
      "Latest solar energy guides, battery storage tips, and industry insights from Aibishter Engineering Services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Blog & News | Aibishter Solar",
    description:
      "Latest solar energy guides, battery storage tips, and industry insights.",
  },
  alternates: {
    canonical: "https://aibishter.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
