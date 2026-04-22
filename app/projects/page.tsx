"use client";

import { useLanguage } from "@/lib/language-context";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section>
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-5xl font-medium">{t("projects.title")}</h1>
        <p className="text-lg text-muted-foreground mt-4">
          {t("projects.description")}
        </p>
      </div>
    </section>
  );
}
