import { Medal, BadgeCheck, HardHat, CalendarClock, PhoneCall, ShieldCheck } from "@/lib/icons";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

const benefits: {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
}[] = [
  {
    icon: Medal,
    title: "Quality Material",
    description:
      "We offer top-grade materials ensuring durability, efficiency, and long-term performance for clients.",
  },
  {
    icon: BadgeCheck,
    title: "Accredited",
    description:
      "Our solar team boasts industry certifications ensuring top-notch expertise and service.",
  },
  {
    icon: HardHat,
    title: "Trained Workers",
    description:
      "Our solar and engineering team comprises skilled professionals for top-quality installations.",
  },
  {
    icon: CalendarClock,
    title: "Time Availability",
    description:
      "Our solar engineering team is ready to serve you with flexible scheduling options.",
  },
  {
    icon: PhoneCall,
    title: "Quick Response",
    description:
      "Expert solar engineering team ensures swift installation for maximum benefits.",
  },
  {
    icon: ShieldCheck,
    title: "2 Years Workmanship Warranty",
    description:
      "Maximize savings with our solar solutions.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
    >
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest font-bold text-accent-blue mb-3">
          Why Choose Us
        </p>
        <h2
          id="benefits-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Benefits of Choosing Us
        </h2>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {benefits.map(({ icon: Icon, title, description }) => (
          <li
            key={title}
            className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 dark:text-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900">
              <Icon size={32} className="text-accent-blue" />
            </div>
            <h3 className="text-lg font-bold text-accent-yellow mb-3">{title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-m leading-relaxed font-sans">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
