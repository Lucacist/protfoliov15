"use client";

import { createContext, useContext, useState, useCallback } from "react";
import fr from "@/lib/i18n/fr.json";
import en from "@/lib/i18n/en.json";

export type Locale = "fr" | "en";

export const locales: { value: Locale; label: string; flag: string }[] = [
  { value: "fr", label: "Français", flag: "🇫🇷" },
  { value: "en", label: "English", flag: "🇬🇧" },
];

const messages: Record<Locale, Record<string, unknown>> = { fr, en };

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(key: string) => T;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  const t = useCallback(
    <T = string>(key: string): T => {
      const keys = key.split(".");
      let value: unknown = messages[locale];
      for (const k of keys) {
        if (value && typeof value === "object") {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key as T;
        }
      }
      return (value ?? key) as T;
    },
    [locale]
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
