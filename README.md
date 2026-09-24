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

## Deploy (GitHub Actions → cPanel)

Push to `main` builds the static site and uploads `out/` over FTP.

1. In cPanel → **FTP Accounts**, create an FTP user (or use the main account) with access to the domain document root.
2. In GitHub → **Settings → Secrets and variables → Actions**, add:

| Secret | Example |
|--------|---------|
| `FTP_SERVER` | `198.54.117.242` or `ftp.yourdomain.com` |
| `FTP_USERNAME` | `techhgsg` |
| `FTP_PASSWORD` | *(FTP password)* |
| `FTP_SERVER_DIR` | `/public_html/` or `/yourdomain.com/` |
| `SITE_URL` | `https://yourdomain.com` |

3. Push to `main` (or run **Actions → Deploy to cPanel → Run workflow**).
