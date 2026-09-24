import type { Metadata } from 'next';
import {
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  TITLE_BRAND,
} from '@/shared/constants/site';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  noIndex?: boolean;
}

/** Per-page Metadata with Open Graph + Twitter Card + canonical. */
export function pageMetadata({
  title,
  description,
  path,
  keywords = SITE_KEYWORDS,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle =
    title === SITE_NAME || title === TITLE_BRAND || title === 'Home'
      ? `${TITLE_BRAND} | IT Solutions in Lahore, Pakistan`
      : `${title} | ${TITLE_BRAND}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords: [...keywords],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: 'technology',
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: 'website',
      images: [{ url: '/logo.png', width: 1024, height: 766, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/logo.png'],
    },
  };
}
