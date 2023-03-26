const container = document.querySelector(".container");
const key = "oCy2VQPr0dVNNPjSfwLtjA6ktJbiHarkRsCnnNBnqqk";
var count = 50;

var url =
  "https://api.unsplash.com/photos/random?client_id=" + key + "&count=" + count;

fetch(url)
  .then(function (header) {
    return header.json();
  })
  .then(function (data) {
    generateCards(data);
  });

function generateCards(cards) {
  if (cards) {
    cards.forEach((card, idx) => {
      var ancer = document.createElement("a");
      ancer.classList.add("overlay");
      ancer.href = card.urls.full;
      ancer.innerHTML = '<button class="fas fa-download"></button>';
      ancer.addEventListener("click", function (e) {
        e.preventDefault();
        debugger;
        downloadImage(card.urls.full);
      });

      var overDivEl = document.createElement("div");
      overDivEl.classList.add("overlay");
      overDivEl.appendChild(ancer);

      var imgDivEl = document.createElement("div");
      imgDivEl.classList.add("image");
      imgDivEl.style.backgroundImage = "url(" + card.urls.small + ")";

      var cardDivEl = document.createElement("div");
      cardDivEl.classList.add("card");
      cardDivEl.appendChild(overDivEl);
      cardDivEl.appendChild(imgDivEl);

      container.appendChild(cardDivEl);
    });
  }
}

function downloadImage(url) {
  debugger;
  fetch(url, {
    mode: "no-cors",
    headers: {
      "Content-Type": "image/*",
      "Content-Disposition": "attachment",
    },
  })
    .then((response) => {
      debugger;
      response.blob();
    })
    .then((blob) => {
      debugger;
      console.log(blob);
    });
}
