"use client";

import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  repoUrl?: string;
  projectUrl?: string;
};

export default function Projects({ searchQuery = "" }: { searchQuery?: string }) {
  const { t } = useLanguage();

  const items = t<Project[]>("projects.items");

  const filteredItems = Array.isArray(items)
    ? items.filter((project) => {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(query))
        );
      })
    : [];

  return (
    <div className="flex flex-col gap-8 mt-8 max-w-3xl mx-auto">
      {filteredItems.map((project) => (
        <article key={project.id} className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {t("projects.ui.btnViewRepo")}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
          <Button className="w-full" asChild>
            <a href={project.projectUrl || `#${project.id}`}>
              {t("projects.ui.btnViewProject")}
            </a>
          </Button>
        </article>
      ))}
    </div>
  );
}
