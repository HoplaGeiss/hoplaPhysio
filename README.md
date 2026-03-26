# Praxis Lindenhof Physio Website

Production-ready static website for a fictional physiotherapy clinic in Zurich, built with Astro, Tailwind CSS, and Decap CMS, deployable on Netlify.

## Stack

- Astro 6 (static output)
- Tailwind CSS 4
- Astro Content Collections for structured content
- Decap CMS for editorial updates
- Netlify hosting, Netlify Forms, and Netlify Identity

## Pages

- `/` Home
- `/leistungen` Services
- `/team` Team
- `/kontakt` Contact with Netlify form
- `/admin` Decap CMS

## Content Editing

Main editable content lives in:

- `src/content/site/settings.json`
- `src/content/openingHours/hours.json`
- `src/content/services/*.md`
- `src/content/team/*.md`

Decap CMS config:

- `public/admin/config.yml`
- `public/admin/index.html`

## Local Development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Netlify Deployment

1. Push this repository to GitHub.
2. In Netlify, create a new site from the repository.
3. Build settings are already defined in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. In Netlify site settings, enable **Identity**.
5. Under **Identity > Services**, enable **Git Gateway**.
6. Invite CMS users under **Identity > Invite users**.
7. Access CMS at `/admin`.

## SEO and Performance

- Canonical URLs and sitemap are generated using Astro + `@astrojs/sitemap`.
- `robots.txt` is in `public/robots.txt`.
- Open Graph and meta tags are handled in `src/components/SeoHead.astro`.
- Images use descriptive alt text and `loading="lazy"` where relevant.
- JavaScript is minimized; only a small inline observer is used for subtle section reveal animation.

## Important Domain Update

Before going live, update the production domain if needed:

- `astro.config.mjs` (`site`)
- `public/robots.txt` (`Sitemap` URL)

