'use client';

import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { section } from 'framer-motion/client';
import { MapPin, Calendar, Code } from 'lucide-react';

export default function SecAvailability() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto p-4 max-w-5xl">
      <motion.div
        className="grid sm:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const }}
      >
        {/* Stage */}
        <div
          className="flex flex-col gap-3 p-5 rounded-lg border border-[#f8c4c4]"
          style={{ backgroundColor: '#ffecec' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#f8c4c4] flex items-center justify-center shrink-0">
              <MapPin className="h-4 w-4 text-[#c0504d]" />
            </div>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {t('availability.stageBadge')}
            </span>
          </div>
          <div>
            <p className="font-semibold text-base">
              {t('availability.stageTitle')}
            </p>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {t('availability.stageDesc')}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {t('availability.stagePeriod')}
            </span>
          </div>
        </div>

        {/* Freelance */}
        <div
          className="flex flex-col gap-3 p-5 rounded-lg border border-[#f5b8b8]"
          style={{ backgroundColor: '#fde0e0' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#f8c4c4] flex items-center justify-center shrink-0">
              <Code className="h-4 w-4 text-[#c0504d]" />
            </div>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {t('availability.freelanceBadge')}
            </span>
          </div>
          <div>
            <p className="font-semibold text-base">
              {t('availability.freelanceTitle')}
            </p>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {t('availability.freelanceDesc')}
            </p>
          </div>
          <div className="mt-auto pt-2 border-t border-border">
            <a
              href="/contact"
              className="text-xs font-medium hover:opacity-70 transition-opacity"
            >
              {t('availability.freelanceCta')} →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
