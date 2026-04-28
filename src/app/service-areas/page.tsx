import type { Metadata } from "next";
import Link from "next/link";
import { getAllServiceAreas } from "@/sanity/queries";
import { MapPin, ArrowRight } from "@/lib/icons";
import HeroSection from "./HeroSection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Solar Service Areas – CALABARZON & Metro Manila | Aibishter Solar",
  description:
    "Aibishter Engineering Services installs residential and commercial solar panels across Quezon Province, CALABARZON, and Metro Manila. Find your city.",
  keywords: [
    "solar installation Philippines",
    "solar panels CALABARZON",
    "solar panels Metro Manila",
    "solar panels Quezon Province",
    "solar energy Lucena City",
    "solar installer near me",
  ],
  openGraph: {
    title: "Solar Service Areas – CALABARZON & Metro Manila | Aibishter Solar",
    description:
      "Find solar installation services in your city. Aibishter covers Quezon Province, all of CALABARZON, and Metro Manila.",
    url: "https://aibishter.com/service-areas",
  },
  alternates: { canonical: "https://aibishter.com/service-areas" },
};

const REGION_ORDER = ["NCR", "CALABARZON"];
const PROVINCE_ORDER = ["Metro Manila", "Quezon", "Cavite", "Laguna", "Batangas", "Rizal"];

interface ServiceArea {
  slug: string;
  name: string;
  province: string;
  region: string;
}

export default async function AreasPage() {
  const areas: ServiceArea[] = await getAllServiceAreas();

  const grouped: Record<string, Record<string, ServiceArea[]>> = {};
  for (const area of areas) {
    if (!grouped[area.region]) grouped[area.region] = {};
    if (!grouped[area.region][area.province]) grouped[area.region][area.province] = [];
    grouped[area.region][area.province].push(area);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aibishter.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://aibishter.com/service-areas" },
    ],
  };

  return (
    <>
      {/* Static JSON-LD structured data — no user input, XSS-safe */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">

        <HeroSection />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-20">
            {REGION_ORDER.map((region) => {
              const provinces = grouped[region];
              if (!provinces) return null;
              const regionId = region === "NCR" ? "metro-manila" : "calabarzon";
              return (
                <div key={region} id={regionId}>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins mb-8 flex items-center gap-3">
                    <MapPin size={20} className="text-accent-blue" />
                    {region === "NCR" ? "Metro Manila (NCR)" : "CALABARZON (Region IV-A)"}
                  </h2>
                  <div className="space-y-10">
                    {PROVINCE_ORDER.filter((p) => provinces[p]).map((province) => (
                      <div key={province} id={province.toLowerCase().replace(/\s+/g, "-")}>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                          {province}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                          {provinces[province].map((area) => (
                            <Link
                              key={area.slug}
                              href={`/service-areas/${area.slug}`}
                              className="group flex items-center justify-between gap-2 px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-accent-blue hover:shadow-md transition-all text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-accent-blue dark:hover:text-accent-blue"
                            >
                              {area.name}
                              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {areas.length === 0 && (
            <div className="text-center py-32 text-slate-400">
              <MapPin size={40} className="mx-auto mb-4 opacity-40" />
              <p className="font-sans">Service areas are being added. Check back soon.</p>
            </div>
          )}

          <div className="mt-24 text-center space-y-6">
            <p className="text-slate-500 dark:text-slate-400 font-sans">
              Don&apos;t see your city? We may still serve your area.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-accent-blue text-white font-bold px-10 py-5 rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-colors gap-3 group shadow-lg"
            >
              Ask about your location <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
