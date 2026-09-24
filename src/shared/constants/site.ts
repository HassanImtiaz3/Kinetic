export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

// Fails the production build instead of silently shipping sitemap.xml / robots.txt / Open
// Graph URLs that point at example.com. Set NEXT_PUBLIC_SITE_URL in the Amplify console.
if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error(
    'NEXT_PUBLIC_SITE_URL is not set. Add it in the Amplify console (Environment variables) before building for production.',
  );
}

export const SITE_NAME = 'Kinetic Enterprise';
export const TITLE_BRAND = 'Kinetic Enterprise';
export const SITE_TAGLINE = 'Bringing Possibilities to Your Imagination';
export const SITE_SUBLINE =
  'IT Solutions That Make Your Business Easier, Better, and More Efficient.';
export const SITE_DESCRIPTION =
  'Kinetic Enterprise delivers innovative IT solutions, technology products, and professional services that help businesses operate more efficiently, strengthen infrastructure, and achieve sustainable growth.';
export const SITE_EMAIL = 'info@KineticEnterprise.com.pk';
export const SITE_PHONE = '+92-333-480-2973';
export const SITE_WEB = 'www.KineticEnterprise.com.pk';
