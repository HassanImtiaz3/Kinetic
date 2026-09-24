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

Push to `main` builds the site and publishes it to the **`cpanel`** branch.
cPanel Git then copies those files into `public_html`.

### GitHub

| Secret | Example |
|--------|---------|
| `SITE_URL` | `https://kineticenterprise.com.pk` |

(FTP secrets are unused with this flow.)

### cPanel (one-time)

1. **Git Version Control** → Create → clone `https://github.com/HassanImtiaz3/Kinetic.git`
2. Set the checked-out branch to **`cpanel`** (after the first Actions run creates it).
3. Ensure deploy path / `.cpanel.yml` targets `/home/techhgxq/public_html/`.
4. Optional: add a GitHub webhook so each push auto-deploys (cPanel shows the webhook URL).
