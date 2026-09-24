import type { Metadata } from 'next';
import { ServicesPage } from '@/features/services/ServicesPage';
import { JsonLd } from '@/shared/components/seo/JsonLd';
import { ROUTES } from '@/shared/constants/routes';
import { pageMetadata } from '@/shared/lib/metadata';
import { breadcrumbJsonLd, servicesItemListJsonLd } from '@/shared/lib/structured-data';

export const metadata: Metadata = pageMetadata({
  title: 'IT Services',
  description:
    'Explore Kinetic Enterprise IT services in Lahore — web development, networking, CCTV security, mobile apps, access control, employee monitoring, biometric attendance, and IT consultancy.',
  path: ROUTES.services,
  keywords: [
    'IT services Lahore',
    'web development Pakistan',
    'CCTV installation',
    'network infrastructure',
    'mobile app development Lahore',
    'Kinetic Enterprise services',
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: ROUTES.home },
          { name: 'Services', path: ROUTES.services },
        ])}
      />
      <JsonLd data={servicesItemListJsonLd()} />
      <ServicesPage />
    </>
  );
}
