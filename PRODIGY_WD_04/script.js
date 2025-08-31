/* ===== Mobile nav toggle ===== */
const burger = document.getElementById("burger");
const links  = document.getElementById("links");
burger.addEventListener("click", () => links.classList.toggle("show"));

/* ===== Smooth scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
            .scrollIntoView({behavior:"smooth"});
    links.classList.remove("show");
  });
});

/* ===== Simple contact alert ===== */
document.getElementById("form").addEventListener("submit",e=>{
  e.preventDefault();
  alert("Thanks! I’ll get back to you soon.");
  e.target.reset();
});
