# 6h05t.net — Experimental Fiction Archive

A deployable, responsive static website built from the visual mockup.

## Local preview

From this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy

Upload this folder to any static host (Cloudflare Pages, Vercel, Netlify, or conventional web hosting). The site has no build step and needs no dependencies.

- Cloudflare Pages: connect a repository containing the files and set framework preset to **None**, with output directory `/` (or deploy the folder using direct upload).
- Vercel: deploy as a static project with no build command.

## Site structure

- `index.html` — full page, including The Society, The Last Stand, Process, and About.
- `styles.css` — layout, dark visual system, responsive states, accessibility.
- `script.js` — chapter links, mobile navigation, active section indicator.
- `assets/` — cropped visual artwork from the approved layout mockup.

The chapter list currently links to `secondrealm.net/the-society-chapter-1` through `...-16`, preserving existing URLs.

**Before launch:** confirm links to Notion, X accounts, and any early historical archives are still live. Replace the `secondrealm.net` chapter URLs if you choose to host the stories locally at `6h05t.net` instead.
