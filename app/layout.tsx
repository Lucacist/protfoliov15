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
  title: 'Luca Fourfooz',
  description:
    'Portfolio de Luca Fourfooz - Développeur web full-stack & Designer UI/UX',
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
