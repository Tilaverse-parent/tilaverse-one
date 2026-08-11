# Tilaverse Website

A dependency-free, interactive corporate website inspired by the supplied Tilaverse reference. The project is configured for a static deployment on **Vercel**.

## Local development

```bash
npm run dev
```

Open `http://localhost:4173`.

## Production build

```bash
npm run build
```

This creates a static Vercel output in `dist/` containing the application and all locally hosted image assets.

## Deploy to Vercel

### Vercel dashboard

1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel reads `vercel.json` automatically. Confirm:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### Vercel CLI

```bash
npm install --global vercel
vercel
# for the production domain
vercel --prod
```

No environment variables, database, or server runtime are required for this version.

## Vercel configuration

- `vercel.json` sets the static build command and output folder.
- Image assets are served locally from `/public/images` and receive a long-lived immutable cache header.
- Security headers are supplied for all routes.
- Navigation is hash-based (`/#/about`, `/#/ventures/...`), so every active route works on Vercel without rewrite rules.

## Included experience

- High-fidelity responsive homepage with local visual assets
- Animated hero, counters, ticker, particle/orbit treatments, image hover states, scroll reveals, and testimonial carousel
- Active client-side routes for corporate, ventures, technology, impact, investors, careers, newsroom, legal, and contact content
- Working search overlay, mobile menu, contact/newsletter/talent/application/event forms, job filters, news filters, FAQs, download actions, and share feedback
