import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aibishter Engineering Services. Request a free solar consultation, ask about installations, or reach our engineering team directly.",
  keywords: [
    "contact Aibishter Solar",
    "solar consultation",
    "solar installation quote",
    "solar energy inquiry Philippines",
  ],
  openGraph: {
    title: "Contact Us | Aibishter Solar",
    description:
      "Request a free solar consultation or reach our engineering team directly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Aibishter Solar",
    description:
      "Request a free solar consultation or reach our engineering team directly.",
  },
  alternates: {
    canonical: "https://aibishter.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
