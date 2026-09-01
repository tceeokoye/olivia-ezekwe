"use client";

export const dynamic = 'force-static';

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  ChevronDown,
  Check,
} from "lucide-react";

const SERVICES = [
  { value: "Campaigns" },
  { value: "Creative Non-Fictions" },
  { value: "Editorial" },
  { value: "Press" },
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
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-sans z-10
        ${
          active
            ? "top-2 text-[10px] font-semibold text-[#C9A227]   tracking-widest"
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
        className={`w-full pt-7 pb-3 px-4 rounded-2xl text-sm text-[#0A1628] dark:text-white font-normal bg-slate-50 dark:bg-[#0d1f3c] border-2 outline-none transition-all duration-200
          ${
            focused
              ? "border-[#C9A227] shadow-[0_0_0_4px_rgba(201,162,39,0.08)]"
              : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
          }
          placeholder-slate-400 dark:placeholder-slate-500`}
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
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-sans z-10
        ${
          active
            ? "top-2 text-[10px] font-semibold text-[#C9A227]   tracking-widest"
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
        className={`w-full pt-8 pb-3 px-4 rounded-2xl text-sm text-[#0A1628] dark:text-white font-normal bg-slate-50 dark:bg-[#0d1f3c] border-2 outline-none transition-all duration-200 resize-none
          ${
            focused
              ? "border-[#C9A227] shadow-[0_0_0_4px_rgba(201,162,39,0.08)]"
              : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
          }
          placeholder-slate-400 dark:placeholder-slate-500`}
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
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = SERVICES.find((s) => s.value === value) ?? SERVICES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-3 px-4 pt-7 pb-3 rounded-2xl text-sm text-left font-normal bg-slate-50 dark:bg-[#0d1f3c] border-2 outline-none transition-all duration-200 cursor-pointer
          ${
            open
              ? "border-[#C9A227] shadow-[0_0_0_4px_rgba(201,162,39,0.08)]"
              : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
          }`}
      >
        <span className="absolute left-4 top-2 text-[10px] font-semibold text-[#C9A227]   tracking-widest pointer-events-none">
          Service of Interest
        </span>
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
              {SERVICES.map((svc, i) => {
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
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 text-left
                      ${
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

export default function ContactPage() {
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
    }, 1400);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <section className="pt-4 sm:pt-8 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 text-[#C9A227] border border-[#C9A227]/30 text-xs font-mono   tracking-widest font-semibold">
         
          <span>THE NEXT CHAPTER</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#0A1628] dark:text-white font-display">
          LET’S DO SOMETHING ,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] via-[#C9A227] to-[#a07a10]">
            INTERESTING!
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
          Have a story to tell, an idea to communicate or a project in mind?
          Let’s get started.
        </p>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
          Available for communications, content, storytelling and creative
          projects
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-5 space-y-6">
          <div className="tech-card rounded-3xl p-6 sm:p-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#0A1628] dark:text-white font-display mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
                Reach out directly via email, connect on LinkedIn, or start a
                WhatsApp conversation.
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
                    className="px-8 py-3 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-xs   tracking-wider shadow-[0_4px_20px_-4px_rgba(201,162,39,0.4)] transition-all hover:scale-105"
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
                    className="relative w-full py-4 rounded-2xl bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-sm   tracking-wider shadow-[0_4px_24px_-4px_rgba(201,162,39,0.45)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 overflow-hidden group"
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
  );
}
