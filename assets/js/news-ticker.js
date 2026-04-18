// News ticker rotation — vanilla JS, no dependencies.
// Cycles `.tmslab-ticker-item` elements every 10s, pauses on
// hover, respects prefers-reduced-motion (no rotation, just
// shows the first item statically). HTML rendered by
// _includes/news_ticker.liquid.

(function () {
  const ticker = document.querySelector(".tmslab-ticker");
  if (!ticker) return;

  const items = ticker.querySelectorAll(".tmslab-ticker-item");
  if (items.length <= 1) return;

  const reduceMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotionMQ.matches) return;

  const ROTATE_MS = 10000;
  let currentIndex = 0;
  let timer = null;

  function advance() {
    items[currentIndex].classList.remove("is-active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("is-active");
  }

  function start() {
    if (timer) return;
    timer = window.setInterval(advance, ROTATE_MS);
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  }

  ticker.addEventListener("mouseenter", stop);
  ticker.addEventListener("mouseleave", start);
  ticker.addEventListener("focusin", stop);
  ticker.addEventListener("focusout", start);

  // Stop rotation if the user toggles reduced-motion preference mid-session.
  reduceMotionMQ.addEventListener("change", function (e) {
    if (e.matches) stop();
    else start();
  });

  start();
})();
