import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});
export const metadata: Metadata = {
  title: "Aibishter Solar - Clean, Sustainable Solar Solutions",
  description: "Top-tier solar energy panel installations for homes and businesses. Save money and help the environment with Aibishter Solar.",
  keywords: "solar energy, solar panels, renewable energy, clean energy, solar installation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solaris Energy",
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    "@id": "https://solarisenergy.com",
    "url": "https://solarisenergy.com",
    "telephone": "+18001234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Solar Way",
      "addressLocality": "Eco City",
      "addressRegion": "EC",
      "postalCode": "90210",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${nunito.variable} font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
