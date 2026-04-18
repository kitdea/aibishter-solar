import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Aibishter Solar offers residential solar, commercial solar, solar battery storage, electrical design, and general maintenance services. Permit-ready engineering solutions for homes and businesses.",
  keywords: [
    "solar installation services",
    "residential solar panels",
    "commercial solar installation",
    "solar battery storage",
    "electrical design solar",
    "single-line diagram",
    "solar permit documentation",
    "NEC code compliance solar",
    "solar panel maintenance",
    "solar system inspection",
    "solar energy services",
    "Aibishter Solar",
  ],
  openGraph: {
    title: "Our Services – Aibishter Solar",
    description:
      "From residential and commercial solar to battery storage, electrical design, and general maintenance — explore all of Aibishter Solar's engineering solutions.",
    url: "https://aibishter.com/services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Aibishter Solar Services – Solar panels on a home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services – Aibishter Solar",
    description:
      "Residential solar, commercial solar, battery storage, and electrical design — Aibishter Solar has you covered.",
    images: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://aibishter.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
