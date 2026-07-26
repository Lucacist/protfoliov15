import { Metadata } from 'next';
import ProjectDetail from '@/components/project/ProjectDetail';
import { getProjectById, getAllProjectIds } from '@/lib/data/projects';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: 'Projet non trouvé' };
  }

  const ogParams = new URLSearchParams({
    title: project.title,
    subtitle: project.shortDescription.slice(0, 120),
    tags: project.technologies.join(','),
  }).toString();

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: `/api/og?${ogParams}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: project.title,
      description: project.shortDescription,
      images: [`/api/og?${ogParams}`],
    },
  };
}

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  return <ProjectDetail projectId={id} />;
}
