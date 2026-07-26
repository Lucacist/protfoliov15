'use client';

import { useLanguage } from '@/lib/language-context';
import { motion, type Variants } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

type LanguageItem = {
  language: string;
  level: string;
};

export function LanguagesSection() {
  const { t } = useLanguage();

  const items = (t<LanguageItem[]>('languages.items') ?? []) as LanguageItem[];
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
          {t('languages.title')}
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-3"
          variants={itemVariants}
        >
          {items.map((item) => (
            <Card key={item.language} className="bg-muted/50 border-border flex-1 min-w-[160px]">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background ring-1 ring-border">
                  <Globe className="h-4 w-4 text-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{item.language}</p>
                  <Badge variant="secondary" className="mt-1 text-[11px] font-normal">
                    {item.level}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
