"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Compass,
  Globe,
  Camera,
  FileText,
  Search,
  Share2,
  HeartHandshake,
  Layers,
  PenTool,
  CheckCircle2,
  Mail,
  Phone,
  Send,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  Heart,
  BookOpen,
  Leaf,
  MessageCircle,
  Newspaper,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import TiltCard from "@/components/TiltCard";
import { testimonialsData } from "@/data/portfolioData";
import { experiencesData, clientLogos, toolsAndPlatforms } from "@/data/resumeData";
import Image from "next/image";
import heroImage from "@/assets/hero-img.jpeg";

const SERVICES_DROPDOWN = [
  { value: "Strategic Communications" },
  { value: "Content Strategy & Development" },
  { value: "Media & Documentary" },
  { value: "Storytelling & Editorial" },
  { value: "Digital Communications" },
  { value: "Social Media Management" },
  { value: "Brand Management" },
  { value: "Reports & Publications" },
  { value: "SEO & Website Management" },
  { value: "Campaigns & Advocacy" },
  { value: "Creative Non-Fictions" },
  { value: "Editorial Publications" },
  { value: "Press & Media Dispatches" },
  { value: "Writing Samples" },
  { value: "Others" },
];

function FloatInput({
  label,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative group">
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-sans z-10 ${
          active
            ? "top-2 text-[10px] font-semibold text-[#C9A227] tracking-widest"
            : "top-1/2 -translate-y-1/2 text-sm text-slate-400 dark:text-slate-500"
        }`}
      >
        {label}
        {required && <span className="text-[#C9A227] ml-0.5">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        placeholder={focused ? placeholder : ""}
        className={`w-full pt-7 pb-3 px-4 rounded-2xl text-sm text-[#0A1628] dark:text-white font-normal bg-slate-50 dark:bg-[#0d1f3c] border-2 outline-none transition-all duration-200 ${
          focused
            ? "border-[#C9A227] shadow-[0_0_0_4px_rgba(201,162,39,0.08)]"
            : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
        } placeholder-slate-400 dark:placeholder-slate-500`}
      />
    </div>
  );
}

function FloatTextarea({
  label,
  required = false,
  value,
  onChange,
  placeholder,
  rows = 5,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative group">
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-sans z-10 ${
          active
            ? "top-2 text-[10px] font-semibold text-[#C9A227] tracking-widest"
            : "top-4 text-sm text-slate-400 dark:text-slate-500"
        }`}
      >
        {label}
        {required && <span className="text-[#C9A227] ml-0.5">*</span>}
      </label>
      <textarea
        required={required}
        rows={rows}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        placeholder={focused ? placeholder : ""}
        className={`w-full pt-8 pb-3 px-4 rounded-2xl text-sm text-[#0A1628] dark:text-white font-normal bg-slate-50 dark:bg-[#0d1f3c] border-2 outline-none transition-all duration-200 resize-none ${
          focused
            ? "border-[#C9A227] shadow-[0_0_0_4px_rgba(201,162,39,0.08)]"
            : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
        } placeholder-slate-400 dark:placeholder-slate-500`}
      />
    </div>
  );
}

function ServiceDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected =
    SERVICES_DROPDOWN.find((s) => s.value === value) ?? SERVICES_DROPDOWN[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-3 px-4 pt-7 pb-3 rounded-2xl text-sm text-left font-normal bg-slate-50 dark:bg-[#0d1f3c] border-2 outline-none transition-all duration-200 cursor-pointer ${
          open
            ? "border-[#C9A227] shadow-[0_0_0_4px_rgba(201,162,39,0.08)]"
            : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
        }`}
      >
        {/* <span className="absolute left-4 top-2 text-[10px] font-semibold text-[#C9A227] tracking-widest pointer-events-none">
          Service of Interest
        </span> */}
        <span className="flex items-center gap-2 text-[#0A1628] dark:text-white">
          <span className="truncate">{selected.value}</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-[#C9A227]" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-50 left-0 right-0 mt-2 rounded-2xl bg-white dark:bg-[#0d1f3c] border border-slate-200 dark:border-white/10 shadow-[0_20px_60px_-10px_rgba(10,22,40,0.25)] dark:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="px-2 py-2 max-h-64 overflow-y-auto overscroll-contain">
              {SERVICES_DROPDOWN.map((svc, i) => {
                const isSelected = svc.value === value;
                return (
                  <motion.button
                    key={svc.value}
                    type="button"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.15 }}
                    onClick={() => {
                      onChange(svc.value);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 text-left ${
                      isSelected
                        ? "bg-[#C9A227]/10 text-[#C9A227] font-semibold"
                        : "text-[#0A1628] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span>{svc.value}</span>
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[#C9A227] flex-shrink-0" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    serviceInterest: "Strategic Communications",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  // Original What I Do (10 Capabilities)
  const whatIDoItems = [
    {
      title: "Strategic Communications",
      icon: Compass,
      desc: "Developing communication plans, messaging and approaches that help organisations and brand communicate with clarity.",
      tag: "Strategy",
      portfolioFilter: "Editorial",
    },
    {
      title: "Content Strategy & Development",
      icon: Layers,
      desc: "Planning and creating content that fits the audience, platform and communication goal.",
      tag: "Content",
      portfolioFilter: "Writing Samples",
    },
    {
      title: "Photography, Videography & Documentary",
      icon: Camera,
      desc: "Capturing people, places, events and impact through photography, video and documentary storytelling.",
      tag: "Media",
      portfolioFilter: "Campaigns",
    },
    {
      title: "Storytelling & Editorial",
      icon: PenTool,
      desc: "Turning complex ideas, experiences and information into clear, engaging stories, articles and editorial content.",
      tag: "Editorial",
      portfolioFilter: "Editorial",
    },
    {
      title: "Digital Communications",
      icon: Globe,
      desc: "Building consistent communication across websites, social platforms, email and other digital channels.",
      tag: "Digital",
      portfolioFilter: "Press",
    },
    {
      title: "Social Media Management",
      icon: Share2,
      desc: "Managing social platforms from strategy and content creation to publishing, community engagement and performance tracking.",
      tag: "Social",
      portfolioFilter: "Campaigns",
    },
    {
      title: "Brand Management",
      icon: Sparkles,
      desc: "Shaping brand voice, messaging and digital presence to create a consistent and recognisable identity.",
      tag: "Identity",
      portfolioFilter: "Creative Non-Fictions",
    },
    {
      title: "Reports & Publications",
      icon: FileText,
      desc: "Creating reports, newsletters, publications and organisational documents that communicate information clearly and professionally.",
      tag: "Knowledge",
      portfolioFilter: "Editorial",
    },
    {
      title: "SEO & Website Management",
      icon: Search,
      desc: "Improving website content, structure and visibility while keeping digital platforms relevant, accessible and up to date.",
      tag: "Tech",
      portfolioFilter: "Writing Samples",
    },
    {
      title: "Campaigns & Advocacy",
      icon: HeartHandshake,
      desc: "Developing communication and content for campaigns that raise awareness, encourage action and amplify important issues.",
      tag: "Advocacy",
      portfolioFilter: "Press",
    },
  ];

  return (
    <div className="space-y-0 pb-0 transition-colors duration-300">
      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative bg-[#0A1628] min-h-[85vh] flex items-center justify-center pt-10 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src={heroImage}
            alt="Strategic Communications Background"
            fill
            className="w-full h-full object-cover object-top sm:object-center opacity-55 sm:opacity-65 dark:opacity-40 scale-100 transition-opacity duration-300"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/75 via-[#0A1628]/60 to-[#0A1628]/90 dark:from-[#0A1628]/85 dark:via-[#0A1628]/70 dark:to-[#0A1628]/95 transition-colors duration-300" />
        </div>

        {/* Ambient Glows */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,162,39,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full blur-[100px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,162,39,0.08) 0%, transparent 90%)",
          }}
        />

        <div className="max-w-5xl mx-auto w-full text-center relative z-10 space-y-8">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            <span className="text-white">Olivia </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
              Ezekwe
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-2xl font-bold text-white/95 tracking-wide max-w-4xl mx-auto drop-shadow-sm"
          >
            Communications Strategist, Writer &amp; Visual Storyteller.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-sm"
          >
            I help non-profits, development organisations, and purpose-driven
            brands communicate their impact through strategic communications,
            storytelling, digital engagement, and multimedia content.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-sm tracking-wider shadow-[0_0_30px_-5px_rgba(201,162,39,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/api/download-cv"
              download="Olivia_Ezekwe_CV.txt"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-[#C9A227]/60 text-white font-bold text-sm tracking-wider hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#C9A227]" />
              <span>DOWNLOAD CV</span>
            </a>
          </motion.div>

          {/* Metrics Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-10 sm:pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto items-stretch"
          >
            {[
              {
                val: "4+ Years",
                label: "Communications Experience",
                color: "text-[#C9A227]",
              },
              {
                val: "5+ Brands",
                label: "Managed & Supported",
                color: "text-[#C9A227]",
              },
              {
                val: "5+ Sectors",
                label: ["Nonprofit", "UK Finance", "Hospitality", "Mental Health", "Faith"],
                color: "text-[#C9A227]",
              },
              {
                val: "18+ Platforms",
                label: "Managed Across Digital Channels",
                color: "text-[#C9A227]",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center h-full transition-all hover:border-[#C9A227]/30 overflow-hidden"
              >
                <div
                  className={`text-base sm:text-xl lg:text-2xl font-extrabold leading-tight tracking-tight ${m.color}`}
                >
                  {m.val}
                </div>
                {typeof m.label === "string" && (
                  <div className="text-[10px] sm:text-[11px] text-slate-300 font-mono mt-1 font-semibold leading-snug">
                    {m.label}
                  </div>
                )}
                {Array.isArray(m.label) && (
                  <div className="w-full flex justify-center mt-1.5">
                    <ul className="text-[9px] sm:text-[11px] text-slate-300 font-mono space-y-0.5 text-left inline-block font-medium">
                      {m.label.map((item, idx) => (
                        <li key={idx} className="leading-tight">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          ABOUT SECTION
      ============================================================ */}
      <section id="about" className="bg-white dark:bg-[#050d1f] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Main Narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono tracking-widest font-semibold">
              ABOUT OLIVIA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white leading-tight">
              Communications, shaped by curiosity, clarity and a love for good
              stories.
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I am a communications professional working across writing,
                storytelling, strategic communications, digital content and
                visual media. I turn ideas, information and real experiences
                into stories and content that people can understand and connect
                with.
              </p>
              <p className="text-slate-500 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                My work spans development, advocacy, purpose-driven
                organisations and brands, where I have worked on everything from
                campaign communications and programme storytelling to editorial
                content, photography and video. With a background in law, I also
                bring strong research and analytical skills to the way I
                approach communication.
              </p>
            </div>
          </div>

          {/* Professional Background Experience */}
          <div className="space-y-6 pt-4">
            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
              <span className="text-xs font-mono text-[#C9A227] tracking-widest font-semibold">
                EXPERIENCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white mt-1">
                Professional Background
              </h3>
            </div>

            <div className="space-y-6">
              {experiencesData.map((exp, idx) => (
                <div
                  key={idx}
                  className="tech-card rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-white/10">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#0A1628] dark:text-white">
                        {exp.role}
                      </h4>
                      <div className="text-sm text-[#C9A227] font-semibold mt-0.5">
                        {exp.organization}
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-300 self-start sm:self-auto border border-slate-200 dark:border-slate-700">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organisations & Brands */}
          <div className="space-y-6 pt-4">
            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
              <span className="text-xs font-mono text-[#C9A227] tracking-widest font-semibold">
                CLIENT PORTFOLIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white mt-1">
                Organisations &amp; Brands I Have Worked With
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Organisations and brands I’ve supported through communications, content, storytelling and digital media.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="tech-card rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div className="text-sm sm:text-base font-bold text-[#0A1628] dark:text-white">
                    {client.name}
                  </div>
                  <div className="text-xs text-[#C9A227] font-mono font-semibold mt-3">
                    {client.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outside the brief */}
          <div className="tech-card rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono tracking-widest mb-4 font-semibold">
              <Heart className="w-3.5 h-3.5" />
              <span>OUTSIDE THE BRIEF</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] dark:text-white mb-3">
              When the work is done, life gets a little quieter..
            </h3>

            <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              Away from deadlines and screens, you’ll probably find me with a good
              book, watching a film, taking photographs, enjoying nature, or
              having one of those long, device-free conversations where nobody is
              checking the time. I am drawn to art, poetry, and the little details
              that make ordinary life interesting.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <BookOpen className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-xs font-semibold">Reading</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <Leaf className="w-5 h-5 text-sky-500 shrink-0" />
                <span className="text-xs font-semibold">Photography &amp; Nature</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <MessageCircle className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-xs font-semibold">Art, Poetry &amp; Conversation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT I DO — 10 Capability cards
      ============================================================ */}
      <section className="bg-[#f8fafc] dark:bg-[#0A1628]/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="CAPABILITIES"
            title="What I Do"
            description="I turn ideas, information and stories into clear communication and compelling content that connect with audience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {whatIDoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                >
                  <Link
                    href={`/portfolio?category=${encodeURIComponent(
                      item.portfolioFilter
                    )}`}
                    className="block h-full group"
                  >
                    <TiltCard className="h-full">
                      <div className="tech-card rounded-2xl p-6 h-full flex flex-col justify-between group-hover:border-[#C9A227] transition-all">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white transition-colors">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                              {item.tag}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-[#0A1628] dark:text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#C9A227]">
                          <span>See Portfolio Work</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SELECTED WORKS — 5 categories
      ============================================================ */}
      <section className="bg-white dark:bg-[#050d1f] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="PORTFOLIO"
            title="Selected Works"
            description="A curated selection of my writing, publications, press work and research across five categories."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                title: "Campaigns",
                icon: HeartHandshake,
                desc: "High-impact multimedia advocacy and civic engagement campaigns that mobilize communities and drive action.",
                tag: "Advocacy & Action",
                count: "3 Initiatives",
                filter: "Campaigns",
              },
              {
                title: "Creative Non-Fictions",
                icon: BookOpen,
                desc: "Narrative storytelling, personal memoirs and essays blending vivid observations, lived emotion and literature.",
                tag: "Narrative & Essays",
                count: "4 Works",
                filter: "Creative Non-Fictions",
              },
              {
                title: "Editorial",
                icon: FileText,
                desc: "Organisational impact documents, annual progress reports and compendiums synthesizing complex achievements.",
                tag: "Publications",
                count: "3 Publications",
                filter: "Editorial",
              },
              {
                title: "Press",
                icon: Newspaper,
                desc: "Official press statements, diplomatic dispatches, media briefing kits and high-pickup news releases.",
                tag: "Media & PR",
                count: "6 Releases",
                filter: "Press",
              },
              {
                title: "Writing Samples",
                icon: PenTool,
                desc: "Rigorous legal research, comparative policy analysis, constitutional human rights treatises and workshop manuals.",
                tag: "Legal & Research",
                count: "4 Papers",
                filter: "Writing Samples",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Link
                    href={`/portfolio?category=${encodeURIComponent(item.filter)}`}
                    className="block h-full group"
                  >
                    <TiltCard className="h-full">
                      <div className="tech-card rounded-2xl p-6 h-full flex flex-col justify-between group-hover:border-[#C9A227] transition-all">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white transition-colors">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-mono text-[#C9A227] px-2 py-0.5 rounded bg-[#C9A227]/10 border border-[#C9A227]/20 font-semibold">
                              {item.count}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-[#0A1628] dark:text-white mb-2 group-hover:text-[#C9A227] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#C9A227]">
                          <span>View Works</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
      ============================================================ */}
      <section className="bg-white dark:bg-[#050d1f] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono tracking-widest text-[#C9A227] px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 inline-block mb-4 font-semibold">
            THEY SAID IT, NOT ME.
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1628] dark:text-white mb-12">
            What people I’ve worked with have to say…
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((t, i) => (
              <div
                key={i}
                className="tech-card rounded-2xl p-6 text-left space-y-4"
              >
                <div className="text-4xl text-[#C9A227] leading-none">
                  &ldquo;
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
                  {t.quote}
                </p>
                <div className="pt-3 border-t border-slate-100 dark:border-white/10">
                  <div className="font-bold text-[#0A1628] dark:text-white text-sm">
                    ~{t.author}
                  </div>
                  <div className="text-xs text-[#C9A227] font-mono">
                    {t.role}
                    {t.organization ? `, ${t.organization}` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT SECTION (Direct inquiry form on landing page)
      ============================================================ */}
      <section id="contact" className="bg-[#f8fafc] dark:bg-[#0A1628]/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono tracking-widest font-semibold">
              
              <span>THE NEXT CHAPTER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0A1628] dark:text-white">
              LET’S DO SOMETHING ,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
                INTERESTING!
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Have a story to tell, an idea to communicate or a project in mind? Let’s get started.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Direct Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="tech-card rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0A1628] dark:text-white mb-2">
                    Direct Contact Channels
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
                    Reach out directly via email or start a WhatsApp conversation.
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="mailto:ezekweolivia@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 hover:border-[#C9A227]/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 text-[#C9A227] flex items-center justify-center group-hover:bg-[#C9A227] group-hover:text-[#0A1628] transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        Email Address
                      </div>
                      <div className="text-sm font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors">
                        ezekweolivia@gmail.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/2348067103176"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        WhatsApp &amp; Phone
                      </div>
                      <div className="text-sm font-bold text-[#0A1628] dark:text-white group-hover:text-emerald-500 transition-colors">
                        +2348067103176
                      </div>
                    </div>
                  </a>
                </div>
                <div className="pt-6 border-t border-slate-100 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 space-y-2 font-mono">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Response Time: Within 24 business hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-500" />
                    <span>Global Remote &amp; On-Site Consultations Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Project Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="tech-card rounded-3xl p-6 sm:p-10 shadow-2xl">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="text-center py-14 space-y-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 14,
                        }}
                        className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 flex items-center justify-center mx-auto"
                      >
                        <CheckCircle2 className="w-10 h-10" />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white font-display">
                          Message Sent!
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-base max-w-md mx-auto leading-relaxed font-normal">
                          Thank you for reaching out. Olivia will review your
                          message and get back to you within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            organisation: "",
                            serviceInterest: "Strategic Communications",
                            message: "",
                          });
                        }}
                        className="px-8 py-3 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-xs tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] transition-all hover:scale-105"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#0A1628] dark:text-white font-display mb-1">
                          Send a Project Inquiry
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                          Fill in the details below — I&apos;ll be in touch shortly.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FloatInput
                          label="Your Name"
                          required
                          value={formData.name}
                          onChange={(v) => setFormData({ ...formData, name: v })}
                          placeholder="e.g. Dr. Ngozi Adebayo"
                        />
                        <FloatInput
                          label="Email Address"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(v) => setFormData({ ...formData, email: v })}
                          placeholder="name@organisation.org"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FloatInput
                          label="Organisation / Brand"
                          value={formData.organisation}
                          onChange={(v) =>
                            setFormData({ ...formData, organisation: v })
                          }
                          placeholder="e.g. Civic Action Network"
                        />
                        <ServiceDropdown
                          value={formData.serviceInterest}
                          onChange={(v) =>
                            setFormData({ ...formData, serviceInterest: v })
                          }
                        />
                      </div>

                      <FloatTextarea
                        label="Project Overview & Goals"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(v) => setFormData({ ...formData, message: v })}
                        placeholder="Tell me about your initiative, key challenges, target audiences, and expected timelines..."
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full py-4 rounded-2xl bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-sm tracking-wider shadow-[0_4px_24px_-4px_rgba(201,162,39,0.45)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 overflow-hidden group cursor-pointer"
                      >
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out" />
                        {isSubmitting ? (
                          <span className="flex items-center gap-2 relative z-10">
                            <svg
                              className="w-4 h-4 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Sending Inquiry...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2 relative z-10">
                            <span>Send Inquiry</span>
                            <Send className="w-4 h-4" />
                          </span>
                        )}
                      </button>

                      <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-normal">
                        No spam, ever. Your information is kept private and secure.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
