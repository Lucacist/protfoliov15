import { Metadata } from 'next';
import ProjectDetail from '@/components/project/ProjectDetail';
import fr from '@/lib/i18n/fr.json';

type Project = {
  id: string;
  title: string;
};

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const items = fr.projects.items as Project[];
  const project = items.find((item) => item.id === id);

  if (!project) {
    return { title: 'Projet non trouvé' };
  }

  return {
    title: project.title,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  return <ProjectDetail projectId={id} />;
}
