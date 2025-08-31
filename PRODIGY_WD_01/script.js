/* Mobile menu toggle */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => navLinks.classList.toggle("show"));

/* Simple review auto-slider */
let index = 0;
const quotes = document.querySelectorAll("#slider blockquote");
setInterval(() => {
  quotes.forEach(q => q.style.display = "none");
  quotes[index].style.display = "block";
  index = (index + 1) % quotes.length;
}, 4000);

/* Newsletter popup */
const form = document.getElementById("newsletter");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for subscribing, gamer! 🕹️");
  form.reset();
});
