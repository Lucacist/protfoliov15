'use client';

import { useLanguage } from '@/lib/language-context';
import { motion, type Variants } from 'framer-motion';
import {
  MapPin,
  Calendar,
  BriefcaseBusiness,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function SecAvailability() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto p-4 max-w-5xl">
      <motion.div
        className="overflow-hidden rounded-2xl border border-border bg-card"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 px-6 pt-6 pb-4"
        >
          <p className="text-xs">🟢</p>
          <span className="text-sm font-medium text-foreground">
            {t('hero.dispo')}
          </span>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-3 pb-3">
          {/* Stage */}
          <motion.div
            variants={itemVariants}
            className="group flex flex-col gap-3 rounded-xl bg-muted/50 p-4 transition-colors hover:bg-muted"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background ring-1 ring-border">
                <MapPin className="h-4 w-4 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  {t('availability.stageTitle')}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t('availability.stageBadge')}
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {t('availability.stageDesc')}
            </p>
            <div className="mt-auto flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {t('availability.stagePeriod')}
            </div>
          </motion.div>

          {/* Freelance */}
          <motion.div
            variants={itemVariants}
            className="group flex flex-col gap-3 rounded-xl bg-muted/50 p-4 transition-colors hover:bg-muted"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background ring-1 ring-border">
                <BriefcaseBusiness className="h-4 w-4 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  {t('availability.freelanceTitle')}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[11px] text-muted-foreground">
                    {t('availability.freelanceBadge')}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {t('availability.freelanceDesc')}
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-foreground hover:opacity-70 transition-opacity"
            >
              {t('availability.freelanceCta')}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
