var btnA = document.querySelector("#showA");
var containerA = document.querySelector(".containerA");

btnA.addEventListener("click", function () {
  if (containerA.style.display === "none") {
    containerA.style.display = "flex";
    containerB.style.display = "none";
    containerC.style.display = "none";
  } else {
    containerA.style.display = "none";
  }
});

var btnB = document.querySelector("#showB");
var containerB = document.querySelector(".containerB");

btnB.addEventListener("click", function () {
  if (containerB.style.display === "none") {
    containerA.style.display = "none";
    containerB.style.display = "flex";
    containerC.style.display = "none";
  } else {
    containerB.style.display = "none";
  }
});

var btnC = document.querySelector("#showC");
var containerC = document.querySelector(".containerC");

btnC.addEventListener("click", function () {
  if (containerC.style.display === "none") {
    containerA.style.display = "none";
    containerB.style.display = "none";
    containerC.style.display = "flex";
  } else {
    containerC.style.display = "none";
  }
});
