# Project status (January 30, 2026)

## Where we are
- Migrating the site from Jekyll to Astro.
- Legacy Jekyll files were removed (e.g. `_posts/`, `_layouts/`, `_includes/`, `.markdown` pages, `Gemfile`, `_config.yml`).
- New Astro project structure added (`astro.config.mjs`, `package.json`, `tsconfig.json`, `src/`, `public/`, `scripts/`).
- Design and image guidelines were added (`DESIGN_SYSTEM.md`, `IMAGE_GUIDELINES.md`).
- Editor/config folders added for local workflow (`.github/`, `.vscode/`, `.claude/`).

## How to run
- Install deps: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Notes
- `.gitignore` updated for the new toolchain.
- Images previously under `assets/images/` were removed with the Jekyll content.