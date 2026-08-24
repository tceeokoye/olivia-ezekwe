'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Quote,
  PenTool,
  Camera,
  Film,
  FolderKanban,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TiltCard from '@/components/TiltCard';
import ProjectModal from '@/components/ProjectModal';
import { projectsData, testimonialsData } from '@/data/portfolioData';
import { Project } from '@/types';

const CATEGORIES = [
  'All',
  'Communications',
  'Digital',
  'Branding',
  'Photography',
  'Videography',
  'Reports',
] as const;

type CategoryType = typeof CATEGORIES[number];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full tech-pill text-xs font-mono text-[#C9A227] uppercase tracking-widest font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>PORTFOLIO DIRECTORY</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white font-display">
          Selected{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
            Work
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          Writing, visual storytelling, strategic communications and creative work across organisations, brands and campaigns.
        </p>
      </section>

      {/* ===================== PORTFOLIO DISCIPLINES QUICK NAV ===================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          {
            href: '/writing',
            icon: PenTool,
            num: '01',
            title: 'Writing & Storytelling',
            desc: 'Articles, Press releases, and editorial work.',
            hoverBorder: 'hover:border-sky-400/50',
            iconColor: 'bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white',
          },
          {
            href: '/services',
            icon: Sparkles,
            num: '02',
            title: 'Strategic & Digital Communications',
            desc: 'Communication strategy, campaigns, digital content.',
            hoverBorder: 'hover:border-[#C9A227]/50',
            iconColor: 'bg-[#C9A227]/10 text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#0A1628]',
          },
          {
            href: '/photography',
            icon: Camera,
            num: '03',
            title: 'Visual Storytelling',
            desc: 'Photography, videography, documentary films, interviews and visual content that capture people, places and stories.',
            hoverBorder: 'hover:border-indigo-400/50',
            iconColor: 'bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white',
          },
          {
            href: '/portfolio',
            icon: FolderKanban,
            num: '04',
            title: 'Brand & Digital Presence',
            desc: 'Brand communication, websites and digital experiences that create a consistent public presence.',
            hoverBorder: 'hover:border-emerald-400/50',
            iconColor: 'bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white',
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.num}
              href={item.href}
              className={`p-5 sm:p-6 rounded-2xl tech-card flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${item.hoverBorder}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${item.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#C9A227]">
                    {item.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-[#C9A227]">
                <span>Explore Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          );
        })}
      </section>

      {/* ===================== CATEGORY FILTER TABS ===================== */}
      <section className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-[#C9A227] text-[#0A1628] shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] scale-105 font-black'
                  : 'tech-pill text-[#0A1628] dark:text-slate-200 hover:border-[#C9A227]/40'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </section>

      {/* ===================== PROJECT GRID ===================== */}
      <section>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group"
              >
                <TiltCard maxTilt={8} className="h-full">
                  <div className="tech-card rounded-2xl overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      {/* Image Frame */}
                      <div className="relative h-64 w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-[#C9A227] text-[#0A1628]">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3">
                        <div className="text-xs text-[#C9A227] font-mono font-semibold">{project.client}</div>
                        <h3 className="text-xl font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors font-display">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    {/* Footer Metrics / Action */}
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                        <div className="text-xs text-[#C9A227] font-bold">
                          {project.metrics?.[0]?.value}{' '}
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                            {project.metrics?.[0]?.label}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#C9A227] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Details <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ===================== WHAT CLIENTS SAY ===================== */}
      <section>
        <SectionHeader
          badge="ENDORSEMENTS"
          title="WHAT CLIENTS SAY"
          description="Reflections from executive directors, CEOs, and collaborators on our communication interventions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TiltCard className="h-full">
                <div className="tech-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between relative">
                  <Quote className="w-8 h-8 text-[#C9A227]/40 mb-4" />
                  <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10">
                    <div className="font-bold text-[#0A1628] dark:text-white text-sm">{t.author}</div>
                    <div className="text-xs text-[#C9A227] font-semibold">{t.role}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{t.organization}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
