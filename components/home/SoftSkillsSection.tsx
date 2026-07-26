'use client';

import { useLanguage } from '@/lib/language-context';
import { motion, type Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
};

export function SoftSkillsSection() {
  const { t } = useLanguage();

  const items = (t<string[]>('softSkills.items') ?? []) as string[];
  if (!items.length) return null;

  return (
    <section className="container mx-auto p-4 max-w-5xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-xl sm:text-2xl font-bold mb-4"
          variants={itemVariants}
        >
          {t('softSkills.title')}
        </motion.h2>

        <motion.div variants={itemVariants}>
          <Card className="bg-muted/50 border-border">
            <CardContent className="flex flex-wrap gap-2 p-4">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm px-3 py-1.5 border-border/60 bg-background/50"
                >
                  <Sparkles className="h-3 w-3 mr-1.5" />
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
