"use client";

import { useLanguage } from "@/lib/language-context";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section>
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-5xl font-medium">{t("contact.title")}</h1>
        <p className="text-lg text-muted-foreground mt-4">
          {t("contact.description")}
        </p>
      </div>
    </section>
  );
}
