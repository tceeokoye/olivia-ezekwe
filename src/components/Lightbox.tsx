'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera } from 'lucide-react';
import { PhotoItem } from '@/types';

interface LightboxProps {
  photos: PhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + photos.length) % photos.length);
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onNavigate]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 select-none">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700 transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % photos.length)}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700 transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Photo Frame */}
        <div className="flex flex-col items-center max-w-5xl max-h-full w-full">
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl shadow-2xl border border-slate-800"
          >
            <img
              src={currentPhoto.image}
              alt={currentPhoto.title}
              className="max-h-[72vh] max-w-full object-contain rounded-xl"
            />
          </motion.div>

          {/* Photo Metadata Caption */}
          <motion.div
            key={`caption-${currentPhoto.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center max-w-2xl px-4 text-white"
          >
            <div className="flex items-center justify-center gap-3 text-xs text-brand-gold font-mono   tracking-wider mb-1">
              <span className="flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" /> {currentPhoto.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5" /> {currentPhoto.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5" /> {currentPhoto.year}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold">{currentPhoto.title}</h3>
            <p className="text-slate-400 text-sm mt-1">{currentPhoto.caption}</p>
            <div className="text-xs text-slate-500 mt-2 font-mono">
              {currentIndex + 1} of {photos.length}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
