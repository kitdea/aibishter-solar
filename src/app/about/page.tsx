"use client";

import Image from "next/image";
import { CheckCircle2, Award, Users, TrendingUp, Sun } from "@/lib/icons";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

const leadership = [
  {
    name: "Michael Torres",
    title: "CEO",
    bio: "Visionary leader driving Aibishter Solar's mission to make clean energy accessible and affordable for every home and business.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&facepad=3",
  },
  {
    name: "Sarah Reeves",
    title: "COO",
    bio: "Operations expert ensuring seamless project delivery — from signed contract to final commissioning — with precision and care.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop&facepad=3",
  },
];

const teamMembers = [
  {
    name: "Daniel Park",
    title: "Electrical Engineer",
    bio: "Certified engineer behind our NEC-compliant single-line diagrams and permit-ready electrical documentation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&facepad=3",
  },
  {
    name: "James Ortega",
    title: "Electrician",
    bio: "Licensed master electrician with 10+ years of hands-on residential and commercial solar installation experience.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop&facepad=3",
  },
  {
    name: "Priya Nair",
    title: "Sales & Marketing",
    bio: "Connects clients to the right solar solutions, blending market strategy with a genuine passion for renewable energy.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&facepad=3",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Inner Page Hero Banner */}
      <section className="relative h-[40vh] sm:h-[48vh] md:h-[60vh] w-full mt-2 lg:mt-4 mx-auto max-w-[98%] rounded-4xl md:rounded-5xl overflow-hidden mb-14 md:mb-20">
        <Image
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
          alt="Aibishter Solar professionals"
          fill
          priority
          suppressHydrationWarning
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-12 z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto md:mx-0"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3 md:mb-6">
              <Sun size={24} className="text-accent-yellow" />
              <span className="uppercase tracking-widest text-xs font-bold text-white/80">Aibishter Solar / About Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] md:leading-[1.1]">
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
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-sans">
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
                <CheckCircle2 className="text-accent-yellow shrink-0" size={24} />
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
              className={`p-8 rounded-4xl flex flex-col justify-center items-center text-center shadow-lg border border-slate-100 dark:border-slate-800 ${item.bg} ${item.text}`}
            >
              <item.icon size={36} className={`${item.bg === 'bg-accent-blue' ? 'text-accent-yellow' : 'text-accent-blue'} mb-4`} />
              <span className="text-4xl font-extrabold tracking-tighter mb-2">{item.stat}</span>
              <span className={`text-sm font-bold tracking-widest uppercase ${item.bg === 'bg-accent-blue' ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'}`}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
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

        {/* Leadership Row — CEO & COO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
          {leadership.map((member, idx) => (
            <TeamCard key={member.title} member={member} delay={idx * 0.1} />
          ))}
        </div>

        {/* Team Row — Engineer, Electrician, Sales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.title} member={member} delay={idx * 0.1} />
          ))}
        </div>
      </section>

    </div>
  );
}

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
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
      className="bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 rounded-4xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-slate-100 dark:ring-slate-700">
        <Image
          src={member.image}
          alt={`${member.name} – ${member.title} at Aibishter Solar`}
          fill
          suppressHydrationWarning
          className="object-cover"
          sizes="96px"
        />
      </div>
      <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-accent-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
        {member.title}
      </span>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{member.name}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">{member.bio}</p>
    </motion.div>
  );
}
