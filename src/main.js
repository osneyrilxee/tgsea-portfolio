const logoNavigation = document.getElementById("navigation-logo-side-bar-event");
const sidebar = document.querySelector(".div__side-bar--active");

logoNavigation.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  logoNavigation.classList.toggle("active");
})