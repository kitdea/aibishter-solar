import { Zap, Battery, Wrench, Cpu, ShieldCheck } from "@/lib/icons";

export type ServiceIconName = "Zap" | "Battery" | "Wrench" | "Cpu" | "ShieldCheck";

export const SERVICE_ICON_MAP = { Zap, Battery, Wrench, Cpu, ShieldCheck } as const;

export interface ServiceMeta {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: ServiceIconName;
}

export const SERVICES: ServiceMeta[] = [
  {
    slug: "residential-solar",
    title: "Residential Solar",
    tagline: "Clean, reliable solar power for your home.",
    description: "Custom solar installations for homes — from site survey to grid connection. We handle permits, design, and installation end-to-end.",
    longDescription: "Our residential solar packages are tailored to your roof size, energy consumption, and budget. Licensed engineers design every system to Philippine Electrical Code standards.",
    icon: "Zap",
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    tagline: "High-yield solar systems for businesses.",
    description: "High-yield solar systems for businesses, warehouses, and commercial rooftops. Reduce operating costs and achieve energy independence.",
    longDescription: "We design and install large-scale solar systems for commercial clients, including net-metering applications and load analysis to maximize your return on investment.",
    icon: "Cpu",
  },
  {
    slug: "solar-storage",
    title: "Solar Storage",
    tagline: "Keep power flowing day and night.",
    description: "Lithium-ion battery storage to keep your power flowing day and night. Pair with solar or standalone for backup power.",
    longDescription: "Our battery storage solutions integrate seamlessly with existing solar installations or work as standalone backup systems, ensuring you have power during outages.",
    icon: "Battery",
  },
  {
    slug: "electrical-design",
    title: "Electrical Design",
    tagline: "Permit-ready electrical documents.",
    description: "NEC-compliant single-line diagrams and permit-ready electrical documents for solar and general electrical systems.",
    longDescription: "Our licensed electrical engineers produce complete design packages accepted by local building offices and distribution utilities for interconnection applications.",
    icon: "ShieldCheck",
  },
  {
    slug: "general-maintenance",
    title: "General Maintenance",
    tagline: "Protect your solar investment.",
    description: "Panel cleaning, inverter checks, and performance monitoring to protect your investment and maximize energy output.",
    longDescription: "Regular maintenance extends the life of your solar system. Our technicians perform thorough inspections, cleaning, and performance analysis to keep your system running at peak efficiency.",
    icon: "Wrench",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export const SERVICE_MAP = Object.fromEntries(SERVICES.map((s) => [s.slug, s])) as Record<string, ServiceMeta>;
