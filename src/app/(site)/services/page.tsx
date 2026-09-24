import type { Metadata } from 'next';
import { ServicesPage } from '@/features/services/ServicesPage';
import { ROUTES } from '@/shared/constants/routes';
import { pageMetadata } from '@/shared/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  description:
    'Explore Kinetic Enterprise services — web development, networking, CCTV, customized software, mobile apps, access control, employee monitoring, biometrics, and IT consultancy.',
  path: ROUTES.services,
});

export default function Page() {
  return <ServicesPage />;
}
