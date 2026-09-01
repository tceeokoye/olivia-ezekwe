'use client';

import React, { useState, useRef, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  FileText,
  Newspaper,
  PenTool,
  Megaphone,
  Sparkles,
  Images,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
} from 'lucide-react';
import { projectsData } from '@/data/portfolioData';
import { Project } from '@/types';

// ── Category Configuration ───────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'Campaigns',
    title: 'Campaigns & Advocacy',
    badge: 'Civic & Health Mobilization',
    icon: Megaphone,
    description:
      'High-impact multimedia advocacy and civic engagement campaigns designed to mobilize communities, shift public narratives, and drive action across development, healthcare, and democratic governance.',
  },
  {
    id: 'Creative Non-Fictions',
    title: 'Creative Non-Fictions',
    badge: 'Essays & Literary Memoirs',
    icon: BookOpen,
    description:
      'Introspective narratives, personal memoirs, and literary essays written at the intersection of lived experience, keen observation, and evocative prose craft.',
  },
  {
    id: 'Editorial',
    title: 'Editorial Publications',
    badge: 'Reports & Compendiums',
    icon: FileText,
    description:
      'Comprehensive institutional impact documentation, annual progress scorecards, and compendiums that synthesize complex programmatic achievements into executive knowledge products.',
  },
  {
    id: 'Press',
    title: 'Press & Media Dispatches',
    badge: 'Public Relations & Dispatches',
    icon: Newspaper,
    description:
      'Official press statements, diplomatic delegation briefs, media kits, and public interest dispatches crafted for high newsroom uptake and stakeholder transparency.',
  },
  {
    id: 'Writing Samples',
    title: 'Writing Samples & Legal Research',
    badge: 'Jurisprudence & Policy',
    icon: PenTool,
    description:
      'Rigorous legal research treatises, comparative African labor law analyses, constitutional human rights frameworks, and specialized capacity-building workshop curricula.',
  },
];

