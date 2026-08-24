"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Linkedin,
  Phone,
  ArrowUpRight,
  Sparkles,
  Check,
  Shield,
} from "lucide-react";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@oliviaezekwe.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <footer className="relative bg-[#0A1628] dark:bg-[#050d1f] border-t border-white/10 text-white overflow-hidden z-20 transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-[#C9A227]/10 via-sky-500/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Banner: LET'S WORK TOGETHER (Exact Layout Guide Specification) */}
        <div className="relative rounded-3xl bg-white/5 border-2 border-[#C9A227]/30 p-8 sm:p-12 md:p-16 mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#C9A227]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#e8c96a] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Start a Conversation
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
                OKAY, YOUR TURN!
              </h3>
              <p className="text-slate-200 text-base sm:text-lg mt-3 leading-relaxed">
                &ldquo;If you’ve been saying, ‘We really need to communicate
                this better’… this is your sign. &rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-sm uppercase tracking-wider shadow-[0_0_30px_-5px_rgba(201,162,39,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-slate-100 border border-white/20 text-sm font-bold transition-all flex items-center gap-2"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#C9A227]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C9A227] text-[#0A1628] font-black text-lg flex items-center justify-center shadow-md">
                OE
              </div>
              <span className="text-xl font-bold tracking-wider uppercase text-white font-display">
                Olivia Ezekwe
              </span>
            </div>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              Red = Communications Strategist, Writer & Visual Storyteller
              <br /> Green = Communications Strategist, Writer & Storyteller
              working across strategic communications, content development,
              digital media, photography, videography and documentary
              storytelling.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9A227] mb-4 font-bold">
              Portfolio Disciplines
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/portfolio"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  • Selected Work &amp; Campaigns
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  • Writing &amp; Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/photography"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  • Photography &amp; Field Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/videography"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  • Videography &amp; Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C9A227] mb-4 font-bold">
              Explore &amp; Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  About Olivia
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  Services &amp; Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/cv"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  CV / Executive Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-mono">
            <a
              href="mailto:hello@oliviaezekwe.com"
              className="flex items-center gap-1.5 hover:text-[#C9A227] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
              <span> ezekweolivia@gmail.com</span>
            </a>
            {/* <a
              href="https://linkedin.com/in/oliviaezekwe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>linkedin.com/in/oliviaezekwe</span>
            </a> */}
            <a
              href="https://wa.me/2348067103176"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+2348067103176</span>
            </a>
          </div>

          <div className="text-slate-400 font-mono text-center md:text-right">
            © {new Date().getFullYear()} Olivia Ezekwe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
