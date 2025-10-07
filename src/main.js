let logoNavigation = document.getElementById("navigation-logo-side-bar-event");
let navTest = document.querySelector("div__side-bar--active");
logoNavigation.addEventListener("click", () => {
  if (navTest.style.display === "flex") {
    navTest.style.display = "none";
  } else {
    navTest.style.display = "flex";
  }
});
