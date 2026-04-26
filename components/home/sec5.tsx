'use client';

import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Sec5() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto p-8 max-w-5xl flex flex-col gap-4">
      <motion.div
        className="flex flex-col gap-2 p-8 rounded-lg"
        style={{ backgroundColor: 'var(--background-muted)' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1 className="text-xl sm:text-2xl font-bold text-primary text-center">
          {t('sec5.title')}
        </h1>
        <h3 className="text-md sm:text-lg text-muted-foreground text-center">
          {t('sec5.subtitle')}
        </h3>
        <div className="flex justify-center gap-4 flex-wrap gap-y-2">
          <Button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            <a
              className="flex items-center gap-2"
              target="_blank"
              href="mailto:luca.ffz@icloud.com?subject=Contact depuis le portfolio&body=Bonjour, je vous contacte pour..."
            >
              luca.ffz@icloud.com
              <ArrowUpRight />
            </a>
          </Button>
          <Button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            <a
              className="flex items-center gap-2"
              target="_blank"
              href="https://www.linkedin.com/in/luca-fourfooz-593978336"
            >
              Linkedin
            </a>
          </Button>
          <Button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            <a
              className="flex items-center gap-2"
              target="_blank"
              href="https://github.com/Lucacist"
            >
              Github
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
