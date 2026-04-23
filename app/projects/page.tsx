"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import Search from "@/components/project/Search";
import ProjectsList from "@/components/project/projects";

export default function Projects() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="container mt-12 mx-auto p-4 max-w-3xl gap-4">
      <div className="flex flex-row items-center gap-4 justify-between">
        <h1 className="text-3xl font-medium">{t("projects.title")}</h1>
        <Search onSearchChange={setSearchQuery} />
      </div>
      <ProjectsList searchQuery={searchQuery} />
    </section>
  );
}
