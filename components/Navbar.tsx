"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, locales } from "@/lib/language-context";
import { Languages , Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", labelKey: "nav.home" },
    { href: "/projects", labelKey: "nav.projects" },
    { href: "/contact", labelKey: "nav.contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { locale, setLocale, t } = useLanguage();
    const [open, setOpen] = useState(false);

    const currentLocale = locales.find((l) => l.value === locale);

    return (
        <nav className="flex fixed top-0 left-0 right-0 z-50 bg-background h-12 items-center justify-center shadow-md">
            <div className="flex items-center justify-between gap-4 w-full max-w-4xl px-4">
                <img src="/landing/logo.svg" alt="Logo" className="h-6" />
                <ul className="flex gap-6 w-auto justify-center items-center">
                    {links.map(({ href, labelKey }) => {
                        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={cn(
                                        "text-base transition-colors",
                                        isActive
                                            ? "text-foreground font-semibold"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {t(labelKey)}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 gap-1.5 px-2">
                            <Languages className="h-4 w-4" />
                            <span className="text-lg">{currentLocale?.flag}</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-40 p-1 gap-1">
                        {locales.map((l) => (
                            <button
                                key={l.value}
                                onClick={() => {
                                    setLocale(l.value);
                                    setOpen(false);
                                }}
                                className={cn(
                                    "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-accent",
                                    locale === l.value && "bg-accent font-medium"
                                )}
                            >
                                <span>{l.flag}</span>
                                <span>{l.label}</span>
                                {locale === l.value && <Check className="ml-auto h-3.5 w-3.5" />}
                            </button>
                        ))}
                    </PopoverContent>
                </Popover>
            </div>
        </nav>
    );
}