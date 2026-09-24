import type { Metadata } from 'next';
import { AboutPage } from '@/features/about/AboutPage';
import { ROUTES } from '@/shared/constants/routes';
import { pageMetadata } from '@/shared/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description:
    'Kinetic Enterprise is an IT solutions provider delivering innovative technology services and products — with a focus on collaboration, quality, and lasting client partnerships.',
  path: ROUTES.about,
});

export default function Page() {
  return <AboutPage />;
}
