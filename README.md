# Brain Imaging and TMS Lab Website

Website for the [Brain Imaging and TMS Laboratory](https://brain-imaging-and-tms-laboratory.github.io/tmslab/), led by Dr. Ying-hui Chou at the University of Arizona.

Built with [Jekyll](https://jekyllrb.com/) on a customized [al-folio](https://github.com/alshedivat/al-folio) theme. Deployed automatically to GitHub Pages.

---

## Quick-edit cheatsheet

Most day-to-day updates touch just one file. Commit the change on the `main` branch and GitHub Actions rebuilds the site in ~2 minutes.

### Add a news item (shows up in the ticker + /news)

**Easiest way** — from the repo folder, run (date first, then the text):

```bash
bin/news 2026-05-07 "Congratulations to Sarah on passing her Master's defense!"
```

That creates a correctly named file in `_news/` with the date you typed. Review it, commit, push — done. (Optional third argument sets the filename slug: `bin/news 2026-05-07 "Long text..." sarah_defense`.)

**Manual way** — create a file in `_news/` named `announcement_YYYY_MM_short-slug.md`:

```markdown
---
layout: post
date: 2026-04-20 10:00:00-0700
inline: true
related_posts: false
---

Your one-line news sentence goes here.
```

The homepage ticker pulls the 5 most recent; the `/news/` page lists all. Each news item is one small text file — that's just how Jekyll stores them; `inline: true` means it renders as a single line of text, with no separate page.

**News with images:** omit `inline: true` and give the item a `title:`. The news list then shows the title as a link to its own page, and the file body becomes that page — you can write full Markdown there, including images (put them in `assets/img/` and reference with `![caption](/tmslab/assets/img/yourphoto.jpg)`). No item currently uses this mode, but it's supported.

### Add or edit a publication

Open `_bibliography/papers.bib` and add a BibTeX block at the top:

```bibtex
@article{chou2026newpaper,
  title   = {Your paper title},
  author  = {Chou, Y.-H. and Zhang, H.},
  journal = {Journal Name},
  year    = {2026},
  html    = {https://doi.org/...},
  abbr    = {J. Name}
}
```

Optional fields: `pdf`, `preview`, `selected`, `note`. Full field list at the top of `papers.bib`.

Citation counts on the Publications page refresh automatically from Google Scholar three times a week (Mon/Wed/Fri) via the `update-citations` GitHub Action — no manual step needed.

### Add a hero photo (rotating homepage banner)

Drop any `.jpg` / `.jpeg` / `.png` / `.webp` file into `assets/img/hero/`. It auto-appears in rotation on next build. Alphabetical order — prefix `01_`, `02_`, etc. if you want a specific sequence.

### Add a gallery photo

Drop the file into `assets/img/gallery/` with filename `YYYY-MM-DD_short-description.jpg`. Date becomes the caption label; filename (minus date) becomes the caption text. See `assets/img/gallery/README.md` for details.

### Edit a page (People, Research, Contact, Participate)

Open the matching `_pages/<name>.md` and edit the HTML directly. The structure is commented inline so it's easy to follow.

### Add a lab member

In `_pages/people.md`, copy an existing `<div class="tmslab-member-card">` block and update the fields. Save the photo as `assets/img/people/<lastname>.jpg` (square crop, ~400–800px).

### Move a member to Alumni

In `_pages/people.md`: delete their `tmslab-member-card` block from the Current Members grid, then copy an existing `tmslab-alumnus-card` block in the Alumni section and fill in their name, role(s) in the lab, and "Now: …" position. Keep their photo file in `assets/img/people/` — the alumni card reuses it (and hides itself gracefully if the photo is missing).

---

## Running the site locally (optional)

Only needed if you want to preview changes before pushing. Uses the project's native Ruby toolchain (rbenv-managed Ruby 3.2.2, Bundler).

```bash
bundle exec jekyll serve --livereload
```

The site runs at <http://localhost:4000/tmslab/> (note the `/tmslab/` path — that's the configured `baseurl`). `--livereload` auto-refreshes the browser when files change. `Ctrl+C` to stop.

First-time setup, or after a `Gemfile` change:

```bash
bundle install
```

If `bundle` or `ruby` isn't found, your shell hasn't picked up rbenv yet — open a new terminal or run `eval "$(rbenv init - zsh)"`.

---

## For AI assistants

See [AGENTS.md](AGENTS.md) for the full site-specific guide (build quirks, Sass gotchas, PurgeCSS safelist, deploy pitfalls).

## License

[MIT](LICENSE) — inherited from the upstream al-folio theme.
