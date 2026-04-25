'use client';

import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/language-context';

export default function Sec2() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto p-4 max-w-5xl flex flex-col gap-4">
      <h1 className="text-xl sm:text-2xl font-bold">{t('sec2.title')}</h1>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">Next.js</Badge>
        <Badge variant="outline">TypeScript</Badge>
        <Badge variant="outline">TailwindCSS</Badge>
        <Badge variant="outline">Node.js</Badge>
        <Badge variant="outline">PostgreSQL</Badge>
        <Badge variant="outline">Docker</Badge>
        <Badge variant="outline">Git</Badge>
        <Badge variant="outline">Figma</Badge>
        <Badge variant="outline">VS Code</Badge>

        {/* Langages */}
        <Badge variant="outline">PHP</Badge>
        <Badge variant="outline">C#</Badge>
        <Badge variant="outline">C++</Badge>
        <Badge variant="outline">JavaScript</Badge>
        <Badge variant="outline">HTML5 / CSS3</Badge>
        <Badge variant="outline">Vue.js</Badge>

        {/* Infrastructure */}
        <Badge variant="outline">Linux</Badge>

        {/* Data & DevOps */}
        <Badge variant="outline">MySQL</Badge>
        <Badge variant="outline">GitHub Actions</Badge>
        <Badge variant="outline">SonarQube</Badge>

        {/* Méthodes */}
        <Badge variant="outline">MVVM</Badge>
        <Badge variant="outline">MVC</Badge>
      </div>
    </section>
  );
}
