import { Metadata } from 'next';
import ProjectsPage from '@/components/project/ProjectsPage';

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Découvrez mes projets de développement web full-stack : applications Next.js, React, TypeScript, Node.js, PostgreSQL et plus encore.',
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
    images: [
      {
        url: '/api/og?title=Mes%20projets&subtitle=D%C3%A9couvrez%20mes%20r%C3%A9alisations%20full-stack',
        width: 1200,
        height: 630,
        alt: 'Projets - Luca Fourfooz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Projets - Luca Fourfooz',
    description:
      'Découvrez mes projets de développement web full-stack.',
    images: ['/api/og?title=Mes%20projets&subtitle=D%C3%A9couvrez%20mes%20r%C3%A9alisations%20full-stack'],
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
