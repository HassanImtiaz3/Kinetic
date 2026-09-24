'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, ROUTES } from '@/shared/constants/routes';
import { SITE_NAME } from '@/shared/constants/site';

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = window.scrollY > 12;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      const nextScrolled = scrollTop > 12;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      if (nextScrolled !== lastScrolled) {
        lastScrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className={`site-nav${scrolled || open ? ' is-scrolled' : ''}`}>
        <div ref={progressRef} className="site-nav__progress" aria-hidden="true" />
        <div className="container section-x site-nav__inner">
          <Link href={ROUTES.home} className="site-nav__brand" aria-label={SITE_NAME} onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt=""
              width={180}
              height={135}
              className="site-nav__logo"
              priority
            />
          </Link>

          <nav className="site-nav__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'is-active' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href={ROUTES.contact} className="btn btn-primary site-nav__cta">
            Talk to us
          </Link>

          <button
            type="button"
            className="site-nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`site-nav__mobile${open ? ' is-open' : ''}`}
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'is-active' : undefined}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        <Link href={ROUTES.contact} className="btn btn-primary" style={{ marginTop: 8 }} onClick={closeMenu}>
          Talk to us
        </Link>
      </nav>
    </>
  );
}
