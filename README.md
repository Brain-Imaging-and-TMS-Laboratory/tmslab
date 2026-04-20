# Brain Imaging and TMS Lab Website

Website for the [Brain Imaging and TMS Laboratory](https://brain-imaging-and-tms-laboratory.github.io/tmslab/), led by Dr. Ying-hui Chou at the University of Arizona.

Built with [Jekyll](https://jekyllrb.com/) on a customized [al-folio](https://github.com/alshedivat/al-folio) theme. Deployed automatically to GitHub Pages.

---

## Quick-edit cheatsheet

Most day-to-day updates touch just one file. Commit the change on the `main` branch and GitHub Actions rebuilds the site in ~2 minutes.

### Add a news item (shows up in the ticker + /news)

Create a new file in `_news/` named `announcement_YYYY_MM_short-slug.md`:

```markdown
---
layout: post
date: 2026-04-20 10:00:00-0700
inline: true
related_posts: false
---

Your one-line news sentence goes here.
```

The homepage ticker pulls the 5 most recent; the `/news/` page lists all.

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

### Add a hero photo (rotating homepage banner)

Drop any `.jpg` / `.jpeg` / `.png` / `.webp` file into `assets/img/hero/`. It auto-appears in rotation on next build. Alphabetical order — prefix `01_`, `02_`, etc. if you want a specific sequence.

### Add a gallery photo

Drop the file into `assets/img/gallery/` with filename `YYYY-MM-DD_short-description.jpg`. Date becomes the caption label; filename (minus date) becomes the caption text. See `assets/img/gallery/README.md` for details.

### Edit a page (People, Research, Contact, Participate)

Open the matching `_pages/<name>.md` and edit the HTML directly. The structure is commented inline so it's easy to follow.

### Add a lab member

In `_pages/people.md`, copy an existing `<div class="tmslab-member-card">` block and update the fields. Save the photo as `assets/img/people/<lastname>.jpg` (square crop, ~400–800px).

---

## Running the site locally (optional)

Only needed if you want to preview changes before pushing.

```bash
docker compose up
```

The site runs at <http://localhost:8080> with live reload.

---

## For AI assistants

See [AGENTS.md](AGENTS.md) for the full site-specific guide (build quirks, Sass gotchas, PurgeCSS safelist, deploy pitfalls).

## License

[MIT](LICENSE) — inherited from the upstream al-folio theme.
