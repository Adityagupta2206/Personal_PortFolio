'use strict';


const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const backTopBtn = document.querySelector("[data-back-to-top]");
navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});


navbarLinks.forEach(link => {
  link.addEventListener("click", function () {
    header.classList.remove("nav-active");
    navToggleBtn.classList.remove("active");
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("scrolled");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("scrolled");
    backTopBtn.classList.remove("active");
  }
});

backTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) { 
    header.classList.remove("nav-active");
    navToggleBtn.classList.remove("active");
  }
});
