// function dropDown() {
//     click = document.getElementById("kr").addEventListener("click", displatDate);
// }

console.log("JS chargé");

var select = document.querySelector(".hamburger");

select.addEventListener('click', function() {
    document.querySelector(".nav-bar").classList.toggle("show");
})
