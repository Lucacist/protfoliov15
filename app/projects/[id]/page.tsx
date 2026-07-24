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

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  return <ProjectDetail projectId={id} />;
}
