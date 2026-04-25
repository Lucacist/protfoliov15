'use client';

import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
};

const techs = [
  'React',
  'Next.js',
  'TypeScript',
  'TailwindCSS',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'Git',
  'Figma',
  'VS Code',
  'PHP',
  'C#',
  'C++',
  'JavaScript',
  'HTML5 / CSS3',
  'Vue.js',
  'Linux',
  'MySQL',
  'GitHub Actions',
  'SonarQube',
];

export default function Sec2() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto p-4 max-w-5xl flex flex-col gap-4">
      <motion.h1
        className="text-xl sm:text-2xl font-bold"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {t('sec2.title')}
      </motion.h1>

      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {techs.map((tech) => (
          <motion.div key={tech} variants={itemVariants}>
            <Badge variant="outline">{tech}</Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
