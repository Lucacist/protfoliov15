'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { useLanguage, locales } from '@/lib/language-context';
import {
  Settings,
  Check,
  Sun,
  Moon,
  Monitor,
  Languages,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
] as const;

export function SettingsPopover() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useLanguage();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1.5 px-2"
          aria-label="Settings"
        >
          <Settings className="h-4 w-4" aria-hidden="true" />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-52 p-2">
        {/* Theme */}
        <div className="mb-2">
          <p className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Theme
          </p>
          <div className="flex flex-col gap-0.5">
            {themes.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => {
                  setTheme(value);
                  setOpen(false);
                }}
                className={cn(
                  'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent',
                  theme === value && 'bg-accent font-medium',
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
                {theme === value && (
                  <Check className="ml-auto h-3.5 w-3.5" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-1" />

        {/* Language */}
        <div>
          <p className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Languages className="h-3 w-3" />
            Language
          </p>
          <div className="flex flex-col gap-0.5">
            {locales.map((l) => (
              <button
                key={l.value}
                onClick={() => {
                  setLocale(l.value);
                  setOpen(false);
                }}
                className={cn(
                  'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent',
                  locale === l.value && 'bg-accent font-medium',
                )}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
                {locale === l.value && (
                  <Check className="ml-auto h-3.5 w-3.5" />
                )}
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
