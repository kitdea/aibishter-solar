import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Calculator Philippines – System Size & Savings Estimator",
  description:
    "Free solar calculator for Philippine homeowners and businesses. Estimate your ideal solar system size and monthly savings using Meralco rates and PAGASA sun-hour data.",
  keywords: [
    "solar calculator Philippines",
    "solar system size calculator",
    "solar savings calculator",
    "Meralco solar savings",
    "solar panel ROI Philippines",
    "kWp calculator Philippines",
    "solar energy savings Philippines",
    "PAGASA peak sun hours",
    "solar panel cost Philippines",
    "net metering Philippines",
    "RA 9513 solar",
    "Aibishter Solar calculator",
  ],
  openGraph: {
    title: "Solar Calculator Philippines – Aibishter Solar",
    description:
      "Estimate your solar system size and projected monthly savings with our free, Philippines-specific calculators. Powered by PAGASA sun-hour data and Meralco reference rates.",
    url: "https://aibishter.com/solar-calculator",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Solar panels – Aibishter Solar Philippines Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Calculator Philippines – Aibishter Solar",
    description:
      "Free solar system size and savings calculator for the Philippines. Uses Meralco rates and PAGASA sun-hour averages.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://aibishter.com/solar-calculator",
  },
};

export default function SolarCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
