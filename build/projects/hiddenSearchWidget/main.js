var button = document.querySelector(".btn");
var input = document.querySelector(".input");
var search = document.querySelector(".search");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
