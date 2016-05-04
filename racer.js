
var racing = true;

var raceCar = function (ID, keyNum, name) {
  this.carElement = document.getElementById(ID);
  this.position = 0;
  this.speed = 0;
  this.keyNum = keyNum;
  this.name = name;
  this.buttonPush = function () {
    this.speed += 0.2;
  }
  this.update = function () {
    if (racing) {
      this.position += this.speed;
      this.carElement.style.left = this.position + 'px';
      if(this.speed > 0) {
        this.speed -= 0.01;
      }
      if (this.position > this.carElement.parentElement.offsetWidth - this.carElement.offsetWidth) {
        carWins(this);
      }
    }
  }
};

// var raceCar1 = document.getElementById("car-1");
// var raceCar2 = document.getElementById("car-2");
// var raceCar3 = document.getElementById("car-3");
// var raceCar4 = document.getElementById("car-4");
var raceCars = [];
raceCars[0] = new raceCar("car-1",65, "Player 1");
raceCars[1] = new raceCar("car-2",68, "Player 2");
raceCars[2] = new raceCar("car-3",71, "Player 3");
raceCars[3] = new raceCar("car-4",74, "Player 4");

// var raceCar1Pos = 0;

window.addEventListener("keyup", keyPressed);

window.setInterval(function () {
  updateCars();
}, 40);

function keyPressed(event){

  console.log(event.which);
  for (var i = 0; i < raceCars.length; i++) {
    if(raceCars[i].keyNum == event.which){
      raceCars[i].buttonPush();
    }
  }
};

function updateCars () {
  for (var i = 0; i < raceCars.length; i++) {
    raceCars[i].update();
  }
};

function carWins (winningCar) {
  racing = false;
  alert(winningCar.name + " Wins!!");
  resetGame();
};

function resetGame () {
  for (var i = 0; i < raceCars.length; i++) {
    raceCars[i].position = 0;
    raceCars[i].speed = 0;
  }
  racing = true;
}
