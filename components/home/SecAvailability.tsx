'use client';

import { useLanguage } from '@/lib/language-context';
import { motion, type Variants } from 'framer-motion';
import { MapPin, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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

const downloads = [
  { key: 'cvFr', href: '/documents/FR_CV_Luca.pdf' },
  { key: 'cvEn', href: '/documents/En_CV_Luca.pdf' },
  {
    key: 'coverLetterFr',
    href: '/documents/FR_Lettre_motivation_mobilite_internationale.pdf',
  },
  {
    key: 'coverLetterEn',
    href: '/documents/EN_lettre_motivation_mobilite_internationale.pdf',
  },
  { key: 'recommendation', href: '/documents/Letter of recommendation IT.pdf' },
] as const;

export default function SecAvailability() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto p-4 max-w-5xl">
      <motion.div
        className="relative isolate overflow-hidden rounded-3xl bg-red-400 text-white shadow-lg shadow-red-500/20 flex flex-col sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text content */}
        <div className="flex flex-col gap-4 p-6 sm:p-8 flex-1 order-2 sm:order-1">
          {/* Internship focus */}
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-bold text-white">
                {t('availability.stageTitle')}
              </p>
              <p className="text-xs text-white/75 mt-0.5">
                {t('availability.stageBadge')}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-sm text-white/90"
          >
            <Calendar className="h-4 w-4 shrink-0" />
            <span>{t('availability.stageDates')}</span>
          </motion.div>

          {/* Downloads */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 pt-2"
          >
            {downloads.map(({ key, href }) => (
              <Button
                key={key}
                size="sm"
                asChild
                className="bg-white text-red-600 hover:bg-white/90"
              >
                <a href={href} download>
                  <Download className="h-3.5 w-3.5" />
                  {t(`availability.downloads.${key}`)}
                </a>
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Illustration panel */}
        <motion.div
          variants={itemVariants}
          className="relative h-48 sm:h-auto sm:w-72 md:w-80 shrink-0 order-1 sm:order-2
            [mask-image:linear-gradient(to_bottom,black_25%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.15)_80%,transparent)]
            [-webkit-mask-image:linear-gradient(to_bottom,black_25%,rgba(0,0,0,0.6)_55%,rgba(0,0,0,0.15)_80%,transparent)]
            sm:[mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,0.15)_20%,rgba(0,0,0,0.6)_45%,black_75%)]
            sm:[-webkit-mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,0.15)_20%,rgba(0,0,0,0.6)_45%,black_75%)]"
        >
          <Image
            src="/illustrations/cheerful-student.svg"
            alt=""
            aria-hidden="true"
            fill
            unoptimized
            className="object-cover object-[55%_35%]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
