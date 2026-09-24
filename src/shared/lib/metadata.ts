import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, TITLE_BRAND } from '@/shared/constants/site';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

/** Per-page Metadata with Open Graph + Twitter Card + canonical. */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    title === SITE_NAME || title === TITLE_BRAND ? title : `${title} - ${TITLE_BRAND}`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
