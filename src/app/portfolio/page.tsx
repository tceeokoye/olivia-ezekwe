'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { projectsData } from '@/data/portfolioData';
import { Project } from '@/types';

// ─────────────────────────────────────────────
// Section Config (no icons — numbers only)
// ─────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'Campaigns',
    label: '01',
    title: 'Campaigns & Advocacy',
    subtitle: 'Civic & Health Mobilization',
    description:
      'High-impact multimedia advocacy and civic engagement campaigns designed to mobilize communities, shift public narratives, and drive measurable action across development, healthcare, and democratic governance sectors.',
  },
  {
    id: 'Creative Non-Fictions',
    label: '02',
    title: 'Creative Non-Fictions',
    subtitle: 'Essays & Literary Memoirs',
    description:
      'Introspective narratives, personal memoirs, and literary essays crafted at the intersection of lived experience, keen social observation, and evocative prose.',
  },
  {
    id: 'Editorial',
    label: '03',
    title: 'Editorial Publications',
    subtitle: 'Reports & Compendiums',
    description:
      'Comprehensive institutional impact documentation, annual progress scorecards, and editorial compendiums that synthesise complex programmatic achievements into executive-ready knowledge products.',
  },
  {
    id: 'Press',
    label: '04',
    title: 'Press & Media',
    subtitle: 'Public Relations & Dispatches',
    description:
      'Official press statements, diplomatic delegation briefs, media kits, and public-interest dispatches crafted for high newsroom uptake and stakeholder transparency.',
  },
  {
    id: 'Writing Samples',
    label: '05',
    title: 'Writing Samples',
    subtitle: 'Legal Research & Policy',
    description:
      'Rigorous legal research treatises, comparative African labour law analyses, constitutional human rights frameworks, and specialised capacity-building curricula.',
  },
];

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────
const EASE_SPRING = [0.21, 0.47, 0.32, 0.98];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_SPRING } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE_SPRING } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 35 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE_SPRING } },
};

const slideFromBottom = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_SPRING } },
};

