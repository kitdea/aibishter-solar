import Image from "next/image";

const BADGE_COUNT = 12;

export default function DOEBadgeMarquee() {
  return (
    <div className="w-full overflow-hidden py-5 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 my-[30px]">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: BADGE_COUNT }, (_, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-12 shrink-0">
            <Image src="/DOE.svg" alt="DOE logo" width={40} height={40} className="object-contain" />
            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300">
              Official DOE Solar PV Installer
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
