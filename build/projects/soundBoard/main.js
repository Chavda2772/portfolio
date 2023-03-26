const sounds = [
  "ayeeffect",
  "bok",
  "drop",
  "horn",
  "ooohhh",
  "stringeffect",
  "ting",
];
const buttons = document.querySelector(".buttons");

sounds.forEach((sound) => {
  var button = document.createElement("button");
  button.innerHTML = sound;

  button.addEventListener("click", () => {
    stopSound();
    document.querySelector("#" + sound).play();
  });

  buttons.appendChild(button);
});

function stopSound() {
  sounds.forEach((sound) => {
    var song = document.querySelector("#" + sound);
    song.pause();
    song.currentTime = 0;
  });
}
