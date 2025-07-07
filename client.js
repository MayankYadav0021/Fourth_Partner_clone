const whiteLogo = document.getElementById("logo-white");
const colorLogo = document.getElementById("logo-color");
const header = document.querySelector("header");
const dropdown = document.getElementById("knowledgeHubDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");

let dropdownTimeout;

function showColorLogo() {
  whiteLogo.classList.add("hidden");
  whiteLogo.classList.remove("visible");
  colorLogo.classList.add("visible");
  colorLogo.classList.remove("hidden");
}

function showWhiteLogo() {
  whiteLogo.classList.remove("hidden");
  whiteLogo.classList.add("visible");
  colorLogo.classList.remove("visible");
  colorLogo.classList.add("hidden");
}

// Scroll logic
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    showColorLogo();
  } else {
    header.classList.remove("scrolled");
    showWhiteLogo();
  }
});

// Hover on header/nav
header.addEventListener("mouseenter", () => {
  showColorLogo();
  header.classList.add("scrolled");
});

header.addEventListener("mouseleave", () => {
  if (window.scrollY <= 50) {
    header.classList.remove("scrolled");
    showWhiteLogo();
  }
});

// Dropdown hover logic (dropdownMenu is inside dropdown element)
dropdown.addEventListener("mouseenter", () => {
  clearTimeout(dropdownTimeout);
  dropdownMenu.style.display = "block";
  showColorLogo();
  header.classList.add("scrolled");
});

dropdown.addEventListener("mouseleave", () => {
  dropdownTimeout = setTimeout(() => {
    dropdownMenu.style.display = "none";
    if (window.scrollY <= 50) {
      header.classList.remove("scrolled");
      showWhiteLogo();
    }
  }, 300);
});
