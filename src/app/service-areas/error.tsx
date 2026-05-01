"use client";

import Link from "next/link";

export default function ServiceAreasError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-slate-50 dark:bg-slate-950 pt-32">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-poppins mb-4">
        Couldn&apos;t load this area
      </h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8 font-sans">
        There was a problem loading this service area. Please try again or browse all areas.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={reset}
          className="bg-accent-blue text-white font-bold px-8 py-4 rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/service-areas"
          className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold px-8 py-4 rounded-full hover:border-accent-blue hover:text-accent-blue transition-colors"
        >
          All service areas
        </Link>
      </div>
    </div>
  );
}
