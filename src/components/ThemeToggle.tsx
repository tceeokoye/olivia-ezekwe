'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 rounded-full transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-[#C9A227]/50 ${
        isDark
          ? 'bg-slate-900/90 border-[#C9A227]/40 text-[#C9A227] hover:bg-slate-800 shadow-[0_0_15px_-3px_rgba(201,162,39,0.3)]'
          : 'bg-slate-800 border-white/20 text-amber-300 hover:bg-slate-700 hover:text-white shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-[#e8c96a]" />
          ) : (
            <Sun className="w-4 h-4 text-amber-300" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-bold uppercase tracking-wider">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
}
