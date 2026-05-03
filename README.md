# KickProtect Site

Static landing page for `kickprotect.hu`.

## Cloudflare Pages

Use these settings when connecting the Git repository:

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
