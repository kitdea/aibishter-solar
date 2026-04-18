export interface ServiceFeature {
  label: string;
  detail: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  image: string;
  heroImage: string;
  iconName: "Zap" | "Wrench" | "Battery" | "Cpu" | "ShieldCheck";
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    canonical: string;
    ogImage: string;
  };
}

export const services: Service[] = [
  {
    slug: "residential-solar",
    title: "Residential Solar",
    tagline: "Power your home with clean, renewable energy.",
    description:
      "Transform your home into a clean energy powerhouse. We design scalable and aesthetic solar arrays tailored to your roof, maximizing energy production.",
    longDescription:
      "Every home is unique — and so is every solar system we install. Our residential solar process starts with a detailed energy audit and satellite roof analysis, ensuring the panels we place are perfectly oriented for your local sun hours. From permit acquisition through final inspection, our team manages every step so you can focus on the savings.",
    features: [
      {
        label: "Custom System Design",
        detail:
          "Roof-specific array layouts optimized for your local sun hours and energy usage patterns.",
      },
      {
        label: "Permit Acquisition",
        detail:
          "We prepare and file all required permits so your installation stays on schedule without paperwork headaches.",
      },
      {
        label: "Professional Installation",
        detail:
          "Certified crews complete your installation safely, neatly, and on time — with zero mess left behind.",
      },
      {
        label: "System Monitoring App",
        detail:
          "Track real-time energy production and consumption from your smartphone, day or night.",
      },
    ],
    benefits: [
      {
        title: "Maximize Roof Potential",
        description:
          "We design arrays specific to your roof orientation and local sun hours — not a one-size-fits-all solution.",
      },
      {
        title: "No Surprises",
        description:
          "All permits are handled end-to-end. We manage inspections so you never deal with paperwork.",
      },
      {
        title: "Warranty Backed",
        description:
          "25-year panel warranty and a 10-year workmanship guarantee for your complete peace of mind.",
      },
      {
        title: "Monitored 24/7",
        description:
          "Real-time system monitoring via our mobile app alerts you the moment performance dips.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
    iconName: "Zap",
    seo: {
      metaTitle: "Residential Solar Installation",
      metaDescription:
        "Custom residential solar panel installations by Aibishter Solar. From system design to final inspection, we handle everything — maximizing your home's clean energy output.",
      keywords: [
        "residential solar installation",
        "home solar panels",
        "solar panel installation",
        "rooftop solar",
        "home energy savings",
        "solar permit",
        "Aibishter Solar residential",
      ],
      ogTitle: "Residential Solar – Aibishter Solar",
      ogDescription:
        "Custom residential solar solutions designed for your roof, your budget, and your energy goals. Professional installation backed by a 25-year warranty.",
      canonical: "https://aibishter.com/services/residential-solar",
      ogImage:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    },
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    tagline: "Cut operational costs with large-scale solar power.",
    description:
      "Empower your business with reliable energy independence. Lower operational costs and demonstrate corporate social responsibility with our large-scale solutions.",
    longDescription:
      "Businesses that go solar don't just save money — they gain a competitive edge. Aibishter Solar designs large-scale commercial systems for warehouses, office parks, retail centers, and more. We start with a full ROI and yield analysis, then engineer a solution that minimizes disruption to your operations and maximizes your return.",
    features: [
      {
        label: "ROI & Yield Analysis",
        detail:
          "Detailed financial modeling to project your payback period and long-term energy returns before a single panel is installed.",
      },
      {
        label: "Rooftop & Carport Solar",
        detail:
          "Flexible installation options including flat-roof ballasted systems and shade-providing carport canopy structures.",
      },
      {
        label: "Microgrid Solutions",
        detail:
          "Scalable microgrid designs for facilities requiring enhanced energy resilience and islanding capability.",
      },
      {
        label: "Tax Credit Guidance",
        detail:
          "Expert guidance on the federal ITC, MACRS depreciation schedules, and all available state-level solar incentives.",
      },
    ],
    benefits: [
      {
        title: "ROI in Under 7 Years",
        description:
          "Detailed yield analysis helps you project payback with confidence before committing to a single panel.",
      },
      {
        title: "Scalable Design",
        description:
          "From rooftop arrays to full carport canopies, our systems scale to match your facility's exact load profile.",
      },
      {
        title: "ITC Tax Credit Guidance",
        description:
          "Our team walks you through every available federal and state incentive to maximize your financial return.",
      },
      {
        title: "Minimal Downtime",
        description:
          "Phased installation plans keep your operations running without interruption throughout the entire project.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2079&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2079&auto=format&fit=crop",
    iconName: "Wrench",
    seo: {
      metaTitle: "Commercial Solar Installation",
      metaDescription:
        "Large-scale commercial solar by Aibishter Solar. Rooftop, carport, and microgrid solutions with full ROI analysis, tax credit guidance, and minimal operational disruption.",
      keywords: [
        "commercial solar installation",
        "business solar panels",
        "commercial solar system",
        "rooftop solar business",
        "solar carport",
        "ITC tax credit solar",
        "microgrid solar",
        "Aibishter Solar commercial",
      ],
      ogTitle: "Commercial Solar – Aibishter Solar",
      ogDescription:
        "Reduce operating costs and achieve energy independence with Aibishter Solar's commercial solar solutions — backed by full ROI analysis and expert tax credit guidance.",
      canonical: "https://aibishter.com/services/commercial-solar",
      ogImage:
        "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1200&auto=format&fit=crop",
    },
  },
  {
    slug: "solar-storage",
    title: "Solar Storage",
    tagline: "Store your solar energy for whenever you need it most.",
    description:
      "Store excess solar energy for when you need it most. Our battery backups ensure your lights stay on during grid outages and peak pricing times.",
    longDescription:
      "Solar generation is only half the equation. With Aibishter Solar's battery storage solutions, excess daytime energy is captured and ready to deploy the moment the grid fails or peak pricing kicks in. Our lithium-ion systems integrate seamlessly with new or existing solar arrays and can be sized to power anything from critical circuits to your entire home.",
    features: [
      {
        label: "Lithium-Ion Technology",
        detail:
          "High-density lithium-ion cells deliver maximum energy density, long cycle life, and proven safety standards.",
      },
      {
        label: "Seamless Transition",
        detail:
          "Automatic failover activates in milliseconds — your lights and appliances won't even flicker during an outage.",
      },
      {
        label: "Off-Grid Capability",
        detail:
          "Fully off-grid configurations available for remote properties and clients seeking complete energy independence.",
      },
      {
        label: "Smart Load Management",
        detail:
          "Intelligent controls prioritize essential circuits and optimize charge/discharge cycles for maximum battery longevity.",
      },
    ],
    benefits: [
      {
        title: "Outage-Proof Power",
        description:
          "Automatic failover keeps your critical loads running the moment the grid goes down — no manual switching needed.",
      },
      {
        title: "Peak Shaving",
        description:
          "Discharge stored energy during expensive peak-rate hours to dramatically reduce demand charges on your bill.",
      },
      {
        title: "Smart Load Management",
        description:
          "AI-driven controls prioritize your most important circuits and extend battery longevity through optimized cycling.",
      },
      {
        title: "Scalable Capacity",
        description:
          "Modular battery systems grow alongside your energy needs — add capacity any time without replacing existing hardware.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1548611135-24b94f061173?q=80&w=2070&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1548611135-24b94f061173?q=80&w=2070&auto=format&fit=crop",
    iconName: "Battery",
    seo: {
      metaTitle: "Solar Battery Storage",
      metaDescription:
        "Aibishter Solar's lithium-ion battery storage solutions keep your home or business powered through outages and peak pricing. Scalable, smart, and seamlessly integrated with any solar system.",
      keywords: [
        "solar battery storage",
        "home battery backup",
        "lithium-ion solar battery",
        "solar storage system",
        "off-grid battery",
        "solar backup power",
        "peak shaving solar",
        "Aibishter Solar storage",
      ],
      ogTitle: "Solar Storage – Aibishter Solar",
      ogDescription:
        "Never lose power again. Aibishter Solar's battery storage solutions capture excess solar energy and keep you running through grid outages and peak-rate hours.",
      canonical: "https://aibishter.com/services/solar-storage",
      ogImage:
        "https://images.unsplash.com/photo-1548611135-24b94f061173?q=80&w=1200&auto=format&fit=crop",
    },
  },
  {
    slug: "electrical-design",
    title: "Electrical Design",
    tagline: "Permit-ready engineering documentation for every installation.",
    description:
      "Precision-engineered electrical schematics and single-line diagrams for every solar installation. Our certified engineers produce code-compliant, permit-ready documentation that keeps your project on schedule and inspectors satisfied.",
    longDescription:
      "Behind every successful solar installation is a set of accurate, code-compliant electrical drawings. Aibishter Solar's in-house engineering team produces single-line diagrams, load calculations, and full permit packages that satisfy AHJs on the first submission. Whether you're an installer needing fast design turnaround or a homeowner navigating the permit process, we have you covered.",
    features: [
      {
        label: "Single-Line Diagrams",
        detail:
          "Clear, AHJ-ready single-line electrical diagrams engineered for both residential and commercial solar systems.",
      },
      {
        label: "Load Calculation Reports",
        detail:
          "Accurate load analysis reports ensuring system sizing meets all NEC and local jurisdiction requirements.",
      },
      {
        label: "NEC Code Compliance",
        detail:
          "Every drawing is reviewed against the current National Electrical Code edition before it leaves our desk.",
      },
      {
        label: "Permit-Ready Documentation",
        detail:
          "Complete permit packages ready for immediate submission to your local authority having jurisdiction (AHJ).",
      },
    ],
    benefits: [
      {
        title: "First-Pass Permit Approval",
        description:
          "Our documentation is engineered to satisfy inspectors on the first submission — reducing costly project delays.",
      },
      {
        title: "NEC Code Compliant",
        description:
          "Every diagram is reviewed against the current National Electrical Code edition before delivery to your team.",
      },
      {
        title: "Fast Turnaround",
        description:
          "Standard deliverables are completed within 3–5 business days. Rush options are available upon request.",
      },
      {
        title: "Revision Guarantee",
        description:
          "If any item is flagged by the AHJ, we revise the documentation at absolutely no additional charge.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
    iconName: "Cpu",
    seo: {
      metaTitle: "Electrical Design for Solar",
      metaDescription:
        "Permit-ready electrical design by Aibishter Solar. Single-line diagrams, load calculation reports, and NEC-compliant documentation — delivered in 3–5 business days.",
      keywords: [
        "solar electrical design",
        "single-line diagram solar",
        "solar permit documentation",
        "NEC code compliance solar",
        "load calculation report",
        "AHJ permit solar",
        "electrical engineering solar",
        "Aibishter Solar electrical design",
      ],
      ogTitle: "Electrical Design – Aibishter Solar",
      ogDescription:
        "From single-line diagrams to full permit packages, Aibishter Solar's engineering team delivers NEC-compliant documentation that gets your project approved fast.",
      canonical: "https://aibishter.com/services/electrical-design",
      ogImage:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
    },
  },
  {
    slug: "general-maintenance",
    title: "General Maintenance",
    tagline: "Keep your solar system running at peak performance, year after year.",
    description:
      "Protect your solar investment with scheduled inspections, professional panel cleaning, and proactive system care. Our certified technicians ensure maximum energy output 365 days a year.",
    longDescription:
      "Solar systems are built to last 25+ years — but only when properly maintained. Aibishter Solar's maintenance program covers everything from panel cleaning and inverter diagnostics to electrical connection audits and detailed performance reporting. Regular service can recover up to 30% of production lost to soiling, degraded connections, or component wear, turning your investment into a consistently high-performing asset.",
    features: [
      {
        label: "Panel Cleaning & Inspection",
        detail:
          "Professional cleaning removes dust, bird droppings, and debris that silently reduce energy output by up to 30%, restoring peak performance.",
      },
      {
        label: "Inverter Health Checks",
        detail:
          "Full inverter diagnostics including error log review, firmware updates, and connection integrity verification to catch issues early.",
      },
      {
        label: "Electrical & Connection Audit",
        detail:
          "Comprehensive inspection of all DC/AC connections, combiner boxes, and breakers to prevent performance loss and eliminate fire hazards.",
      },
      {
        label: "Performance Reporting",
        detail:
          "Detailed before-and-after energy yield reports delivered after every visit, so you can see exactly what was recovered and what to expect next.",
      },
    ],
    benefits: [
      {
        title: "Recover Lost Production",
        description:
          "Soiling alone can cut output by up to 30%. Regular cleaning and inspection puts that energy — and savings — back in your pocket every billing cycle.",
      },
      {
        title: "Extend System Lifespan",
        description:
          "Catching small issues early prevents costly component failures, extending the effective life of your entire solar investment well beyond 25 years.",
      },
      {
        title: "Maintain Warranty Compliance",
        description:
          "Panel and inverter warranties often require documented maintenance. Our service records keep you fully covered and audit-ready at all times.",
      },
      {
        title: "Priority Response",
        description:
          "Active maintenance subscribers receive priority scheduling and preferred rates on any repairs identified during inspection visits.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1591190702780-4d56c6b4b9b1?q=80&w=2069&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1591190702780-4d56c6b4b9b1?q=80&w=2069&auto=format&fit=crop",
    iconName: "ShieldCheck",
    seo: {
      metaTitle: "Solar Panel Maintenance & Inspection",
      metaDescription:
        "Aibishter Solar's general maintenance program keeps your solar system at peak efficiency with professional panel cleaning, inverter health checks, and electrical audits — recovering up to 30% of lost production.",
      keywords: [
        "solar panel maintenance",
        "solar system inspection",
        "solar panel cleaning",
        "inverter health check",
        "solar performance repair",
        "solar maintenance plan",
        "solar electrical audit",
        "Aibishter Solar maintenance",
      ],
      ogTitle: "General Maintenance – Aibishter Solar",
      ogDescription:
        "Keep your solar system performing at its best. Aibishter Solar's maintenance program covers cleaning, inverter checks, electrical audits, and detailed performance reporting.",
      canonical: "https://aibishter.com/services/general-maintenance",
      ogImage:
        "https://images.unsplash.com/photo-1591190702780-4d56c6b4b9b1?q=80&w=1200&auto=format&fit=crop",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
