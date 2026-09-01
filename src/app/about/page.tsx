"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TiltCard from "@/components/TiltCard";
import {
  experiencesData,
  toolsAndPlatforms,
  clientLogos,
} from "@/data/resumeData";

export default function AboutPage() {
  const expertiseList = [
    { name: "Strategic Communications", tag: "Strategy" },
    { name: "Writing & Storytelling", tag: "Editorial" },
    { name: "Content Direction & Management", tag: "Content" },
    { name: "Advocacy & Public Engagement", tag: "Advocacy" },
    { name: "Visual Storytelling", tag: "Media" },
    { name: "Brand & Digital Communications", tag: "Digital" },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden transition-colors duration-300">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-4 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <TiltCard maxTilt={8}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/40 group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Olivia Ezekwe"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 ">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Olivia Ezekwe
                  </h3>
                  <p className="text-xs text-[#e8c96a] font-mono mt-1">
                    Communications Strategist | Writer | Visual Storyteller
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono tracking-widest font-semibold">
              <span>MY STORY &amp; EXPERTISE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white font-display leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
                Olivia
              </span>
            </h1>

            <div className="space-y-4 text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a{" "}
                <strong className="text-[#0A1628] dark:text-white">
                  communications professional
                </strong>{" "}
                working across writing, storytelling, strategic communications,
                digital content and visual media. I turn ideas, information and
                real experiences into stories and content that people can
                understand and connect with.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                My work spans development, advocacy, purpose-driven
                organisations and brands, where I have worked on everything from
                campaign communications and programme storytelling to editorial
                content, photography and video. With a background in law, I also
                bring strong research and analytical skills to the way I
                approach communication.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-lg bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-xs tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] transition-all hover:scale-105"
              >
                View Selected Work
              </Link>
              <Link
                href="/cv"
                className="px-6 py-3.5 rounded-lg tech-pill text-[#0A1628] dark:text-white font-bold text-xs tracking-wider hover:border-[#C9A227]/50 transition-all"
              >
                View Full CV / Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== AREAS OF EXPERTISE ===================== */}
      <section>
        <SectionHeader
          badge="Skills"
          title="AREAS OF EXPERTISE"
          description="The skills I bring across writing, communications, storytelling, visual media and digital work."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {expertiseList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <TiltCard maxTilt={10} className="h-full">
                <div className="tech-card rounded-2xl p-6 h-full flex flex-col justify-between group">
                  <span className="text-[11px] font-mono text-[#C9A227] font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-base font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors mt-3">
                    {item.name}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== PROFESSIONAL BACKGROUND ===================== */}
      <section>
        <SectionHeader
          badge="Experience"
          title="PROFESSIONAL BACKGROUND"
          description="Experience across communications, digital content, campaigns, brand management and multimedia storytelling, working with nonprofits, purpose-driven organisations and brands"
        />

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiencesData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="tech-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-[#0A1628] dark:text-white font-display">
                    {exp.role}
                  </h3>
                  <div className="text-sm text-[#C9A227] font-semibold mt-0.5">
                    {exp.organization}
                  </div>
                </div>
                <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-600 dark:text-slate-300 self-start sm:self-auto border border-slate-200 dark:border-slate-700">
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
                    <span className="text-[#C9A227] shrink-0 font-bold leading-5">–</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== ORGANISATIONS & BRANDS ===================== */}
      <section>
        <SectionHeader
          badge="CLIENT PORTFOLIO"
          title="ORGANISATIONS &amp; BRANDS I HAVE WORKED WITH"
          description="Organisations and brands I’ve supported through communications, content, storytelling and digital media."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="tech-card rounded-2xl p-6 flex flex-col gap-4 hover:border-[#C9A227]/60"
            >
              {/* Logo */}
              <div className="h-14 flex items-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-[160px] object-contain"
                />
              </div>

              {/* Name & tag */}
              <div>
                <div className="text-base font-bold text-[#0A1628] dark:text-white leading-snug">
                  {client.name}
                </div>
                <div className="text-xs text-[#C9A227] font-mono font-semibold mt-1.5">
                  {client.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== TOOLS & PLATFORMS ===================== */}
      <section>
        <SectionHeader
          badge="TECH STACK"
          title="TOOLS &amp; PLATFORMS"
          description="Tools I use across communications, content production, digital publishing and collaboration."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {toolsAndPlatforms.map((tool, idx) => (
            <div
              key={idx}
              className="tech-card rounded-xl p-4 flex flex-col items-center text-center justify-center hover:border-[#C9A227]/60"
            >
              <span className="text-xs font-bold text-[#0A1628] dark:text-white mb-1">
                {tool.name}
              </span>
              <span className="text-[10px] text-[#C9A227] font-mono font-semibold">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== OUTSIDE THE BRIEF ===================== */}
      <section className="tech-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono tracking-widest mb-4 font-semibold">
            <span>OUTSIDE THE BRIEF</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white font-display mb-4">
            WHEN THE WORK IS DONE, LIFE GETS A LITTLE QUIETER..
          </h2>

          <p className="text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Away from deadlines and screens, you’ll probably find me with a good
            book, watching a film, taking photographs, enjoying nature, or
            having one of those long, device-free conversations where nobody is
            checking the time. I am also drawn to art, poetry, and the little details
            that make ordinary life interesting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-white/10">
            <div className="text-slate-700 dark:text-slate-200">
              <span className="text-xs font-semibold">
                Reading
              </span>
            </div>
            <div className="text-slate-700 dark:text-slate-200">
              <span className="text-xs font-semibold">
                Photography &amp; Nature
              </span>
            </div>
            <div className="text-slate-700 dark:text-slate-200">
              <span className="text-xs font-semibold">
                Art, Poetry &amp; Conversation
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
