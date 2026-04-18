import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    "Top-tier solar energy panel installations for homes and businesses in Eco City. Save money and help the environment with Aibishter Engineering Services.",
  keywords: [
    "solar energy",
    "solar panels",
    "renewable energy",
    "clean energy",
    "solar installation",
    "residential solar",
    "commercial solar",
    "solar storage",
    "battery backup",
    "Aibishter",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aibishter Engineering Services",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    "@id": "https://aibishter.com",
    url: "https://aibishter.com",
    telephone: "+18001234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Solar Way",
      addressLocality: "Eco City",
      addressRegion: "EC",
      postalCode: "90210",
      addressCountry: "US",
    },
    sameAs: [],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
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
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
