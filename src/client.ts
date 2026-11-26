import "./styles.css";
import { installMotion } from "./motion";
import { installThemeSelector } from "./themes";
installThemeSelector();
document.documentElement.classList.add("enhanced");
const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.hidden = false;
  const close = () => toggle.setAttribute("aria-expanded", "false");
  toggle.addEventListener("click", () =>
    toggle.setAttribute(
      "aria-expanded",
      String(toggle.getAttribute("aria-expanded") !== "true"),
    ),
  );
  nav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a[href]")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      close();
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (
      event.target instanceof Node &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    )
      close();
  });
  matchMedia("(max-width: 700px), (max-width: 1000px) and (max-height: 600px)").addEventListener("change", close);
}
installMotion();
