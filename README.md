# Brain Imaging and TMS Lab Website

Website for the [Brain Imaging and TMS Laboratory](https://brain-imaging-and-tms-laboratory.github.io/tmslab/), led by Dr. Ying-hui Chou at the University of Arizona.

Built with [Jekyll](https://jekyllrb.com/) on a customized [al-folio](https://github.com/alshedivat/al-folio) academic theme.

## Local development

```bash
docker compose up
```

Site runs at https://brain-imaging-and-tms-laboratory.github.io/tmslab/ with live reload.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/deploy.yml`. No manual deploy step needed.

## Editing content

- **News items:** add a file to `_news/` (front-matter date + one-line content).
- **Publications:** add a BibTeX entry to `_bibliography/papers.bib`.
- **People / Research / Join Us / Contact:** edit the corresponding file in `_pages/`.
- **Photos:** drop into the matching `assets/img/<section>/` folder.

## Working with AI assistants

See [AGENTS.md](AGENTS.md) for the site-specific guide (build quirks, Sass gotchas, PurgeCSS safelist, deploy pitfalls).

## License

[MIT](LICENSE) — inherited from the upstream al-folio theme.
