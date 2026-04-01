"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Sun, Zap, ThermometerSun, ShieldCheck, Play } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      
      {/* 1. Ultra-Modern Hero Section */}
      <section className="relative h-[90vh] md:h-[100vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-[2rem] md:rounded-[3rem] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          alt="Solar panels filling the sky"
          fill
          priority
          className="object-cover object-bottom scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Massive Typography Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] md:text-[min(10rem,12vw)] font-bold text-white leading-[0.85] tracking-tighter mix-blend-overlay opacity-90 font-poppins">
              AIBISHTER<br/><span className="text-[10vw] md:text-[min(8rem,10vw)] text-white/90">SOLAR</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mt-8 gap-6 md:gap-0">
              <div className="flex gap-4">
                <span className="text-white/60 uppercase tracking-widest text-xs font-bold font-sans flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-white/40 block"></span> Home
                </span>
                <span className="text-white/60 uppercase tracking-widest text-xs font-bold font-sans flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-white/40 block"></span> Energy
                </span>
              </div>
              <p className="text-white/80 max-w-sm text-sm md:text-base leading-relaxed font-sans">
                From precision roof installations to remote energy monitoring, fulfilling the promise of tomorrow&apos;s clean future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. GWENCY-style Transparent Text Reveal Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-8">
          <div className="flex items-center gap-4 uppercase tracking-widest text-xs font-bold text-slate-400">
            <span>/ 2026 FOCUS</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-full py-1 px-4 flex items-center gap-2 shadow-sm">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-accent-blue border border-white"></div>
              <div className="w-6 h-6 rounded-full bg-accent-yellow border border-white"></div>
              <div className="w-6 h-6 rounded-full bg-slate-400 border border-white"></div>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider ml-2">Meet Our Experts</span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-slate-900 max-w-5xl">
          From high-efficiency residential arrays to robust commercial grids, <span className="text-slate-400">innovating the transition to sustainable and reliable energy.</span>
        </h2>
      </motion.section>

      {/* 3. Bento Box UI - Core Metrics & Features */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Eco-friendly solutions <span className="text-slate-400 font-normal">for a smarter home</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          
          {/* Card 1: Blue Metric */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 bg-accent-blue rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-2xl transition-all"
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
              <div className="w-full bg-white/20 h-1 mt-4 rounded-full overflow-hidden">
                <div className="bg-accent-yellow h-full w-[89%] rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Interactive Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 bg-blue-50 rounded-[2rem] p-6 relative overflow-hidden group"
          >
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 text-xs font-bold text-accent-blue uppercase tracking-widest bg-white/80 backdrop-blur px-3 py-1 rounded-full">
              <Sun size={14} className="text-accent-yellow" /> Solar Irradiation
            </div>
            <Image
              src="https://images.unsplash.com/photo-1542339031-a0680fd7a496?q=80&w=2070&auto=format&fit=crop"
              alt="Solar Detail"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </motion.div>

          {/* Card 3: Feature Metric */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[2rem] p-8 flex flex-col justify-between text-slate-800 hover:shadow-xl transition-all"
          >
            <div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck size={20} className="text-accent-blue" />
              </div>
              <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-2">For every application</p>
              <h3 className="text-3xl font-bold leading-tight">Up to <span className="text-accent-blue">25 Years</span></h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">Comprehensive warranty covering panels, inverters, and roofing labor.</p>
            </div>
            
            <button className="self-start text-xs font-bold uppercase tracking-widest bg-white border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">
              Read Terms
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4. High-Converting Interactive Lead Capture Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 md:px-12 max-w-[95%] mx-auto pb-24"
      >
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row">
          {/* Background Decorative */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10 blur-3xl rounded-full w-[800px] h-[800px] bg-accent-yellow pointer-events-none"></div>
          
          {/* Left Text/Value Prop */}
          <div className="lg:w-1/2 p-12 md:p-20 relative z-10 flex flex-col justify-center">
            <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-6">Take control of<br/>your power bill.</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-md font-sans leading-relaxed">
              We give homeowners and businesses a comprehensive view of their energy usage, enabling unparalleled efficiency and savings.
            </p>
            
            <div className="grid grid-cols-2 gap-8 text-white">
              <div className="space-y-2">
                <div className="text-accent-yellow"><Zap size={24}/></div>
                <h4 className="font-bold">Instant Savings</h4>
                <p className="text-sm text-slate-400">Lock in your rates against inflation.</p>
              </div>
              <div className="space-y-2">
                <div className="text-accent-blue"><ThermometerSun size={24}/></div>
                <h4 className="font-bold">Tax Incentives</h4>
                <p className="text-sm text-slate-400">Utilize federal and local rebates.</p>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:w-1/2 bg-white m-4 md:m-8 lg:m-4 rounded-[2rem] p-8 md:p-12 relative z-10 shadow-inner">
            <div className="mb-8">
              <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4 inline-block">Free Consultation</span>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Request an Estimate</h3>
              <p className="text-slate-500 text-sm">Fill out the quick form below. Our energy consultants respond within 24 hours.</p>
            </div>

            <form className="space-y-5 font-sans" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition-all shadow-sm" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition-all shadow-sm" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent-yellow transition-all shadow-sm" placeholder="john@example.com" data-lpignore="true" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Property Type</label>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <button type="button" className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus:ring-2 focus:ring-accent-blue focus:bg-blue-50 focus:text-accent-blue focus:border-accent-blue">Residential</button>
                  <button type="button" className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus:ring-2 focus:ring-accent-blue focus:bg-blue-50 focus:text-accent-blue focus:border-accent-blue">Commercial</button>
                </div>
              </div>

              <button className="w-full bg-accent-blue hover:bg-blue-800 text-white font-bold text-lg rounded-xl px-4 py-4 mt-4 transition-all hover:shadow-lg flex items-center justify-center gap-2 group">
                Get My Estimate <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-4">By submitting this form, you agree to our <Link href="#" className="underline hover:text-slate-600">Privacy Policy</Link>.</p>
            </form>
          </div>
        </div>
      </motion.section>

      {/* 5. Minimal Image Carousel / Bottom Teaser */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="flex justify-between items-end border-b border-slate-200 pb-6 mb-8">
          <h3 className="text-2xl font-bold tracking-tight">Our Recent Work</h3>
          <Link href="/projects" className="text-sm font-bold uppercase tracking-widest text-accent-blue flex items-center gap-1 hover:text-accent-yellow transition-colors">
            View Gallery <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620800630737-142f36caee76?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588631522858-e4b78bb280cd?q=80&w=2072&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1678852331610-1c3906be7316?q=80&w=2030&auto=format&fit=crop"
          ].map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image src={src} alt="Solar Install" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 text-accent-blue">
                  <Play size={16} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
