"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  role: string;
}

function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      className="bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-4xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name} – ${member.title} at Aibishter Solar`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-5xl font-bold text-slate-400">
            {member.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col items-center text-center">
        <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-accent-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
          {member.title}
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">{member.bio}</p>
      </div>
    </motion.div>
  );
}

export default function TeamSection({
  leadership,
  team,
}: {
  leadership: TeamMember[];
  team: TeamMember[];
}) {
  if (leadership.length === 0 && team.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="text-center mb-16"
      >
        <div className="text-xs uppercase tracking-widest font-bold text-accent-blue mb-4">/ Our Team</div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
          The people behind <span className="text-slate-400 dark:text-slate-500">the panels.</span>
        </h2>
        <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
          A dedicated team of engineers, tradespeople, and industry professionals committed to delivering world-class solar solutions.
        </p>
      </motion.div>

      {leadership.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
          {leadership.map((member, idx) => (
            <TeamCard key={member.name} member={member} delay={idx * 0.1} />
          ))}
        </div>
      )}

      {team.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <TeamCard key={member.name} member={member} delay={idx * 0.1} />
          ))}
        </div>
      )}
    </section>
  );
}
