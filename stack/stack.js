document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".hamburger");
  const nav = document.querySelector("#nav");
  const div = document.querySelector(".hamburger")

  icon.addEventListener("click", () => {
    nav.classList.toggle("show");
    div.classList.toggle("show");
  });
}); 