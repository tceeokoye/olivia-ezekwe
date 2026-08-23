'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Award,
  Calendar,
  User,
  Briefcase,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Tag,
} from 'lucide-react';
import { Project } from '@/types';
import Link from 'next/link';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl z-10 shadow-2xl bg-[#0A1628] border border-[#C9A227]/30 text-white custom-scrollbar"
          >
            {/* Header Image with Gradient */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/60 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-105"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badges */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#C9A227] text-[#0A1628]">
                  {project.category}
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Title & Summary */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed font-normal">
                  {project.summary}
                </p>
              </div>

              {/* Project Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Briefcase className="w-5 h-5 text-[#C9A227] shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono uppercase font-semibold">Client</div>
                    <div className="text-xs font-bold text-white mt-0.5 leading-tight">{project.client}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <User className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono uppercase font-semibold">Role</div>
                    <div className="text-xs font-bold text-white mt-0.5 leading-tight">{project.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono uppercase font-semibold">Timeline</div>
                    <div className="text-xs font-bold text-white mt-0.5">{project.year}</div>
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-[#C9A227]" />
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9A227] font-bold">
                      Quantifiable Impact
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl text-center bg-[#C9A227]/10 border border-[#C9A227]/30"
                      >
                        <div className="text-2xl sm:text-3xl font-black text-[#C9A227] font-display">
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-300 mt-1 leading-tight font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* THE CHALLENGE */}
                <div
                  className="p-5 rounded-2xl space-y-3"
                  style={{
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.25)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    <h5 className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
                      The Challenge
                    </h5>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>

                {/* THE SOLUTION */}
                <div
                  className="p-5 rounded-2xl space-y-3"
                  style={{
                    background: 'rgba(16,185,129,0.08)',
                    border: '1px solid rgba(16,185,129,0.25)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h5 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                      The Solution
                    </h5>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">
                  Key Deliverables &amp; Assets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span className="font-normal leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags + CTA */}
              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-400 border border-white/10 font-mono"
                    >
                      <Tag className="w-3 h-3" />
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-xs uppercase tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] transition-all hover:scale-105 whitespace-nowrap"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
