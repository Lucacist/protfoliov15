'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { AlignRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SettingsPopover } from '@/components/SettingsPopover';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/projects', labelKey: 'nav.projects' },
  { href: '/contact', labelKey: 'nav.contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="flex fixed top-0 left-0 right-0 z-50 h-14 items-center justify-center"
      style={{
        background: `linear-gradient(
          to bottom,
          var(--background) 0%,
          var(--background) 25%,
          color-mix(in srgb, var(--background) 90%, transparent) 50%,
          color-mix(in srgb, var(--background) 50%, transparent) 80%,
          transparent 100%
        )`,
      }}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between gap-4 w-full max-w-4xl px-4">
        <Link href="/" aria-label="Home">
          <Image
            src="/landing/logo.svg"
            alt="Logo"
            width={24}
            height={24}
            className="h-5 sm:h-6 w-auto"
            sizes="24px"
          />
        </Link>

        <ul className="hidden sm:flex gap-4 md:gap-6 w-auto justify-center items-center">
          {links.map(({ href, labelKey }) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'text-base transition-colors',
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(labelKey)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-0 sm:gap-2">
          <SettingsPopover />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="sm:hidden h-8 w-8 p-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <AlignRight className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed top-14 left-0 right-0 z-40"
          style={{
            background: `linear-gradient(
              to bottom,
              var(--background) 0%,
              var(--background) 60%,
              color-mix(in srgb, var(--background) 70%, transparent) 85%,
              transparent 100%
            )`,
          }}>
          <ul className="flex flex-col p-4 gap-2" role="menu">
            {links.map(({ href, labelKey }) => {
              const isActive =
                href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <li key={href} role="none">
                  <Link
                    href={href}
                    role="menuitem"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block py-2 px-3 rounded-md text-base transition-colors',
                      isActive
                        ? 'bg-accent text-foreground font-semibold'
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {t(labelKey)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
