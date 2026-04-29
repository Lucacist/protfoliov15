import { Metadata } from 'next';
import ProjectsPage from '@/components/project/ProjectsPage';

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Découvrez mes projets de développement web full-stack : applications Next.js, React, TypeScript, Node.js, PostgreSQL et plus encore. Projets personnels et professionnels.',
  keywords: [
    'projets web',
    'portfolio projets',
    'Next.js projets',
    'React applications',
    'TypeScript',
    'développement full-stack',
    'projets open source',
  ],
  openGraph: {
    title: 'Projets - Luca Fourfooz',
    description:
      'Découvrez mes projets de développement web full-stack : applications Next.js, React, TypeScript, Node.js et plus encore.',
    url: 'https://lucaffz.dev/projects',
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
