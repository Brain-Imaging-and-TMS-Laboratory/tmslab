// Member-bio expand/collapse. Each .tmslab-member-bio is
// line-clamped via CSS. This script measures each bio after
// fonts and images are loaded; if the rendered content exceeds
// the clamped height, it appends a "Read more" button that
// toggles an `is-expanded` class. The button never appears on
// short bios that already fit within the clamp.

(function () {
  "use strict";

  // Only member cards use the clamp — the PI bio now lives in a
  // full-width "Biography" block below the photo+affiliations
  // row, so there's no reason to truncate it.
  var bios = document.querySelectorAll(".tmslab-member-bio");
  if (!bios.length) return;

  function setup() {
    bios.forEach(function (bio) {
      // scrollHeight = full content; clientHeight = clamped box.
      // Small fudge (2px) absorbs sub-pixel rounding.
      if (bio.scrollHeight <= bio.clientHeight + 2) return;

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tmslab-bio-toggle";
      btn.textContent = "Read more";
      btn.setAttribute("aria-expanded", "false");

      btn.addEventListener("click", function () {
        var expanded = bio.classList.toggle("is-expanded");
        btn.textContent = expanded ? "Show less" : "Read more";
        btn.setAttribute("aria-expanded", expanded ? "true" : "false");
      });

      bio.insertAdjacentElement("afterend", btn);
    });
  }

  if (document.readyState === "complete") {
    setup();
  } else {
    window.addEventListener("load", setup);
  }
})();
