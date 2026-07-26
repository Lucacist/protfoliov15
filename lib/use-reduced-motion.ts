'use client';

import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Returns true if the user prefers reduced motion.
 * Use this to conditionally disable animations.
 */
export function useReducedMotion(): boolean {
  try {
    return useFramerReducedMotion() ?? false;
  } catch {
    return false;
  }
}
