// DarkMode
let body = document.body;
function darkMode() {
  body.classList.toggle("dark");
}

// HamburgerMenu
const menuToggle = document.querySelector(".menu-toggle input");
const humberger = document.querySelector("#humberger");
menuToggle.addEventListener("click", function () {
  humberger.classList.toggle("navbar-nav");
});
