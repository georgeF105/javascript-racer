
var raceCar = function (ID, keyNum) {
  this.carElement = document.getElementById(ID);
  this.position = 0;
  this.speed = 0;
  this.keyNum = keyNum;
  this.moveCar = function(){
    this.position += 1;
    this.carElement.style.left = this.position + 'px';
    console.log("Moved " + this.carElement.innerHTML)
  }
};

// var raceCar1 = document.getElementById("car-1");
// var raceCar2 = document.getElementById("car-2");
// var raceCar3 = document.getElementById("car-3");
// var raceCar4 = document.getElementById("car-4");
var raceCars = [];
raceCars[0] = new raceCar("car-1",65);
raceCars[1] = new raceCar("car-2",68);
raceCars[2] = new raceCar("car-3",71);
raceCars[3] = new raceCar("car-4",74);


// var raceCar1Pos = 0;

window.addEventListener("keyup", keyPressed);

function keyPressed(event){

  console.log(event.which);
  for(i = 0; i < raceCars.length; i++){
    if(raceCars[i].keyNum == event.which){
      raceCars[i].moveCar();
    }
  }
};
