let btnMenuClose = document.getElementById("menuClose");
let btnMenuOpen = document.getElementById("menuOpen");
let navigation = document.querySelector("nav .navigation");
let navigationLinks = document.querySelectorAll("#headerLinks li");

//For Opening Menu in mobile view
btnMenuOpen.addEventListener("click", function (e) {
  btnMenuOpen.style.display = "none";
  btnMenuClose.style.display = "block";

  navigation.classList.add("active");
});

//For Closing Menu in mobile view
btnMenuClose.addEventListener("click", function (e) {
  btnMenuClose.style.display = "none";
  btnMenuOpen.style.display = "block";

  navigation.classList.remove("active");
});

//Close mobile menu on item selected
navigationLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    btnMenuClose.style.display = "none";
    btnMenuOpen.style.display = "block";
    navigation.classList.remove("active");
  });
});
