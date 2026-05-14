import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Aibishter Engineering Services. Understand your rights and obligations when using our website and solar installation services.",
  alternates: {
    canonical: "https://aibishter.com/terms-of-service",
  },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
