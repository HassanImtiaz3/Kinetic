# Kinetic Enterprise — Website

Marketing site for **Kinetic Enterprise**, built with **Next.js (App Router) + TypeScript**, statically exported.

Visual direction inspired by [Joblynk.ai](https://joblynk.ai/) (dark navy + cyan accent), with **Outfit** as the site font and GSAP scroll/hero motion.

## Pages

- `/` Home
- `/about` About Us
- `/services` Services
- `/contact` Contact Us

## Run locally

```bash
nvm use            # Node 20+
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static export → /out
npm run typecheck
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` before production builds (see `.env.example`).
