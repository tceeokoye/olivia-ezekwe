'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Layers,
  Tag,
  Briefcase,
  Calendar,
  User,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { Project } from '@/types';

interface CampaignGalleryModalProps {
  campaign: Project | null;
  onClose: () => void;
}

export default function CampaignGalleryModal({ campaign, onClose }: CampaignGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [campaign]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!campaign?.images) return;
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % campaign.images!.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + campaign.images!.length) % campaign.images!.length);
      }
    };
    if (campaign) {
      window.document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [campaign, onClose]);

  if (!campaign) return null;

  const images = campaign.images && campaign.images.length > 0 ? campaign.images : [campaign.image || ''];
  const total = images.length;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl z-10 shadow-2xl bg-[#0A1628] border border-[#C9A227]/30 text-white custom-scrollbar flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between gap-4 sticky top-0 bg-[#0A1628]/95 backdrop-blur-sm z-20">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-0.5 text-xs font-bold rounded-full bg-[#C9A227] text-[#0A1628]">
                  {campaign.category}
                </span>
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-white/10 text-slate-300">
                  {total} Visual Assets
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-white font-display">
                {campaign.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Image Carousel Stage */}
          <div className="relative bg-slate-950 flex flex-col items-center justify-center p-3 sm:p-6 select-none">
            <div className="relative w-full max-h-[60vh] sm:max-h-[65vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${campaign.title} - Asset ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[58vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
              </AnimatePresence>

              {/* Prev / Next Floating Arrows */}
              {total > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#C9A227] hover:text-[#0A1628] text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-[#C9A227] hover:text-[#0A1628] text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-110 shadow-lg"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Counter Badge */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/80 text-white font-mono text-xs border border-white/20 backdrop-blur-sm">
                {currentIndex + 1} / {total}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {total > 1 && (
              <div className="w-full mt-4 flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      currentIndex === idx
                        ? 'border-[#C9A227] scale-105 shadow-[0_0_12px_rgba(201,162,39,0.5)]'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Case Study Meta */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Meta Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {campaign.client && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Client / Organisation</div>
                    <div className="text-xs font-bold text-white truncate">{campaign.client}</div>
                  </div>
                </div>
              )}
              {campaign.role && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <User className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Role</div>
                    <div className="text-xs font-bold text-white truncate">{campaign.role}</div>
                  </div>
                </div>
              )}
              {campaign.year && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Timeline</div>
                    <div className="text-xs font-bold text-white">{campaign.year}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold text-[#C9A227] tracking-widest">
                CAMPAIGN OVERVIEW
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {campaign.summary}
              </p>
            </div>

            {/* Impact Metrics */}
            {campaign.metrics && campaign.metrics.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C9A227]" />
                  <h4 className="text-xs font-mono font-bold text-[#C9A227] tracking-widest">
                    CAMPAIGN REACH &amp; IMPACT
                  </h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {campaign.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl text-center bg-[#C9A227]/10 border border-[#C9A227]/30"
                    >
                      <div className="text-xl sm:text-2xl font-black text-[#C9A227] font-display">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-300 mt-1 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables */}
            {campaign.deliverables && campaign.deliverables.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono font-bold text-white tracking-widest">
                  KEY DELIVERABLES &amp; ASSETS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {campaign.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span className="font-normal leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {campaign.tags && campaign.tags.length > 0 && (
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {campaign.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/10 font-mono"
                  >
                    <Tag className="w-3 h-3 text-[#C9A227]" />
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
