'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto pointer-events-none">
      <div
        className={`pointer-events-auto rounded-2xl border transition-all duration-300 backdrop-blur-xl overflow-hidden ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 dark:bg-[#0c1a2e]/95 border-slate-200/90 dark:border-white/15 shadow-xl dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]'
            : 'bg-white/85 dark:bg-[#0c1a2e]/85 border-slate-200/70 dark:border-white/10 shadow-md dark:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          {/* Brand Logo & Name */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0A1628] dark:bg-white text-white dark:text-[#0A1628] font-bold text-xs flex items-center justify-center tracking-tight transition-transform group-hover:scale-105 shadow-sm">
              OE
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors leading-tight">
                Olivia Ezekwe
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-normal leading-tight">
                Communications &amp; Storytelling
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 p-1 rounded-lg border border-slate-200/60 dark:border-white/10">
            <Link
              href="/"
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                pathname === '/'
                  ? 'bg-white dark:bg-white/15 text-[#0A1628] dark:text-white shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white'
              }`}
            >
              Home
            </Link>

            <Link
              href="/portfolio"
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                pathname === '/portfolio'
                  ? 'bg-white dark:bg-white/15 text-[#0A1628] dark:text-white shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white'
              }`}
            >
              Portfolio
            </Link>
          </nav>

          {/* Right Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            {/* Direct CV Download */}
            <a
              href="/Olivia_Ezekwe_CV.pdf"
              download="Olivia_Ezekwe_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-white border border-slate-300 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
            >
              <span>Download CV</span>
            </a>

            {/* Get in Touch CTA */}
            <Link
              href="/#contact"
              className="inline-flex items-center px-4 py-1.5 rounded-lg bg-[#0A1628] dark:bg-[#C9A227] hover:bg-slate-800 dark:hover:bg-[#d8b338] text-white dark:text-[#0A1628] font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Expandable Tray */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-slate-200/70 dark:border-white/10 md:hidden"
            >
              <div className="p-4 space-y-2 bg-white/90 dark:bg-[#0c1a2e]/90">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    pathname === '/'
                      ? 'bg-slate-100 dark:bg-white/10 text-[#0A1628] dark:text-white font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white'
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    pathname === '/portfolio'
                      ? 'bg-slate-100 dark:bg-white/10 text-[#0A1628] dark:text-white font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white'
                  }`}
                >
                  Portfolio
                </Link>

                <a
                  href="/Olivia_Ezekwe_CV.pdf"
                  download="Olivia_Ezekwe_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white transition-colors"
                >
                  Download CV
                </a>

                <div className="pt-2">
                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center py-2.5 rounded-lg bg-[#0A1628] dark:bg-[#C9A227] text-white dark:text-[#0A1628] font-bold text-xs tracking-wide shadow-sm hover:shadow"
                  >
                    <span>Get in Touch</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
