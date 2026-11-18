import "./styles.css";
import { installMotion } from "./motion";
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
  nav.addEventListener("click", close);
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
  matchMedia("(max-width: 700px)").addEventListener("change", close);
}
installMotion();
