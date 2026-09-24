export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const NAV_LINKS = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.about, label: 'About Us' },
  { href: ROUTES.services, label: 'Services' },
  { href: ROUTES.contact, label: 'Contact Us' },
] as const;

export const LEGAL_LINKS = [
  { href: ROUTES.privacy, label: 'Privacy Policy' },
  { href: ROUTES.terms, label: 'Terms of Service' },
] as const;
