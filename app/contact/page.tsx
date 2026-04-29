'use client';

import { useLanguage } from '@/lib/language-context';
import { motion, type Variants } from 'framer-motion';
import { Mail, Info } from 'lucide-react';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const contacts = [
  {
    id: 'email',
    icon: Mail,
    href: 'mailto:luca.ffz@icloud.com',
    label: 'Email',
    value: 'luca.ffz@icloud.com',
  },
  {
    id: 'linkedin',
    iconPath:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    href: 'https://www.linkedin.com/in/luca-fourfooz-593978336',
    label: 'LinkedIn',
    value: 'Luca Fourfooz',
  },
  {
    id: 'github',
    iconPath:
      'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    href: 'https://github.com/Lucacist',
    label: 'GitHub',
    value: 'Lucacist',
  },
];

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="container mt-12 mx-auto p-4 max-w-xl flex flex-col gap-8 py-12">
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold">{t('contact.title')}</h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {t('contact.description')}
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contacts.map((contact) => {
          const { id, icon, iconPath, href, label, value } = contact;
          return (
            <motion.a
              key={id}
              href={href}
              target={id !== 'email' ? '_blank' : undefined}
              rel={id !== 'email' ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-border/80 hover:bg-accent transition-colors"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center shrink-0">
                  {icon ? (
                    (() => {
                      const Icon = icon;
                      return <Icon className="h-4 w-4 text-muted-foreground" />;
                    })()
                  ) : (
                    <svg
                      className="h-4 w-4 text-muted-foreground"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={iconPath} />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </div>
              <span className="text-muted-foreground text-sm">↗</span>
            </motion.a>
          );
        })}
      </motion.div>

      <motion.div
        className="flex items-start gap-3 p-4 rounded-lg bg-muted"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const, delay: 0.4 }}
      >
        <Info className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t('contact.note')}
        </p>
      </motion.div>
    </div>
  );
}
