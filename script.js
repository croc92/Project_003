
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
// Hamburgere basinca ezclap classi aciliyor.
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("ezclap");
});

function collapseNavbar() {
  navbar.classList.toggle("ezclap");
}
