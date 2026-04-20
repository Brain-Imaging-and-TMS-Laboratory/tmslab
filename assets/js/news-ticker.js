// News-ticker a11y + dynamic-duration helper.
// The marquee animation itself is pure CSS (see
// `.tmslab-ticker-scroll-track` keyframes in _sass/_tmslab.scss).
// This script only:
//   1. Measures the track and sets animation-duration so scroll
//      speed stays ~50 px/sec regardless of content length.
//   2. If the user prefers reduced motion, adds aria-live to the
//      first item so screen readers still announce it statically.

(function () {
  const track = document.querySelector(".tmslab-ticker-scroll-track");
  if (!track) return;

  const reduceMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotionMQ.matches) {
    const firstItem = track.querySelector("span:first-child");
    if (firstItem) firstItem.setAttribute("aria-live", "polite");
    return;
  }

  // Dynamic duration — keep a consistent scroll speed regardless
  // of how many news items there are. The track contains two
  // duplicated sets, and the keyframe moves it by -50% (one set's
  // worth), so the distance traveled is trackWidth / 2.
  function setDuration() {
    const trackWidth = track.scrollWidth;
    if (!trackWidth) return;
    const scrollDistance = trackWidth / 2;
    // Lower = slower. 30 px/sec is a relaxed reading pace; bump
    // toward 50 if the ticker starts to feel sluggish once many
    // news items are added.
    const targetSpeedPxPerSec = 30;
    const duration = Math.max(45, scrollDistance / targetSpeedPxPerSec);
    track.style.animationDuration = duration + "s";
  }

  // Run after layout settles (fonts may shift widths).
  if (document.readyState === "complete") {
    setDuration();
  } else {
    window.addEventListener("load", setDuration);
  }

  // Recompute on resize in case fonts or container width change.
  let resizeTimer = null;
  window.addEventListener("resize", function () {
    if (resizeTimer) window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(setDuration, 200);
  });
})();
