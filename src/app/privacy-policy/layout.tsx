import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Aibishter Engineering Services collects, uses, and protects your personal information.",
  alternates: {
    canonical: "https://aibishter.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