// ─────────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
      if (e.key === 'ArrowRight') setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#050d1f]/98 backdrop-blur-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div>
          <p className="text-[11px] font-mono text-[#C9A227] tracking-widest uppercase">{title}</p>
          <p className="text-white/50 text-xs font-mono mt-0.5">
            {idx + 1} / {images.length}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center relative p-6 overflow-hidden">
        <motion.img
          key={idx}
          src={images[idx]}
          alt=""
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: EASE_SPRING }}
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-white/10 hover:bg-[#C9A227] text-white hover:text-[#0A1628] flex items-center justify-center transition-all shadow-lg cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-white/10 hover:bg-[#C9A227] text-white hover:text-[#0A1628] flex items-center justify-center transition-all shadow-lg cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="px-5 py-4 border-t border-white/10 flex gap-2 overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden ring-2 transition-all cursor-pointer ${
                i === idx ? 'ring-[#C9A227]' : 'ring-transparent opacity-40 hover:opacity-80'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Campaign Gallery Section
// ─────────────────────────────────────────────
function CampaignGallery({
  items,
  onOpen,
}: {
  items: Project[];
  onOpen: (images: string[], idx: number, title: string) => void;
}) {
  return (
    <div className="space-y-10">
      {items.map((campaign, cIdx) => {
        const imgs = campaign.images || [];
        const [expanded, setExpanded] = useState(false);
        const LIMIT = 8;
        const visible = expanded ? imgs : imgs.slice(0, LIMIT);
        const remaining = imgs.length - LIMIT;

        return (
          <motion.div
            key={campaign.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={slideFromBottom}
            className="tech-card rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0c1a2e] border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] space-y-6"
          >
            {/* Sub-section label & context */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-5 border-b border-slate-100 dark:border-white/10">
              <div className="space-y-2">
                <motion.div
                  variants={slideFromLeft}
                  className="flex flex-wrap items-center gap-2"
                >
                  <span className="text-xs font-mono text-[#C9A227] tracking-wider uppercase font-bold px-2 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/20">
                    Campaign 0{cIdx + 1}
                  </span>
                  {campaign.client && (
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {campaign.client}
                    </span>
                  )}
                </motion.div>
                <motion.h3
                  variants={slideFromLeft}
                  className="text-xl sm:text-2xl font-bold text-[#0A1628] dark:text-white leading-snug"
                >
                  {campaign.title}
                </motion.h3>
                {campaign.summary && (
                  <motion.p
                    variants={fadeIn}
                    className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-normal"
                  >
                    {campaign.summary}
                  </motion.p>
                )}
              </div>
              <motion.span
                variants={slideFromRight}
                className="self-start shrink-0 text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-md"
              >
                {imgs.length} visuals
              </motion.span>
            </div>

            {/* Grid with staggered emerge */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {visible.map((src, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 25, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    duration: 0.45,
                    delay: (i % 8) * 0.04,
                    ease: EASE_SPRING,
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpen(imgs, i, campaign.title)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-[#0A1628] cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-slate-200/60 dark:border-white/5"
                >
                  <img
                    src={src}
                    alt=""
                    loading={i < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-[#0A1628]/0 group-hover:bg-[#0A1628]/40 transition-colors duration-200 flex items-center justify-center">
                    <span className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-3 py-1.5 rounded-lg border border-white/20">
                      View
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Show more / less */}
            {remaining > 0 && (
              <div className="flex justify-start pt-2">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#e8c96a] transition-colors cursor-pointer"
                >
                  {expanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" /> Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" /> Show {remaining} more visuals
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Document Preview Card (with professional entrance & shadow)
// ─────────────────────────────────────────────
function DocumentCard({ doc, index }: { doc: Project; index: number }) {
  const isPptx = doc.fileType === 'pptx';
  const isLeft = index % 2 === 0;

  const rawName = doc.fileUrl?.split('/').pop() ?? `${doc.title}.pdf`;
  const fileName = decodeURIComponent(rawName);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        x: isLeft ? -18 : 18,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.1,
        ease: EASE_SPRING,
      }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="tech-card rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0c1a2e] border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Context write-up inside the card with generous breathing room */}
      <div className="mb-6 space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2"
        >
          {doc.year && (
            <span className="text-xs font-mono text-[#C9A227] font-bold tracking-wider px-2 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/20">
              {doc.year}
            </span>
          )}
          {doc.client && (
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {doc.client}
            </span>
          )}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-lg sm:text-xl font-bold text-[#0A1628] dark:text-white leading-snug group-hover:text-[#C9A227] transition-colors"
        >
          {doc.title}
        </motion.h3>

        {doc.summary && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal"
          >
            {doc.summary}
          </motion.p>
        )}
      </div>

      {/* WhatsApp-style document preview card (animated entrance from bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: EASE_SPRING }}
        className="rounded-xl overflow-hidden bg-[#1f2c34] shadow-md border border-slate-300/40 dark:border-white/5 w-full max-w-sm mt-auto"
      >
        {/* Document page thumbnail */}
        <div className="bg-white p-5 flex flex-col items-center justify-center min-h-[110px] text-center gap-2 select-none border-b border-slate-200/60">
          {doc.client && (
            <div className="bg-[#0A1628] text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wide truncate max-w-full">
              {doc.client.toUpperCase()}
            </div>
          )}
          <p className="text-xs font-semibold text-slate-700 leading-tight line-clamp-2 px-2">
            {doc.title}
          </p>
          <div className="w-full space-y-1.5 px-3 pt-1">
            <div className="h-1 bg-slate-200 rounded-full w-5/6 mx-auto" />
            <div className="h-1 bg-slate-200 rounded-full w-4/6 mx-auto" />
            <div className="h-1 bg-slate-200 rounded-full w-3/5 mx-auto" />
          </div>
        </div>

        {/* File info row */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2c34]">
          <div className="relative w-9 h-11 bg-rose-600 rounded flex flex-col items-center justify-end pb-1 shrink-0 shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#1f2c34] rounded-bl-sm" />
            <span className="text-[8px] font-black text-white tracking-tighter leading-none">
              {isPptx ? 'PPT' : 'PDF'}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-white truncate leading-snug">{fileName}</p>
            <p className="text-[11px] text-white/50 font-mono mt-0.5">
              {doc.fileSize ? `${doc.fileSize} · ` : ''}
              {isPptx ? 'Presentation' : 'PDF document'}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-[#172228]">
          {doc.fileUrl ? (
            <a
              href={doc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-center text-[13px] font-bold text-[#25D366] hover:bg-white/5 transition-colors"
            >
              View
            </a>
          ) : (
            <span className="py-3 text-center text-[13px] text-white/25 cursor-not-allowed">View</span>
          )}
          {doc.fileUrl ? (
            <a
              href={doc.fileUrl}
              download
              className="py-3 text-center text-[13px] font-bold text-[#25D366] hover:bg-white/5 transition-colors"
            >
              Save as…
            </a>
          ) : (
            <span className="py-3 text-center text-[13px] text-white/25 cursor-not-allowed">
              Save as…
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function DocumentGrid({ items }: { items: Project[] }) {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 4;
  const visible = expanded ? items : items.slice(0, LIMIT);
  const remaining = items.length - LIMIT;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {visible.map((doc, idx) => (
          <DocumentCard key={doc.id} doc={doc} index={idx} />
        ))}
      </div>
      {remaining > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-3"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#e8c96a] transition-colors cursor-pointer"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" /> Show fewer documents
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" /> Show {remaining} more documents
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Portfolio Content
// ─────────────────────────────────────────────
function PortfolioContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title: string;
  } | null>(null);

  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    SECTIONS.forEach((s) => {
      init[s.id] = categoryParam ? s.id === categoryParam : true;
    });
    return init;
  });

  const toggle = (id: string) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    if (categoryParam) {
      setTimeout(() => {
        document
          .getElementById(`section-${categoryParam}`)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, [categoryParam]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050d1f] text-[#0A1628] dark:text-white font-sans transition-colors duration-300">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-16 pt-20 pb-16 bg-white dark:bg-[#0A1628] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 dark:bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb-style label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE_SPRING }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-[11px] font-mono text-slate-400 dark:text-white/40 tracking-widest uppercase">
              Olivia Ezekwe
            </span>
            <span className="text-slate-300 dark:text-white/20">/</span>
            <span className="text-[11px] font-mono text-[#C9A227] tracking-widest uppercase font-semibold">
              Portfolio
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_SPRING }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0A1628] dark:text-white leading-[1.05]"
            >
              Selected
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
                Works.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE_SPRING }}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl"
            >
              A curated archive of campaigns, creative writing, editorial publications, press
              statements, and legal research spanning civic engagement, development communications,
              and literary non-fiction.
            </motion.p>
          </div>

          {/* Quick-jump links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE_SPRING }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {SECTIONS.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.35 + i * 0.05 }}
                whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setOpen((prev) => ({ ...prev, [s.id]: true }));
                  setTimeout(() => {
                    document
                      .getElementById(`section-${s.id}`)
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all cursor-pointer shadow-sm"
              >
                <span className="font-mono text-[#C9A227] font-bold">{s.label}</span>
                <span>{s.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE_SPRING }}
            className="mt-10 flex flex-wrap gap-8 pt-8 border-t border-slate-200 dark:border-white/10"
          >
            {[
              { number: '55+', label: 'Campaign Visuals' },
              { number: '12+', label: 'Publications' },
              { number: '5', label: 'Disciplines' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.08 }}
                className="space-y-0.5"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#0A1628] dark:text-white">
                  {stat.number}
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTIONS ─── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 py-12 space-y-0 divide-y divide-slate-200 dark:divide-white/10">
        {SECTIONS.map((section) => {
          const items = projectsData.filter((p) => p.category === section.id);
          if (items.length === 0) return null;
          const isCampaign = section.id === 'Campaigns';
          const isOpen = open[section.id];

          return (
            <motion.div
              key={section.id}
              id={`section-${section.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SPRING }}
            >
              {/* Section Header — click to toggle */}
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex items-start sm:items-center justify-between gap-4 py-8 text-left group cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                  {/* Number label */}
                  <span className="shrink-0 text-xs font-mono text-[#C9A227] font-bold tracking-widest pt-1 sm:pt-0">
                    {section.label}
                  </span>

                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors leading-tight">
                        {section.title}
                      </h2>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-normal hidden sm:inline">
                        {section.subtitle}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-3xl line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3 self-start sm:self-auto mt-1 sm:mt-0">
                  <span className="hidden md:block text-xs font-mono text-slate-500 dark:text-slate-400">
                    {isCampaign
                      ? `${items.length} campaigns`
                      : `${items.length} ${items.length === 1 ? 'work' : 'works'}`}
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/15 group-hover:border-[#C9A227] flex items-center justify-center text-slate-600 dark:text-white/60 group-hover:text-[#C9A227] transition-all">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE_SPRING }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pt-2">
                      {isCampaign ? (
                        <CampaignGallery
                          items={items}
                          onOpen={(images, idx, title) => setLightbox({ images, index: idx, title })}
                        />
                      ) : (
                        <DocumentGrid items={items} />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ─── Footer CTA ─── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_SPRING }}
        className="border-t border-slate-200 dark:border-white/10 px-5 sm:px-8 lg:px-16 py-16 bg-white dark:bg-[#0A1628] transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-mono uppercase tracking-widest font-semibold">
              Open to opportunities
            </p>
            <p className="text-xl sm:text-2xl font-bold text-[#0A1628] dark:text-white">
              Interested in working together?
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#C9A227] text-[#0A1628] text-sm font-bold hover:bg-[#e8c96a] transition-colors shadow-lg hover:shadow-[0_8px_24px_-4px_rgba(201,162,39,0.5)] shrink-0 cursor-pointer"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.section>

      {/* Lightbox overlay */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white dark:bg-[#050d1f] flex items-center justify-center text-slate-400 dark:text-white/30 text-sm font-mono animate-pulse">
          Loading portfolio…
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
