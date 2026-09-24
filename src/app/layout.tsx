import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { JsonLd } from '@/shared/components/seo/JsonLd';
import { SiteLoader } from '@/shared/components/ui/SiteLoader';
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  TITLE_BRAND,
} from '@/shared/constants/site';
import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from '@/shared/lib/structured-data';
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
    default: `${TITLE_BRAND} | IT Solutions in Lahore, Pakistan`,
    template: `%s | ${TITLE_BRAND}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
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
    title: `${TITLE_BRAND} | IT Solutions in Lahore, Pakistan`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: 'website',
    images: [{ url: '/logo.png', width: 1024, height: 766, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE_BRAND} | IT Solutions in Lahore, Pakistan`,
    description: SITE_DESCRIPTION,
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK" className={outfit.variable}>
      <body className={outfit.className} suppressHydrationWarning>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <SiteLoader />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
