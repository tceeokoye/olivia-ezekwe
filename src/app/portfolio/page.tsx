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
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
        <div>
          <p className="text-[11px] font-mono text-[#C9A227] tracking-widest uppercase">{title}</p>
          <p className="text-white/50 text-xs font-mono mt-0.5">
            {idx + 1} / {images.length}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
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
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A227] text-white hover:text-[#0A1628] flex items-center justify-center transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A227] text-white hover:text-[#0A1628] flex items-center justify-center transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="px-5 py-4 border-t border-white/8 flex gap-2 overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden ring-2 transition-all ${
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
          <div key={campaign.id} className="space-y-5">
            {/* Sub-section label */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-[#C9A227] tracking-widest uppercase font-semibold">
                    Campaign {cIdx + 1}
                  </span>
                  {campaign.client && (
                    <span className="text-[11px] font-mono text-white/40">— {campaign.client}</span>
                  )}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {campaign.title}
                </h4>
                {campaign.summary && (
                  <p className="text-white/50 text-sm leading-relaxed max-w-2xl">{campaign.summary}</p>
                )}
              </div>
              <span className="self-start shrink-0 text-xs font-mono text-white/30 bg-white/5 px-3 py-1 rounded-full">
                {imgs.length} visuals
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {visible.map((src, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10px' }}
                  transition={{ duration: 0.3, delay: (i % 8) * 0.02, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => onOpen(imgs, i, campaign.title)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-[#0A1628] cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                >
                  <img
                    src={src}
                    alt=""
                    loading={i < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              <div className="flex justify-start pt-1">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#e8c96a] transition-colors"
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
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Document Preview Card (WhatsApp-style)
// ─────────────────────────────────────────────
function DocumentCard({ doc }: { doc: Project }) {
  const isPptx = doc.fileType === 'pptx';

  const rawName = doc.fileUrl?.split('/').pop() ?? `${doc.title}.pdf`;
  // Decode URI-encoded chars like %20 → space
  const fileName = decodeURIComponent(rawName);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15px' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      {/* Context write-up above the card */}
      <div className="mb-4 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          {doc.year && (
            <span className="text-[11px] font-mono text-[#C9A227] font-semibold tracking-wider">
              {doc.year}
            </span>
          )}
          {doc.client && (
            <span className="text-[11px] font-mono text-white/40">— {doc.client}</span>
          )}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{doc.title}</h3>
        {doc.summary && (
          <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{doc.summary}</p>
        )}
      </div>

      {/* WhatsApp-style document preview card */}
      <div className="rounded-2xl overflow-hidden bg-[#1f2c34] shadow-lg w-full max-w-xs">
        {/* Document page thumbnail */}
        <div className="bg-white p-5 flex flex-col items-center justify-center min-h-[120px] text-center gap-2.5 select-none">
          {doc.client && (
            <div className="bg-[#0A1628] text-white text-[10px] font-bold px-3 py-1 rounded tracking-wide truncate max-w-full">
              {doc.client.toUpperCase()}
            </div>
          )}
          <p className="text-[11px] font-semibold text-slate-700 leading-tight line-clamp-2 px-2">
            {doc.title}
          </p>
          <div className="w-full space-y-1.5 px-2 pt-1">
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
            <p className="text-[11px] text-white/40 font-mono mt-0.5">
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
      </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
        {visible.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
      {remaining > 0 && (
        <div className="pt-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#e8c96a] transition-colors"
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
        </div>
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
    <div className="min-h-screen bg-[#0A1628] text-white font-sans">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-16 pt-24 pb-20 border-b border-white/8">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb-style label */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-[11px] font-mono text-white/30 tracking-widest uppercase">
              Olivia Ezekwe
            </span>
            <span className="text-white/20">/</span>
            <span className="text-[11px] font-mono text-[#C9A227] tracking-widest uppercase font-semibold">
              Portfolio
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-5 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.04]">
              Selected
              <br />
              <span className="text-[#C9A227]">Works.</span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              A curated archive of campaigns, creative writing, editorial publications, press
              statements, and legal research spanning civic engagement, development communications,
              and literary non-fiction.
            </p>
          </div>

          {/* Quick-jump links */}
          <div className="mt-10 flex flex-wrap gap-2">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setOpen((prev) => ({ ...prev, [s.id]: true }));
                  setTimeout(() => {
                    document
                      .getElementById(`section-${s.id}`)
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white/60 hover:text-white bg-white/6 hover:bg-white/10 border border-white/8 hover:border-white/20 transition-all"
              >
                <span className="font-mono text-[#C9A227]">{s.label}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap gap-8 pt-8 border-t border-white/8">
            {[
              { number: '55+', label: 'Campaign Visuals' },
              { number: '12+', label: 'Publications' },
              { number: '5', label: 'Disciplines' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-0.5">
                <div className="text-2xl font-black text-white">{stat.number}</div>
                <div className="text-xs font-mono text-white/35 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTIONS ─── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 py-14 space-y-0 divide-y divide-white/6">
        {SECTIONS.map((section, sIdx) => {
          const items = projectsData.filter((p) => p.category === section.id);
          if (items.length === 0) return null;
          const isCampaign = section.id === 'Campaigns';
          const isOpen = open[section.id];

          return (
            <div key={section.id} id={`section-${section.id}`}>
              {/* Section Header — click to toggle */}
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex items-start sm:items-center justify-between gap-4 py-8 text-left group"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                  {/* Number label */}
                  <span className="shrink-0 text-[11px] font-mono text-[#C9A227] tracking-widest pt-1 sm:pt-0">
                    {section.label}
                  </span>

                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#C9A227] transition-colors leading-tight">
                        {section.title}
                      </h2>
                      <span className="text-xs font-mono text-white/30 font-normal hidden sm:inline">
                        {section.subtitle}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed max-w-2xl line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3 self-start sm:self-auto mt-1 sm:mt-0">
                  <span className="hidden md:block text-xs font-mono text-white/25">
                    {isCampaign
                      ? `${items.length} campaigns`
                      : `${items.length} ${items.length === 1 ? 'work' : 'works'}`}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/12 group-hover:border-[#C9A227]/60 flex items-center justify-center text-white/40 group-hover:text-[#C9A227] transition-all">
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
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10">
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
            </div>
          );
        })}
      </div>

      {/* ─── Footer CTA ─── */}
      <section className="border-t border-white/8 px-5 sm:px-8 lg:px-16 py-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              Open to opportunities
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              Interested in working together?
            </p>
          </div>
          <a
            href="/contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#C9A227] text-[#0A1628] text-sm font-bold hover:bg-[#e8c96a] transition-colors shadow-lg hover:shadow-[0_8px_24px_-4px_rgba(201,162,39,0.5)] shrink-0"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

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
        <div className="min-h-screen bg-[#0A1628] flex items-center justify-center text-white/30 text-sm font-mono animate-pulse">
          Loading portfolio…
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
