module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Safelist: classes that are ONLY applied at runtime by JS and
  // would otherwise be stripped by PurgeCSS because they don't
  // appear as static class attributes in the built HTML.
  //
  // `font-size-big` — set on <html> by /assets/js/font-toggle.js
  //   when the user clicks the "Bigger text size" button, plus by
  //   the inline preload <script> in _layouts/default.liquid.
  // `modal-open` — set on <body> by participate-modal.js and
  //   gallery-lightbox.js while an overlay is open.
  // `is-visible` — used by the toast notification for successful
  //   participate-modal submissions.
  // `is-active` — legacy from the old news-ticker rotation; kept
  //   in case any other component reuses the pattern.
  safelist: {
    standard: ["font-size-big", "modal-open", "is-visible", "is-active"],
    // Pattern-based safelist in case new size classes are added
    // later (e.g., `font-size-huge`) or new state classes follow
    // the `is-*` naming convention.
    greedy: [/^font-size-/, /^is-/],
  },
};
