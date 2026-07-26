import type { Project } from './types';
import fr from './fr';
import en from './en';
import es from './es';

const projectsByLocale: Record<string, Project[]> = { fr, en, es };

export function getProjects(locale = 'fr'): Project[] {
  return projectsByLocale[locale] ?? projectsByLocale.fr;
}

export function getProjectById(id: string, locale = 'fr'): Project | undefined {
  return getProjects(locale).find((p) => p.id === id);
}

export function getAllProjectIds(): string[] {
  return projectsByLocale.fr.map((p) => p.id);
}

export { type Project, type ContentBlock } from './types';
