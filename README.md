# KickProtect Site

Static landing page for `kickprotect.hu`.

## Cloudflare Pages

Use these settings when connecting the Git repository as a Pages project:

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `.`
- Root directory: `/`
- Production branch: `main`

After the first deploy, add `kickprotect.hu` under **Custom domains** in Cloudflare Pages.

## Files to deploy

Cloudflare only needs:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `_headers`

Local reference files and zip archives are intentionally ignored by Git.

## Cloudflare Workers Builds

This repo also includes `wrangler.toml` for Workers Builds using:

- Deploy command: `npx wrangler deploy`
- Asset directory: `.`

Static asset upload exclusions are controlled by `.assetsignore`.