// ── Image Lightbox Modal ──────────────────────────────────────────────────────
function ImageLightbox({
  images,
  initialIndex,
  campaignTitle,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  campaignTitle: string;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0A1628]/95 backdrop-blur-xl cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center z-10"
        >
          {/* Top Bar */}
          <div className="w-full flex items-center justify-between px-4 py-3 bg-[#0A1628]/90 backdrop-blur-md rounded-t-2xl border-b border-white/10 text-white">
            <div>
              <span className="text-xs font-mono text-[#C9A227] font-semibold">
                {campaignTitle}
              </span>
              <div className="text-sm font-bold text-white">
                Asset {currentIndex + 1} of {images.length}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image View */}
          <div className="relative w-full flex items-center justify-center bg-black/70 p-4 sm:p-8 overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Campaign visual ${currentIndex + 1}`}
              className="max-h-[68vh] w-auto object-contain rounded-xl shadow-2xl transition-all duration-200"
            />

            {/* Prev / Next Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0A1628]/80 hover:bg-[#C9A227] text-white hover:text-[#0A1628] shadow-2xl backdrop-blur-md transition-all cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0A1628]/80 hover:bg-[#C9A227] text-white hover:text-[#0A1628] shadow-2xl backdrop-blur-md transition-all cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Bar */}
          <div className="w-full bg-[#0A1628]/95 backdrop-blur-md px-4 py-3 rounded-b-2xl border-t border-white/10 flex items-center gap-2 overflow-x-auto custom-scrollbar">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`relative shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all cursor-pointer ${
                  currentIndex === i
                    ? 'ring-2 ring-[#C9A227] scale-105'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// ── Campaigns Component with Sub-sections ────────────────────────────────────
function CampaignSubsections({
  items,
  onImageClick,
}: {
  items: Project[];
  onImageClick: (images: string[], index: number, campaignTitle: string) => void;
}) {
  return (
    <div className="space-y-12">
      {items.map((campaign, cIdx) => {
        const campaignImages = campaign.images || [];
        const [isExpanded, setIsExpanded] = useState(false);
        const INITIAL_LIMIT = 8;
        const visibleImages = isExpanded
          ? campaignImages
          : campaignImages.slice(0, INITIAL_LIMIT);
        const hiddenCount = campaignImages.length - INITIAL_LIMIT;

        return (
          <div
            key={campaign.id}
            className="rounded-3xl bg-white dark:bg-[#0e1d38] p-6 sm:p-8 shadow-[0_12px_45px_-8px_rgba(10,22,40,0.06)] dark:shadow-[0_12px_45px_-8px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            {/* Sub-section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100 dark:border-white/5">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#C9A227]/15 text-[#C9A227]">
                    Campaign #{cIdx + 1}
                  </span>
                  {campaign.year && (
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      • {campaign.year}
                    </span>
                  )}
                  {campaign.client && (
                    <span className="text-xs font-mono text-[#C9A227] font-semibold">
                      • {campaign.client}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0A1628] dark:text-white tracking-tight">
                  {campaign.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {campaign.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <div className="px-3.5 py-1.5 rounded-full bg-[#0A1628]/5 dark:bg-white/5 text-[#0A1628] dark:text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                  <Layers className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>{campaignImages.length} Visual Assets</span>
                </div>
              </div>
            </div>

            {/* Campaign Visual Assets Grid */}
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3.5 space-y-3.5">
              {visibleImages.map((src, i) => (
                <motion.div
                  key={src + i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    duration: 0.35,
                    delay: (i % 8) * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => onImageClick(campaignImages, i, campaign.title)}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_6px_25px_-6px_rgba(10,22,40,0.12)] hover:shadow-[0_16px_36px_-6px_rgba(201,162,39,0.35)] transition-all duration-300 bg-[#0A1628]"
                >
                  <img
                    src={src}
                    alt={campaign.title}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-3.5">
                    <span className="text-[11px] font-bold text-white flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>View Full Image</span>
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#C9A227] text-[#0A1628] flex items-center justify-center font-bold shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expand / Collapse More Graphics */}
            {hiddenCount > 0 && (
              <div className="flex justify-center pt-8">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] text-xs font-black tracking-wider shadow-[0_8px_25px_-5px_rgba(201,162,39,0.4)] hover:shadow-[0_12px_30px_-5px_rgba(201,162,39,0.55)] transition-all hover:scale-105 cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      <span>Show Less Assets</span>
                    </>
                  ) : (
                    <>
                      <Images className="w-4 h-4" />
                      <span>Show {hiddenCount} More Graphics</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Document Preview Component (Document Sharing Card Style) ────────────────
function DocumentWorksSection({ items }: { items: Project[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_LIMIT = 4;
  const visible = isExpanded ? items : items.slice(0, INITIAL_LIMIT);
  const hiddenCount = items.length - INITIAL_LIMIT;

  // Extract clean filename from fileUrl
  const getFileName = (url?: string, title?: string) => {
    if (!url) return `${title || 'Document'}.pdf`;
    const parts = url.split('/');
    return parts[parts.length - 1] || `${title}.pdf`;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((doc, idx) => {
          const isPptx = doc.fileType === 'pptx';
          const fileName = getFileName(doc.fileUrl, doc.title);

          return (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.35,
                delay: (idx % 4) * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0e1d38] shadow-[0_10px_35px_-8px_rgba(10,22,40,0.07)] dark:shadow-[0_10px_35px_-8px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            >
              {/* Surrounding Context Write-up */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[#C9A227] font-bold uppercase tracking-wider">
                    {doc.category || 'Publication'}
                  </span>
                  {doc.year && (
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      {doc.year}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0A1628] dark:text-white leading-snug">
                  {doc.title}
                </h3>

                {doc.client && (
                  <p className="text-xs font-semibold text-[#C9A227]">
                    {doc.client}
                  </p>
                )}

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {doc.summary}
                </p>
              </div>

              {/* Exact Document Sharing Preview Card */}
              <div className="w-full rounded-2xl overflow-hidden shadow-md bg-[#1f2c34] border border-black/20 text-white flex flex-col">
                {/* Top Half: Document First-Page Sheet Preview */}
                <div className="w-full h-36 sm:h-40 bg-white p-4 sm:p-5 flex flex-col items-center justify-center text-center relative overflow-hidden select-none border-b border-slate-200">
                  {/* Subtle document page lines texture */}
                  <div className="w-full max-w-[280px] space-y-2 opacity-90">
                    <div className="h-4 bg-slate-800 rounded mx-auto w-3/4 mb-3 font-bold text-[11px] text-white flex items-center justify-center tracking-tight truncate px-2">
                      {doc.client || 'PUBLICATION OVERVIEW'}
                    </div>
                    <div className="text-[10px] text-slate-700 font-semibold leading-tight line-clamp-2 px-2">
                      {doc.title}
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded w-5/6 mx-auto mt-2" />
                    <div className="h-1.5 bg-slate-200 rounded w-4/6 mx-auto" />
                    <div className="h-1.5 bg-slate-200 rounded w-2/3 mx-auto" />
                  </div>
                </div>

                {/* Middle File Info Bar */}
                <div className="p-3.5 sm:p-4 bg-[#1f2c34] flex items-center gap-3">
                  {/* Red PDF Icon with Folded Corner */}
                  <div className="relative w-9 h-11 bg-rose-600 rounded flex flex-col justify-end p-1 shrink-0 shadow-sm">
                    {/* Folded corner triangle */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-[#1f2c34] border-b border-l border-white/20" />
                    <span className="text-[8px] font-black text-white tracking-tighter uppercase leading-none">
                      {isPptx ? 'PPTX' : 'PDF'}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-white truncate">
                      {fileName}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {doc.fileSize ? `${doc.fileSize} · ` : ''}{isPptx ? 'PPTX Presentation' : 'PDF'}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="grid grid-cols-2 border-t border-white/10 bg-[#172228] text-center font-bold text-xs sm:text-sm divide-x divide-white/10">
                  {doc.fileUrl ? (
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 text-[#25D366] hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View</span>
                    </a>
                  ) : (
                    <span className="py-3 text-slate-500 cursor-not-allowed">Unavailable</span>
                  )}

                  {doc.fileUrl ? (
                    <a
                      href={doc.fileUrl}
                      download
                      className="py-3 text-[#25D366] hover:bg-white/5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Save as...</span>
                    </a>
                  ) : (
                    <span className="py-3 text-slate-500 cursor-not-allowed">Save as...</span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Show More / Show Less for documents */}
      {hiddenCount > 0 && (
        <div className="flex justify-center pt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white dark:bg-[#0e1d38] text-[#C9A227] text-xs font-black tracking-wider shadow-[0_6px_20px_-3px_rgba(10,22,40,0.08)] hover:shadow-[0_10px_25px_-4px_rgba(201,162,39,0.3)] transition-all hover:scale-105 cursor-pointer"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Show Fewer Documents</span>
              </>
            ) : (
              <>
                <FileText className="w-3.5 h-3.5" />
                <span>Show {hiddenCount} More Documents</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

// ── Main Portfolio Page ───────────────────────────────────────────────────────
function PortfolioContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const containerRef = useRef<HTMLDivElement>(null);

  // Modals state
  const [lightboxData, setLightboxData] = useState<{
    images: string[];
    index: number;
    title: string;
  } | null>(null);

  // Open/Close Accordion state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    SECTIONS.forEach((s) => {
      init[s.id] = categoryParam ? s.id === categoryParam : true;
    });
    return init;
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenImage = (images: string[], index: number, title: string) => {
    setLightboxData({ images, index, title });
  };

  // Auto-scroll to selected section when navigating from landing page
  useEffect(() => {
    if (categoryParam) {
      const timeoutId = setTimeout(() => {
        const sectionElement = document.getElementById(`section-${categoryParam}`);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [categoryParam]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#fcfcfd] dark:bg-[#050d1f] relative overflow-x-hidden transition-colors duration-300 font-sans"
    >
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-24 right-[-10%] w-[500px] h-[500px] rounded-full bg-radial from-[#C9A227]/10 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[45%] left-[-15%] w-[550px] h-[550px] rounded-full bg-radial from-[#0A1628]/8 dark:from-[#C9A227]/6 to-transparent blur-[130px] pointer-events-none z-0" />

      {/* ===================== HERO HEADER ===================== */}
      <section className="relative bg-[#0A1628] text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="max-w-6xl mx-auto space-y-5 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/15 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono tracking-widest font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO ARCHIVE &amp; CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight leading-[1.05]">
            Selected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
              Works
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-normal">
            A comprehensive archive of multimedia campaigns, creative non-fiction essays, institutional editorial compendiums, high-pickup press statements, and legal research papers.
          </p>

          {/* Quick Category Jump Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-4">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setOpenSections((prev) => ({ ...prev, [s.id]: true }));
                    setTimeout(() => {
                      document
                        .getElementById(`section-${s.id}`)
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#C9A227] text-white hover:text-[#0A1628] text-xs font-bold tracking-wider shadow-sm backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 text-[#C9A227] hover:text-inherit" />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== SECTION CLIMBING STACK ACCORDION ===================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10 relative z-10">
        {SECTIONS.map((section, sIdx) => {
          const Icon = section.icon;
          const items = projectsData.filter((p) => p.category === section.id);
          if (items.length === 0) return null;
          const isOpen = openSections[section.id];
          const isCampaign = section.id === 'Campaigns';

          // Climbing sticky top offset & stacking z-index
          const stickyTop = `calc(80px + ${sIdx * 10}px)`;

          return (
            <div
              key={section.id}
              id={`section-${section.id}`}
              style={{
                top: stickyTop,
                zIndex: sIdx + 10,
              }}
              className="sticky transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-3xl overflow-hidden bg-white dark:bg-[#0a152b] shadow-[0_-8px_35px_rgba(10,22,40,0.08),0_20px_50px_rgba(10,22,40,0.08)] dark:shadow-[0_-8px_35px_rgba(0,0,0,0.4),0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300"
              >
                {/* Accordion Header (Click to toggle) */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-8 text-left group hover:bg-[#C9A227]/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#0A1628] transition-all shrink-0 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#C9A227] font-bold uppercase tracking-wider">
                          {section.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-[#0A1628] dark:text-white font-sans group-hover:text-[#C9A227] transition-colors leading-tight">
                        {section.title}
                      </h2>

                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl line-clamp-2">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden md:inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#C9A227]/10 text-[#C9A227]">
                      {isCampaign
                        ? `${items.length} Campaigns`
                        : `${items.length} Works`}
                    </span>

                    <div className="w-10 h-10 rounded-full bg-[#0A1628]/5 dark:bg-white/5 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#0A1628] transition-colors shadow-sm">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 pt-2 sm:pt-4 border-t border-slate-100 dark:border-white/5 bg-[#fafafa]/60 dark:bg-[#071120]/40">
                        {isCampaign ? (
                          <CampaignSubsections
                            items={items}
                            onImageClick={handleOpenImage}
                          />
                        ) : (
                          <DocumentWorksSection items={items} />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Image Lightbox Modal */}
      {lightboxData && (
        <ImageLightbox
          images={lightboxData.images}
          initialIndex={lightboxData.index}
          campaignTitle={lightboxData.title}
          onClose={() => setLightboxData(null)}
        />
      )}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-[#C9A227] font-mono text-sm animate-pulse">
          Loading portfolio archive...
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
