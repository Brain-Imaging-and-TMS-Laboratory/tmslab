# TMS Lab Website — Agent Guide

Site for the Brain Imaging and TMS Laboratory, Dr. Ying-hui Chou, University of Arizona. Built on a customized [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

Live URL: https://brain-imaging-and-tms-laboratory.github.io/tmslab/

## Build & deploy

- Local dev (the author's actual workflow): `bundle exec jekyll serve --livereload` → http://localhost:4000/tmslab/ (auto-rebuild on file changes; livereload auto-refreshes the browser). Stop with `Ctrl+C`.
- Ruby toolchain: rbenv-managed Ruby 3.2.2, Bundler 4.x. After `Gemfile`/`Gemfile.lock` changes, run `bundle install` before re-serving.
- The `Dockerfile` and `docker-compose.yml` are inherited from upstream al-folio and are NOT used by the author. Don't suggest `docker compose up` — the author's Mac doesn't have a working Docker engine, and the native Ruby setup is faster anyway.
- Deploy: GitHub Actions `.github/workflows/deploy.yml` runs on every push to `main` that touches source files, builds with `JEKYLL_ENV=production`, runs PurgeCSS, and pushes `_site/` to the `gh-pages` branch. The only workflow that matters is `deploy.yml` (the upstream `update-citations.yml` Google Scholar cron was removed — it was never configured for this lab).
- Node/npm aren't installed on the author's Mac — don't try to run PurgeCSS locally. The CI installs `purgecss` globally and runs `purgecss -c purgecss.config.js` against `_site/`.

## Critical config (`_config.yml`)

- `url: https://brain-imaging-and-tms-laboratory.github.io` + `baseurl: /tmslab` — these must be paired. If the org or repo name changes, update both.
- `search_enabled: false` — global ⌘K nav search is intentionally off.
- `bib_search: true` — the filter input on the Publications page. Must stay true or the filter disappears.
- `max_author_limit: 10` — authors shown before "et al." truncation in publication entries. Must be an explicit number; blank is treated as truthy and collapses every entry.
- `imagemagick` widths: `[480, 800, 1400]` — responsive image variants generated at build time. Gallery auto-discovery filters these out so originals aren't quadruplicated.

## Page inventory

Live pages in `_pages/` (linked from `_includes/header.liquid`): `about.md` (homepage), `research.md`, `publications.md`, `people.md`, `news.md`, `gallery.md`, `participate.md`, `contact.md`. Plus `404.md` and `join-redirect.md` (redirects the old `/join/` URL to `/participate/`).

The nav does NOT include an "About" item — the site title in the navbar serves that role and links to the homepage.

## Custom styling — `_sass/_tmslab.scss`

This file holds all lab-specific CSS. It's `@use`d last in `assets/css/main.scss` so it overrides al-folio defaults without `!important` wherever specificity permits.

Desert/terracotta palette tokens are defined at the top. Section conventions:

- `.tmslab-hero` — homepage Tucson skyline hero (gradient overlay for contrast).
- `.tmslab-objectives-grid`, `.tmslab-research-grid`, `.tmslab-cta-grid` — homepage content grids.
- `.tmslab-themes-label` — small-caps section labels used on Research/Join pages.
- `.tmslab-pi-section`, `.tmslab-members-grid` — People page.
- `.tmslab-ticker*` — CSS-marquee news ticker (below navbar, homepage only).
- `.tmslab-font-toggle*` — floating font-size pill, bottom-left.
- `.tmslab-modal*` — participate-in-a-study modal (site-wide, triggered by `data-tmslab-open-modal="participate"`).
- `.tmslab-form-card`, `.tmslab-map-card`, `.tmslab-contact-*` — Contact page.

### Known Sass gotcha — CSS custom properties inside `calc()`

Sass's math engine parses `--foo-bar` inside `calc()` as subtraction operators (`- -foo - bar`) and mangles the output under compression. The font-size toggle hit this:

```scss
// BAD — compresses to `calc(100% * var( -  - tmslab - font - scale, 1))`
html { font-size: calc(100% * var(--tmslab-font-scale, 1)); }

// GOOD — interpolation passes the expression through verbatim
html { font-size: #{"calc(100% * var(--tmslab-font-scale, 1))"}; }
```

Apply the same pattern anywhere you combine `calc()` with a `var(--custom-property)`.

## Font-size toggle

- Target audience includes older adults (50–85), so a persistent "regular / big" pair lives bottom-left as a floating pill.
- Class lives on `<html>` (NOT `<body>`) — custom properties inherit down, not up.
- Preference persists in `localStorage` under `tmslab-font-size` (`"regular"` | `"big"`).
- A tiny inline preload script in `_layouts/default.liquid` applies `html.font-size-big` before body paint to avoid flash-of-unstyled-size on reload.
- Runtime class is applied by `assets/js/font-toggle.js`.

## PurgeCSS

`purgecss.config.js` carries a safelist for classes applied only at runtime by JS, which the purger would otherwise strip because they never appear as static attributes in the built HTML:

- `font-size-big` — font toggle runtime class
- `modal-open` — set on `<body>` while overlays are open
- `is-visible` — toast for participate-modal submit
- `is-active` — legacy carry-over; safe kept

Greedy patterns `/^font-size-/` and `/^is-/` catch future additions. When adding new JS-driven classes, add them (or a matching pattern) to the safelist, otherwise they disappear in production.

## Contact forms

Both the Contact page (`_pages/contact.md`) and the Participate-in-a-study modal (`_includes/participate_modal.liquid`) render a short intro + an embedded Microsoft Forms `<iframe>` (with `&embed=true` on the URL) + a privacy note. No site-side form state or backend.

- **Contact form:** `https://forms.office.com/...UM0hWNTAxTVZTV1I1VFE4NTRSMklOUkc3WS4u&embed=true`
- **Study interest form:** `https://forms.office.com/...UNEpENzY5MVpCQ0JOMzNBWlY4VFVXS1JaSi4u&embed=true`

Dr. Chou (or whoever owns the Microsoft Forms) receives submissions directly in the Forms responses dashboard. Shared iframe CSS lives in `_sass/_tmslab.scss` under `.tmslab-embed-wrap` (base + modifiers `--contact` / `--modal`), `.tmslab-form-intro`, `.tmslab-form-note`. The modal widens to 700px when it contains an embed via `.tmslab-modal-card:has(.tmslab-embed-wrap--modal)` — older browsers without `:has()` just get the default modal width.

If a URL changes, update it in both the Liquid file and the Markdown file; no other wiring is needed. Iframe heights are fixed (720px contact / 620px modal, 800px / 700px mobile); if Microsoft Forms lengthens either form, bump those heights. The CSP `frame-src 'self' https:` in `head.liquid` already permits the embed.

Legacy Formsubmit history (honeypot, `_captcha`, `_next`, inline success banner, `?sent=1` / `?participation_sent=1` toast hooks) has been removed from both pages — the toast JS in `assets/js/participate-modal.js` is dormant unless someone visits a URL carrying `?participation_sent=1`.

## News ticker

- Content source: `_news/*.md` files (each a single news item with front-matter). All current items use `inline: true` (one-line text, no standalone page). `bin/news YYYY-MM-DD "Text here"` scaffolds a new item with the correct filename and front matter (date is user-supplied, never auto-generated).
- Rendered by `_includes/news_ticker.liquid` as a CSS-marquee (content duplicated twice for a seamless loop). No JS rotation.
- Only renders on the homepage (guarded by `{% if page.layout == 'about' %}` in `_layouts/default.liquid`).
- `prefers-reduced-motion: reduce` pauses the scroll.

## Gallery

`_pages/gallery.md` auto-discovers images from `assets/img/gallery/`. Filename becomes a title-cased caption. The discovery loop filters out `-480`/`-800`/`-1400` imagemagick variants so each original shows exactly once. Lightbox: `assets/js/gallery-lightbox.js`.

## Publications

- Source: `_bibliography/papers.bib` (BibTeX).
- Full author lists are shown up to `max_author_limit: 10`, then truncated with "et al."
- Filter input is rendered inline next to the page heading on `_pages/publications.md` — controlled by `bib_search: true`.
- Year markers on the left of each year group.

## Favicons

Generated by [realfavicongenerator.net](https://realfavicongenerator.net/). Files live in `assets/img/favicons/`. The `site.webmanifest` contains `/tmslab/` prefixes — if `baseurl` changes, regenerate or manually update the manifest paths.

## Common pitfalls

- **"My change works locally but not on deploy"** — 95% of the time it's either (a) Sass's calc/custom-property interaction (above), or (b) PurgeCSS stripping a runtime class (add to safelist).
- **Kramdown wraps bare `<a>` in `<p>`** — if an inline HTML link looks wrong-sized, it may have inherited a `<p>` `max-width` constraint. Wrap in an explicit `<div>`.
- **Stale `_site/`** — `bundle exec jekyll clean` before debugging "why is this old thing still showing up?"
- **`max_author_limit` blank** — see config section. Always set an explicit integer.
- **Caching** — updated assets (e.g., a replaced photo) often appear old due to browser cache. `bust_file_cache` / `bust_css_cache` Liquid filters handle this for CSS/JS but NOT for images referenced by front-matter paths. Ask the user to hard-reload when debugging image updates.
- **Do not run PurgeCSS locally** — no npm installed. Deploy CI handles it.

## Pre-commit

Format before committing:

```bash
npx prettier . --write
```

(First-time setup: `npm install --save-dev prettier @shopify/prettier-plugin-liquid`.)

## Git workflow

- Main branch: `main`.
- Deploy branch: `gh-pages` (auto-generated by Actions — don't edit by hand).
- Remote: `https://github.com/Brain-Imaging-and-TMS-Laboratory/tmslab.git` (org-owned after Apr 2026 transfer from `hangbinzhang/tmslab`).
