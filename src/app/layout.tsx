import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { JsonLd } from '@/shared/components/seo/JsonLd';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, TITLE_BRAND } from '@/shared/constants/site';
import { organizationJsonLd } from '@/shared/lib/structured-data';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_BRAND,
    template: `%s - ${TITLE_BRAND}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: TITLE_BRAND,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_BRAND,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={outfit.className} suppressHydrationWarning>
        <JsonLd data={organizationJsonLd()} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
