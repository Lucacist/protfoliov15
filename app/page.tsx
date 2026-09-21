import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';

// Lazy-load below-fold sections for better initial load performance
const Sec2 = dynamic(() => import('@/components/home/sec2'), {
  loading: () => <SectionSkeleton />,
});
const Sec3 = dynamic(() => import('@/components/home/sec3'), {
  loading: () => <SectionSkeleton />,
});
const SecAvailability = dynamic(
  () => import('@/components/home/SecAvailability'),
  { loading: () => <SectionSkeleton /> },
);
const SecFreelance = dynamic(
  () => import('@/components/home/SecFreelance'),
  { loading: () => <SectionSkeleton /> },
);
const Sec4 = dynamic(() => import('@/components/home/sec4'), {
  loading: () => <SectionSkeleton />,
});
const SecLanguages = dynamic(
  () =>
    import('@/components/home/LanguagesSection').then(
      (m) => ({ default: m.LanguagesSection }),
    ),
  { loading: () => <SectionSkeleton /> },
);
const SecSoftSkills = dynamic(
  () =>
    import('@/components/home/SoftSkillsSection').then(
      (m) => ({ default: m.SoftSkillsSection }),
    ),
  { loading: () => <SectionSkeleton /> },
);
const Sec5 = dynamic(() => import('@/components/home/sec5'), {
  loading: () => <SectionSkeleton /> },
);

function SectionSkeleton() {
  return (
    <div className="container mx-auto p-4 max-w-5xl animate-pulse">
      <div className="h-6 bg-muted rounded w-1/3 mb-4" />
      <div className="h-4 bg-muted rounded w-2/3" />
    </div>
  );
}

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <Hero />
      <Sec2 />
      <Sec3 />
      <SecAvailability />
      <Sec4 />
      <SecLanguages />
      <SecSoftSkills />
      <SecFreelance />
      <Sec5 />
    </section>
  );
}
