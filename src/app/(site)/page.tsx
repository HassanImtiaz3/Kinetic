import type { Metadata } from 'next';
import { HomePage } from '@/features/home/HomePage';
import { JsonLd } from '@/shared/components/seo/JsonLd';
import { ROUTES } from '@/shared/constants/routes';
import { SITE_DESCRIPTION } from '@/shared/constants/site';
import { HOME_FAQS } from '@/shared/content/site';
import { pageMetadata } from '@/shared/lib/metadata';
import { faqJsonLd } from '@/shared/lib/structured-data';

export const metadata: Metadata = pageMetadata({
  title: 'Home',
  description: SITE_DESCRIPTION,
  path: ROUTES.home,
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(HOME_FAQS)} />
      <HomePage />
    </>
  );
}
