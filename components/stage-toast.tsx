'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/language-context';

export function StageToast() {
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      toast(t('toast.title'), {
        description: t('toast.description'),
        duration: 8000,
        action: {
          label: t('toast.cta'),
          onClick: () => (window.location.href = '/contact'),
        },
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, [t]);

  return null;
}
