'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import VideoModal from '@/components/VideoModal';
import { videographyData } from '@/data/mediaData';
import { VideoItem } from '@/types';

const CATEGORIES = [
  'All',
  'Documentaries',
  'Interviews',
  'Campaign Videos',
  'Event Highlights',
  'Reels / Short-form Videos',
] as const;

export default function VideographyPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const filteredVideos =
    activeCategory === 'All'
      ? videographyData
      : videographyData.filter((v) => v.category === activeCategory);

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
            <span>PORTFOLIO</span>
          </Link>
          <span className="text-slate-400 font-mono text-xs">/</span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">VIDEOGRAPHY &amp; MEDIA</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white font-display">
          Videography &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
            Films
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
          Directing, producing, and editing human rights documentaries, advocacy campaigns, executive interviews, and viral social reels that inspire action.
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
                className={`shrink-0 snap-start px-4 py-2 rounded-lg text-[11px] font-bold tracking-wider transition-all duration-200 whitespace-nowrap ${
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
                className={`px-5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
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

      {/* ===================== VIDEO GRID ===================== */}
      <section>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedVideo(video)}
                className="cursor-pointer group"
              >
                <TiltCard maxTilt={8} className="h-full">
                  <div className="tech-card rounded-2xl overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      {/* Video Thumbnail Frame */}
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-80" />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-lg bg-[#C9A227] text-[#0A1628] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-[#0A1628] ml-0.5" />
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-[#C9A227] text-[#0A1628]">
                            {video.category}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/70 text-white font-mono text-[10px]">
                          {video.duration}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-2">
                        <div className="text-xs text-[#C9A227] font-mono font-semibold">{video.client} • {video.duration}</div>
                        <h3 className="text-lg font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors font-display">
                          {video.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Role: {video.role}</span>
                        <span className="text-xs font-bold text-[#C9A227]">
                          Watch Video
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
