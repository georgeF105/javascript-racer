
var raceCar1 = document.getElementById("car1");
var raceCar2 = document.getElementById("car-2");
var raceCar3 = document.getElementById("car-3");
var raceCar4 = document.getElementById("car-4");

var track1 = document.getElementById("track-1");
var track2 = document.getElementById("track-2");
var track3 = document.getElementById("track-3");
var track4 = document.getElementById("track-4");

var raceCar1Pos = 0;

window.addEventListener("keypress", keyPressed);

function keyPressed(event){
  console.log(raceCar1.innerHTML);
  console.log(track1);
  console.log(event.which);
  if(event.which == 97){
    raceCar1Pos += 2;
    raceCar1.style.left = raceCar1Pos + 'px';
  }
/*  switch(event.which){
    case(97):

  }*/
};