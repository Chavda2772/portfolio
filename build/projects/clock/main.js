updateClock();

setInterval(function () {
  updateClock();
}, 1000);

function updateClock() {
  var currentDate = new Date();

  var hours = currentDate.getHours() % 12;
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  hours = parseFloat(hours + "." + minutes);

  document.getElementById("hour").style.transform = `rotate(${
    (hours * 360) / 12
  }deg)`;
  document.getElementById("minute").style.transform = `rotate(${
    (minutes * 360) / 60
  }deg)`;
  document.getElementById("second").style.transform = `rotate(${
    (seconds * 360) / 60
  }deg)`;
}

document.getElementById("switch").addEventListener("click", function (e) {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.getElementById("switch").innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    document.getElementById("switch").innerHTML = '<i class="fas fa-sun"></i>';
  }
});
