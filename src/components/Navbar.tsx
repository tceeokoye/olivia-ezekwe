'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ChevronDown,
  FolderKanban,
  PenTool,
  Camera,
  Film,
  Briefcase,
  FileText,
  Mail,
  User,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const PORTFOLIO_DROPDOWN_ITEMS = [
  {
    name: 'Selected Work & Projects',
    href: '/portfolio',
    icon: FolderKanban,
    desc: 'Flagship advocacy, branding & governance campaigns',
    tag: 'Overview',
  },
  {
    name: 'Writing & Publications',
    href: '/writing',
    icon: PenTool,
    desc: 'Articles, policy briefs, chronicles & newsletters',
    tag: 'Thought Leadership',
  },
  {
    name: 'Photography & Field Work',
    href: '/photography',
    icon: Camera,
    desc: 'Documentary photojournalism & community stories',
    tag: 'Visual Stories',
  },
  {
    name: 'Videography & Media',
    href: '/videography',
    icon: Film,
    desc: 'Documentary films, campaign videos & short-form reels',
    tag: 'Cinematic',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isPortfolioActive =
    pathname === '/portfolio' ||
    pathname === '/writing' ||
    pathname === '/photography' ||
    pathname === '/videography';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPortfolioDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setPortfolioDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/95 dark:bg-[#050d1f]/95 backdrop-blur-xl border-b border-white/10 dark:border-[#C9A227]/25 shadow-lg'
          : 'bg-[#0A1628] dark:bg-[#050d1f] border-b border-white/10 dark:border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Live Status */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 text-slate-950 font-black text-base flex items-center justify-center shadow-glow-gold transition-transform group-hover:scale-105">
              OE
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-extrabold tracking-wider text-white uppercase font-display group-hover:text-amber-400 transition-colors">
                  Olivia Ezekwe
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider block">
                Communications &amp; Brand Lead
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase font-bold tracking-wider transition-colors ${
                pathname === '/'
                  ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase font-bold tracking-wider transition-colors ${
                pathname === '/about'
                  ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </Link>

            {/* Portfolio Dropdown (Containing Selected Work, Writing, Photography, Videography) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setPortfolioDropdownOpen(true)}
              onMouseLeave={() => setPortfolioDropdownOpen(false)}
            >
              <button
                onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase font-bold tracking-wider transition-all ${
                  isPortfolioActive
                    ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Portfolio</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    portfolioDropdownOpen ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>

              {/* Floating Dropdown Card */}
              <AnimatePresence>
                {portfolioDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 sm:w-96 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl z-50 space-y-1"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-amber-400 border-b border-slate-800 flex items-center justify-between">
                      <span>Portfolio Categories</span>
                      <span className="text-slate-400">4 Disciplines</span>
                    </div>

                    {PORTFOLIO_DROPDOWN_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setPortfolioDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            isItemActive
                              ? 'bg-amber-400/15 border border-amber-400/30 text-white'
                              : 'hover:bg-white/5 text-slate-300 hover:text-white'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                              isItemActive
                                ? 'bg-amber-400 text-slate-950'
                                : 'bg-slate-900 border border-slate-800 text-amber-400'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white">{item.name}</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/services"
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase font-bold tracking-wider transition-colors ${
                pathname === '/services'
                  ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Services
            </Link>

            <Link
              href="/cv"
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase font-bold tracking-wider transition-colors ${
                pathname === '/cv'
                  ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              CV / Resume
            </Link>
          </nav>

          {/* Right Action Button & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-glow-gold hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Drawer */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-slate-950 border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center">
                      OE
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white uppercase block">
                        Olivia Ezekwe
                      </span>
                      <span className="text-[10px] text-amber-400 font-mono block">
                        Communications &amp; Brand
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                      pathname === '/' ? 'bg-amber-400/20 text-amber-400' : 'text-slate-200'
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                      pathname === '/about' ? 'bg-amber-400/20 text-amber-400' : 'text-slate-200'
                    }`}
                  >
                    About
                  </Link>

                  {/* Portfolio Dropdown in Mobile */}
                  <div>
                    <button
                      onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                        isPortfolioActive ? 'bg-amber-400/20 text-amber-400' : 'text-slate-200'
                      }`}
                    >
                      <span>Portfolio</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobilePortfolioOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobilePortfolioOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 pr-2 py-2 space-y-1.5 border-l-2 border-slate-800 ml-4 my-1 overflow-hidden"
                        >
                          {PORTFOLIO_DROPDOWN_ITEMS.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 text-xs font-semibold text-slate-300 hover:text-amber-400"
                            >
                              • {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                      pathname === '/services' ? 'bg-amber-400/20 text-amber-400' : 'text-slate-200'
                    }`}
                  >
                    Services
                  </Link>

                  <Link
                    href="/cv"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                      pathname === '/cv' ? 'bg-amber-400/20 text-amber-400' : 'text-slate-200'
                    }`}
                  >
                    CV / Resume
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider ${
                      pathname === '/contact' ? 'bg-amber-400/20 text-amber-400' : 'text-slate-200'
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between px-2 py-1 text-slate-300">
                  <span className="text-xs font-mono uppercase tracking-wider">Appearance</span>
                  <ThemeToggle showLabel={true} />
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-glow-gold"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
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
