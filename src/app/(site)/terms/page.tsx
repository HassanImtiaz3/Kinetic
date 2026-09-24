import type { Metadata } from 'next';
import { LegalPage } from '@/features/legal/LegalPage';
import { ROUTES } from '@/shared/constants/routes';
import { TERMS_SECTIONS } from '@/shared/content/legal';
import { pageMetadata } from '@/shared/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service for the Kinetic Enterprise website — acceptable use, intellectual property, and limitations of liability.',
  path: ROUTES.terms,
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lede="The rules and conditions that apply when you access or use the Kinetic Enterprise website."
      updated="September 24, 2026"
      sections={TERMS_SECTIONS}
    />
  );
}
