<p align="center"><img src="docs/readme/banner.png" alt="María José Mena Ledesma portfolio: hero section with the mj logo and the word PORTFOLIO" width="100%"></p>

# María José Mena Ledesma · Portfolio

Static one-page portfolio (ES/EN). Plain HTML/CSS/JS, no build step.

| Path | What |
|---|---|
| `index.html` | the page |
| `css/style.css` | styles (light + dark) |
| `js/main.js` | ES/EN texts, projects, carousels |
| `assets/img/` | photos, logos, icons |

Fonts (Bricolage Grotesque) load from Google Fonts.

## How a change goes live

<p align="center"><img src="docs/readme/flow.png" alt="Forgejo push mirror to GitHub, Cloudflare Pages deploys from GitHub to the custom domain" width="100%"></p>

1. Commit and push to `main` on Forgejo (`Martynas-Cloud/menaledesma-portfolio`), the source of truth.
2. Forgejo's push mirror copies it to the private GitHub repo on every push.
3. Cloudflare Pages deploys from GitHub: framework **None**, build command empty, output directory `/`.

Never commit to the GitHub copy directly; the mirror overwrites it.

Local preview: `python3 -m http.server 8000` in the repo root.

README art: `docs/readme/src/` (re-render with `node docs/readme/src/render.cjs` from the repo root).
