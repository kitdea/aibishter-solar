import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn how Aibishter Engineering Services uses cookies and similar tracking technologies on our website.",
  alternates: {
    canonical: "https://aibishter.com/cookie-policy",
  },
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
