'use client';

import { useLanguage } from '@/lib/language-context';
import { motion, type Variants } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

type TimelineItem = {
  school?: string;
  company?: string;
  url?: string;
  degree?: string;
  role?: string;
  start: string;
  end: string;
  location: string;
  highlights?: string[];
};

export default function Sec4() {
  const { t, locale } = useLanguage();

  const education = (t<TimelineItem[]>('sec4.education') ?? []) as TimelineItem[];
  const experience = (t<TimelineItem[]>('sec4.experience') ?? []) as TimelineItem[];

  const renderLink = (item: TimelineItem) => {
    const label = item.school ?? item.company ?? '';
    const url = item.url;

    if (url) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-base sm:text-lg underline underline-offset-4 flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          {label}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      );
    }

    return (
      <span className="font-semibold text-base sm:text-lg">
        {label}
      </span>
    );
  };

  const renderTimelineEntry = (
    item: TimelineItem,
    key: string,
    subLabel: string,
  ) => (
    <motion.div
      key={key}
      className="flex items-start justify-between gap-4"
      variants={itemVariants}
    >
      <div className="flex flex-col gap-1 min-w-0">
        {renderLink(item)}
        <p className="text-sm sm:text-base text-muted-foreground">
          {subLabel}
        </p>
        {item.highlights && item.highlights.length > 0 && (
          <Accordion type="single" collapsible className="mt-1 -ml-1">
            <AccordionItem value="highlights" className="border-none">
              <AccordionTrigger className="py-1 text-xs text-muted-foreground hover:text-foreground hover:no-underline gap-1.5">
                {t('sec4.expandLabel')}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-1 mt-1">
                  {item.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground flex items-start gap-1.5"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                      {h}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
      <div className="flex flex-col items-end shrink-0 gap-1">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {item.start} - {item.end}
        </span>
        <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
          {item.location}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section className="container mx-auto p-4 max-w-5xl flex flex-col gap-8">
      {/* Formation */}
      <div className="flex flex-col gap-4" key={`edu-${locale}`}>
        <motion.h2
          className="text-xl sm:text-2xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
        >
          {t('sec4.titleEducation')}
        </motion.h2>

        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((item) =>
            renderTimelineEntry(
              item,
              `${item.school}-${item.degree}`,
              item.degree ?? '',
            ),
          )}
        </motion.div>
      </div>

      {/* Expérience */}
      <div className="flex flex-col gap-4" key={`exp-${locale}`}>
        <motion.h2
          className="text-xl sm:text-2xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
        >
          {t('sec4.titleExperience')}
        </motion.h2>

        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((item) =>
            renderTimelineEntry(
              item,
              `${item.company}-${item.role}`,
              item.role ?? '',
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
