import Link from 'next/link';
import { NAV_LINKS, ROUTES } from '@/shared/constants/routes';
import { SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_WEB } from '@/shared/constants/site';

export function FooterArea() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <div className="site-footer__brand">{SITE_NAME}</div>
          <p>
            IT solutions that make your business easier, better, and more efficient — with quality,
            professionalism, and lasting partnerships.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            </li>
            <li>
              <a href={`tel:${SITE_PHONE.replace(/[^+\d]/g, '')}`}>{SITE_PHONE}</a>
            </li>
            <li>
              <a href={`https://${SITE_WEB}`} target="_blank" rel="noreferrer">
                {SITE_WEB}
              </a>
            </li>
            <li>
              <Link href={ROUTES.contact}>Send a message</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
