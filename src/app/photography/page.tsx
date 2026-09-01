'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Calendar, Maximize2, Sparkles, ChevronLeft } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import Lightbox from '@/components/Lightbox';
import { photographyData } from '@/data/mediaData';
import { PhotoItem } from '@/types';

const CATEGORIES = [
  'All',
  'Community & Development',
  'Events & Conferences',
  'Training & Workshops',
  'Advocacy & Campaigns',
  'Portraits',
  'Documentary Photography',
] as const;

export default function PhotographyPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === 'All'
      ? photographyData
      : photographyData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4">
        {/* Breadcrumb back to Portfolio */}
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#C9A227] hover:underline transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </Link>
          <span className="text-slate-400 font-mono text-xs">/</span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">PHOTOGRAPHY &amp; VISUAL STORIES</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white font-display">
          Photography &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
            Visual Stories
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
          Dignity-first documentary photojournalism capturing grassroots development, policy summits, community empowerment, and authentic human emotion.
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
                className={`shrink-0 snap-start px-4 py-2 rounded-full text-[11px] font-bold   tracking-wider transition-all duration-200 whitespace-nowrap ${
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
                className={`px-5 py-2 rounded-full text-xs font-bold   tracking-wider transition-all duration-300 ${
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

      {/* ===================== PHOTO GALLERY GRID ===================== */}
      <section>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(photographyData.findIndex((p) => p.id === photo.id))}
                className="cursor-pointer group"
              >
                <TiltCard maxTilt={8} className="h-full">
                  <div className="tech-card rounded-2xl overflow-hidden h-full flex flex-col justify-between relative">
                    <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                      <img
                        src={photo.image}
                        alt={photo.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-80" />

                      <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>

                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-[#C9A227] text-[#0A1628]">
                          {photo.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 text-[10px] text-[#e8c96a] font-mono mb-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {photo.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {photo.year}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold leading-snug line-clamp-2">
                          {photo.caption}
                        </h3>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        photos={photographyData}
        currentIndex={lightboxIndex}
        onNavigate={(index) => setLightboxIndex(index)}
        onClose={() => setLightboxIndex(null)}
      />
    </div>
  );
}
