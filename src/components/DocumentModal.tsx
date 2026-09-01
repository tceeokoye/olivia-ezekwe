'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  Calendar,
  User,
  Briefcase,
  Tag,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Project } from '@/types';

interface DocumentModalProps {
  document: Project | null;
  onClose: () => void;
}

export default function DocumentModal({ document: doc, onClose }: DocumentModalProps) {
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);

  useEffect(() => {
    setShowPdfEmbed(false);
  }, [doc]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (doc) {
      window.document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [doc, onClose]);

  if (!doc) return null;

  const isPptx = doc.fileType === 'pptx' || doc.fileUrl?.endsWith('.pptx');
  const isPdf = doc.fileType === 'pdf' || doc.fileUrl?.endsWith('.pdf');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
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
          className={`relative w-full ${
            showPdfEmbed ? 'max-w-6xl' : 'max-w-3xl'
          } max-h-[92vh] overflow-y-auto rounded-3xl z-10 shadow-2xl bg-[#0A1628] border border-[#C9A227]/30 text-white custom-scrollbar flex flex-col transition-all duration-300`}
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4 sticky top-0 bg-[#0A1628]/95 backdrop-blur-sm z-20">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#C9A227] text-[#0A1628]">
                  {doc.category}
                </span>
                {doc.fileSize && (
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/10 text-slate-300 border border-white/15">
                    {isPptx ? 'PPTX Presentation' : 'PDF Document'} • {doc.fileSize}
                  </span>
                )}
                {doc.year && (
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/10 text-slate-300 border border-white/15">
                    {doc.year}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-display leading-snug">
                {doc.title}
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

          {/* Embedded Viewer (If activated) */}
          {showPdfEmbed && doc.fileUrl && isPdf && (
            <div className="p-4 sm:p-6 bg-slate-950 flex flex-col items-center">
              <div className="w-full h-[65vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-inner">
                <iframe
                  src={`${doc.fileUrl}#toolbar=1&navpanes=0`}
                  title={doc.title}
                  className="w-full h-full border-0"
                />
              </div>
              <div className="w-full flex items-center justify-between pt-3 text-xs text-slate-400">
                <span>Embedded Document Viewer</span>
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A227] hover:underline flex items-center gap-1 font-semibold"
                >
                  Open in New Tab <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6 flex-1">
            {/* Meta Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {doc.client && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Organisation</div>
                    <div className="text-xs font-bold text-white truncate">{doc.client}</div>
                  </div>
                </div>
              )}
              {doc.role && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <User className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Role</div>
                    <div className="text-xs font-bold text-white truncate">{doc.role}</div>
                  </div>
                </div>
              )}
              {doc.year && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">Timeline</div>
                    <div className="text-xs font-bold text-white">{doc.year}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold text-[#C9A227] tracking-widest">
                EXECUTIVE OVERVIEW
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {doc.summary}
              </p>
            </div>

            {/* Highlights */}
            {doc.highlights && doc.highlights.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono font-bold text-white tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>KEY THEMES &amp; HIGHLIGHTS</span>
                </h4>
                <div className="space-y-2.5">
                  {doc.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span className="font-normal leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {doc.tags && doc.tags.length > 0 && (
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {doc.tags.map((t, idx) => (
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

          {/* Action Footer */}
          <div className="p-6 sm:p-8 border-t border-white/10 bg-[#071120] flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
            <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C9A227]" />
              <span>Original Document Asset</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {doc.fileUrl && isPdf && (
                <button
                  onClick={() => setShowPdfEmbed(!showPdfEmbed)}
                  className="flex-1 sm:flex-initial px-5 py-3 rounded-full border border-[#C9A227]/50 text-[#C9A227] hover:bg-[#C9A227]/10 font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>{showPdfEmbed ? 'Hide Viewer' : 'Read in Page'}</span>
                </button>
              )}

              {doc.fileUrl && (
                <a
                  href={doc.fileUrl}
                  download
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-xs tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download {isPptx ? 'Presentation' : 'Document'}</span>
                </a>
              )}

              {doc.fileUrl && (
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Open in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
