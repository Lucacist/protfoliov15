'use client';

import { useLanguage } from '@/lib/language-context';
import { motion, type Variants } from 'framer-motion';
import { div, section } from 'framer-motion/client';
import { ExternalLink } from 'lucide-react';

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

type EducationItem = {
  school: string;
  url: string;
  degree: string;
  start: string;
  end: string;
  location: string;
};

type ExperienceItem = {
  company: string;
  url: string;
  role: string;
  start: string;
  end: string;
  location: string;
};

export default function Sec4() {
  const { t } = useLanguage();

  const education = (t<EducationItem[]>('sec4.education') ??
    []) as EducationItem[];
  const experience = (t<ExperienceItem[]>('sec4.experience') ??
    []) as ExperienceItem[];

  return (
    <section className="container mx-auto p-4 max-w-5xl flex flex-col gap-8">
      {/* Formation */}
      <div className="flex flex-col gap-4">
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
          {education.map((item) => (
            <motion.div
              key={`${item.school}-${item.degree}`}
              className="flex items-start justify-between gap-4"
              variants={itemVariants}
            >
              <div className="flex flex-col gap-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-base sm:text-lg underline underline-offset-4 flex items-center gap-1 hover:opacity-70 transition-opacity"
                >
                  {item.school}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {item.degree}
                </p>
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
          ))}
        </motion.div>
      </div>

      {/* Expérience */}
      <div className="flex flex-col gap-4">
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
          {experience.map((item) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              className="flex items-start justify-between gap-4"
              variants={itemVariants}
            >
              <div className="flex flex-col gap-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-base sm:text-lg underline underline-offset-4 flex items-center gap-1 hover:opacity-70 transition-opacity"
                >
                  {item.company}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {item.role}
                </p>
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
