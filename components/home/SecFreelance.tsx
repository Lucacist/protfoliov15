'use client';

import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function SecFreelance() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto p-4 max-w-5xl">
      <motion.div
        className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-muted/50"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted ring-1 ring-border">
            <BriefcaseBusiness className="h-4 w-4 text-foreground" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">
              {t('availability.freelanceTitle')}
            </p>
            <span className="text-[11px] text-muted-foreground">
              {t('availability.freelanceBadge')}
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {t('availability.freelanceDesc')}
        </p>
        <Link
          href="/contact"
          className="inline-flex w-fit items-center gap-1 text-xs font-medium text-foreground hover:opacity-70 transition-opacity"
        >
          {t('availability.freelanceCta')}
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </motion.div>
    </section>
  );
}
