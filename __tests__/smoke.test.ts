/**
 * Smoke Tests — Page Rendering
 *
 * Starts the production server and verifies all routes return 200.
 * Requires `npm run build` first.
 */
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { spawn, type ChildProcess } from 'child_process';
import path from 'path';
import { getAllProjectIds } from '@/lib/data/projects';

const PORT = 3777;
const BASE = `http://localhost:${PORT}`;

let server: ChildProcess;

async function fetchStatus(pathname: string): Promise<number> {
  const res = await fetch(`${BASE}${pathname}`, { redirect: 'manual' });
  return res.status;
}

describe('smoke tests — page rendering', () => {
  beforeAll(async () => {
    server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
      cwd: path.resolve(__dirname, '..'),
      stdio: 'pipe',
      env: { ...process.env, NODE_ENV: 'production' },
    });

    // Wait for server to be ready
    for (let i = 0; i < 30; i++) {
      try {
        await fetch(`${BASE}/`);
        return; // server is ready
      } catch {
        await new Promise((r) => setTimeout(r, 500));
      }
    }
    throw new Error('Server did not start within 15s');
  }, 30000);

  afterAll(() => {
    server?.kill('SIGTERM');
  });

  it('GET / → 200', async () => {
    expect(await fetchStatus('/')).toBe(200);
  });

  it('GET /projects → 200', async () => {
    expect(await fetchStatus('/projects')).toBe(200);
  });

  it('GET /contact → 200', async () => {
    expect(await fetchStatus('/contact')).toBe(200);
  });

  it('GET /sitemap.xml → 200', async () => {
    expect(await fetchStatus('/sitemap.xml')).toBe(200);
  });

  // Dynamic project pages
  const projectIds = getAllProjectIds();
  projectIds.forEach((id) => {
    it(`GET /projects/${id} → 200`, async () => {
      expect(await fetchStatus(`/projects/${id}`)).toBe(200);
    });
  });

  it('GET /nonexistent → 404', async () => {
    expect(await fetchStatus('/nonexistent-route-12345')).toBe(404);
  });
});
