import { Metadata } from 'next';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Luca Fourfooz pour des opportunités de stage, alternance ou projets freelance. Disponible par email, LinkedIn et GitHub.',
  keywords: [
    'contact',
    'luca fourfooz contact',
    'développeur freelance',
    'stage développeur',
    'alternance développeur',
    'embauche développeur',
  ],
  openGraph: {
    title: 'Contact - Luca Fourfooz',
    description:
      'Contactez-moi pour des opportunités de stage, alternance ou projets freelance.',
    url: 'https://lucaffz.dev/contact',
    images: [
      {
        url: '/api/og?title=Contact&subtitle=Discutons%20de%20votre%20projet',
        width: 1200,
        height: 630,
        alt: 'Contact - Luca Fourfooz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Contact - Luca Fourfooz',
    description:
      'Contactez-moi pour des opportunités de stage, alternance ou projets freelance.',
    images: ['/api/og?title=Contact&subtitle=Discutons%20de%20votre%20projet'],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
