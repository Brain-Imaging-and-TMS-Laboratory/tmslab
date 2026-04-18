// Participate-in-a-Study modal — vanilla JS, no dependencies.
// Open: any element with [data-tmslab-open-modal="participate"].
// Close: backdrop click, [data-modal-close] click, or Escape key.
// A11y extras: focus the first form field on open, restore focus
// to the trigger element on close, trap Tab navigation inside the
// modal while open, and surface a toast on ?participation_sent=1.

(function () {
  const modal = document.getElementById("tmslab-participate-modal");
  if (!modal) return;

  const card = modal.querySelector(".tmslab-modal-card");
  let lastFocusedTrigger = null;

  function getFocusable() {
    return Array.from(
      card.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function openModal(trigger) {
    lastFocusedTrigger = trigger || document.activeElement;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";

    // Focus the first non-honeypot input.
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
  }

  function isOpen() {
    return modal.getAttribute("aria-hidden") === "false";
  }

  // Wire up triggers.
  document
    .querySelectorAll('[data-tmslab-open-modal="participate"]')
    .forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        openModal(el);
      });
    });

  // Wire up close affordances inside the modal.
  modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
    el.addEventListener("click", function () {
      closeModal();
    });
  });

  // Keyboard: Escape closes; Tab cycles focus inside the modal.
  document.addEventListener("keydown", function (e) {
    if (!isOpen()) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
      return;
    }

    if (e.key === "Tab") {
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Toast on successful submission redirect.
  if (window.location.search.indexOf("participation_sent=1") !== -1) {
    const toast = document.createElement("div");
    toast.className = "tmslab-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.textContent =
      "Thanks — we received your inquiry and will be in touch soon.";
    document.body.appendChild(toast);
    window.setTimeout(function () {
      toast.classList.add("is-visible");
    }, 50);
    window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 6000);
    window.setTimeout(function () {
      toast.remove();
    }, 6500);
    // Strip the query string so a refresh doesn't re-trigger the toast.
    window.history.replaceState({}, "", window.location.pathname);
  }
})();
