import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const Theme = { LIGHT: "light-theme", DARK: "dark-theme" };
  const refs = {
    body: document.querySelector("body"),
    switch: document.querySelector(".theme-switch__toggle"),
    burger: document.querySelector(".burger-menu"),
    menu: document.querySelector(".menu"),
    menuItems: document.querySelectorAll(".menu__item"),
  };
  const theme = localStorage.getItem("theme");
  if (theme === Theme.LIGHT) {
    refs.switch.textContent = "Light";
    refs.body.classList.add(Theme.LIGHT);
    // повісь клас на боді
  }
  if (theme === Theme.DARK) {
    refs.switch.textContent = "Dark";
    refs.body.classList.add(Theme.DARK);
  }

  refs.switch.addEventListener("click", onSwitchTheme);
  refs.burger.addEventListener("click", onOpenMenu);
  refs.menuItems.forEach((item) => item.addEventListener("click", onCloseMenu));
  document.addEventListener("click", onCloseMenuByClickOutside);

  function onSwitchTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === Theme.LIGHT) {
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
      localStorage.setItem("theme", Theme.DARK);
      refs.switch.textContent = "Dark";
    }
    if (theme === Theme.DARK) {
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
      localStorage.setItem("theme", Theme.LIGHT);
      refs.switch.textContent = "Light";
    }
  }

  function onOpenMenu() {
    refs.menu.classList.toggle("is-open");
  }

  function onCloseMenu() {
    refs.menu.classList.remove("is-open");
  }

  function onCloseMenuByClickOutside(event) {
    if (
      !refs.menu.contains(event.target) &&
      !refs.burger.contains(event.target)
    ) {
      onCloseMenu();
    }
  }

  function setTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === Theme.DARK) {
      refs.body.classList.add(Theme.DARK);
    } else {
      refs.body.classList.add(Theme.LIGHT);
    }
  }

  setTheme();
});
