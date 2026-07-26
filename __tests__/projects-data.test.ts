import { describe, it, expect } from 'vitest';
import { getProjects, getProjectById, getAllProjectIds } from '@/lib/data/projects';

describe('getProjects()', () => {
  it('returns projects for default locale (fr)', () => {
    const projects = getProjects();
    expect(projects.length).toBeGreaterThan(0);
  });

  it('returns projects for en locale', () => {
    const projects = getProjects('en');
    expect(projects.length).toBeGreaterThan(0);
    // Titles should be in English
    const calibre = projects.find((p) => p.id === 'calibre');
    expect(calibre).toBeDefined();
    expect(calibre!.title).toBe('Calibre');
  });

  it('returns projects for es locale', () => {
    const projects = getProjects('es');
    expect(projects.length).toBeGreaterThan(0);
  });

  it('falls back to fr for unknown locale', () => {
    const projects = getProjects('de');
    expect(projects.length).toBeGreaterThan(0);
  });

  it('all locales have the same number of projects', () => {
    const frCount = getProjects('fr').length;
    const enCount = getProjects('en').length;
    const esCount = getProjects('es').length;
    expect(enCount).toBe(frCount);
    expect(esCount).toBe(frCount);
  });
});

describe('getProjectById()', () => {
  it('returns a project by its id', () => {
    const project = getProjectById('easysave');
    expect(project).toBeDefined();
    expect(project!.id).toBe('easysave');
    expect(project!.title).toBeTruthy();
  });

  it('returns undefined for unknown id', () => {
    const project = getProjectById('nonexistent');
    expect(project).toBeUndefined();
  });

  it('returns project in the requested locale', () => {
    const fr = getProjectById('calibre', 'fr');
    const en = getProjectById('calibre', 'en');
    expect(fr).toBeDefined();
    expect(en).toBeDefined();
    // Descriptions should differ between locales
    expect(fr!.shortDescription).not.toBe(en!.shortDescription);
  });
});

describe('getAllProjectIds()', () => {
  it('returns an array of all project ids', () => {
    const ids = getAllProjectIds();
    expect(ids.length).toBeGreaterThan(0);
    expect(ids).toContain('calibre');
    expect(ids).toContain('easysave');
  });

  it('returns unique ids only', () => {
    const ids = getAllProjectIds();
    expect(new Set(ids).size).toBe(ids.length);
  });
});
