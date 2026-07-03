# Syndication (POSSE)

Publish once here (this repo → jerryhshi.com); let it fan out. This site is
the **canonical source of truth**; every other platform is a mirror.

## What's live now

- **RSS feed:** `https://jerryhshi.com/rss.xml` (all blog posts, newest
  first). This is the universal bus — most syndication reads from it.
- **Sitemap:** `https://jerryhshi.com/sitemap-index.xml` (discovery).

## Publish flow

1. Add a post: `src/content/blog/<slug>.md` with frontmatter
   (`title`, `date`, optional `description`, `scene`, `people`).
2. Commit + push to `main`. GitHub Actions builds and deploys to
   jerryhshi.com automatically.
3. RSS updates on deploy → downstream mirrors pick it up.

## The minimal set (keep this small on purpose)

Always: **this site + RSS + email.** Then **one** channel matched to the
medium. Don't run site + Substack + YouTube + IG + X in parallel — every
surface is maintenance you have to sustain.

## Email via Buttondown (stub — do once)

Buttondown can send a newsletter automatically from the RSS feed. No account
is wired yet; when ready:

1. Create a Buttondown account (free tier is fine to start).
2. Settings → **RSS-to-email**: add feed `https://jerryhshi.com/rss.xml`.
3. Choose "create a draft" (review before send) or "send automatically."
   Start with draft-review until the cadence feels right.
4. Add the subscribe form/link to `src/pages/links.astro` or the blog index.

Result: pushing a post → site updates → Buttondown emails the list. No
copy-paste.

## Text mirrors (optional, RSS-driven)

- **Bluesky / Mastodon:** use an RSS→post bridge (e.g. echofeed) pointed at
  the feed. Opt-in, low maintenance.
- **Substack ("Jerry the Goat"):** currently linked from the blog index.
  Substack has no clean auto-post from an external RSS, so it stays manual —
  decide whether it earns the double-post or gets replaced by Buttondown.

## Media surfaces (not automatic — one trigger, per-platform asset)

YouTube / Instagram cannot be generated from a markdown post. When a piece
is video/visual: keep the master in the piece's assets, and add a publish
step (YouTube Data API upload; Meta Graph API for IG) that uploads the
per-platform export. Add this only when a media channel is actually chosen —
not before.
