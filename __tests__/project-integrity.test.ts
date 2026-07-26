/**
 * Project Data Integrity
 *
 * Validates that every project in all locales has required fields
 * and that URLs are well-formed.
 */
import { describe, it, expect } from 'vitest';
import { getProjects, type Project } from '@/lib/data/projects';

const REQUIRED_FIELDS = ['id', 'title', 'category', 'shortDescription', 'technologies'] as const;
const URL_FIELDS = ['repoUrl', 'projectUrl', 'siteUrl'] as const;
const LOCALES = ['fr', 'en', 'es'] as const;

function validateProject(project: Project, locale: string): string[] {
  const errors: string[] = [];
  const prefix = `[${locale}/${project.id}]`;

  // Required fields
  for (const field of REQUIRED_FIELDS) {
    const value = project[field as keyof Project];
    if (!value) {
      errors.push(`${prefix} missing required field: ${field}`);
      continue;
    }
    if (field === 'technologies' && (!Array.isArray(value) || value.length === 0)) {
      errors.push(`${prefix} technologies must be a non-empty array`);
    }
  }

  // ID should be lowercase with hyphens
  if (!/^[a-z0-9-]+$/.test(project.id)) {
    errors.push(`${prefix} id should be lowercase with hyphens only: "${project.id}"`);
  }

  // URL validation
  for (const field of URL_FIELDS) {
    const url = project[field];
    if (url && typeof url === 'string') {
      try {
        new URL(url);
      } catch {
        errors.push(`${prefix} invalid ${field}: "${url}"`);
      }
    }
  }

  // Content blocks should have type
  if (project.content) {
    for (let i = 0; i < project.content.length; i++) {
      const block = project.content[i];
      if (!block.type) {
        errors.push(`${prefix} content[${i}] missing type`);
        continue;
      }
      if (block.type === 'image' && !('alt' in block)) {
        errors.push(`${prefix} content[${i}] image missing alt text`);
      }
    }
  }

  return errors;
}

describe('project data integrity', () => {
  LOCALES.forEach((locale) => {
    describe(`locale: ${locale}`, () => {
      const projects = getProjects(locale);

      it('has projects', () => {
        expect(projects.length).toBeGreaterThan(0);
      });

      it('has unique ids', () => {
        const ids = projects.map((p) => p.id);
        expect(new Set(ids).size).toBe(ids.length);
      });

      projects.forEach((project) => {
        it(`project "${project.id}" passes validation`, () => {
          const errors = validateProject(project, locale);
          expect(errors).toEqual([]);
        });
      });
    });
  });
});
