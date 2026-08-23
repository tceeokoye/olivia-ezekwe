import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Syne, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeCanvas from '@/components/ThreeCanvas';
import { ThemeProvider } from '@/context/ThemeContext';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Olivia Ezekwe | Communications Strategist, Brand Lead & Storyteller',
  description:
    'Communications Strategist, Digital Communications Specialist, Brand & Content Manager with legal background (LL.M, B.L, LL.B). Helping non-profits, development organisations, and purpose-driven brands communicate their impact.',
  keywords: [
    'Olivia Ezekwe',
    'Communications Strategist',
    'Digital Communications Specialist',
    'Brand & Content Manager',
    'Nonprofit Storytelling',
    'Development Communications',
    'Legal Professional',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${syne.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#050d1f] text-slate-800 dark:text-slate-100 relative overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          {/* Subtle Grid Background */}
          <div className="fixed inset-0 bg-grid-tech pointer-events-none z-0 opacity-60 dark:opacity-40" />

          {/* Interactive 3D WebGL Three.js Particle Background */}
          <ThreeCanvas />

          {/* Dark Mode Luminous Ambient Background Glows */}
          <div className="hidden dark:block fixed top-[-10%] left-[15%] w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none z-0"
            style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.15) 0%, transparent 70%)' }} />
          <div className="hidden dark:block fixed top-[30%] right-[-5%] w-[500px] h-[600px] rounded-full blur-[160px] pointer-events-none z-0"
            style={{ background: 'radial-gradient(ellipse, rgba(30,87,153,0.3) 0%, transparent 70%)' }} />

          {/* Modern Floating Island Header */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-grow relative z-10">{children}</main>

          {/* Modern Tech Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
