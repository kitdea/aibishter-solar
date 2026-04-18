"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Zap, Battery, Wrench, Cpu, ShieldCheck, Check, ArrowRight, Sun, ChevronRight } from "@/lib/icons";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { getServiceBySlug } from "@/lib/services-data";

const iconMap = { Zap, Battery, Wrench, Cpu, ShieldCheck } as const;

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const IconComponent = iconMap[service.iconName];
  const [titleWord1, ...titleRest] = service.title.split(" ");

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">

      {/* Hero Banner */}
      <section className="relative h-[40vh] sm:h-[48vh] md:h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-5xl overflow-hidden mb-14 md:mb-24">
        <Image
          src={service.heroImage}
          alt={`${service.title} – Aibishter Solar`}
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
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Aibishter Solar
              </span>
              <ChevronRight size={14} className="text-white/40" />
              <Link
                href="/services"
                className="text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                Services
              </Link>
              <ChevronRight size={14} className="text-white/40" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                {service.title}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] md:leading-[1.1] font-poppins">
              {titleWord1}{" "}
              <span className="text-white/60">{titleRest.join(" ")}</span>
            </h1>
            <p className="mt-3 md:mt-6 text-white/80 max-w-lg font-sans leading-relaxed text-sm md:text-base mx-auto md:mx-0 hidden sm:block">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Text */}
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <IconComponent size={24} className="text-accent-blue" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold text-accent-blue">
                / Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              What we{" "}
              <span className="text-slate-400 dark:text-slate-500">
                deliver.
              </span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              {service.description}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              {service.longDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex max-w-max items-center bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:bg-accent-blue transition-colors gap-3 group shadow-lg"
            >
              Request a Quote{" "}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative h-72 sm:h-80 md:h-100 lg:h-125 w-full rounded-4xl md:rounded-5xl overflow-hidden shadow-xl group">
            <Image
              src={service.image}
              alt={service.title}
              fill
              suppressHydrationWarning
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </motion.div>
      </section>

      {/* What's Included */}
      <section className="bg-white dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <div className="text-xs uppercase tracking-widest font-bold text-accent-blue mb-4">
              / What&apos;s Included
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Everything you need,{" "}
              <span className="text-slate-400 dark:text-slate-500">
                nothing you don&apos;t.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: idx * 0.1 },
                  },
                }}
                className="flex gap-5 p-7 bg-slate-50 dark:bg-slate-800 rounded-4xl border border-slate-100 dark:border-slate-700"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                  <Check size={18} className="text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    {feature.label}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-sans text-sm leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aibishter */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-widest font-bold text-accent-blue mb-4">
            / Why Aibishter
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            The Aibishter{" "}
            <span className="text-slate-400 dark:text-slate-500">
              advantage.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.97 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: idx * 0.1 },
                },
              }}
              className={`p-8 rounded-4xl border ${
                idx === 0
                  ? "bg-accent-blue border-accent-blue"
                  : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700"
              }`}
            >
              <div
                className={`text-3xl font-extrabold tracking-tighter mb-4 font-mono ${
                  idx === 0 ? "text-blue-200" : "text-accent-blue opacity-40"
                }`}
              >
                0{idx + 1}
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  idx === 0 ? "text-white" : "text-slate-900 dark:text-white"
                }`}
              >
                {benefit.title}
              </h3>
              <p
                className={`font-sans text-sm leading-relaxed ${
                  idx === 0
                    ? "text-blue-100"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="relative overflow-hidden bg-slate-900 dark:bg-slate-800 rounded-4xl md:rounded-5xl px-8 md:px-16 py-16 text-center"
        >
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow opacity-5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight font-poppins">
              Ready to get started?
            </h2>
            <p className="text-white/70 font-sans mb-10 max-w-lg mx-auto leading-relaxed">
              Contact us today for a free consultation and custom quote on your{" "}
              {service.title.toLowerCase()} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent-blue text-white font-bold px-8 py-4 rounded-full hover:bg-blue-500 transition-colors gap-3 group shadow-lg"
              >
                Get a Free Quote{" "}
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center text-white/70 font-bold px-8 py-4 rounded-full border border-white/20 hover:border-white/50 hover:text-white transition-colors gap-2"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
