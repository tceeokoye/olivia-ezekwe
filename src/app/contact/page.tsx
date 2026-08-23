'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Phone,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    serviceInterest: 'Strategic Communications',
    message: '',
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

  return (
    <div className="space-y-16 sm:space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      {/* ===================== HERO / HEADER ===================== */}
      <section className="pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>THE NEXT CHAPTER</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1628] dark:text-white font-display">
          Let&apos;s Work{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
            Together
          </span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          Whether you are launching a major advocacy campaign, building a purpose-driven brand, or seeking high-level communications leadership — I would love to connect.
        </p>
      </section>

      {/* ===================== MAIN CONTACT SECTION ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="tech-card rounded-3xl p-6 sm:p-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#0A1628] dark:text-white font-display mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
                Reach out directly via email, connect on LinkedIn, or start a WhatsApp conversation.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@oliviaezekwe.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 hover:border-[#C9A227]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 text-[#C9A227] flex items-center justify-center group-hover:bg-[#C9A227] group-hover:text-[#0A1628] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Email Address</div>
                  <div className="text-sm font-bold text-[#0A1628] dark:text-white group-hover:text-[#C9A227] transition-colors">
                    hello@oliviaezekwe.com
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/oliviaezekwe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 hover:border-sky-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">LinkedIn Profile</div>
                  <div className="text-sm font-bold text-[#0A1628] dark:text-white group-hover:text-sky-500 transition-colors">
                    linkedin.com/in/oliviaezekwe
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">WhatsApp &amp; Phone</div>
                  <div className="text-sm font-bold text-[#0A1628] dark:text-white group-hover:text-emerald-500 transition-colors">
                    +234 000 000 0000
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

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="tech-card rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] dark:text-white font-display">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base max-w-md mx-auto leading-relaxed font-normal">
                  Thank you for reaching out. Olivia will review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', organisation: '', serviceInterest: 'Strategic Communications', message: '' });
                  }}
                  className="px-8 py-3 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-xs uppercase tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)]"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A1628] dark:text-white font-display mb-1">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    Fill out the form below to start our collaboration.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#C9A227] mb-2 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Ngozi Adebayo"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/15 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 text-[#0A1628] dark:text-white placeholder-slate-400 text-sm outline-none transition-colors font-normal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#C9A227] mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organisation.org"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/15 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 text-[#0A1628] dark:text-white placeholder-slate-400 text-sm outline-none transition-colors font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#C9A227] mb-2 font-bold">
                      Organisation / Brand
                    </label>
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Civic Action Network"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/15 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 text-[#0A1628] dark:text-white placeholder-slate-400 text-sm outline-none transition-colors font-normal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#C9A227] mb-2 font-bold">
                      Service of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/15 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 text-[#0A1628] dark:text-white text-sm outline-none transition-colors"
                    >
                      <option>Strategic Communications</option>
                      <option>Digital &amp; Social Campaign</option>
                      <option>Brand Identity Architecture</option>
                      <option>Photography &amp; Videography</option>
                      <option>Reports &amp; Knowledge Products</option>
                      <option>Media Training &amp; Workshops</option>
                      <option>Retainer / Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#C9A227] mb-2 font-bold">
                    Project Overview &amp; Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your initiative, key challenges, target audiences, and expected timelines..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/15 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]/50 text-[#0A1628] dark:text-white placeholder-slate-400 text-sm outline-none transition-colors font-normal"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-sm uppercase tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
