'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export default function GlobalError({
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
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 40, textAlign: 'center' }}>
        <h1>Something went wrong.</h1>
        <p style={{ color: '#6b7488' }}>An unexpected error occurred.</p>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 24 }}>
          <button type="button" onClick={() => reset()}>
            Try again
          </button>
          <Link href={ROUTES.home}>Back to home</Link>
        </div>
      </body>
    </html>
  );
}
