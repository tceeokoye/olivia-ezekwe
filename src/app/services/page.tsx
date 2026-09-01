'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import TiltCard from '@/components/TiltCard';
import { servicesData } from '@/data/servicesData';

export default function ServicesPage() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Audience Mapping',
      desc: 'Deep-dive consultations, stakeholder matrices, donor perception audits, and clear KPI definition.',
    },
    {
      num: '02',
      title: 'Strategy & Narrative Blueprint',
      desc: 'Formulating core message framing, communication channels, editorial pillars, and brand positioning.',
    },
    {
      num: '03',
      title: 'Creative Execution & Production',
      desc: 'Authoring investigative press dispatches, executive compendiums, legal treatises, and digital campaign flyer suites.',
    },
    {
      num: '04',
      title: 'Multi-Channel Deployment & Analytics',
      desc: 'Rolling out public advocacy campaigns, media press briefings, donor reports, and real-time impact optimization.',
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono tracking-widest font-semibold">
          <span>CAPABILITIES &amp; SOLUTIONS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white font-display">
          Services &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
            Consulting
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          Bespoke advocacy campaigns, literary creative non-fiction, executive editorial publications, high-impact press dispatches, and rigorous legal writing.
        </p>
      </section>

      {/* ===================== SERVICES GRID ===================== */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <TiltCard maxTilt={8} className="h-full">
              <div className="tech-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C9A227] uppercase tracking-wider block mb-2">
                    Service 0{idx + 1}
                  </span>

                  <h3 className="text-xl font-bold text-[#0A1628] dark:text-white font-display mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/10">
                    <h4 className="text-xs font-mono tracking-wider text-[#C9A227] font-bold">
                      Key Deliverables
                    </h4>
                    <div className="space-y-2">
                      {service.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                          <span className="text-[#C9A227] shrink-0 font-bold leading-5">–</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 space-y-4">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    <strong className="text-[#0A1628] dark:text-white">Ideal For:</strong> {service.whoItIsFor}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href={`/portfolio?category=${encodeURIComponent(service.portfolioCategory)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A227] hover:underline tracking-wide"
                    >
                      <span>View Portfolio Works</span>
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-[#C9A227]"
                    >
                      <span>Inquire</span>
                    </Link>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </section>

      {/* ===================== HOW WE COLLABORATE ===================== */}
      <section>
        <SectionHeader
          badge="METHODOLOGY"
          title="HOW WE WORK TOGETHER"
          description="A battle-tested 4-stage framework that guarantees strategic alignment, exceptional creative output, and transparent deadlines."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="tech-card rounded-2xl p-6 relative"
            >
              <div className="text-3xl font-black text-[#C9A227] font-mono mb-3">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] dark:text-white mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
