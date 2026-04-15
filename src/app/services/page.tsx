"use client";

import Image from "next/image";
import { Check, Zap, Battery, Wrench, ArrowRight, Sun, Cpu } from "@/lib/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { services } from "@/lib/services-data";

const iconMap = { Zap, Battery, Wrench, Cpu } as const;

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Inner Page Hero Banner */}
      <section className="relative min-h-125 h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-5xl overflow-hidden mb-24">
        <Image
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
          alt="Aibishter Solar services"
          fill
          priority
          suppressHydrationWarning
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-12 z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto md:mx-0"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Sun size={24} className="text-accent-yellow" />
              <span className="uppercase tracking-widest text-xs font-bold text-white/80">Aibishter Solar / Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] font-poppins">
              Comprehensive solar <span className="text-white/60">energy solutions.</span>
            </h1>
            <p className="mt-6 md:mt-8 text-white/80 max-w-lg font-sans leading-relaxed text-sm md:text-base mx-auto md:mx-0">
              Designed for efficiency, durability, and maximum savings. We handle the engineering while you reap the rewards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List overlapping style */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {services.map((service, index) => {
          const [titleWord1, ...titleRest] = service.title.split(' ');
          const IconComponent = iconMap[service.iconName];
          return (
          <motion.div
            key={service.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Visual — clicking the image navigates to the detail page */}
            <Link href={`/services/${service.slug}`} className="lg:w-1/2 relative h-125 md:h-150 w-full rounded-5xl overflow-hidden group shadow-xl block">
              <Image
                src={service.image}
                alt={service.title}
                fill
                suppressHydrationWarning
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute top-6 left-6 bg-white dark:bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3">
                <IconComponent size={20} className="text-accent-blue" />
                <span className="text-sm font-bold tracking-widest uppercase text-slate-900 dark:text-white">{service.title}</span>
              </div>
            </Link>

            {/* Content */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-8 pr-12">
              <div className="text-accent-blue font-mono font-bold text-lg opacity-40 -mb-4">0{index + 1}</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                {titleWord1} <span className="text-slate-400 dark:text-slate-500">{titleRest.join(' ')}</span>
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-sans font-semibold">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <Check className="text-accent-blue" size={16} />
                    </div>
                    {feature.label}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:bg-accent-blue transition-colors gap-3 group shadow-lg"
                >
                  Learn More <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold px-8 py-4 rounded-full hover:border-accent-blue hover:text-accent-blue dark:hover:border-accent-blue dark:hover:text-accent-blue transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
          );
        })}
      </section>

    </div>
  );
}
