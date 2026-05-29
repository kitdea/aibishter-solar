"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sun } from "@/lib/icons";
import DOEBadgeMarquee from "@/components/DOEBadgeMarquee";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

interface Project {
  title: string;
  type: string;
  systemSize: string;
  image: string;
  year?: number;
}

export default function ProjectsContent({ projects, currentYear }: { projects: Project[]; currentYear: number }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">
      <section className="relative h-[38vh] sm:h-[45vh] md:h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-[3rem] overflow-hidden">
        <Image
          src="https://cdn.sanity.io/images/h6b9cl6i/production/583a34b1bf12ceb766c0d03838dac2e424f39780-1280x960.jpg"
          alt="Aibishter Solar Portfolio"
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
              <span className="uppercase tracking-widest text-xs font-bold text-white/80">Aibishter Solar / Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight md:leading-[0.9] font-poppins">
              Selected <span className="text-white/60">Works.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <DOEBadgeMarquee />

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className={`group flex flex-col cursor-pointer ${index % 2 !== 0 ? "md:mt-24" : ""}`}
            >
              <div className="relative h-100 md:h-125 w-full rounded-4xl md:rounded-5xl overflow-hidden mb-8 shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  suppressHydrationWarning
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-6 right-6">
                  <div className="bg-white dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white shadow-sm">
                    {project.systemSize}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl">
                    <ArrowUpRight size={24} className="text-slate-900 dark:text-white" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start pl-4 md:pl-8 border-l border-slate-300 group-hover:border-accent-blue transition-colors duration-500">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-accent-blue transition-colors">{project.title}</h3>
                  <p className="font-sans text-slate-500 dark:text-slate-400 font-medium">{project.type}</p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                  {project.year ?? currentYear}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="max-w-7xl mx-auto px-6 md:px-12 mt-32 text-center"
      >
        <Link
          href="/contact"
          className="inline-flex items-center text-5xl md:text-7xl font-bold text-slate-300 hover:text-accent-blue transition-colors group"
        >
          Let&apos;s talk <ArrowUpRight className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 ml-4" size={64} />
        </Link>
      </motion.section>
    </div>
  );
}
