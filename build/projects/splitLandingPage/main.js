const container = document.querySelector(".container");
const left = document.querySelector(".split.left");
const right = document.querySelector(".split.right");

left.addEventListener("mouseenter", () => {
  container.classList.add("show-left");
});
left.addEventListener("mouseleave", () => {
  container.classList.remove("show-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("show-right");
});
right.addEventListener("mouseleave", () => {
  container.classList.remove("show-right");
});
