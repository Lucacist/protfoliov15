'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/language-context';

export function StageToast() {
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('stage-toast-shown')) {
      return;
    }
    const timer = setTimeout(() => {
      toast(t('toast.title'), {
        description: t('toast.description'),
        duration: 8000,
        action: {
          label: t('toast.cta'),
          onClick: () => (window.location.href = '/contact'),
        },
      });
      sessionStorage.setItem('stage-toast-shown', 'true');
    }, 1500);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
