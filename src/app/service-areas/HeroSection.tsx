"use client";

import Image from "next/image";
import { Sun } from "@/lib/icons";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[40vh] sm:h-[48vh] md:h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-5xl overflow-hidden mb-14 md:mb-24">
      <Image
        src="https://cdn.sanity.io/images/h6b9cl6i/production/31fb1c1d0234076dcb17291c74661248a1189ed8-1280x960.jpg"
        alt="Solar panels across the Philippines — Aibishter Engineering Services"
        fill
        priority
        suppressHydrationWarning
        className="object-cover scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
      <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-12 z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto md:mx-0"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-6">
            <Sun size={24} className="text-accent-yellow" />
            <span className="uppercase tracking-widest text-xs font-bold text-white/80">Aibishter Solar / Service Areas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] md:leading-[1.1] font-poppins">
            We bring solar <span className="text-white/60">to your city.</span>
          </h1>
          <p className="mt-4 md:mt-8 text-white/80 max-w-lg font-sans leading-relaxed text-sm md:text-base mx-auto md:mx-0">
            From Lucena City to Metro Manila - covering all of CALABARZON and the National Capital Region.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
