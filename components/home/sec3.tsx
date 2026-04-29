'use client';

import { useLanguage } from '@/lib/language-context';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  repoUrl?: string;
  projectUrl?: string;
  siteUrl?: string;
  downloadUrl?: string;
  downloadLabel?: string;
};

const selectedProjectIds = ['calibre', 'arahub-workspace', 'easysave'];

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

export default function Sec3() {
  const { t } = useLanguage();

  const allItems = t<Project[]>('projects.items');
  const selectedProjects = Array.isArray(allItems)
    ? allItems.filter((project) => selectedProjectIds.includes(project.id))
    : [];

  return (
    <section className="flex container mx-auto p-4 max-w-5xl gap-6">
      <div className="flex flex-col gap-6 z-2">
        <div className="flex items-center justify-between">
          <motion.h2
            className="text-xl sm:text-2xl font-bold"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: 'easeOut' as const }}
          >
            {t('sec3.title')}
          </motion.h2>
          <div className="flex relative items-center md:hidden">
            <div className="flex flex-col items-center h-auto w-full justify-center z-2">
              <span className="text-xl font-bold">
                {Array.isArray(allItems) ? allItems.length : 0}
              </span>
              <Badge className="font-bold text-[6px] text-center">
                {t('sec3.projectCount')}
              </Badge>
            </div>
            <img
              className="opacity-50 w-20 absolute top-1/2 right-0 -translate-y-1/2"
              src="/rosas/rosas1.svg"
              alt=""
            />
          </div>
        </div>

        <motion.div
          className="flex flex-col gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {selectedProjects.map((project) => (
            <motion.article
              key={project.id}
              className="flex flex-col gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <h3 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs sm:text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {t('projects.ui.btnViewRepo')}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button asChild className="w-full sm:w-auto">
            <Link href="/projects">
              {t('sec3.btnMore')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="relative shrink-0 min-w-[200px] items-center hidden md:flex"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center h-[200px] w-full justify-center p-8 z-2">
          <span className="text-6xl font-bold">
            {Array.isArray(allItems) ? allItems.length : 0}
          </span>
          <Badge className="font-bold text-sm text-center">
            {t('sec3.projectCount')}
          </Badge>
        </div>
        <img
          className="opacity-50 w-full absolute top-1/2 right-0 -translate-y-1/2"
          src="/rosas/rosas1.svg"
          alt=""
        />
      </motion.div>
    </section>
  );
}
