import type { Metadata } from 'next';
import { ContactPage } from '@/features/contact/ContactPage';
import { JsonLd } from '@/shared/components/seo/JsonLd';
import { ROUTES } from '@/shared/constants/routes';
import { pageMetadata } from '@/shared/lib/metadata';
import { breadcrumbJsonLd } from '@/shared/lib/structured-data';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Contact Kinetic Enterprise in Lahore for IT solutions, web development, networking, CCTV, mobile apps, and consultancy. Call +92-333-480-2973 or email info@KineticEnterprise.com.pk.',
  path: ROUTES.contact,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: ROUTES.home },
          { name: 'Contact', path: ROUTES.contact },
        ])}
      />
      <ContactPage />
    </>
  );
}
