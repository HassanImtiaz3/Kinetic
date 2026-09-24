export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export const NAV_LINKS = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.about, label: 'About Us' },
  { href: ROUTES.services, label: 'Services' },
  { href: ROUTES.contact, label: 'Contact Us' },
] as const;
