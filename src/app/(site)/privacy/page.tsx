import type { Metadata } from 'next';
import { LegalPage } from '@/features/legal/LegalPage';
import { ROUTES } from '@/shared/constants/routes';
import { PRIVACY_SECTIONS } from '@/shared/content/legal';
import { pageMetadata } from '@/shared/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'Learn how Kinetic Enterprise collects, uses, and protects personal information when you visit our website or contact us.',
  path: ROUTES.privacy,
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How Kinetic Enterprise handles information you share with us through our website and communications."
      updated="September 24, 2026"
      sections={PRIVACY_SECTIONS}
    />
  );
}
