// Font-size accessibility toggle — vanilla JS, no dependencies.
// Three sizes: regular (1×), large (1.25×), xlarge (1.5×).
// Preference persists via localStorage. The inline preload
// script in _layouts/default.liquid primes the html element on
// first paint; this script then syncs body classes and handles
// button clicks after the page loads.

(function () {
  "use strict";

  var STORAGE_KEY = "tmslab-font-size";
  var VALID_SIZES = ["regular", "large", "xlarge"];
  var SIZE_LABELS = {
    regular: "Regular text size",
    large: "Large text size",
    xlarge: "Extra large text size",
  };

  var body = document.body;
  var html = document.documentElement;
  var buttons = document.querySelectorAll(".tmslab-font-toggle-btn");
  var status = document.getElementById("tmslab-font-toggle-status");

  if (!buttons.length) return;

  function applySize(size) {
    if (VALID_SIZES.indexOf(size) === -1) size = "regular";

    // Clear html preload classes — the inline <head> script sets
    // them to prevent FOUS, but once we're running we own the
    // state via body classes instead.
    html.classList.remove("font-size-large-preload", "font-size-xlarge-preload");

    // Clear body size classes; add the new one (regular has no
    // class — it's the default var value).
    body.classList.remove("font-size-large", "font-size-xlarge");
    if (size !== "regular") {
      body.classList.add("font-size-" + size);
    }

    // Sync aria-pressed on all toggle buttons.
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isActive = btn.getAttribute("data-font-size") === size;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    // Persist preference. localStorage may be disabled (Safari
    // private mode, some strict CSP configs) — fail silently.
    try {
      localStorage.setItem(STORAGE_KEY, size);
    } catch (e) {
      /* no-op */
    }

    // Announce to screen readers.
    if (status) {
      status.textContent = SIZE_LABELS[size] + " applied";
    }
  }

  // Restore saved preference on load.
  var savedSize = "regular";
  try {
    savedSize = localStorage.getItem(STORAGE_KEY) || "regular";
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
