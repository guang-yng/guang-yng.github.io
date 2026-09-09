// Keep all news readable without JavaScript; enhance to a four-item preview.
const newsItems = [...document.querySelectorAll(".news-list > li")];
const newsToggle = document.querySelector(".news-toggle");
if (newsItems.length > 4) {
  const olderNews = newsItems.slice(4);
  olderNews.forEach(item => { item.hidden = true; });
  newsToggle.hidden = false;
  newsToggle.addEventListener("click", () => {
    const expanded = newsToggle.getAttribute("aria-expanded") !== "true";
    olderNews.forEach(item => { item.hidden = !expanded; });
    newsToggle.setAttribute("aria-expanded", String(expanded));
    newsToggle.textContent = expanded ? "Show less" : "Show more";
  });
}

// Anchor links provide navigation. This only marks the section being read.
const header = document.querySelector(".site-header");
const navigation = [...header.querySelectorAll("nav a")];
const sections = navigation.map(link => document.querySelector(link.hash));
let scheduled = false;
function updateNavigation() {
  const threshold = header.offsetHeight + 48;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    current = sections[sections.length - 1];
  }
  navigation.forEach(link => {
    if (link.hash === `#${current.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scheduled = false;
}
window.addEventListener("scroll", () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
new ResizeObserver(() => {
  document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
  updateNavigation();
}).observe(header);
window.addEventListener("load", updateNavigation);
updateNavigation();

// Prepare content before observing it so asynchronous scroll callbacks cannot flash it.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches && "IntersectionObserver" in window && "animate" in Element.prototype) {
  const animations = new Set();
  const pending = new Set(document.querySelectorAll(
    ".portrait, .biography, #news, #publication > h2, .publications article"
  ));
  function reveal(element, animate = true) {
    if (!pending.delete(element)) return;
    revealObserver.unobserve(element);
    element.classList.remove("reveal-pending");
    if (!animate || reducedMotion.matches) return;
    const animation = element.animate([
      { opacity: 0, transform: "translateY(10px)" },
      { opacity: 1, transform: "translateY(0)" }
    ], { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
    animations.add(animation);
    animation.onfinish = () => animations.delete(animation);
  }
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) reveal(entry.target);
    }
  }, { threshold: 0, rootMargin: "0px 0px 24px 0px" });
  pending.forEach(element => {
    element.classList.add("reveal-pending");
    revealObserver.observe(element);
  });
  // Keyboard navigation must never land on a transparent content block.
  document.addEventListener("focusin", event => {
    const element = event.target.closest(".reveal-pending");
    if (element) reveal(element, false);
  });
  reducedMotion.addEventListener("change", event => {
    if (!event.matches) return;
    revealObserver.disconnect();
    pending.forEach(element => element.classList.remove("reveal-pending"));
    pending.clear();
    animations.forEach(animation => animation.cancel());
    animations.clear();
  });
}
