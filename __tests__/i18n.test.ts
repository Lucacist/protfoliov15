/**
 * i18n Validation
 *
 * Checks that all 3 locale files (fr/en/es) have the same keys,
 * preventing missing translations at build/test time.
 */
import { describe, it, expect } from 'vitest';
import fr from '@/lib/i18n/fr.json';
import en from '@/lib/i18n/en.json';
import es from '@/lib/i18n/es.json';

function getKeys(
  obj: Record<string, unknown>,
  prefix = '',
): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...getKeys(value as Record<string, unknown>, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys.sort();
}

const frKeys = getKeys(fr);
const enKeys = getKeys(en);
const esKeys = getKeys(es);

describe('i18n key parity', () => {
  it('en has all keys present in fr', () => {
    const missingInEn = frKeys.filter((k) => !enKeys.includes(k));
    expect(missingInEn).toEqual([]);
  });

  it('es has all keys present in fr', () => {
    const missingInEs = frKeys.filter((k) => !esKeys.includes(k));
    expect(missingInEs).toEqual([]);
  });

  it('fr has all keys present in en (no extra keys in en)', () => {
    const extraInEn = enKeys.filter((k) => !frKeys.includes(k));
    expect(extraInEn).toEqual([]);
  });

  it('fr has all keys present in es (no extra keys in es)', () => {
    const extraInEs = esKeys.filter((k) => !frKeys.includes(k));
    expect(extraInEs).toEqual([]);
  });
});
