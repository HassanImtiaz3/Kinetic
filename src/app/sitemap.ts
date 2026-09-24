import type { MetadataRoute } from 'next';
import { ROUTES } from '@/shared/constants/routes';
import { SITE_URL } from '@/shared/constants/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [ROUTES.home, ROUTES.about, ROUTES.services, ROUTES.contact];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
