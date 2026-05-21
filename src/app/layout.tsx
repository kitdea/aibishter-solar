import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getNavServices } from "@/sanity/queries";
import Script from "next/script";

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
  icons: {
    icon: "/aes_logo.svg",
    shortcut: "/aes_logo.svg",
    apple: "/aes_logo.svg",
  },
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
        url: "https://cdn.sanity.io/images/h6b9cl6i/production/97acacd6486fbc9d3bad72e6c81b8b1bade891cb-2070x1377.jpg",
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
      "https://cdn.sanity.io/images/h6b9cl6i/production/97acacd6486fbc9d3bad72e6c81b8b1bade891cb-2070x1377.jpg",
    ],
  },
  alternates: {
    canonical: "https://aibishter.com",
  },
  verification: {
    google: "uNm_2WFb9zXVii2IH_8C4c8SQI5oA0T57dt8i4c0M7g",
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
      "https://cdn.sanity.io/images/h6b9cl6i/production/97acacd6486fbc9d3bad72e6c81b8b1bade891cb-2070x1377.jpg",
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CVQ70HGDJB"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CVQ70HGDJB');
        `}
      </Script>
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
