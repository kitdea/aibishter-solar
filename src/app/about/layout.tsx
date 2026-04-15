import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Aibishter Solar team — our CEO, COO, electrical engineers, licensed electricians, and sales professionals dedicated to delivering world-class solar energy solutions.",
  keywords: [
    "Aibishter Solar team",
    "solar energy company",
    "about Aibishter Solar",
    "solar installation professionals",
    "certified electrical engineers",
    "licensed electricians solar",
    "solar company leadership",
    "renewable energy experts",
  ],
  openGraph: {
    title: "About Us – Aibishter Solar",
    description:
      "Learn about Aibishter Solar's story, mission, and the dedicated team behind every clean energy installation — from our CEO to our field electricians.",
    url: "https://aibishter.com/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Aibishter Solar – Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Aibishter Solar",
    description:
      "Meet the engineers, electricians, and leaders powering Aibishter Solar's clean energy mission.",
    images: [
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://aibishter.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
