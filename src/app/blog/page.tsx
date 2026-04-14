"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

const blogPosts = [
  {
    title: "Guide to Solar Panel Setup for 2026",
    excerpt: "Everything you need to know about the latest solar technologies and regulations before making the switch this year.",
    date: "15.03.2026",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2074&auto=format&fit=crop"
  },
  {
    title: "How Batteries Increase Independence",
    excerpt: "Off-grid peace of mind vs. load-shifting. Find out how modern battery solutions protect you from rising rates.",
    date: "02.04.2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1620800630737-142f36caee76?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Solar Incentives & Tax Credits",
    excerpt: "A comprehensive breakdown of current federal and state tax credits that significantly reduce your installation costs.",
    date: "10.04.2026",
    category: "Finance",
    image: "https://plus.unsplash.com/premium_photo-1678852331610-1c3906be7316?q=80&w=2030&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Inner Page Hero Banner */}
      <section className="relative min-h-[500px] h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-24">
        <Image
          src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2074&auto=format&fit=crop"
          alt="Aibishter Solar news"
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
              <span className="uppercase tracking-widest text-xs font-bold text-white/80">Aibishter Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9] font-poppins">
              News & <span className="text-white/60">Updates.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="group cursor-pointer border-t border-slate-200 dark:border-slate-700 pt-12 flex flex-col md:flex-row gap-8 items-start hover:border-accent-blue transition-colors duration-500"
            >
              {/* Meta information aligned left like GWENCY design */}
              <div className="md:w-1/6 flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
                <span className="text-accent-blue font-bold">{post.category}</span>
                <span>{post.date}</span>
              </div>
              
              {/* Massive Title & Excerpt */}
              <div className="md:w-1/2 flex flex-col gap-6 pr-8">
                <Link href="#" className="flex-grow">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-accent-blue transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 group-hover:text-accent-blue transition-colors gap-2">
                  Read Article <ArrowUpRight size={16} />
                </div>
              </div>
              
              {/* Image Reveal Effect */}
              <div className="md:w-1/3 relative h-[300px] md:h-[250px] w-full rounded-[2rem] overflow-hidden shadow-lg mt-8 md:mt-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out filter grayscale group-hover:grayscale-0"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    </div>
  );
}
