// header toggle opener
const nav = document.querySelector(".nav");
const toggleBtn = document.querySelector(".toggle-menu");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});
