let btnMenuClose = document.getElementById("menuClose");
let btnMenuOpen = document.getElementById("menuOpen");
let navigation = document.querySelector("nav .navigation");
let navigationLinks = document.querySelectorAll("#headerLinks li");
let projectContainer = document.getElementById("portfolioCards");

var projectList = [
  {
    hyperLink: "projects/LocalTodoApplication",
    previewImg: "projects/images/Extjs_local_todo.png",
    imgAltText: "Extjs LocalTodo Application",
  },
  {
    hyperLink: "projects/mordenInputForm/index.html",
    previewImg: "projects/images/mordenInputForm.png",
    imgAltText: "Modern Input form",
  },
  {
    hyperLink: "projects/cardExpanding/index.html",
    previewImg: "projects/images/Expanding_cards.png",
    imgAltText: "Expanding Cards",
  },
  {
    hyperLink: "projects/todoList/index.html",
    previewImg: "projects/images/Todo_List-min.jpg",
    imgAltText: "Todo List",
  },
  {
    hyperLink: "projects/downloadRandomImage/index.html",
    previewImg: "projects/images/downloadRandomImages.jpg",
    imgAltText: "Download Random Images",
  },
  {
    hyperLink: "projects/clock/index.html",
    previewImg: "projects/images/Modern_Clock.png",
    imgAltText: "Modern Clock",
  },
];

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

window.pagehide = (event) => {
  console.log("The page is unloaded");
};

// Create Project list cards
function createPortfolioCard() {
  projectList.forEach((card, index) => {
    var cardEl = document.createElement("a");
    cardEl.href = card.hyperLink;
    cardEl.innerHTML = `
          <div class="card">
              <img
                src="${card.previewImg}"
                alt="${card.imgAltText}"
                loading="lazy"
              />
            </div>`;
    projectContainer.appendChild(cardEl);
  });
}
createPortfolioCard();
document.getElementById("fiscalYear").innerHTML = new Date().getFullYear();
