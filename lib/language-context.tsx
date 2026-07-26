'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import fr from '@/lib/i18n/fr.json';
import en from '@/lib/i18n/en.json';
import es from '@/lib/i18n/es.json';

export type Locale = 'fr' | 'en' | 'es';

const SUPPORTED_LOCALES: Locale[] = ['fr', 'en', 'es'];

export const locales: { value: Locale; label: string; flag: string }[] = [
  { value: 'fr', label: 'Français', flag: '🇫🇷' },
  { value: 'en', label: 'English', flag: '🇬🇧' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
];

const messages: Record<Locale, Record<string, unknown>> = { fr, en, es };

function detectClientLocale(): Locale {
  try {
    const stored = localStorage.getItem('preferred-locale') as Locale | null;
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
  } catch {
    // localStorage unavailable
  }
  try {
    const browserLang = navigator.language.split('-')[0] as Locale;
    if (SUPPORTED_LOCALES.includes(browserLang)) return browserLang;
  } catch {
    // navigator unavailable
  }
  return 'fr';
}

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(key: string) => T;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');

  useEffect(() => {
    const detected = detectClientLocale();
    if (detected !== 'fr') {
      setLocaleState(detected);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('preferred-locale', newLocale);
    } catch {
      // localStorage unavailable
    }
  }, []);

  const t = useCallback(
    <T = string>(key: string): T => {
      const keys = key.split('.');
      let value: unknown = messages[locale];
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key as T;
        }
      }
      return (value ?? key) as T;
    },
    [locale],
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
