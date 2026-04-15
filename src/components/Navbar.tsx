"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "@/lib/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isWhiteText = isHome && !scrolled;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}
             >
      <div className="max-w-[95%] mx-auto">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-colors duration-300 ${!isWhiteText ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border border-black/5 dark:border-white/5" : "bg-transparent text-white"}`}>

          {/* Left: Logo/Brand */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Sun className={!isWhiteText ? "text-accent-blue" : "text-accent-yellow"} size={28} />
            <div className={`flex flex-col leading-none ${!isWhiteText ? "text-slate-900 dark:text-white" : "text-white"}`}>
              <span className="text-lg font-bold tracking-widest uppercase font-poppins">Aibishter</span>
              <span className="text-[10px] tracking-[0.2em] font-medium uppercase">Engineering Services</span>
            </div>
          </Link>

          {/* Middle: Pills (Desktop) */}
          <div className={`hidden md:flex items-center space-x-1 rounded-full p-1 backdrop-blur-sm transition-colors ${!isWhiteText ? "bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50" : "bg-black/5 border border-white/10"}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!isWhiteText ? "text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white hover:shadow-sm" : "text-white/80 hover:bg-white/20 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className={`text-sm font-bold px-5 py-2 rounded-full transition-all flex items-center gap-2 ${!isWhiteText ? "bg-accent-blue text-white hover:bg-slate-900 dark:hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"}`}
            >
              Get Estimate <span className="rotate-[-45deg] inline-block font-sans">→</span>
            </Link>
            {/* Dark / Light Mode Toggle */}
            <button
              id="theme-toggle"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${!isWhiteText ? "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700" : "bg-white/20 text-white hover:bg-white/30"}`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme toggle on mobile */}
            <button
              id="theme-toggle-mobile"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${!isWhiteText ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700" : "text-white bg-white/20 hover:bg-white/30"}`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all ${!isWhiteText ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700" : "text-white bg-white/20 hover:bg-white/30"}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200 hover:text-accent-blue dark:hover:text-accent-blue transition-colors pb-4 border-b border-slate-100 dark:border-slate-800 line-clamp-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-6 flex items-center justify-between bg-accent-blue text-white font-bold p-4 rounded-2xl hover:bg-blue-800 dark:hover:bg-blue-600 transition-all text-xl"
                onClick={() => setIsOpen(false)}
              >
                <span>Get a Free Estimate</span>
                <span className="rotate-[-45deg] inline-block font-sans text-2xl">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </motion.div>
  );
}
