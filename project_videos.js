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
