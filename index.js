function myFunction(elem) {
  var x = document.getElementById(elem);
  console.log(x, x.style.display);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min));
}

function setDiceValue(elem) {
  var x = document.getElementById(elem);
  console.log(elem, x);
  x.innerHTML = getRandomInterval(1, 20);
}
