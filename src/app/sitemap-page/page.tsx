import Link from "next/link";

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Solar Calculator", href: "/solar-calculator" },
      { label: "Blog & News", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Residential Solar Installation", href: "/services/residential-solar-installation" },
      { label: "Commercial Solar Installation", href: "/services/commercial-solar-installation" },
      { label: "Solar Battery Storage", href: "/services/solar-battery-storage" },
      { label: "Electrical Design & Documentation", href: "/services/electrical-design-documentation" },
      { label: "Solar Panel Maintenance", href: "/services/solar-panel-maintenance" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "All Service Areas", href: "/service-areas" },
      { label: "Lucena City", href: "/service-areas/lucena-city" },
      { label: "Quezon Province", href: "/service-areas#quezon" },
      { label: "Metro Manila", href: "/service-areas#metro-manila" },
      { label: "CALABARZON", href: "/service-areas#calabarzon" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "All Projects", href: "/projects" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Sitemap", href: "/sitemap-page" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3">Navigation</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-poppins mb-4">
            Sitemap
          </h1>
          <p className="text-slate-500 dark:text-slate-400">A complete overview of all pages on Aibishter Solar.</p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="h-[2px] w-full bg-slate-900 dark:bg-slate-100 mb-6"></div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-700 dark:text-slate-300 font-medium hover:text-accent-blue dark:hover:text-accent-blue hover:translate-x-1 transition-all inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
