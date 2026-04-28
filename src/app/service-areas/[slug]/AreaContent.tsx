"use client";

import Image from "next/image";
import Link from "next/link";
import { Sun, ChevronRight, ArrowRight, Check, MapPin, Star, Zap, Battery, Wrench, Cpu, ShieldCheck } from "@/lib/icons";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

const iconMap = { Zap, Battery, Wrench, Cpu, ShieldCheck } as const;

const SERVICE_META: Record<string, { label: string; icon: keyof typeof iconMap; description: string }> = {
  "residential-solar": { label: "Residential Solar", icon: "Zap", description: "Custom solar installations for homes — from site survey to grid connection." },
  "commercial-solar": { label: "Commercial Solar", icon: "Cpu", description: "High-yield solar systems for businesses, warehouses, and commercial rooftops." },
  "solar-storage": { label: "Solar Storage", icon: "Battery", description: "Lithium-ion battery storage to keep your power flowing day and night." },
  "electrical-design": { label: "Electrical Design", icon: "ShieldCheck", description: "NEC-compliant single-line diagrams and permit-ready electrical documents." },
  "general-maintenance": { label: "General Maintenance", icon: "Wrench", description: "Panel cleaning, inverter checks, and performance monitoring to protect your investment." },
};

const ALL_SERVICES = Object.keys(SERVICE_META);

interface Review {
  authorName: string;
  authorLocation: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  photo?: string;
}

interface Area {
  slug: string;
  name: string;
  province: string;
  region: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  localContext?: string;
  heroImage?: string;
  featuredServices?: string[];
  coordinates?: { lat: number; lng: number };
}

export default function AreaContent({ area, reviews, jsonLd }: { area: Area; reviews: Review[]; jsonLd: object }) {
  const displayedServices = area.featuredServices?.length ? area.featuredServices : ALL_SERVICES;
  const heroHeadline = area.heroHeadline ?? `Solar Panel Installation in ${area.name}`;
  const heroSubheadline =
    area.heroSubheadline ??
    `Aibishter Engineering Services brings reliable, affordable solar energy to homes and businesses across ${area.name}, ${area.province}.`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">
        {/* Hero */}
        <section className="relative h-[40vh] sm:h-[48vh] md:h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-5xl overflow-hidden mb-14 md:mb-24">
          <Image
            src={
              area.heroImage ??
              "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            }
            alt={`Solar installation in ${area.name}`}
            fill
            priority
            suppressHydrationWarning
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-end pb-8 md:pb-20 px-6 md:px-12 z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-5xl mx-auto md:mx-0"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-6 flex-wrap">
                <Sun size={20} className="text-accent-yellow" />
                <Link href="/" className="text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={14} className="text-white/40" />
                <Link href="/service-areas" className="text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Service Areas
                </Link>
                <ChevronRight size={14} className="text-white/40" />
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{area.name}</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
                <MapPin size={16} className="text-accent-yellow" />
                <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest">
                  {area.province} · {area.region}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] md:leading-[1.1] font-poppins">
                {heroHeadline.split(" ").slice(0, 3).join(" ")}{" "}
                <span className="text-white/60">{heroHeadline.split(" ").slice(3).join(" ")}</span>
              </h1>
              <p className="mt-3 md:mt-6 text-white/80 max-w-xl font-sans leading-relaxed text-sm md:text-base mx-auto md:mx-0 hidden sm:block">
                {heroSubheadline}
              </p>
              <div className="mt-6 md:mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-accent-blue text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-colors gap-3 group shadow-lg"
                >
                  Get Free Estimate <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link
                  href="/solar-calculator"
                  className="inline-flex items-center bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Solar Calculator
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Context */}
        {area.localContext && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 font-poppins">
                Why Solar in <span className="text-accent-blue">{area.name}?</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{area.localContext}</p>
            </motion.div>
          </section>
        )}

        {/* Services grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">What we offer</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight font-poppins">
                Solar services in <span className="text-slate-400 dark:text-slate-500">{area.name}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedServices.map((serviceSlug) => {
                const meta = SERVICE_META[serviceSlug];
                if (!meta) return null;
                const Icon = iconMap[meta.icon];
                return (
                  <Link
                    key={serviceSlug}
                    href={`/service-areas/${area.slug}/${serviceSlug}`}
                    className="group flex flex-col gap-4 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-accent-blue hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                      <Icon size={22} className="text-accent-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-accent-blue transition-colors">
                      {meta.label} in {area.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-sans">{meta.description}</p>
                    <div className="flex items-center gap-2 text-accent-blue font-bold text-sm mt-auto">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Why Aibishter */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="bg-slate-900 dark:bg-slate-800 rounded-4xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow">Why Aibishter</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight font-poppins leading-tight">
                The trusted solar partner in {area.province}.
              </h2>
              <p className="mt-6 text-slate-400 leading-relaxed font-sans">
                From Lucena City to {area.name}, we deliver end-to-end solar solutions — site survey, engineering design,
                permits, installation, and after-sales monitoring.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Licensed engineers & certified installers",
                "Permit-ready electrical design documents",
                "End-to-end project management",
                "After-sales monitoring & maintenance",
                "Serving CALABARZON & Metro Manila",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-sans font-medium">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center">
                    <Check className="text-accent-blue" size={16} />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Reviews */}
        {reviews.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <div className="mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">Customer Reviews</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-poppins">
                  What our clients say
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                  >
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <Star key={s} size={16} className="text-accent-yellow fill-accent-yellow" />
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed text-sm flex-grow">
                      &ldquo;{review.reviewBody}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {review.photo ? (
                        <Image
                          src={review.photo}
                          alt={review.authorName}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                          suppressHydrationWarning
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm">
                          {review.authorName[0]}
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm">{review.authorName}</p>
                        <p className="text-xs text-slate-500">{review.authorLocation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight font-poppins">
              Ready to go solar in <span className="text-accent-blue">{area.name}?</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
              Get a free site assessment and customized solar proposal for your home or business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent-blue text-white font-bold px-10 py-5 rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-colors gap-3 group shadow-lg"
              >
                Get Free Estimate <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/solar-calculator"
                className="inline-flex items-center border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold px-10 py-5 rounded-full hover:border-accent-blue hover:text-accent-blue dark:hover:border-accent-blue dark:hover:text-accent-blue transition-colors"
              >
                Calculate Savings
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
