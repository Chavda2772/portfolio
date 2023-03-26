var container = document.querySelector(".container");
var projectList = [
  {
    hyperLink: "LocalTodoApplication/index.html",
    previewImg: "images/Extjs_local_todo.png",
    imgAltText: "Extjs Todo Application",
    title: "Advance TodoList",
    description:
      "Extjs Morden theme Todolist and it use browser LocalStorage for storing data",
  },
  {
    hyperLink: "cardExpanding/index.html",
    previewImg: "images/Expanding_cards.png",
    imgAltText: "Expanding Cards",
    title: "Expanding Cards",
    description:
      "Exapand card on click. Random images on every refresh.<br /> project is responsive.",
  },
  {
    hyperLink: "mordenInputForm/index.html",
    previewImg: "images/mordenInputForm.png",
    imgAltText: "Morden form",
    title: "form label input",
    description:
      "Simple login form with morden input field.Label moves to top if input field on focus.",
  },
  {
    hyperLink: "todoList/index.html",
    previewImg: "images/Todo_List-min.jpg",
    imgAltText: "Todo List",
    title: "TODO List",
    description:
      "Todo list with browser Local storage. <br />Your data is there until you manually delete.",
  },
  {
    hyperLink: "downloadRandomImage/index.html",
    previewImg: "images/downloadRandomImages.jpg",
    imgAltText: "Download Random Images",
    title: "Random Images Grid",
    description: "Random Images grid to download.",
  },
  {
    hyperLink: "progressStep/index.html",
    previewImg: "images/Step_Progress_bar-min.jpeg",
    imgAltText: "progress step image",
    title: "Step Progressbar",
    description:
      "Progress bar with steps. Can add multiple steps and remove them.",
  },
  {
    hyperLink: "hiddenSearchWidget/index.html",
    previewImg: "images/search_widget-min.jpg",
    imgAltText: "progress step image",
    title: "Hidden search Widget",
    description: "on click of search button input field displayed.",
  },
  {
    hyperLink: "clock/index.html",
    previewImg: "images/Modern_Clock.png",
    imgAltText: "progress step image",
    title: "Modern Analog Clock",
    description: "Analog realtime clock with Dark and light mode",
  },
];

function createCard() {
  projectList.forEach((card, index) => {
    var cardEl = document.createElement("a");
    cardEl.href = card.hyperLink;
    cardEl.innerHTML = `
          <div class='card'>
              <div class='imgBox'>
                  <img src='${card.previewImg}' alt='${card.imgAltText}' />
              </div>
              <div class='content'>
                  <h2>${card.title}</h2>
                  <p>${card.description}</p>
              </div>
          </div>`;
    container.appendChild(cardEl);
  });
}

createCard();
