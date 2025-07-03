const whiteLogo = document.getElementById("logo-white");
const colorLogo = document.getElementById("logo-color");

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    whiteLogo.classList.remove("visible");
    whiteLogo.classList.add("hidden");
    colorLogo.classList.remove("hidden");
    colorLogo.classList.add("visible");
  } else {
    header.classList.remove("scrolled");
    whiteLogo.classList.remove("hidden");
    whiteLogo.classList.add("visible");
    colorLogo.classList.remove("visible");
    colorLogo.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("knowledgeHubDropdown");
  const dropdownMenu = document.getElementById("dropdownMenu");

  dropdown.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });

  dropdown.addEventListener("mouseenter", () => {
    if (!dropdown.classList.contains("show")) {
      dropdownMenu.style.display = "block";
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    if (!dropdown.classList.contains("show")) {
      dropdownMenu.style.display = "none";
    }
  });
});
