// Font-size accessibility toggle — vanilla JS, no dependencies.
// Two sizes: regular (1×) and big (1.35×). The class is applied
// to the <html> element so the CSS custom property reaches the
// `html { font-size: ... }` declaration (custom properties
// inherit down the DOM, not up — setting the class on <body>
// would not affect html's own computed font-size).
//
// Preference persists via localStorage. The inline preload
// script in _layouts/default.liquid adds the same class on
// <html> before body paints, eliminating flash-of-unstyled-size.

(function () {
  "use strict";

  var STORAGE_KEY = "tmslab-font-size";
  var VALID_SIZES = ["regular", "big"];
  var SIZE_LABELS = {
    regular: "Regular text size",
    big: "Bigger text size",
  };

  var html = document.documentElement;
  var buttons = document.querySelectorAll(".tmslab-font-toggle-btn");
  var status = document.getElementById("tmslab-font-toggle-status");

  if (!buttons.length) return;

  function applySize(size) {
    if (VALID_SIZES.indexOf(size) === -1) size = "regular";

    // Class lives on <html>, not body. Regular = no class.
    html.classList.remove("font-size-big");
    if (size === "big") {
      html.classList.add("font-size-big");
    }

    // Sync aria-pressed across buttons.
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isActive = btn.getAttribute("data-font-size") === size;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    // Persist. localStorage may be disabled in private browsing —
    // fail silently.
    try {
      localStorage.setItem(STORAGE_KEY, size);
    } catch (e) {
      /* no-op */
    }

    if (status) {
      status.textContent = SIZE_LABELS[size] + " applied";
    }
  }

  // Restore saved preference on load. Default to "regular" if
  // storage is empty, unreadable, or holds an unknown value.
  var savedSize = "regular";
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (VALID_SIZES.indexOf(raw) !== -1) savedSize = raw;
  } catch (e) {
    /* no-op */
  }
  applySize(savedSize);

  // Wire up button clicks.
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener("click", function () {
      applySize(this.getAttribute("data-font-size"));
    });
  }
})();
