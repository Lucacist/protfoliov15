'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

type ContentBlock =
  | { type: 'text'; value: string }
  | { type: 'image'; value: string; alt: string }
  | { type: 'heading'; value: string }
  | { type: 'list'; value: string[] };

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
  downloadUrl2?: string;
  downloadLabel?: string;
  downloadLabel2?: string;
  content?: ContentBlock[];
};

interface Props {
  projectId: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export default function ProjectDetail({ projectId }: Props) {
  const { t } = useLanguage();

  const allProjects = t<Project[]>('projects.items');
  const project = Array.isArray(allProjects)
    ? allProjects.find((p) => p.id === projectId)
    : undefined;

  if (!project) {
    return (
      <section className="container mt-20 mx-auto p-4 max-w-3xl">
        <div className="flex flex-col items-center gap-4 py-20">
          <h1 className="text-2xl font-bold">{t('projects.notFound')}</h1>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('projects.title')}
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container mt-20 mx-auto p-4 max-w-3xl">
      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back button */}
        <motion.div variants={itemVariants}>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('projects.title')}
            </Link>
          </Button>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold"
          variants={itemVariants}
        >
          {project.title}
        </motion.h1>

        {/* Technologies */}
        <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          variants={itemVariants}
        >
          {project.shortDescription}
        </motion.p>

        {/* Links */}
        <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
          {project.repoUrl && (
            <Button variant="outline" asChild>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('projects.ui.btnViewRepo')}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
          {project.projectUrl && (
            <Button asChild>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('projects.ui.btnViewProject')}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
          {project.siteUrl && (
            <Button asChild>
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('projects.ui.btnVisitSite')}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
          {project.downloadUrl && (
            <Button variant="outline" asChild>
              <a href={project.downloadUrl} download>
                {project.downloadLabel || t('projects.ui.btnDownloadFile')}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
          {project.downloadUrl2 && (
            <Button variant="outline" asChild>
              <a href={project.downloadUrl2} download>
                {project.downloadLabel2 || t('projects.ui.btnDownloadFile')}
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          )}
        </motion.div>

        {/* Rich Content */}
        {project.content && project.content.length > 0 && (
          <motion.div
            className="flex flex-col gap-6 mt-4"
            variants={itemVariants}
          >
            {project.content.map((block, index) => {
              switch (block.type) {
                case 'text':
                  return (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-foreground"
                    >
                      {block.value}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2
                      key={index}
                      className="text-xl sm:text-2xl font-semibold mt-4"
                    >
                      {block.value}
                    </h2>
                  );
                case 'image':
                  return (
                    <img
                      key={index}
                      src={block.value}
                      alt={block.alt}
                      className="rounded-lg w-full object-cover"
                    />
                  );
                case 'list':
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2">
                      {block.value.map((item, i) => (
                        <li key={i} className="text-base leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
