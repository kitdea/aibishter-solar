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

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate the solar system size I need in the Philippines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide your average monthly kWh consumption by 30 (days) to get your daily kWh usage. Divide by peak sun hours for your location (4–5 hours in the Philippines) and add 20% for system losses. This gives your minimum kWp system size.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I save on my Meralco bill with solar panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 5kWp residential system generates 550–650 kWh per month in CALABARZON and Metro Manila. At current Meralco rates, that can translate to ₱8,000–₱12,000 in monthly savings depending on your consumption and net metering arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "What is net metering in the Philippines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Net metering (under RA 9513) lets solar owners export excess electricity to the grid and receive a bill credit. Distribution utilities like Meralco must accept net metering applications from systems up to 100kWp.",
      },
    },
    {
      "@type": "Question",
      name: "How many peak sun hours does the Philippines get?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on PAGASA data, most Philippine regions receive 4.5–5.5 peak sun hours per day. CALABARZON averages around 4.8 hours, Metro Manila around 4.5 hours.",
      },
    },
  ],
};

export default function SolarCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      {children}
    </>
  );
}
