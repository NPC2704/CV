var checkbox_toggle = document.getElementById("light-dark");
var aside = document.querySelector("aside");
checkbox_toggle.addEventListener("change", function () {
  // THêm class dark cho body
  document.body.classList.toggle("dark");
});
