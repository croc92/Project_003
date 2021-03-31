
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
// Hamburgere basinca ezclap classi aciliyor.
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("ezclap");
});

function collapseNavbar() {
  const x = document.querySelector(".navbar");
  navbar.classList.toggle("ezclap");
}

/* Eger birden fazla yerde navbar olsaydi,
tamamini etkilemek icin asagidaki gibi
for dongusu yazmak lazimdi.

function collapseNavbar() {
  const x = document.querySelectorAll(".navbar");
  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle("ezclap");
  }
}
*/
