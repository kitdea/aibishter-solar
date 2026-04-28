"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sun } from "@/lib/icons";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

function formatDate(raw: string) {
  if (!raw) return "";
  // ISO date from Sanity → "DD.MM.YYYY"
  if (raw.includes("-")) {
    const [y, m, d] = raw.split("-");
    return `${d}.${m}.${y}`;
  }
  return raw;
}

export default function BlogContent({ posts }: { posts: Post[] }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">
      <section className="relative h-[38vh] sm:h-[45vh] md:h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-[3rem] overflow-hidden mb-14 md:mb-24">
        <Image
          src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2074&auto=format&fit=crop"
          alt="Aibishter Solar news"
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
              <span className="uppercase tracking-widest text-xs font-bold text-white/80">Aibishter Solar / Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight md:leading-[0.9] font-poppins">
              News & <span className="text-white/60">Updates.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug || index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="group cursor-pointer border-t border-slate-200 dark:border-slate-700 pt-12 flex flex-col md:flex-row gap-8 items-start hover:border-accent-blue transition-colors duration-500"
            >
              <div className="md:w-1/6 flex flex-col gap-2 font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
                <span className="text-accent-blue font-bold">{post.category}</span>
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="md:w-1/2 flex flex-col gap-6 pr-8">
                <Link href={`/blog/${post.slug}`} className="grow">
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
              <div className="md:w-1/3 relative h-75 md:h-62.5 w-full rounded-4xl overflow-hidden shadow-lg mt-8 md:mt-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  suppressHydrationWarning
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
