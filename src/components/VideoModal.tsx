'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Briefcase, User } from 'lucide-react';
import { VideoItem } from '@/types';

interface VideoModalProps {
  video: {
    title: string;
    videoUrl?: string;
    category?: string;
    duration?: string;
    description?: string;
    summary?: string;
    client?: string;
    role?: string;
  } | null;
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

  if (!video || !video.videoUrl) return null;

  const isLocalVideo =
    video.videoUrl.endsWith('.mp4') ||
    video.videoUrl.includes('.mp4') ||
    video.videoUrl.startsWith('/portfolio') ||
    video.videoUrl.startsWith('/');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 select-none overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A1628] border border-[#C9A227]/30 rounded-2xl overflow-hidden shadow-2xl z-10 text-white flex flex-col my-auto"
        >
          {/* Video Player Container 16:9 — shrinks to fit */}
          <div className="relative w-full flex-shrink-0 bg-black" style={{ aspectRatio: '16/9' }}>
            {isLocalVideo ? (
              <video
                src={video.videoUrl}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-contain"
              />
            ) : (
              <iframe
                src={`${video.videoUrl}?autoplay=1`}
                title={video.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/80 hover:bg-black text-white border border-white/20 transition-colors z-20 cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Details below player — scrollable if needed */}
          <div className="p-5 sm:p-7 space-y-3 overflow-y-auto">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {video.category && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#C9A227] text-[#0A1628]">
                  {video.category}
                </span>
              )}
              {video.duration && (
                <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#C9A227]" /> {video.duration}
                </span>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-display leading-snug">{video.title}</h3>
            {(video.description || video.summary) && (
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                {video.description || video.summary}
              </p>
            )}

            {(video.client || video.role) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10 text-sm">
                {video.client && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <Briefcase className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <span>Client: <strong className="text-slate-200">{video.client}</strong></span>
                  </div>
                )}
                {video.role && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <User className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>Role: <strong className="text-slate-200">{video.role}</strong></span>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
