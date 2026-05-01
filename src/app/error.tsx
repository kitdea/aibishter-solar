"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-slate-50 dark:bg-slate-950">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white font-poppins mb-4">
        Something went wrong
      </h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8 font-sans">
        We couldn&apos;t load this page. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-accent-blue text-white font-bold px-8 py-4 rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold px-8 py-4 rounded-full hover:border-accent-blue hover:text-accent-blue transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
