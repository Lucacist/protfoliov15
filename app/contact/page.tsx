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
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
