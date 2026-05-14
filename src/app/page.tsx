import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, ThermometerSun } from "@/lib/icons";
import EstimateForm from "./EstimateForm";
import { getRecentProjectsWithImages } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Solar Panel Installation Philippines | Aibishter Engineering",
  description:
    "Aibishter Engineering Services installs residential and commercial solar panels across the Philippines. Certified engineers. Get a free consultation today.",
  keywords: [
    "solar panel installation Philippines",
    "solar energy CALABARZON",
    "residential solar Lucena City",
    "commercial solar Metro Manila",
    "solar installer Philippines",
    "solar panels Quezon Province",
    "net metering Philippines",
    "solar energy savings Philippines",
  ],
  alternates: { canonical: "https://aibishter.com" },
  openGraph: {
    title: "Solar Panel Installation Philippines – Aibishter Engineering",
    description:
      "Aibishter Engineering Services installs residential and commercial solar panels across the Philippines. Certified engineers. Get a free consultation today.",
    url: "https://aibishter.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Solar panels installed by Aibishter Engineering Services Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Panel Installation Philippines – Aibishter Engineering",
    description:
      "Aibishter Engineering Services installs residential and commercial solar panels across the Philippines.",
    images: ["https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"],
  },
};
import { HeroText, ImageSlideshow, MeetExpertsSection, BentoCards, LeadCaptureSection, GalleryGrid } from "./HomeAnimations";
import { getSlideshowImages } from "@/sanity/queries";
import BenefitsSection from "@/components/BenefitsSection";

export default async function Home() {
  const [galleryProjects, slideshowImages] = await Promise.all([
    getRecentProjectsWithImages(),
    getSlideshowImages(),
  ]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">

      <section className="relative h-[70vh] md:h-screen w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-[3rem] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          alt="Solar panels filling the sky"
          fill
          priority
          sizes="100vw"
          suppressHydrationWarning
          className="object-cover object-bottom scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end pb-10 md:pb-24 px-6 md:px-12 z-10">
          <h1 className="sr-only">Solar Panel Installation in the Philippines – Aibishter Engineering Services</h1>
          <HeroText />
        </div>
      </section>

      <MeetExpertsSection />

      <ImageSlideshow slides={slideshowImages} />

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-accent-blue">
          Eco-friendly solutions <span className="text-slate-400 dark:text-slate-500 font-normal">for a smarter home</span>
        </h2>
        <BentoCards />
      </section>

      <BenefitsSection />

      <LeadCaptureSection>
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10 blur-3xl rounded-full w-200 h-200 bg-accent-yellow pointer-events-none"></div>

          <div className="lg:w-1/2 p-12 md:p-20 relative z-10 flex flex-col justify-center">
            <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-6">Take control of<br />your power bill.</h2>
            <p className="text-slate-400 dark:text-slate-500 text-lg md:text-xl mb-12 max-w-md font-sans leading-relaxed">
              We give homeowners and businesses a comprehensive view of their energy usage, enabling unparalleled efficiency and savings.
            </p>
            <div className="grid grid-cols-2 gap-8 text-white">
              <div className="space-y-2">
                <div className="text-accent-yellow"><Zap size={24} /></div>
                <h4 className="font-bold">Instant Savings</h4>
                <p className="text-m text-slate-400 dark:text-slate-500">Lock in your rates against inflation.</p>
              </div>
              <div className="space-y-2">
                <div className="text-accent-blue"><ThermometerSun size={24} /></div>
                <h4 className="font-bold">Tax Incentives</h4>
                <p className="text-m text-slate-400 dark:text-slate-500">Utilize local rebates.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white dark:bg-slate-800 m-4 md:m-8 lg:m-4 rounded-4xl p-8 md:p-12 relative z-10 shadow-inner">
            <div className="mb-8">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4 inline-block">Free Consultation</span>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Send a Message.</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Our engineering consultants usually respond immediately during office hours.</p>
            </div>
            <EstimateForm />
          </div>
        </div>
      </LeadCaptureSection>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="flex justify-between items-end border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Our Recent Work</h3>
          <Link href="/projects" className="text-sm font-bold uppercase tracking-widest text-accent-blue flex items-center gap-1 hover:text-accent-yellow transition-colors">
            View Projects <ArrowRight size={16} />
          </Link>
        </div>
        <GalleryGrid projects={galleryProjects} />
      </section>

    </div>
  );
}
