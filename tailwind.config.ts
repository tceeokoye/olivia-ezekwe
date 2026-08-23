import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          // Brand Gold palette
          gold: "#C9A227",        // primary brand gold
          goldLight: "#e8c96a",   // light gold for text
          goldPale: "#f5e7b2",    // very light gold tint
          // Brand Navy palette
          navy: "#0A1628",        // mid navy (cards, surfaces)
          navyDeep: "#050d1f",    // deepest background
          navyLight: "#0f1e36",   // slightly lighter navy for cards
          navySurface: "#122040", // surface/card background
          // Supporting
          accentCyan: "#38bdf8",
          accentEmerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        "glow-gold": "0 0 30px -5px rgba(201, 162, 39, 0.4)",
        "glow-gold-strong": "0 0 50px -5px rgba(201, 162, 39, 0.6)",
        "glow-cyan": "0 0 25px -5px rgba(56, 189, 248, 0.3)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        "navy-card": "0 10px 40px -10px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
