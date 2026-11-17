// Homepage interactions: direction filter, mobile menu, bottom call bar. Content works without this script.

// 1. Directions filter (buttons with aria-pressed; the list itself is always visible).
const tabs = document.querySelector<HTMLElement>("[data-tabs]");
const index = document.querySelector<HTMLElement>("[data-index]");
if (tabs && index) {
  tabs.hidden = false;
  const buttons = Array.from(tabs.querySelectorAll<HTMLButtonElement>("button[data-group]"));
  const items = Array.from(index.querySelectorAll<HTMLElement>("[data-groups]"));
  const apply = (group: string) => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.group === group)));
    index.classList.toggle("is-filtered", group !== "all");
    items.forEach((el) => {
      const on = group !== "all" && (el.dataset.groups ?? "").split(" ").includes(group);
      el.classList.toggle("is-match", on);
    });
  };
  buttons.forEach((b) => b.addEventListener("click", () => apply(b.dataset.group ?? "all")));
}

// 2. Mobile menu (<details>): close after an anchor click, on Escape and on outside click.
const menu = document.querySelector<HTMLDetailsElement>("details.menu");
if (menu) {
  menu.querySelectorAll<HTMLAnchorElement>("a[href^='#']").forEach((a) =>
    a.addEventListener("click", () => { menu.open = false; }),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector<HTMLElement>("summary")?.focus();
    }
  });
  document.addEventListener("click", (e) => {
    if (menu.open && e.target instanceof Node && !menu.contains(e.target)) menu.open = false;
  });
}

// 3. Bottom call bar: appears once the hero number band has left the viewport.
const bar = document.querySelector<HTMLElement>("[data-callbar]");
const heroCall = document.getElementById("hero-call");
if (bar && heroCall && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(([entry]) => {
    if (entry) bar.classList.toggle("is-shown", !entry.isIntersecting && entry.boundingClientRect.top < 0);
  });
  io.observe(heroCall);
} else if (bar) {
  bar.classList.add("is-shown");
}
