import type { Metadata } from 'next';
import { AboutPage } from '@/features/about/AboutPage';
import { JsonLd } from '@/shared/components/seo/JsonLd';
import { ROUTES } from '@/shared/constants/routes';
import { pageMetadata } from '@/shared/lib/metadata';
import { breadcrumbJsonLd } from '@/shared/lib/structured-data';

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description:
    'Learn about Kinetic Enterprise — a Lahore IT solutions company delivering web, networking, security, mobile, and consultancy services with over five years of experience.',
  path: ROUTES.about,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: ROUTES.home },
          { name: 'About Us', path: ROUTES.about },
        ])}
      />
      <AboutPage />
    </>
  );
}
