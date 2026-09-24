import type { Metadata } from 'next';
import { ContactPage } from '@/features/contact/ContactPage';
import { ROUTES } from '@/shared/constants/routes';
import { pageMetadata } from '@/shared/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Contact Kinetic Enterprise — IT Solutions Provider. Phone +92-333-480-2973 · info@KineticEnterprise.com.pk',
  path: ROUTES.contact,
});

export default function Page() {
  return <ContactPage />;
}
