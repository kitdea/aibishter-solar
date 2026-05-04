import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getNavServices } from "@/sanity/queries";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aibishter.com"),
  title: {
    default: "Aibishter Solar – Clean, Sustainable Solar Solutions",
    template: "%s | Aibishter Solar",
  },
  description:
    "Top-tier solar energy panel installations for homes and businesses across CALABARZON and Metro Manila. Save money and help the environment with Aibishter Engineering Services.",
  keywords: [
    "solar energy Philippines",
    "solar panels CALABARZON",
    "solar panels Metro Manila",
    "solar installation Quezon Province",
    "residential solar Philippines",
    "commercial solar Philippines",
    "solar storage",
    "battery backup",
    "Aibishter Engineering Services",
    "solar installer Lucena City",
  ],
  authors: [{ name: "Aibishter Engineering Services" }],
  creator: "Aibishter Engineering Services",
  publisher: "Aibishter Engineering Services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aibishter.com",
    siteName: "Aibishter Solar",
    title: "Aibishter Solar – Clean, Sustainable Solar Solutions",
    description:
      "Top-tier solar energy panel installations for homes and businesses. Save money and help the environment with Aibishter Engineering Services.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Aibishter Solar – Clean Energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aibishter Solar – Clean, Sustainable Solar Solutions",
    description:
      "Top-tier solar energy panel installations for homes and businesses.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://aibishter.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navServices = await getNavServices().catch(() => []);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Aibishter Engineering Services",
    description:
      "Top-tier solar energy panel installations for homes and businesses across CALABARZON and Metro Manila. Certified engineers, licensed electricians, and permit-ready documentation.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    "@id": "https://aibishter.com/#business",
    url: "https://aibishter.com",
    telephone: "+639171898089",
    email: "sales.aibishter@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "PH 6, Citta Grande, Via Lucera Street Blk 4 Lot 18",
      addressLocality: "Lucena City",
      addressRegion: "Quezon",
      postalCode: "4301",
      addressCountry: "PH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.9373,
      longitude: 121.6170,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Metro Manila" },
      { "@type": "AdministrativeArea", name: "Quezon Province" },
      { "@type": "AdministrativeArea", name: "Cavite" },
      { "@type": "AdministrativeArea", name: "Laguna" },
      { "@type": "AdministrativeArea", name: "Batangas" },
      { "@type": "AdministrativeArea", name: "Rizal" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Installation Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Solar Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Solar Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Battery Storage" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Design & Documentation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solar Panel Maintenance" } },
      ],
    },
    sameAs: [
      "https://www.instagram.com/aibishter_engineering/",
      "https://x.com/AibishterES",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    currenciesAccepted: "PHP",
    paymentAccepted: "Cash, Bank Transfer, Check",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${nunito.variable} font-sans min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar navServices={navServices} />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
