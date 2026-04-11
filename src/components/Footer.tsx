"use client";

import Link from "next/link";
import { Sun, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-20 md:mt-32 pt-20 pb-12 overflow-hidden relative">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section (Newsletter + Massive Logo) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          
          <div className="max-w-md">
            <h3 className="text-3xl font-bold font-poppins text-slate-900 dark:text-white mb-6 tracking-tight">Stay ahead of the energy transition.</h3>
            <form className="flex rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-accent-blue transition-all bg-white dark:bg-slate-900" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Join our newsletter" 
                className="bg-transparent text-slate-900 dark:text-white px-6 py-4 flex-grow focus:outline-none w-full font-sans text-sm"
                aria-label="Email address"
                required
                data-lpignore="true"
              />
              <button 
                type="submit" 
                className="bg-accent-blue text-white px-6 py-4 hover:bg-slate-900 transition-colors font-bold uppercase tracking-widest text-xs flex items-center justify-center min-w-max"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex items-center gap-3">
            <Sun size={48} className="text-accent-blue" strokeWidth={1.5} />
            <div className="flex flex-col leading-none">
              <span className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-poppins text-slate-900 dark:text-white">Aibishter</span>
              <span className="text-xs md:text-sm tracking-[0.3em] font-bold uppercase text-slate-500 dark:text-slate-400 dark:text-slate-500 mt-1">Engineering Services</span>
            </div>
          </div>
        </div>

        {/* Thick divider */}
        <div className="h-[2px] w-full bg-slate-900 dark:bg-slate-100 dark:bg-slate-900 mb-16"></div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 font-sans">
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 dark:text-slate-400 dark:text-slate-500 mb-4">Platform</h4>
            {["Home", "Services", "Projects", "About Us"].map((link, i) => (
              <Link key={i} href={`/${link.toLowerCase().replace(' ', '') === 'home' ? '' : link.toLowerCase().replace(' ', '')}`} className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-blue dark:hover:text-accent-blue hover:translate-x-1 transition-all">
                {link}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 dark:text-slate-400 dark:text-slate-500 mb-4">Resources</h4>
            {["Blog & News", "Case Studies", "Energy Calculator", "FAQ"].map((link, i) => (
              <Link key={i} href="#" className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-blue dark:hover:text-accent-blue hover:translate-x-1 transition-all">
                {link}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 dark:text-slate-400 dark:text-slate-500 mb-4">Legal</h4>
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((link, i) => (
              <Link key={i} href="#" className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-blue dark:hover:text-accent-blue hover:translate-x-1 transition-all">
                {link}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 dark:text-slate-400 dark:text-slate-500 mb-4">Social</h4>
            <a href="#" className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 hover:text-accent-blue dark:hover:text-accent-blue transition-colors group">
              <span className="font-bold font-serif mb-1 leading-none text-base">IG</span> Instagram <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
            <a href="#" className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 hover:text-accent-blue dark:hover:text-accent-blue transition-colors group">
              <span className="font-bold font-serif mb-1 leading-none text-base">X</span> Twitter <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
            <a href="#" className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 hover:text-accent-blue dark:hover:text-accent-blue transition-colors group">
              <span className="font-bold font-serif mb-1 leading-none text-base">IN</span> LinkedIn <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 dark:text-slate-400 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aibishter Solar. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">Built for the future <span className="w-2 h-2 rounded-full bg-accent-blue inline-block animate-pulse"></span></p>
        </div>
      </div>
      
      {/* Background massive ambient text effect just for aesthetic */}
      <div className="absolute bottom-[-10vw] left-0 right-0 text-[20vw] font-bold text-slate-100 dark:text-slate-900 dark:text-white/50 whitespace-nowrap opacity-50 z-0 pointer-events-none select-none font-poppins leading-none text-center">
        AIBISHTER
      </div>
    </footer>
  );
}
