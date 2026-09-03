"use client";

import React, { useState, useEffect, Suspense } from "react";

import { useSearchParams } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronDown,
  ChevronUp,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Camera,
  Film,
  Eye,
} from "lucide-react";

import { projectsData } from "@/data/portfolioData";
import { Project } from "@/types";
import VideoModal from "@/components/VideoModal";

// ─────────────────────────────────────────────
// Section Config
// ─────────────────────────────────────────────

const SECTIONS = [
  {
    id: "Campaigns",
    label: "01",
    title: "Campaigns",
    subtitle: "Civic & Health Mobilization",
    description:
      "Advocacy and public-facing campaigns designed to raise awareness, engage audiences and encourage action.",
  },
  {
    id: "Creative Non-Fictions",
    label: "02",
    title: "Creative NonFictions",
    subtitle: "Essays & Literary Memoirs",
    description:
      "Personal essays, human-centred narratives and observational writing drawn from real experiences and everyday life.",
  },
  {
    id: "Editorial",
    label: "03",
    title: "Editorial",
    subtitle: "Reports & Compendiums",
    description:
      " Reports, publications, compendiums and organisational documents that turn information and achievements into clear, readable stories.",
  },
  {
    id: "Press",
    label: "04",
    title: "Press",
    subtitle: "Public Relations & Dispatches",
    description:
      "Press releases, statements, media briefs and other materials developed for public and media engagement.",
  },
  {
    id: "Writing Samples",
    label: "05",
    title: "Writing Samples",
    subtitle: "Legal Research & Policy",
    description:
      "Selected long-form and professional writing, including research-based pieces, policy content, workshop materials and other commissioned work.",
  },
  {
    id: "Documentaries & Visual Storytelling",
    label: "06",
    title: "Documentaries & Visual Storytelling",
    subtitle: "Advocacy Films & Field Chronicles",
    description:
      "Documentaries, short films, community field stories and visual advocacy capturing lived human experiences.",
  },
];

