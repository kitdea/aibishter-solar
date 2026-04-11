"use client";

import Image from "next/image";
import { CheckCircle2, Award, Users, TrendingUp, Sun } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Inner Page Hero Banner */}
      <section className="relative min-h-[500px] h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-20">
        <Image
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
          alt="Aibishter Solar professionals"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-12 z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto md:mx-0"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Sun size={24} className="text-accent-yellow" />
              <span className="uppercase tracking-widest text-xs font-bold text-white/80">Aibishter Solar / About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              We are increasing the productivity and quality of <span className="text-white/60">global energy.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Stats - Split Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <div className="text-xs uppercase tracking-widest font-bold text-accent-blue mb-6">/ Our Story</div>
          <h2 className="text-4xl pr-8 font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            Building a Brighter Tomorrow with Tomorrow&apos;s Technology.
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 dark:text-slate-500 leading-relaxed mb-6 font-sans">
            Founded on the principle that clean energy should be highly accessible and affordable, Aibishter Engineering Services has grown into a leading solar provider. Over the past decade, we have empowered thousands of homes and businesses to take complete control of their energy structures while protecting the environment.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-12">
            {[
              "Certified Experts",
              "Award-winning Service",
              "Sustainable Yields",
              "24/7 Monitoring"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-yellow flex-shrink-0" size={24} />
                <span className="font-bold text-slate-800 dark:text-slate-200 font-sans">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, stat: "10k+", label: "Happy Customers", bg: "bg-white dark:bg-slate-800", text: "text-slate-900 dark:text-white" },
            { icon: TrendingUp, stat: "50MW+", label: "Energy Installed", bg: "bg-white dark:bg-slate-800", text: "text-slate-900 dark:text-white" },
            { icon: Award, stat: "15+", label: "Years Experience", bg: "bg-accent-blue", text: "text-white" },
            { icon: CheckCircle2, stat: "100%", label: "Satisfaction", bg: "bg-white dark:bg-slate-800", text: "text-slate-900 dark:text-white" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: idx * 0.1 } }
              }}
              className={`p-8 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-lg border border-slate-100 dark:border-slate-800 ${item.bg} ${item.text}`}
            >
              <item.icon size={36} className={`${item.bg === 'bg-accent-blue' ? 'text-accent-yellow' : 'text-accent-blue'} mb-4`} />
              <span className="text-4xl font-extrabold tracking-tighter mb-2">{item.stat}</span>
              <span className={`text-sm font-bold tracking-widest uppercase ${item.bg === 'bg-accent-blue' ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'}`}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
