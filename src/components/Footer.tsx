"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ezekweolivia@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <footer className="relative bg-[#0A1628] dark:bg-[#050d1f] border-t border-white/10 text-white overflow-hidden z-20 transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-[#C9A227]/10 via-sky-500/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Banner: LET'S WORK TOGETHER */}
        <div className="relative rounded-2xl bg-white/5 border-2 border-[#C9A227]/30 p-8 sm:p-12 md:p-16 mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#C9A227]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#e8c96a] text-xs font-mono tracking-widest mb-4 font-semibold">
                Start a Conversation
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
                LET’S TALK ABOUT YOUR NEXT PROJECT.
              </h3>
              <p className="text-slate-200 text-base sm:text-lg mt-3 leading-relaxed">
                &ldquo;Have an idea, story, campaign or communication challenge
                in mind? Let’s talk. &rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-lg bg-[#C9A227] hover:bg-[#e8c96a] text-[#0A1628] font-black text-sm tracking-wider shadow-[0_0_30px_-5px_rgba(201,162,39,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                <span>GET IN TOUCH</span>
              </Link>
              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-lg bg-white/5 hover:bg-white/10 text-slate-100 border border-white/20 text-sm font-bold transition-all flex items-center justify-center cursor-pointer"
              >
                {copiedEmail ? (
                  <span className="text-emerald-400">Email Copied!</span>
                ) : (
                  <span>Copy Email</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C9A227] text-[#0A1628] font-black text-lg flex items-center justify-center shadow-md">
                OE
              </div>
              <span className="text-xl font-bold tracking-wider text-white font-display">
                Olivia Ezekwe
              </span>
            </div>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              Communications Strategist, Writer &amp; Storyteller working across
              strategic communications, content development, digital media,
              photography, videography and documentary storytelling.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-widest text-[#C9A227] mb-4 font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  • Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  • Portfolio &amp; Work
                </Link>
              </li>
              <li>
                <a
                  href="/api/download-cv"
                  download="Olivia_Ezekwe_CV.txt"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium inline-flex items-center gap-1.5"
                >
                  <span>• Download CV / Resume</span>
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  • Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-widest text-[#C9A227] mb-4 font-bold">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:ezekweolivia@gmail.com"
                  className="text-slate-300 hover:text-[#C9A227] transition-colors font-medium"
                >
                  ezekweolivia@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/qr/R72NWYJBVVFYK1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                >
                  +2348067103176 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-mono">
            <a
              href="mailto:ezekweolivia@gmail.com"
              className="hover:text-[#C9A227] transition-colors"
            >
              ezekweolivia@gmail.com
            </a>
            <a
              href="https://wa.me/qr/R72NWYJBVVFYK1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp (+2348067103176)
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
