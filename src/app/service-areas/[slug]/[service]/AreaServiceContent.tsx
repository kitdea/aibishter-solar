"use client";

import Image from "next/image";
import Link from "next/link";
import { Sun, ChevronRight, ArrowRight, Check, MapPin, Star } from "@/lib/icons";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

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
}

interface ServiceData {
  slug: { current: string } | string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: { label: string; detail: string }[];
  benefits: { title: string; description: string }[];
  heroImage?: string;
}

export default function AreaServiceContent({
  area,
  service,
  reviews,
  jsonLd,
}: {
  area: Area;
  service: ServiceData;
  reviews: Review[];
  jsonLd: object;
}) {
  const serviceSlug = typeof service.slug === "string" ? service.slug : service.slug?.current;
  const [titleWord1, ...titleRest] = service.title.split(" ");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">
        {/* Hero */}
        <section className="relative h-[40vh] sm:h-[48vh] md:h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-5xl overflow-hidden mb-14 md:mb-24">
          <Image
            src={
              service.heroImage ??
              "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
            }
            alt={`${service.title} in ${area.name}`}
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
              {/* Breadcrumb */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-6 flex-wrap">
                <Sun size={20} className="text-accent-yellow" />
                <Link href="/service-areas" className="text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Areas
                </Link>
                <ChevronRight size={14} className="text-white/40" />
                <Link href={`/service-areas/${area.slug}`} className="text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                  {area.name}
                </Link>
                <ChevronRight size={14} className="text-white/40" />
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{service.title}</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-4">
                <MapPin size={16} className="text-accent-yellow" />
                <span className="text-accent-yellow text-sm font-bold uppercase tracking-widest">
                  {area.name} · {area.province}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] md:leading-[1.1] font-poppins">
                {titleWord1} <span className="text-white/60">{titleRest.join(" ")}</span>
                <br />
                <span className="text-white/40">in {area.name}</span>
              </h1>
              <p className="mt-3 md:mt-6 text-white/80 max-w-xl font-sans leading-relaxed text-sm md:text-base mx-auto md:mx-0 hidden sm:block">
                {service.tagline}
              </p>
              <div className="mt-6 md:mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-accent-blue text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-colors gap-3 group shadow-lg"
                >
                  Get Free Estimate <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link
                  href={`/services/${serviceSlug}`}
                  className="inline-flex items-center bg-white/10 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  Full Service Details
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Description */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-poppins">
                {service.title} <span className="text-accent-blue">in {area.name}</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">{service.description}</p>
              {service.longDescription && (
                <p className="text-slate-500 dark:text-slate-500 leading-relaxed font-sans">{service.longDescription}</p>
              )}
            </div>
            {service.features?.length > 0 && (
              <ul className="space-y-4">
                {service.features.map((f, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <Check className="text-accent-blue" size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white font-sans">{f.label}</p>
                      {f.detail && <p className="text-slate-500 text-sm mt-1 font-sans">{f.detail}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </section>

        {/* Benefits */}
        {service.benefits?.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <div className="mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">Why it matters</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-poppins">
                  Benefits for {area.name} homeowners & businesses
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
                    <div className="text-accent-blue font-mono font-bold text-lg opacity-40">0{i + 1}</div>
                    <h3 className="font-bold text-slate-900 dark:text-white font-poppins text-lg">{benefit.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-sans">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

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
                <span className="text-xs font-bold uppercase tracking-widest text-accent-blue">What clients say</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-poppins">
                  Trusted across {area.province}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.slice(0, 3).map((review, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
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
                        <Image src={review.photo} alt={review.authorName} width={40} height={40} className="rounded-full object-cover" suppressHydrationWarning />
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
              Get {service.title} in{" "}
              <span className="text-accent-blue">{area.name}</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
              Free site assessment, no-obligation quote. Our team serves {area.name} and nearby areas in {area.province}.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent-blue text-white font-bold px-10 py-5 rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-colors gap-3 group shadow-lg"
              >
                Request a Free Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href={`/service-areas/${area.slug}`}
                className="inline-flex items-center border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold px-10 py-5 rounded-full hover:border-accent-blue hover:text-accent-blue dark:hover:border-accent-blue dark:hover:text-accent-blue transition-colors"
              >
                All services in {area.name}
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
