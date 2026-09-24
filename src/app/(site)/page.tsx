import type { Metadata } from 'next';
import { HomePage } from '@/features/home/HomePage';
import { ROUTES } from '@/shared/constants/routes';
import { SITE_DESCRIPTION } from '@/shared/constants/site';
import { pageMetadata } from '@/shared/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Home',
  description: SITE_DESCRIPTION,
  path: ROUTES.home,
});

export default function Page() {
  return <HomePage />;
}
