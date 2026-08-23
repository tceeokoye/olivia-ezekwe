'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  X,
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import { writingData } from '@/data/writingData';
import { WritingItem } from '@/types';

const CATEGORIES = [
  'All',
  'Articles & Blogs',
  'Reports & Publications',
  'Success Stories',
  'Press Releases & News',
  'Newsletters',
] as const;

export default function WritingPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<WritingItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? writingData
      : writingData.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-14 sm:space-y-20 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="pt-4 sm:pt-8 max-w-3xl mx-auto space-y-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#C9A227] hover:underline transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </Link>
          <span className="text-slate-400 font-mono text-xs">/</span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">WRITING &amp; PUBLICATIONS</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white font-display leading-tight">
          Writing &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
            Publications
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
          Analytical essays, governance reports, human rights chronicles, and curated newsletters that turn complex ideas into persuasive, accessible narratives.
        </p>
      </section>

      {/* ===================== CATEGORY FILTER TABS ===================== */}
      <section>
        {/* Mobile: horizontal scroll strip */}
        <div className="flex sm:hidden overflow-x-auto scrollbar-hide gap-2 pb-2 -mx-4 px-4 snap-x snap-mandatory">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 snap-start px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C9A227] text-[#0A1628] shadow-sm font-black'
                    : 'tech-pill text-[#0A1628] dark:text-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Desktop: centered flex-wrap */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C9A227] text-[#0A1628] shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] scale-105 font-black'
                    : 'tech-pill text-[#0A1628] dark:text-slate-200 hover:border-[#C9A227]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ===================== ARTICLES GRID ===================== */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedArticle(item)}
                className="cursor-pointer group"
              >
                <TiltCard className="h-full">
                  <div className="tech-card rounded-2xl p-5 sm:p-6 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Meta row */}
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="px-2 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 font-semibold truncate max-w-[60%]">
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 shrink-0">
                          <Clock className="w-3 h-3 text-[#C9A227]" /> {item.readTime}
                        </span>
                      </div>

                      {/* Title & Publication */}
                      <div>
                        <div className="text-[11px] text-[#C9A227] font-mono mb-1 font-semibold">
                          {item.publication} • {item.date}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors line-clamp-2 leading-snug font-display">
                          {item.title}
                        </h3>
                      </div>

                      {/* Excerpt */}
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {item.highlights.length} Key Insights
                      </span>
                      <span className="text-xs font-bold text-[#C9A227] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ===================== ARTICLE READ MODAL ===================== */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative w-full sm:max-w-3xl max-h-[88vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl z-10 shadow-2xl p-6 sm:p-8 space-y-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/15"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{selectedArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#0A1628] dark:hover:text-white transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <div className="text-xs text-sky-600 dark:text-sky-400 font-mono mb-2 font-semibold">
                  {selectedArticle.publication} • {selectedArticle.date}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A1628] dark:text-white font-display leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm leading-relaxed italic">
                &ldquo;{selectedArticle.excerpt}&rdquo;
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227] mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Core Insights &amp; Methodologies
                </h4>
                <div className="space-y-3">
                  {selectedArticle.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span className="font-normal leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Authored by Olivia Ezekwe</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#C9A227] text-[#0A1628] font-black text-xs uppercase shadow-sm whitespace-nowrap hover:bg-[#e8c96a]"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
