'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { SITE_NAME, SITE_TAGLINE } from '@/shared/constants/site';
import './SiteLoader.css';

const SESSION_KEY = 'ke-loader-seen';

function shouldSkipLoader() {
  try {
    if (sessionStorage.getItem(SESSION_KEY) === '1') return true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  } catch {
    return false;
  }
  return false;
}

export function SiteLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    const bar = barRef.current;
    if (!root || !bar) return;

    if (shouldSkipLoader()) {
      sessionStorage.setItem(SESSION_KEY, '1');
      const frame = requestAnimationFrame(() => setVisible(false));
      return () => cancelAnimationFrame(frame);
    }

    document.documentElement.classList.add('is-loading');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          sessionStorage.setItem(SESSION_KEY, '1');
          document.documentElement.classList.remove('is-loading');
          setVisible(false);
        },
      });

      tl.from('.site-loader__mark', { opacity: 0, y: 16, scale: 0.92, duration: 0.55 })
        .from('.site-loader__name', { opacity: 0, y: 14, duration: 0.5 }, '-=0.25')
        .from('.site-loader__tagline', { opacity: 0, y: 12, duration: 0.45 }, '-=0.22')
        .from('.site-loader__track', { opacity: 0, duration: 0.35 }, '-=0.15')
        .fromTo(
          bar,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.35, ease: 'power2.inOut' },
          '-=0.1'
        )
        .to(root, { opacity: 0, duration: 0.45, ease: 'power2.in' }, '+=0.12')
        .set(root, { pointerEvents: 'none' });
    }, root);

    return () => {
      ctx.revert();
      document.documentElement.classList.remove('is-loading');
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={rootRef} className="site-loader" aria-hidden="true">
      <div className="site-loader__inner">
        <Image
          src="/logo.png"
          alt=""
          width={120}
          height={90}
          className="site-loader__mark"
          priority
        />
        <p className="site-loader__name">{SITE_NAME.toUpperCase()}</p>
        <p className="site-loader__tagline">{SITE_TAGLINE.toUpperCase()}</p>
        <div className="site-loader__track">
          <div ref={barRef} className="site-loader__bar" />
        </div>
      </div>
    </div>
  );
}
