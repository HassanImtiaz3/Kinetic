import { SITE_DESCRIPTION, SITE_EMAIL, SITE_NAME, SITE_URL } from '@/shared/constants/site';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: SITE_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
  };
}
