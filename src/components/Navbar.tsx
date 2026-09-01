'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Download,
  ArrowUpRight,
} from 'lucide-react';
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#071120]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm'
          : 'bg-white/60 dark:bg-[#071120]/60 backdrop-blur-sm border-b border-slate-200/50 dark:border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="group flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm flex items-center justify-center tracking-tight transition-transform group-hover:scale-105 shadow-sm">
              OE
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#C9A227] transition-colors leading-tight">
                Olivia Ezekwe
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-normal leading-tight">
                Communications &amp; Storytelling
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 p-1 rounded-full border border-slate-200/60 dark:border-white/10">
            <Link
              href="/"
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                pathname === '/'
                  ? 'bg-white dark:bg-white/15 text-slate-900 dark:text-white shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Home
            </Link>

            <Link
              href="/portfolio"
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                pathname === '/portfolio'
                  ? 'bg-white dark:bg-white/15 text-slate-900 dark:text-white shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Portfolio
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            {/* Direct CV Download */}
            <a
              href="/api/download-cv"
              download="Olivia_Ezekwe_CV.txt"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Download CV</span>
            </a>

            {/* Get in Touch CTA */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0A1628] dark:bg-[#C9A227] hover:bg-slate-800 dark:hover:bg-[#d8b338] text-white dark:text-[#0A1628] font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-xs bg-white dark:bg-[#071120] border-l border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs flex items-center justify-center">
                      OE
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Olivia Ezekwe
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/'
                        ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-bold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    href="/portfolio"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === '/portfolio'
                        ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-bold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Portfolio
                  </Link>

                  <a
                    href="/api/download-cv"
                    download="Olivia_Ezekwe_CV.txt"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    <span>Download CV</span>
                    <Download className="w-4 h-4 text-[#C9A227]" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-3">
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#0A1628] dark:bg-[#C9A227] text-white dark:text-[#0A1628] font-bold text-xs tracking-wide shadow-sm"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
