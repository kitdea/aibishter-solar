import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Projects & Portfolio",
  description:
    "Browse completed residential and commercial solar installations by Aibishter Engineering Services — from microgrids to rooftop arrays.",
  keywords: [
    "solar projects",
    "solar portfolio",
    "residential solar installation",
    "commercial solar installation",
    "solar microgrid Philippines",
  ],
  openGraph: {
    title: "Solar Projects & Portfolio | Aibishter Solar",
    description:
      "Browse completed residential and commercial solar installations by Aibishter Engineering Services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Projects & Portfolio | Aibishter Solar",
    description:
      "Browse completed residential and commercial solar installations.",
  },
  alternates: {
    canonical: "https://aibishter.com/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
