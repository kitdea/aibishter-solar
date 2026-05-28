"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-20 md:mt-32 pt-20 pb-12 overflow-hidden relative">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section (Accreditation + Massive Logo) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          
          <div className="flex flex-col gap-4">
            <p className="text-m uppercase tracking-widest font-bold text-slate-900 dark:text-slate-300 mb-2">Accreditation</p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center gap-2">
              <Link href="https://doe.gov.ph/site/eumb/articles/1855621--official-doe-solar-pv-installer-registry-2?qResult=Official%20DOE%20Solar%20PV%20Installer%20Registry%3Ftitle%3DOfficial%20DOE%20Solar%20PV%20Installer%20Registry" target="_blank" rel="nofollow"> 
                <Image
                  src="/DOE.svg"
                  alt="Department of Energy Philippines logo"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </Link>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 text-center leading-tight max-w-[80px]">Official DOE Solar PV Installer</span>
             
              </div>
              <div className="w-px h-16 bg-slate-200 dark:bg-slate-700" />
              
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src="/aes_logo.svg"
              alt="Aibishter logo"
              width={152}
              height={152}
              className="object-contain invert dark:invert-0"
            />
            <div className="flex flex-col leading-none">
              <span className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-poppins text-slate-900 dark:text-white">Aibishter</span>
              <span className="text-xs md:text-sm tracking-[0.3em] font-bold uppercase text-slate-500 dark:text-slate-400 mt-1">Engineering Services</span>
            </div>
          </div>
        </div>

        {/* Thick divider */}
        <div className="h-[2px] w-full bg-slate-900 dark:bg-slate-100 mb-16"></div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24 font-sans">
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Platform</h4>
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Service Areas", href: "/service-areas" },
              { label: "Projects", href: "/projects" },
              { label: "About Us", href: "/about" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-blue dark:hover:text-accent-blue hover:translate-x-1 transition-all">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Service Areas</h4>
            {[
              { label: "Lucena City", href: "/service-areas/lucena-city" },
              { label: "Quezon Province", href: "/service-areas#quezon" },
              { label: "Metro Manila", href: "/service-areas#metro-manila" },
              { label: "CALABARZON", href: "/service-areas#calabarzon" },
              { label: "All Areas →", href: "/service-areas" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-blue dark:hover:text-accent-blue hover:translate-x-1 transition-all">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Resources</h4>
            {[
              { label: "Blog & News", href: "/blog" },
              { label: "Case Studies", href: "/projects" },
              { label: "Solar Calculator", href: "/solar-calculator" },
              { label: "FAQ", href: "#" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-blue dark:hover:text-accent-blue hover:translate-x-1 transition-all">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Legal</h4>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookie Policy", href: "/cookie-policy" },
              { label: "Sitemap", href: "/sitemap-page" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-blue dark:hover:text-accent-blue hover:translate-x-1 transition-all">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Social</h4>
            <a href="https://www.facebook.com/aibishterengineering" target="_blank" className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 hover:text-accent-blue dark:hover:text-accent-blue transition-colors group">
              <span className="font-bold font-serif mb-1 leading-none text-base">FB</span> Facebook <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
            <a href="https://www.instagram.com/aibishter_engineering/" target="_blank" className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 hover:text-accent-blue dark:hover:text-accent-blue transition-colors group">
              <span className="font-bold font-serif mb-1 leading-none text-base">IG</span> Instagram <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
            <a href="https://x.com/AibishterES" target="_blank" className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 hover:text-accent-blue dark:hover:text-accent-blue transition-colors group">
              <span className="font-bold font-serif mb-1 leading-none text-base">X</span> Twitter <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aibishter Solar. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">Built for the future <span className="w-2 h-2 rounded-full bg-accent-blue inline-block animate-pulse"></span></p>
        </div>
      </div>
      
      {/* Background massive ambient text effect just for aesthetic */}
      <div className="absolute bottom-[-10vw] left-0 right-0 text-[20vw] font-bold text-slate-100 dark:text-slate-900/50 whitespace-nowrap opacity-50 z-0 pointer-events-none select-none font-poppins leading-none text-center">
        AIBISHTER
      </div>
    </footer>
  );
}
