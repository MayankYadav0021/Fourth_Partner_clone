document.addEventListener("DOMContentLoaded", () => {
  const whiteLogo = document.getElementById("logo-white");
  const colorLogo = document.getElementById("logo-color");
  const header = document.getElementById("mainHeader");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      whiteLogo.classList.replace("visible", "hidden");
      colorLogo.classList.replace("hidden", "visible");
    } else {
      header.classList.remove("scrolled");
      whiteLogo.classList.replace("hidden", "visible");
      colorLogo.classList.replace("visible", "hidden");
    }
  });
});
