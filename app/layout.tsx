import type { Metadata } from 'next';
import { Google_Sans_Flex } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/lib/language-context';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from '@/components/footer';

import './globals.css';
import { cn } from '@/lib/utils';

const google_sans_flex = Google_Sans_Flex({
  subsets: ['latin'],
  variable: '--font-sans',
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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
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
      className={cn('h-full', 'antialiased', google_sans_flex.variable)}
    >
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <TooltipProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