// ─────────────────────────────────────────────
// Animation
// ─────────────────────────────────────────────

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: SMOOTH_EASE,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.92,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.06,
      ease: SMOOTH_EASE,
    },
  }),
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
    // Lock body scroll when lightbox is open
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
      if (e.key === "ArrowRight")
        setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-[#050d1f]/98 backdrop-blur-2xl"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 shrink-0">
        <div>
          <p className="text-[11px] font-mono text-[#C9A227] tracking-widest uppercase">
            {title}:
          </p>
          <p className="text-white/50 text-xs font-mono mt-0.5">
            {idx + 1} / {images.length}
          </p>
        </div>

        {/* Close button — prominent on mobile */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer border border-white/10"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">Close</span>
        </button>
      </div>

      {/* Backdrop tap area — clicking outside image closes */}
      <div
        className="flex-1 flex items-center justify-center relative overflow-hidden cursor-pointer"
        onClick={onClose}
      >
        {/* Image — stop propagation so tapping image itself doesn't close */}
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: SMOOTH_EASE }}
            className="max-h-full max-w-full object-contain rounded-xl shadow-2xl m-6 cursor-default"
          />
        </AnimatePresence>

        {/* Prev / Next — stop propagation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-white/10 hover:bg-[#C9A227] text-white hover:text-[#0A1628] flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-white/10 hover:bg-[#C9A227] text-white hover:text-[#0A1628] flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Tap-to-close hint on mobile */}
      <div className="sm:hidden text-center py-2 text-white/30 text-[10px] font-mono tracking-wide border-t border-white/5 shrink-0">
        Tap outside image to close
      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div className="px-4 sm:px-5 py-3 sm:py-4 border-t border-white/10 flex gap-2 overflow-x-auto shrink-0">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden ring-2 transition-all cursor-pointer ${
                i === idx
                  ? "ring-[#C9A227]"
                  : "ring-transparent opacity-40 hover:opacity-80"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Individual Campaign Card
// ─────────────────────────────────────────────

function CampaignCard({
  campaign,
  cIdx,
  onOpen,
}: {
  campaign: Project;
  cIdx: number;
  onOpen: (images: string[], idx: number, title: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const imgs = campaign.images || [];

  const LIMIT = 8;

  const visible = expanded ? imgs : imgs.slice(0, LIMIT);

  const remaining = Math.max(imgs.length - LIMIT, 0);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="tech-card rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0c1a2e] border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] space-y-6"
    >
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-5 border-b border-slate-100 dark:border-white/10">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 ">
            <span className="text-xs font-mono text-[#C9A227] tracking-wider uppercase font-bold px-2 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/20">
              Campaign 0{cIdx + 1}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] dark:text-white leading-snug">
            {campaign.title}
          </h3>

          {campaign.summary && (
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
              {campaign.summary}
            </p>
          )}
        </div>
      </div>

      {/* Images */}
      {visible.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {visible.map((src, i) => (
            <motion.button
              key={`${campaign.id}-${src}-${i}`}
              custom={i}
              variants={imageVariants}
              whileHover={{
                scale: 1.035,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => onOpen(imgs, i, campaign.title)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-[#0A1628] cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-slate-200/60 dark:border-white/5"
            >
              <img
                src={src}
                alt={`${campaign.title} visual ${i + 1}`}
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0A1628]/0 group-hover:bg-[#0A1628]/40 transition-colors duration-200 flex items-center justify-center">
                <span className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-3 py-1.5 rounded-lg border border-white/20">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Show More */}
      {remaining > 0 && (
        <div className="flex justify-start pt-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#e8c96a] transition-colors cursor-pointer"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show {remaining} more visuals
              </>
            )}
          </button>
        </div>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Campaign Gallery
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
      {items.map((campaign, cIdx) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
          cIdx={cIdx}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Document Preview Card
// ─────────────────────────────────────────────

function DocumentCard({ doc, index }: { doc: Project; index: number }) {
  const isPptx = doc.fileType === "pptx";

  const rawName = doc.fileUrl?.split("/").pop() ?? `${doc.title}.pdf`;

  let fileName = rawName;

  try {
    fileName = decodeURIComponent(rawName);
  } catch {
    fileName = rawName;
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        delay: (index % 2) * 0.08,
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.2,
        },
      }}
      className="tech-card rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0c1a2e] border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 group"
    >
      {/* Context */}
      <div className="mb-6 space-y-3">
     

        <h3 className="text-lg sm:text-xl font-bold text-[#0A1628] dark:text-white leading-snug group-hover:text-[#C9A227] transition-colors">
          {doc.title}
        </h3>

        {doc.summary && (
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {doc.summary}
          </p>
        )}
      </div>

      {/* Document Preview */}
      <div className="rounded-xl overflow-hidden bg-[#1f2c34] shadow-md border border-slate-300/40 dark:border-white/5 w-full max-w-sm mt-auto">
        {/* Preview */}
        <div className="bg-white p-5 flex flex-col items-center justify-center min-h-[110px] text-center gap-2 select-none border-b border-slate-200/60">
          

          <p className="text-xs font-semibold text-slate-700 leading-tight line-clamp-2 px-2">
            {doc.title}
          </p>

          <div className="w-full space-y-1.5 px-3 pt-1">
            <div className="h-1 bg-slate-200 rounded-full w-5/6 mx-auto" />
            <div className="h-1 bg-slate-200 rounded-full w-4/6 mx-auto" />
            <div className="h-1 bg-slate-200 rounded-full w-3/5 mx-auto" />
          </div>
        </div>

        {/* File Info */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2c34]">
          <div className="relative w-9 h-11 bg-rose-600 rounded flex flex-col items-center justify-end pb-1 shrink-0 shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#1f2c34] rounded-bl-sm" />

            <span className="text-[8px] font-black text-white tracking-tighter leading-none">
              {isPptx ? "PPT" : "PDF"}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-white truncate leading-snug">
              {fileName}
            </p>

            <p className="text-[11px] text-white/50 font-mono mt-0.5">
              {doc.fileSize ? `${doc.fileSize} · ` : ""}
              {isPptx ? "Presentation" : "PDF document"}
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
            <span className="py-3 text-center text-[13px] text-white/25 cursor-not-allowed">
              View
            </span>
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

// ─────────────────────────────────────────────
// Document Grid
// ─────────────────────────────────────────────

function DocumentGrid({ items }: { items: Project[] }) {
  const [expanded, setExpanded] = useState(false);

  const LIMIT = 4;

  const visible = expanded ? items : items.slice(0, LIMIT);

  const remaining = Math.max(items.length - LIMIT, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence initial={false}>
          {visible.map((doc, idx) => (
            <DocumentCard key={doc.id} doc={doc} index={idx} />
          ))}
        </AnimatePresence>
      </div>

      {remaining > 0 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
          }}
          className="pt-3"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#e8c96a] transition-colors cursor-pointer"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show fewer documents
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show {remaining} more documents
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Documentary / Video Card & Grid
// ─────────────────────────────────────────────

function DocumentaryCard({
  item,
  index,
  onPlay,
  onOpenImage,
}: {
  item: Project;
  index: number;
  onPlay: (video: Project) => void;
  onOpenImage: (images: string[], idx: number, title: string) => void;
}) {
  const isVideo = item.fileType === "video" || !!item.videoUrl;
  const imgs = item.images || (item.coverImage ? [item.coverImage] : item.image ? [item.image] : []);

  const handleClick = () => {
    if (isVideo) {
      onPlay(item);
    } else {
      onOpenImage(imgs, 0, item.title);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        delay: (index % 3) * 0.08,
      }}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.2,
        },
      }}
      className="tech-card rounded-2xl p-6 bg-white dark:bg-[#0c1a2e] border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="space-y-4">
        {/* Thumbnail Frame with Play / Zoom Overlay */}
        <div
          onClick={handleClick}
          className="group relative aspect-video w-full rounded-xl overflow-hidden bg-[#0A1628] cursor-pointer shadow-md group-hover:shadow-xl transition-shadow border border-slate-200/60 dark:border-white/5"
        >
          {isVideo && item.videoUrl ? (
            <video
              src={`${item.videoUrl}#t=0.5`}
              preload="metadata"
              playsInline
              muted
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src={item.coverImage || item.image || (item.images && item.images[0])}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent transition-opacity group-hover:opacity-60" />

          {/* Action Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform ${
                isVideo
                  ? "bg-[#C9A227] text-[#0A1628]"
                  : "bg-[#0A1628]/85 text-[#C9A227] border border-[#C9A227]/40 backdrop-blur-sm"
              }`}
            >
              {isVideo ? (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#0A1628] ml-0.5" />
              ) : (
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A227]" />
              )}
            </motion.div>
          </div>

        

          {/* Duration or Category Tag */}
          {item.duration && (
            <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-white font-mono text-[10px]">
              {item.duration}
            </div>
          )}
         
        </div>

        {/* Content Details */}
        <div className="space-y-2">
         

          <h3
            onClick={handleClick}
            className="text-lg sm:text-xl font-bold text-[#0A1628] dark:text-white leading-snug group-hover:text-[#C9A227] transition-colors cursor-pointer"
          >
            {item.title}
          </h3>

          {item.summary && (
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
              {item.summary}
            </p>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
       

        <button
          onClick={handleClick}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C9A227]/10 hover:bg-[#C9A227] text-[#C9A227] hover:text-[#0A1628] border border-[#C9A227]/30 text-xs font-bold transition-all cursor-pointer"
        >
          {isVideo ? (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              Watch
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" />
              View Photo
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

function DocumentaryGrid({
  items,
  onPlay,
  onOpenImage,
}: {
  items: Project[];
  onPlay: (video: Project) => void;
  onOpenImage: (images: string[], idx: number, title: string) => void;
}) {
  const [filter, setFilter] = useState<"All" | "Films" | "Photos">("All");
  const [expanded, setExpanded] = useState(false);

  const filteredItems = items.filter((item) => {
    const isVideo = item.fileType === "video" || !!item.videoUrl;
    if (filter === "Films") return isVideo;
    if (filter === "Photos") return !isVideo;
    return true;
  });

  const LIMIT = 6;
  const visible = expanded ? filteredItems : filteredItems.slice(0, LIMIT);
  const remaining = Math.max(filteredItems.length - LIMIT, 0);

  return (
    <div className="space-y-6">
      {/* Sub-filter tabs */}
    

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence initial={false}>
          {visible.map((item, idx) => (
            <DocumentaryCard
              key={item.id}
              item={item}
              index={idx}
              onPlay={onPlay}
              onOpenImage={onOpenImage}
            />
          ))}
        </AnimatePresence>
      </div>

      {remaining > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="pt-3"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-semibold text-[#C9A227] hover:text-[#e8c96a] transition-colors cursor-pointer"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show fewer items
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show {remaining} more items
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

  const categoryParam = searchParams.get("category");

  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title: string;
  } | null>(null);

  const [activeVideo, setActiveVideo] = useState<Project | null>(null);

  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};

    SECTIONS.forEach((s) => {
      init[s.id] = categoryParam ? s.id === categoryParam : true;
    });

    return init;
  });

  const toggle = (id: string) => {
    setOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (!categoryParam) return;

    const timer = setTimeout(() => {
      document.getElementById(`section-${categoryParam}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [categoryParam]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050d1f] text-[#0A1628] dark:text-white font-sans transition-colors duration-300">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-16 pt-24 sm:pt-28 pb-16 bg-white dark:bg-[#0A1628] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/10 dark:bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto ">
          {/* Breadcrumb */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
              ease: SMOOTH_EASE,
            }}
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
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: SMOOTH_EASE,
              }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0A1628] dark:text-white leading-[1.05]"
            >
              Selected
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
                Works.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.16,
                ease: SMOOTH_EASE,
              }}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl"
            >
              A collection of campaigns, stories, publications, press work and
              visual projects spanning advocacy, development, creative writing
              and documentary storytelling.
            </motion.p>
          </div>

          {/* Quick Jump */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.22,
              ease: SMOOTH_EASE,
            }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {SECTIONS.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.25 + i * 0.04,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => {
                  setOpen((prev) => ({
                    ...prev,
                    [s.id]: true,
                  }));

                  setTimeout(() => {
                    document.getElementById(`section-${s.id}`)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all cursor-pointer shadow-sm"
              >
                <span className="font-mono text-[#C9A227] font-bold">
                  {s.label}
                </span>

                <span>{s.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: SMOOTH_EASE,
            }}
            className="mt-10 flex flex-wrap gap-8 pt-8 border-t border-slate-200 dark:border-white/10"
          >
            {[
              {
                number: "55+",
                label: "Campaign Visuals",
              },
              {
                number: "12+",
                label: "Publications",
              },
              {
                number: "5",
                label: "Disciplines",
              },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.4 + idx * 0.06,
                }}
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
          </motion.div> */}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PORTFOLIO SECTIONS
      ═══════════════════════════════════════ */}

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 py-12 space-y-0 divide-y divide-slate-200 dark:divide-white/10">
        {SECTIONS.map((section) => {
          const items = projectsData.filter((p) => p.category === section.id);

          if (items.length === 0) {
            return null;
          }

          const isCampaign = section.id === "Campaigns";
          const isDocumentary = section.id === "Documentaries & Visual Storytelling";

          const isOpen = open[section.id];

          return (
            <motion.div
              key={section.id}
              id={`section-${section.id}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.05,
              }}
              transition={{
                duration: 0.5,
                ease: SMOOTH_EASE,
              }}
              className="scroll-mt-20"
            >
              {/* Section Header */}
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex items-start sm:items-center justify-between gap-4 py-8 text-left group cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                  <span className="shrink-0 text-xs font-mono text-[#C9A227] font-bold tracking-widest pt-1 sm:pt-0">
                    {section.label}
                  </span>

                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors leading-tight">
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-3xl line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3 self-start sm:self-auto mt-1 sm:mt-0">
                  <div className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/15 group-hover:border-[#C9A227] flex items-center justify-center text-slate-600 dark:text-white/60 group-hover:text-[#C9A227] transition-all">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: SMOOTH_EASE,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pt-2">
                      {isCampaign ? (
                        <CampaignGallery
                          items={items}
                          onOpen={(images, idx, title) =>
                            setLightbox({
                              images,
                              index: idx,
                              title,
                            })
                          }
                        />
                      ) : isDocumentary ? (
                        <DocumentaryGrid
                          items={items}
                          onPlay={(v) => setActiveVideo(v)}
                          onOpenImage={(images, idx, title) =>
                            setLightbox({
                              images,
                              index: idx,
                              title,
                            })
                          }
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

      {/* ═══════════════════════════════════════
          FOOTER CTA
      ═══════════════════════════════════════ */}

      <motion.section
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.55,
          ease: SMOOTH_EASE,
        }}
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
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            href="/contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#C9A227] text-[#0A1628] text-sm font-bold hover:bg-[#e8c96a] transition-colors shadow-lg hover:shadow-[0_8px_24px_-4px_rgba(201,162,39,0.5)] shrink-0 cursor-pointer"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════
          LIGHTBOX & VIDEO MODAL
      ═══════════════════════════════════════ */}

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            startIndex={lightbox.index}
            title={lightbox.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

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
