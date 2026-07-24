import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/lib/language-context';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { StageToast } from '@/components/stage-toast';
import { SkipToContent } from '@/components/SkipToContent';
import { HtmlLang } from '@/components/HtmlLang';
import { JsonLd } from '@/components/JsonLd';

import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lucaffz.dev'),
  title: {
    default: 'Luca Fourfooz - Développeur Full-Stack & Designer UI/UX',
    template: '%s | Luca Fourfooz',
  },
  description:
    'Portfolio de Luca Fourfooz, étudiant ingénieur à CESI et développeur full-stack chez Assystem. Spécialisé en Next.js, React, TypeScript, Node.js et design UI/UX.',
  keywords: [
    'Luca Fourfooz',
    'développeur full-stack',
    'développeur web',
    'UI/UX designer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'portfolio',
    'CESI',
    'Assystem',
    'ingénieur logiciel',
    'développeur frontend',
    'développeur backend',
  ],
  authors: [{ name: 'Luca Fourfooz', url: 'https://lucaffz.dev' }],
  icons: {
    icon: '/icon.svg',
  },
  creator: 'Luca Fourfooz',
  publisher: 'Luca Fourfooz',
  alternates: {
    languages: {
      'fr-FR': 'https://lucaffz.dev/fr',
      'en-US': 'https://lucaffz.dev/en',
      'es-ES': 'https://lucaffz.dev/es',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'es_ES'],
    url: 'https://lucaffz.dev',
    title: 'Luca Fourfooz - Développeur Full-Stack & Designer UI/UX',
    description:
      'Portfolio de Luca Fourfooz, étudiant ingénieur à CESI et développeur full-stack chez Assystem. Spécialisé en Next.js, React, TypeScript, Node.js et design UI/UX.',
    siteName: 'Luca Fourfooz Portfolio',
    images: [
      {
        url: '/api/og?title=Luca%20Fourfooz&subtitle=D%C3%A9veloppeur%20Full-Stack%20%26%20Designer%20UI%2FUX',
        width: 1200,
        height: 630,
        alt: 'Luca Fourfooz - Développeur Full-Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luca Fourfooz - Développeur Full-Stack & Designer UI/UX',
    description:
      'Portfolio de Luca Fourfooz, étudiant ingénieur à CESI et développeur full-stack chez Assystem.',
    images: ['/api/og?title=Luca%20Fourfooz&subtitle=D%C3%A9veloppeur%20Full-Stack%20%26%20Designer%20UI%2FUX'],
    creator: '@lucaffz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        inter.variable,
        geistMono.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <HtmlLang />
            <MotionConfig reducedMotion="user">
              <TooltipProvider>
                <StageToast />
                <Toaster position="bottom-right" />
                <Navbar />
                <main id="main-content" className="flex-grow">
                  {children}
                </main>
                <Footer />
              </TooltipProvider>
            </MotionConfig>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
