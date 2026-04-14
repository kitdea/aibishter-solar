"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">

      {/* Inner Page Hero Banner */}
      <section className="relative min-h-[500px] h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-24">
        <Image
          src="https://plus.unsplash.com/premium_photo-1678852331610-1c3906be7316?q=80&w=2030&auto=format&fit=crop"
          alt="Contact Aibishter Solar"
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
              <span className="uppercase tracking-widest text-xs font-bold text-white/80">Aibishter Contact</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9] font-poppins">
              Get In <span className="text-white/60">Touch.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Split GWENCY style */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 md:gap-24 relative">
        
        {/* Contact Info Text Box */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="lg:w-1/3 flex flex-col gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Start your journey to zero bills.</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              We guide homeowners and businesses to utilize their roof space for unparalleled energy efficiency. Reach out.
            </p>
          </div>
          
          <div className="space-y-8 flex-grow">
            <div className="flex gap-4">
              <div className="text-accent-blue mt-1"><MapPin size={24} /></div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Headquarters</h3>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-tight">123 Solar Way<br/>Eco City, EC 90210</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-accent-yellow mt-1"><Phone size={24} /></div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Direct Lines</h3>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-tight">+1 (800) 123-4567<br/>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-accent-blue mt-1"><Mail size={24} /></div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Digital</h3>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-tight">info@aibishter.com<br/>support@aibishter.com</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-accent-yellow mt-1"><Clock size={24} /></div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Hours</h3>
                <p className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-tight">Mon - Fri: 8AM - 6PM<br/>Sat & Sun: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Box */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
          }}
          className="lg:w-2/3 bg-white dark:bg-slate-800 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-black/5 border border-slate-100 dark:border-slate-800"
        >
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 font-poppins">Send a Message.</h3>
            <p className="text-slate-500 dark:text-slate-400 font-sans">Our engineering consultants usually respond immediately during office hours.</p>
          </div>
          
          <form className="space-y-8 font-sans" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent-yellow px-4 py-3 text-slate-900 dark:text-white focus:outline-none transition-all rounded-tl-xl rounded-tr-xl" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent-yellow px-4 py-3 text-slate-900 dark:text-white focus:outline-none transition-all rounded-tl-xl rounded-tr-xl" placeholder="Doe" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-slate-950 border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent-yellow px-4 py-3 text-slate-900 dark:text-white focus:outline-none transition-all rounded-tl-xl rounded-tr-xl" placeholder="jane@example.com" data-lpignore="true" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Phone Number</label>
                <input type="tel" className="w-full bg-slate-50 dark:bg-slate-950 border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent-yellow px-4 py-3 text-slate-900 dark:text-white focus:outline-none transition-all rounded-tl-xl rounded-tr-xl" placeholder="(555) 123-4567" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Interested Service</label>
              <select className="w-full bg-slate-50 dark:bg-slate-950 border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent-yellow px-4 py-3 text-slate-900 dark:text-white focus:outline-none transition-all rounded-tl-xl rounded-tr-xl appearance-none">
                <option value="residential">Residential Setup</option>
                <option value="commercial">Commercial Arrays</option>
                <option value="storage">Battery Storage</option>
                <option value="maintenance">General Maintenance</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Message context</label>
              <textarea rows={4} className="w-full bg-slate-50 dark:bg-slate-950 border-b-2 border-slate-200 dark:border-slate-700 focus:border-accent-yellow px-4 py-3 text-slate-900 dark:text-white focus:outline-none transition-all rounded-tl-xl rounded-tr-xl resize-none" placeholder="Provide any specifications or details..."></textarea>
            </div>

            <button className="w-full bg-accent-blue hover:bg-slate-900 text-white font-bold text-lg rounded-full px-4 py-5 mt-4 transition-colors flex items-center justify-center gap-3 group shadow-xl">
              Submit Inquiry <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </form>
        </motion.div>
      </section>

    </div>
  );
}
