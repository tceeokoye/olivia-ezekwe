'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Briefcase, User } from 'lucide-react';
import { VideoItem } from '@/types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0A1628] border border-[#C9A227]/30 rounded-2xl overflow-hidden shadow-2xl z-10 text-white"
        >
          {/* Video Player Container 16:9 */}
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={`${video.videoUrl}?autoplay=1`}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 hover:bg-black text-white border border-white/20 transition-colors z-20"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Details below player */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#C9A227] text-[#0A1628]">
                {video.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#C9A227]" /> {video.duration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display">{video.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">{video.description}</p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <Briefcase className="w-4 h-4 text-[#C9A227]" />
                <span>Client: <strong className="text-slate-200">{video.client}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <User className="w-4 h-4 text-sky-400" />
                <span>Role: <strong className="text-slate-200">{video.role}</strong></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
