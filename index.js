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
  return Math.floor(min + Math.random() * (max - min + 1));
}

function setDiceValue(elem) {
  var x = document.getElementById(elem);
  console.log(elem, x);
  x.innerHTML = getRandomInterval(1, 20);
}

// function onClickChangeZIndex(myDivId) {
//   var myDiv = document.getElementById(myDivId);
//   console.log('oi', myDiv);
//   console.log('antes', myDiv.style.zIndex);
//   myDiv.style.zIndex = myDiv.style.zIndex - 1;
//   console.log('depois', myDiv.style.zIndex);
// }

function onClickChangeZIndex(myDivId) {
  var myDiv = document.getElementById(myDivId);
  zi = getComputedStyle(myDiv).zIndex;
  zi2 = myDiv.style.zIndex;
  console.log(zi, zi2, myDivId, zi - 1, zi2 - 1);
  zi = parseInt(zi);
  zi2 = parseInt(zi2);
  console.log(zi, zi2, myDivId, zi - 1, zi2 - 1);
  zi = zi ? zi : 0;
  zi2 = zi2 ? zi2 : 0;
  console.log(zi, zi2, myDivId, zi - 1, zi2 - 1);
  myDiv.style.zIndex = zi - 1;
}