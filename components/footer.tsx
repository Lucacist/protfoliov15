'use client';

import { useLanguage } from '@/lib/language-context';
import { Heart } from 'lucide-react';
import { Coffee } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border p-8 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
      <p className="text-sm text-muted-foreground text-center md:text-left">
        © {currentYear} Luca.ffz. {t('footer.rights')}
      </p>
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <p className="text-sm text-muted-foreground">{t('footer.start')}</p>
        <Heart className="h-4 w-4 text-red-500" />
        <p className="text-sm text-muted-foreground">{t('footer.after')}</p>
        <Coffee className="h-4 w-4 text-black" />
      </div>
    </footer>
  );
}
