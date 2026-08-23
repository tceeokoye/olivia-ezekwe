'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Printer,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  Mail,
  Linkedin,
  Globe,
  Sparkles,
  Layers,
} from 'lucide-react';
import { experiencesData, educationData, skillCategoriesData, toolsAndPlatforms } from '@/data/resumeData';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-colors duration-300">
      {/* ===================== HEADER & ACTIONS ===================== */}
      <section className="pt-4 sm:pt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <span>CREDENTIALS &amp; TRACK RECORD</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-[#0A1628] dark:text-white font-display">
            Curriculum{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
              Vitae
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
            Comprehensive executive summary of professional experience, legal scholarship, and core competencies.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-6 py-3 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-xs uppercase tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </section>

      {/* ===================== RESUME DOCUMENT WRAPPER ===================== */}
      <div className="tech-card rounded-3xl p-6 sm:p-12 md:p-16 space-y-12 shadow-2xl">
        {/* Top Personal Profile */}
        <div className="border-b border-slate-100 dark:border-white/10 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-[#0A1628] dark:text-white font-display">Olivia Ezekwe</h2>
            <div className="text-sm font-mono text-[#C9A227] mt-1 font-semibold">
              Communications Strategist | Digital Specialist | Legal Scholar (LL.M, B.L, LL.B)
            </div>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 font-mono space-y-1">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C9A227]" /> hello@oliviaezekwe.com
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-sky-500" /> linkedin.com/in/oliviaezekwe
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-emerald-500" /> Nigeria &amp; International Remote
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#C9A227] mb-3 flex items-center gap-2 font-bold">
            <Sparkles className="w-4 h-4" /> Professional Summary
          </h3>
          <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            Seasoned Communications Strategist and Brand Manager with over 8 years of experience leading strategic storytelling, advocacy campaigns, and digital brand development across non-profits, international development organisations, and corporate enterprises. Holds a Master of Laws (LL.M) and Barrister-at-Law (B.L), uniting rigorous public policy insight with creative multimedia production to maximize public impact and donor investment.
          </p>
        </div>

        {/* Professional Experience */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#C9A227] mb-6 flex items-center gap-2 font-bold">
            <Briefcase className="w-4 h-4" /> Professional Experience
          </h3>
          <div className="space-y-8">
            {experiencesData.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700 space-y-3">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-[#C9A227]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-lg font-bold text-[#0A1628] dark:text-white">{exp.role}</h4>
                    <div className="text-xs font-bold text-[#C9A227]">{exp.organization}</div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                  {exp.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Legal Credentials */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#C9A227] mb-6 flex items-center gap-2 font-bold">
            <GraduationCap className="w-4 h-4" /> Education &amp; Legal Qualifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 space-y-2">
                <div className="text-xs font-mono text-[#C9A227] font-bold">{edu.year}</div>
                <h4 className="text-base font-bold text-[#0A1628] dark:text-white">{edu.degree}</h4>
                <div className="text-xs text-slate-500 dark:text-slate-300 font-semibold">{edu.institution}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-200 dark:border-white/10 font-normal">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies & Skills Matrix */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#C9A227] mb-6 flex items-center gap-2 font-bold">
            <Award className="w-4 h-4" /> Core Competencies &amp; Skills Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategoriesData.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 space-y-3">
                <h4 className="text-xs font-bold text-[#0A1628] dark:text-white uppercase tracking-wider">{cat.category}</h4>
                <div className="space-y-3 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-700 dark:text-slate-200 font-medium">
                        <span>{skill.name}</span>
                        <span className="font-mono text-[10px] text-[#C9A227] font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-[#C9A227] rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Tech Platforms */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#C9A227] mb-4 flex items-center gap-2 font-bold">
            <Layers className="w-4 h-4" /> Tools &amp; Platforms Mastered
          </h3>
          <div className="flex flex-wrap gap-2">
            {toolsAndPlatforms.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg tech-pill text-xs text-slate-700 dark:text-slate-200 font-mono font-medium"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
