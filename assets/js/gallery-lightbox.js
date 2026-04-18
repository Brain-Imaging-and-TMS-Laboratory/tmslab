// Gallery lightbox — vanilla JS, no dependencies.
// Click any .tmslab-gallery-item to open it full-size in an
// overlay; navigate with arrow keys or on-screen arrows; close
// with Escape, backdrop click, or the × button.

(function () {
  const grid = document.getElementById("tmslab-gallery");
  if (!grid) return;

  const items = Array.from(grid.querySelectorAll(".tmslab-gallery-item"));
  if (items.length === 0) return;

  // Build the lightbox once and reuse it.
  const lb = document.createElement("div");
  lb.className = "tmslab-lightbox";
  lb.setAttribute("aria-hidden", "true");
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.innerHTML = [
    '<div class="tmslab-lightbox-backdrop" data-lb-close></div>',
    '<button class="tmslab-lightbox-close" type="button" data-lb-close aria-label="Close gallery">&times;</button>',
    '<button class="tmslab-lightbox-nav tmslab-lightbox-prev" type="button" data-lb-prev aria-label="Previous image">&#10094;</button>',
    '<button class="tmslab-lightbox-nav tmslab-lightbox-next" type="button" data-lb-next aria-label="Next image">&#10095;</button>',
    '<figure class="tmslab-lightbox-figure">',
    '  <img class="tmslab-lightbox-img" alt="">',
    '  <figcaption class="tmslab-lightbox-caption"></figcaption>',
    "</figure>",
  ].join("");
  document.body.appendChild(lb);

  const lbImg = lb.querySelector(".tmslab-lightbox-img");
  const lbCap = lb.querySelector(".tmslab-lightbox-caption");
  let currentIndex = -1;
  let lastFocus = null;

  function show(idx) {
    currentIndex = (idx + items.length) % items.length;
    const it = items[currentIndex];
    lbImg.src = it.getAttribute("data-full");
    lbImg.alt = it.getAttribute("data-caption") || "";
    lbCap.textContent = it.getAttribute("data-caption") || "";
  }

  function open(idx) {
    lastFocus = document.activeElement;
    show(idx);
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    lb.querySelector(".tmslab-lightbox-close").focus();
  }

  function close() {
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  function isOpen() {
    return lb.getAttribute("aria-hidden") === "false";
  }

  // Wire up grid items.
  items.forEach(function (it, i) {
    it.addEventListener("click", function () {
      open(i);
    });
    // Keyboard: Enter/Space on a focused figure opens it.
    it.tabIndex = 0;
    it.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(i);
      }
    });
  });

  // Wire up lightbox controls.
  lb.querySelectorAll("[data-lb-close]").forEach(function (el) {
    el.addEventListener("click", close);
  });
  lb.querySelector("[data-lb-prev]").addEventListener("click", function () {
    show(currentIndex - 1);
  });
  lb.querySelector("[data-lb-next]").addEventListener("click", function () {
    show(currentIndex + 1);
  });

  // Keyboard navigation.
  document.addEventListener("keydown", function (e) {
    if (!isOpen()) return;
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      show(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      show(currentIndex + 1);
    }
  });
})();
