// this code will helps to change the background color of the navbar when the user scrolls down the page
const navbar = document.getElementById("content");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
