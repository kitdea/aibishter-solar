"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Leaf, Sun, ShieldCheck } from "@/lib/icons";
import { fadeUpVariant } from "@/lib/animations";
import type { SlideshowImage } from "@/sanity/queries";

type GalleryProject = { title?: string; image: string };

// ── Image Slideshow ────────────────────────────────────────────────────────────

const SLIDE_INTERVAL = 5000;

const FALLBACK_SLIDES: SlideshowImage[] = [
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    alt: "Solar panels on a rooftop installation",
  },
  {
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2072&auto=format&fit=crop",
    alt: "Commercial solar panel array",
  },
  {
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2072&auto=format&fit=crop",
    alt: "Residential solar installation Philippines",
  },
];

export function ImageSlideshow({ slides }: { slides: SlideshowImage[] }) {
  const active = slides.length > 0 ? slides : FALLBACK_SLIDES;
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = active.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (count < 2) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [count]);

  const slide = active[index];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariant}
      className="px-6 md:px-12 max-w-7xl mx-auto pb-24"
    >
      <div
        className="relative w-full aspect-[16/7] rounded-4xl overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-800"
        role="region"
        aria-label="Image slideshow"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        {slide.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/60 to-transparent px-8 py-6 pointer-events-none">
            <p className="text-white text-sm md:text-base font-sans">{slide.caption}</p>
          </div>
        )}

        {/* Prev / Next */}
        {count > 1 && (
          <>
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 backdrop-blur hover:bg-black/50 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 backdrop-blur hover:bg-black/50 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {count > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2" role="tablist" aria-label="Slide indicators">
            {active.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1} of ${count}`}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}

export function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <h1 className="text-[14vw] md:text-[min(10rem,12vw)] font-bold text-white leading-[0.88] md:leading-[0.85] tracking-tighter opacity-90 font-poppins">
        Switch to Solar.<br /><span className="text-[11vw] md:text-[min(8rem,10vw)] text-white/70">Own Your Energy.</span>
      </h1>
      <div className="flex flex-col md:flex-row md:items-end justify-between mt-5 md:mt-8 gap-4 md:gap-0">
        <p className="text-white/90 max-w-sm text-base md:text-2xl leading-relaxed">
          From precision solar panel installations to remote energy monitoring, fulfilling the promise of tomorrow&apos;s clean future.
        </p>
      </div>
    </motion.div>
  );
}

export function MeetExpertsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariant}
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="gap-8 items-start mb-8">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full py-1 px-4 flex items-center gap-2 shadow-sm">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-accent-blue border border-white"></div>
            <div className="w-6 h-6 rounded-full bg-accent-yellow border border-white"></div>
            <div className="w-6 h-6 rounded-full bg-slate-400 border border-white"></div>
          </div>
          <span className="text-base uppercase font-bold tracking-wider ml-2 text-slate-400 dark:text-slate-500">Meet Our Experts</span>
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-slate-900 dark:text-slate-50 max-w-5xl">
        From high-efficiency residential arrays to robust commercial grids,{" "}
        <span className="text-slate-400 dark:text-slate-400/80">innovating the transition to sustainable and reliable energy.</span>
      </h2>
    </motion.section>
  );
}

export function BentoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-accent-blue rounded-4xl p-8 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-2xl transition-all"
      >
        <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
          <Leaf size={40} />
        </div>
        <div>
          <h3 className="text-xl font-bold opacity-90 mb-1">Energy Saving</h3>
          <p className="text-blue-200 text-sm">of reference value</p>
        </div>
        <div>
          <div className="text-7xl font-bold tracking-tighter">89.0<span className="text-4xl text-accent-yellow">%</span></div>
          <div className="w-full bg-white dark:bg-slate-800/20 h-1 mt-4 rounded-full overflow-hidden">
            <div className="bg-accent-yellow h-full w-[89%] rounded-full"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-blue-50 dark:bg-slate-800 rounded-4xl p-6 relative overflow-hidden group"
      >
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 text-xs font-bold text-accent-blue dark:text-white uppercase tracking-widest bg-white dark:bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full">
          <Sun size={14} className="text-accent-yellow" /> Solar Irradiation
        </div>
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
          alt="Solar Detail"
          fill
          suppressHydrationWarning
          className="object-cover group-hover:scale-110 transition-transform duration-1000"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-4xl p-8 flex flex-col justify-between text-slate-800 dark:text-slate-200 hover:shadow-xl transition-all"
      >
        <div>
          <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
            <ShieldCheck size={20} className="text-accent-blue dark:text-white" />
          </div>
          <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mb-2">For every application</p>
          <h3 className="text-3xl font-bold leading-tight">Up to <span className="text-accent-blue">25 Years</span></h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">Comprehensive warranty covering panels, inverters, and roofing labor.</p>
        </div>
        <button className="self-start text-xs font-bold uppercase tracking-widest bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-4 py-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
          Read Terms
        </button>
      </motion.div>
    </div>
  );
}

export function LeadCaptureSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="px-4 md:px-12 max-w-[95%] mx-auto pb-24"
    >
      {children}
    </motion.section>
  );
}

export function GalleryGrid({ projects }: { projects: GalleryProject[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {projects.length > 0 ? projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
        >
          <Image
            src={project.image}
            alt={project.title ?? "Solar installation project"}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            suppressHydrationWarning
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </motion.div>
      )) : (
        <p className="col-span-4 text-slate-400 text-sm text-center py-12">No projects yet — add some in the Studio.</p>
      )}
    </div>
  );
}
