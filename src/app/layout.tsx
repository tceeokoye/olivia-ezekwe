import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#050d1f] text-slate-800 dark:text-slate-100 relative overflow-x-hidden transition-colors duration-300 font-sans">
        <ThemeProvider>
          {/* Modern Minimalist Header */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-grow relative z-10">{children}</main>

          {/* Modern Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
