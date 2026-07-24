/**
 * JSON-LD structured data for the Person schema.
 * Helps Google display rich snippets in search results.
 */
export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Luca Fourfooz',
    url: 'https://lucaffz.dev',
    jobTitle: 'Développeur Full-Stack & Designer UI/UX',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'CESI École d\'Ingénieurs',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Assystem',
      url: 'https://assystem.com',
    },
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'TailwindCSS',
      'PostgreSQL',
      'UI/UX Design',
      'Full-Stack Development',
    ],
    sameAs: [
      'https://github.com/Lucacist',
      'https://www.linkedin.com/in/luca-fourfooz-593978336',
    ],
    email: 'mailto:luca.ffz@icloud.com',
    description:
      'Étudiant ingénieur à CESI et développeur full-stack chez Assystem. Spécialisé en Next.js, React, TypeScript, Node.js et design UI/UX.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
