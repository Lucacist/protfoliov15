'use client';

import { useLanguage } from '@/lib/language-context';
import { Heart } from 'lucide-react';
import { Coffee } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border p-8 w-full max-w-7xl mx-auto flex justify-between mt-8">
      <p className="text-sm text-muted-foreground">
        © {currentYear} Luca.ffz. {t('footer.rights')}
      </p>
      <div className="flex items-center gap-2">
        <p className="text-sm text-muted-foreground">{t('footer.start')}</p>
        <Heart className="h-4 w-4 text-red-500" />
        <p className="text-sm text-muted-foreground">{t('footer.after')}</p>

        <Coffee className="h-4 w-4 text-black" />
      </div>
    </footer>
  );
}
