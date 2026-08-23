'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Download, Sparkles, Award, Compass, Globe, Camera, Film,
  FileText, Users, Search, Share2, CheckCircle2, ChevronRight,
  HeartHandshake, Layers, Shield, Zap, PenTool,
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import TiltCard from '@/components/TiltCard';
import ProjectModal from '@/components/ProjectModal';
import { projectsData } from '@/data/portfolioData';
import { Project } from '@/types';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const whatIDoItems = [
    { title: 'Strategic Communications', icon: Compass, desc: 'High-level communication frameworks for non-profits, international funds, and civic organisations.', tag: 'Strategy' },
    { title: 'Digital Communications', icon: Globe, desc: 'Scalable digital campaigns, multi-channel engagement, and high-converting online growth.', tag: 'Growth' },
    { title: 'Brand Management', icon: Sparkles, desc: 'Memorable brand identities, positioning, visual style guides, and authoritative brand voice.', tag: 'Identity' },
    { title: 'Content Strategy', icon: Layers, desc: 'Editorial calendars, SEO content funnels, email workflows, and thought leadership copy.', tag: 'Editorial' },
    { title: 'Development Storytelling', icon: HeartHandshake, desc: 'Human-centered grassroots impact stories with ethical, dignity-first visual narratives.', tag: 'Advocacy' },
    { title: 'Documentary Photography', icon: Camera, desc: 'On-the-ground visual photojournalism for field interventions, summits, and community voices.', tag: 'Media' },
    { title: 'Videography & Media', icon: Film, desc: 'Directing and editing documentaries, campaign short films, and high-engagement reels.', tag: 'Production' },
    { title: 'SEO & Website Management', icon: Search, desc: 'Optimizing web architectures, search rankings, user journeys, and donor conversion.', tag: 'Tech' },
    { title: 'Social Media Management', icon: Share2, desc: 'Building vibrant online communities, digital movements, and viral live-broadcast coverage.', tag: 'Social' },
    { title: 'Reports & Publications', icon: FileText, desc: 'Authoring and designing research scorecards, donor briefs, policy papers, and annual reports.', tag: 'Knowledge' },
  ];

  return (
    <div className="space-y-0 pb-0">

      {/* ============================================================
          HERO — dark navy full-bleed section
      ============================================================ */}
      <section className="relative bg-[#0A1628] min-h-[90vh] flex items-center justify-center pt-10 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle gold glow top-right */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.2) 0%, transparent 70%)' }} />
        {/* Subtle blue glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(30,87,153,0.3) 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto w-full text-center relative z-10 space-y-8">
          {/* Badge */}
         {/*  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
            <span className="font-semibold text-white">COMMUNICATIONS STRATEGIST &amp; BRAND LEAD</span>
            <span className="text-[#C9A227]/60">•</span>
            <span className="text-[#C9A227] font-bold">LEGAL SCHOLAR (LL.M, B.L, LL.B)</span>
          </motion.div>  */}

          {/* Name */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-display leading-[1.05]">
            <span className="text-white">Olivia </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">Ezekwe</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-3xl font-bold text-white/90 font-sans tracking-wide max-w-4xl mx-auto">
            Strategic Communications <span className="text-[#C9A227]">/</span> Digital Specialist <span className="text-[#C9A227]">/</span> Brand &amp; Content
          </motion.p>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            I help non-profits, development organisations, and purpose-driven brands communicate their impact through strategic communications, storytelling, digital engagement, and multimedia content.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-sm uppercase tracking-wider shadow-[0_0_30px_-5px_rgba(201,162,39,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2">
              <span>VIEW MY WORK</span><ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/cv"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-[#C9A227]/60 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4 text-[#C9A227]" /><span>DOWNLOAD CV</span>
            </Link>
          </motion.div>

          {/* Metrics Strip */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { val: '8+ Yrs', label: 'Strategic Impact', color: 'text-white' },
              { val: '38+', label: 'Communities Reached', color: 'text-[#C9A227]' },
              { val: '2.5M+', label: 'Digital Audience', color: 'text-[#C9A227]' },
              { val: 'LL.M / B.L', label: 'Legal & Policy Rigor', color: 'text-white' },
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-2xl border border-white/10 bg-white/5 text-center">
                <div className={`text-2xl sm:text-3xl font-extrabold font-display ${m.color}`}>{m.val}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-1 uppercase font-semibold">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          ABOUT ME SNIPPET — adaptive light/dark section
      ============================================================ */}
      <section className="bg-white dark:bg-[#050d1f] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Photo */}
            <div className="lg:col-span-5">
              <TiltCard maxTilt={8}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/40 group">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                    alt="Olivia Ezekwe"
                    className="w-full h-[440px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-[#C9A227] text-[#0A1628] font-bold inline-block mb-2">
                      LEGAL &amp; COMMUNICATIONS LEAD
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white">Olivia Ezekwe</h3>
                    <p className="text-xs text-[#e8c96a] font-mono mt-0.5">Master of Laws (LL.M) • Barrister-at-Law (B.L)</p>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono uppercase tracking-widest font-semibold">
                ABOUT ME
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white font-display leading-tight">
                Bridging analytical legal rigor with evocative, human-centered storytelling.
              </h2>
              <p className="text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                I am a communications professional with deep expertise in communication strategy, storytelling, digital engagement, brand management, and multimedia content.
              </p>
              <p className="text-slate-500 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                With an advanced legal foundation (LL.M, B.L, LL.B) and leadership across international non-profits and purpose-driven enterprises, I translate complex public policy, healthcare reform, and community interventions into clear, persuasive narratives that drive donor trust and institutional change.
              </p>
              <div className="pt-4">
                <Link href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A1628] dark:bg-white/10 hover:bg-[#1e3a5f] dark:hover:bg-white/20 text-[#C9A227] text-xs uppercase font-bold tracking-wider transition-all hover:translate-x-1">
                  <span>Learn more about my story</span><ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT I DO — adaptive light/dark section
      ============================================================ */}
      <section className="bg-[#f8fafc] dark:bg-[#0A1628]/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="CAPABILITIES"
            title="What I Do"
            description="A comprehensive toolkit combining strategic clarity, technical digital mastery, and cinematic media production."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {whatIDoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }}>
                  <TiltCard className="h-full">
                    <div className="tech-card rounded-2xl p-6 h-full flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-white transition-colors">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-[#0A1628] dark:text-white mb-2 group-hover:text-[#C9A227] transition-colors">{item.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SELECTED WORK — adaptive light/dark section
      ============================================================ */}
      <section className="bg-white dark:bg-[#050d1f] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#C9A227] uppercase px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 inline-block mb-3 font-semibold">
                PORTFOLIO // SELECTED WORK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1628] dark:text-white font-display">Featured Projects</h2>
            </div>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] transition-all hover:scale-105">
              <span>View All Projects</span><ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 4).map((project, idx) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)} className="cursor-pointer group">
                <TiltCard maxTilt={6}>
                  <div className="tech-card rounded-2xl overflow-hidden">
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                      <img src={project.image} alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#C9A227] text-[#0A1628]">{project.category}</span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 space-y-3">
                      <div className="text-xs text-[#C9A227] font-mono font-semibold">{project.client}</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors font-display">{project.title}</h3>
                      <p className="text-slate-500 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">{project.summary}</p>
                      <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                        <div className="flex gap-4">
                          {project.metrics?.slice(0, 2).map((m, mIdx) => (
                            <div key={mIdx}>
                              <span className="text-sm font-bold text-[#C9A227]">{m.value}</span>{' '}
                              <span className="text-[11px] text-slate-400">{m.label}</span>
                            </div>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-[#C9A227] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Explore Case <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PORTFOLIO DISCIPLINES — navy section
      ============================================================ */}
      <section className="bg-[#0A1628] dark:bg-[#050d1f] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono tracking-widest text-[#C9A227] uppercase px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 inline-block mb-4 font-semibold">
              PORTFOLIO DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display">Writing, Photography &amp; Film</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-base">Explore specialized media pillars housed within the portfolio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: '/writing', icon: PenTool, num: '01', label: 'Articles & Reports', title: 'Writing & Policy', desc: 'Thought leadership essays, governance reports, human rights chronicles, and newsletters.', count: '6+ Publications', color: 'border-sky-500/30 bg-sky-500/10 text-sky-400' },
              { href: '/photography', icon: Camera, num: '02', label: 'Visual Stories', title: 'Photography', desc: 'Dignity-first documentary photojournalism capturing grassroots development and human rights.', count: 'View Gallery', color: 'border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227]' },
              { href: '/videography', icon: Film, num: '03', label: 'Motion & Media', title: 'Videography', desc: 'Directing and producing documentary films, campaign videos, and viral social reels.', count: 'Watch Showcase', color: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400' },
            ].map((d) => {
              const Icon = d.icon;
              return (
                <Link key={d.href} href={d.href} className="group">
                  <div className="border border-white/10 hover:border-[#C9A227]/40 bg-white/5 hover:bg-white/10 rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${d.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-mono uppercase font-semibold ${d.color.split(' ').pop()}`}>{d.num} // {d.label}</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#C9A227] transition-colors mt-1 font-display">{d.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#C9A227]">
                      <span>{d.count}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS — adaptive light/dark section
      ============================================================ */}
      <section className="bg-[#f8fafc] dark:bg-[#0A1628]/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono tracking-widest text-[#C9A227] uppercase px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 inline-block mb-4 font-semibold">
            WHAT CLIENTS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1628] dark:text-white font-display mb-12">Trusted by Partners Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'Olivia brings clarity, creativity and professionalism to every project. She understands communication and delivers results.', name: 'Client Name', org: 'Partner Organisation' },
              { quote: 'Her legal background combined with communications expertise is rare. She elevated our advocacy campaigns significantly.', name: 'Programme Director', org: 'International NGO' },
              { quote: 'Olivia transformed how we communicate with donors. Our engagement rates tripled after working with her.', name: 'Executive Director', org: 'Development Foundation' },
            ].map((t, i) => (
              <div key={i} className="tech-card rounded-2xl p-6 text-left space-y-4">
                <div className="text-4xl text-[#C9A227] font-serif leading-none">&ldquo;</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">{t.quote}</p>
                <div className="pt-3 border-t border-slate-100 dark:border-white/10">
                  <div className="font-bold text-[#0A1628] dark:text-white text-sm">— {t.name}</div>
                  <div className="text-xs text-[#C9A227] font-mono">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA BANNER — navy section
      ============================================================ */}
      <section className="bg-[#0A1628] dark:bg-[#050d1f] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
            Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] to-[#C9A227]">Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Ready to communicate your impact? Let&apos;s build something meaningful.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-sm uppercase tracking-wider shadow-[0_0_30px_-5px_rgba(201,162,39,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2">
              <span>GET IN TOUCH</span><ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:border-[#C9A227]/50 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <span>EXPLORE WORK</span>
            </Link>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
