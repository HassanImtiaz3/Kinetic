'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, ROUTES } from '@/shared/constants/routes';
import { SITE_NAME } from '@/shared/constants/site';

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className={`site-nav${scrolled || open ? ' is-scrolled' : ''}`}>
        <div className="container section-x site-nav__inner">
          <Link href={ROUTES.home} className="site-nav__brand" aria-label={SITE_NAME} onClick={closeMenu}>
            <span className="site-nav__mark" aria-hidden />
            Kinetic
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
