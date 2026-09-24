'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section-x container page-section--lg" style={{ textAlign: 'center' }}>
      <h1 className="section-heading">Something went wrong.</h1>
      <p style={{ fontSize: '16px', lineHeight: 1.55, color: 'var(--color-muted)', margin: '16px 0 32px' }}>
        An unexpected error occurred. You can try again, or head back to the homepage.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <button type="button" onClick={() => reset()} className="btn-hero-primary">
          Try again
        </button>
        <Link href={ROUTES.home} style={{ color: 'var(--color-blue)', fontWeight: 600, fontSize: '14px' }}>
          Back to home
        </Link>
      </div>
    </section>
  );
}
