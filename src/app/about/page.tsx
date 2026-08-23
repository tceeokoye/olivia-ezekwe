'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Sparkles,
  Camera,
  Coffee,
  CheckCircle2,
  Compass,
  Globe,
  Film,
  Search,
  Share2,
  FileText,
  Users,
  PenTool,
  Award,
  Heart,
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TiltCard from '@/components/TiltCard';
import { experiencesData, educationData, toolsAndPlatforms, clientLogos } from '@/data/resumeData';

export default function AboutPage() {
  const expertiseList = [
    { name: 'Strategic Communications', icon: Compass },
    { name: 'Digital Communications', icon: Globe },
    { name: 'Brand Management', icon: Sparkles },
    { name: 'Content Strategy', icon: FileText },
    { name: 'Development Communications', icon: Users },
    { name: 'Photography', icon: Camera },
    { name: 'Videography', icon: Film },
    { name: 'SEO & Website Management', icon: Search },
    { name: 'Social Media Management', icon: Share2 },
    { name: 'Social Writing', icon: PenTool },
    { name: 'Report Writing', icon: FileText },
    { name: 'Stakeholder Engagement', icon: Award },
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/40 group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Olivia Ezekwe"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-[#C9A227] text-[#0A1628] font-bold inline-block mb-2 shadow-glow-gold">
                    LEGAL SCHOLAR &amp; COMMUNICATOR
                  </span>
                  <h3 className="text-2xl font-bold font-display">Olivia Ezekwe</h3>
                  <p className="text-xs text-[#e8c96a] font-mono mt-1">LL.M • B.L • LL.B</p>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono uppercase tracking-widest font-semibold">
              <span>MY STORY &amp; EXPERTISE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white font-display leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
                Olivia
              </span>
            </h1>

            <div className="space-y-4 text-slate-700 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a <strong className="text-[#0A1628] dark:text-white">Communications Strategist and Brand Manager</strong> with extensive experience helping non-profits, development organisations, corporate brands, and faith-based institutions communicate their work through strategic storytelling, digital communications, and multimedia content.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                My work spans communication strategy, brand management, photography, videography, SEO, website management, social media, donor communications, and knowledge products.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                With advanced legal training (<strong className="text-[#0A1628] dark:text-white">LL.M, B.L, LL.B</strong>), I synthesize complex public policy, health sector reform, and governance metrics into lucid, emotionally resonant storytelling that captivates audiences and secures donor support.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="px-6 py-3.5 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-xs uppercase tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] transition-all hover:scale-105"
              >
                View Selected Work
              </Link>
              <Link
                href="/cv"
                className="px-6 py-3.5 rounded-full tech-pill text-[#0A1628] dark:text-white font-bold text-xs uppercase tracking-wider hover:border-[#C9A227]/50 transition-all"
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
          badge="DISCIPLINES"
          title="AREAS OF EXPERTISE"
          description="A multi-disciplinary skill set honed across global non-profits, civic governance networks, and digital brand ecosystems."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {expertiseList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                <TiltCard maxTilt={10} className="h-full">
                  <div className="tech-card rounded-2xl p-6 h-full flex flex-col items-center text-center justify-center group">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#0A1628] transition-colors mb-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors">
                      {item.name}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===================== PROFESSIONAL BACKGROUND ===================== */}
      <section>
        <SectionHeader
          badge="CAREER TIMELINE"
          title="PROFESSIONAL BACKGROUND"
          description="A track record of leading high-impact communications, digital campaigns, and multi-stakeholder initiatives."
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
                  <h3 className="text-xl font-bold text-[#0A1628] dark:text-white font-display">{exp.role}</h3>
                  <div className="text-sm text-[#C9A227] font-semibold mt-0.5">{exp.organization}</div>
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
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== EDUCATION & LEGAL BACKGROUND ===================== */}
      <section>
        <SectionHeader
          badge="ACADEMIC RIGOR"
          title="LEGAL EDUCATION &amp; CREDENTIALS"
          description="Combining advanced legal scholarship with strategic public advocacy and communications ethics."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="tech-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227]">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono text-[#C9A227] font-bold">{edu.year}</div>
                    <h3 className="text-lg font-bold text-[#0A1628] dark:text-white font-display">{edu.degree}</h3>
                    <div className="text-xs text-slate-500 dark:text-slate-300 font-semibold">{edu.institution}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-white/10">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== TOOLS & PLATFORMS ===================== */}
      <section>
        <SectionHeader
          badge="TECH STACK"
          title="TOOLS &amp; PLATFORMS"
          description="Leveraging industry-standard analytics, content management, design, and automation platforms."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {toolsAndPlatforms.map((tool, idx) => (
            <div
              key={idx}
              className="tech-card rounded-xl p-4 flex flex-col items-center text-center justify-center hover:border-[#C9A227]/60"
            >
              <span className="text-xs font-bold text-[#0A1628] dark:text-white mb-1">{tool.name}</span>
              <span className="text-[10px] text-[#C9A227] font-mono font-semibold">{tool.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== ORGANISATIONS & BRANDS ===================== */}
      <section>
        <SectionHeader
          badge="CLIENT PORTFOLIO"
          title="ORGANISATIONS &amp; BRANDS I'VE WORKED WITH"
          description="Partnering with leading non-profits, international funds, civic coalitions, and private sector enterprises."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="tech-card rounded-2xl p-6 flex flex-col justify-between hover:border-[#C9A227]/60"
            >
              <div className="text-base font-bold text-[#0A1628] dark:text-white">{client.name}</div>
              <div className="text-xs text-[#C9A227] font-mono font-semibold mt-3">{client.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== OUTSIDE THE BRIEF ===================== */}
      <section className="tech-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>OUTSIDE THE BRIEF</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white font-display mb-4">
            When I’m not architecting communications strategies or drafting publications...
          </h2>

          <p className="text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            You&apos;ll probably find me writing creative essays, taking documentary photographs during spontaneous road trips, exploring new specialty coffee shops, or mentoring young women entering the fields of law and digital communications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-white/10">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Camera className="w-5 h-5 text-[#C9A227] shrink-0" />
              <span className="text-xs font-semibold">Travel &amp; Street Photography</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <PenTool className="w-5 h-5 text-sky-500 shrink-0" />
              <span className="text-xs font-semibold">Creative Essay Writing</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Coffee className="w-5 h-5 text-[#C9A227] shrink-0" />
              <span className="text-xs font-semibold">Coffee &amp; Mentorship</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
