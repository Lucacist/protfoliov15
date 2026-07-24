'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';

const LANG_MAP: Record<string, string> = {
  fr: 'fr',
  en: 'en',
  es: 'es',
};

/**
 * Updates <html lang="..."> when locale changes.
 */
export function HtmlLang() {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = LANG_MAP[locale] ?? locale;
  }, [locale]);

  return null;
}
