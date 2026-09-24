'use client';

import { useEffect } from 'react';
import { ROUTES } from '@/shared/constants/routes';

/** Unknown routes and notFound() calls send users home — no 404 UI. */
export default function NotFound() {
  useEffect(() => {
    window.location.replace(ROUTES.home);
  }, []);

  return null;
}
