
var racing = true;

var backgroundImagePos = 0;

var raceCar = function (ID, upKey, downKey, lane, name) {
  var lanes = [65,165,265,365];
  this.carElement = document.getElementById(ID);
  this.playerInfoElement = document.getElementById(ID + "-info");
  this.playerNameElement = document.getElementById(ID + "-info-name");
  this.playerKeyElement = document.getElementById(ID + "-info-key");
  this.xPos = 300;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.upKey = upKey;
  this.downKey = downKey;
  this.lane = lane;
  var yPos = lanes[this.lane];
  this.name = name;

  this.moveUp = function () {
    console.log("moveUp");
    if(this.lane > 0){
      this.lane -= 1;
      yPos = lanes[this.lane];
    }
  }
  this.moveDown = function () {
    console.log("moveDown");
    if(this.lane < lanes.length-1){
      this.lane += 1;
      yPos = lanes[this.lane];
      console.log("new yPos = " + yPos);
    }
  }

  this.update = function () {
    if (racing) {
      this.xPos += this.xSpeed;
      this.carElement.style.left = this.xPos + 'px';
      this.carElement.style.top = yPos + 'px';
      
      // if (this.xPos > this.carElement.parentElement.offsetWidth - this.carElement.offsetWidth) {
      //   carWins(this);
      // }
    }
  }
};


var raceCars = [];
raceCars[0] = new raceCar("car-1",38, 40, 2, "Player 1");
//raceCars[1] = new raceCar("car-2",68, "Player 2");
// raceCars[2] = new raceCar("car-3",71, "Player 3");
// raceCars[3] = new raceCar("car-4",74, "Player 4");

// var raceCar1Pos = 0;

window.addEventListener("keyup", keyPressed);

window.setInterval(function () {
  update();
}, 50);

function keyPressed(event){

  console.log(event.which);
  for (var i = 0; i < raceCars.length; i++) {
    if(raceCars[i].upKey == event.which){
      raceCars[i].moveUp();
    }
    if(raceCars[i].downKey == event.which){
      raceCars[i].moveDown();
    }
  }
};

function update() {
  updateCars();
  updateBackground();
}

function updateCars () {
  for (var i = 0; i < raceCars.length; i++) {
    raceCars[i].update();
  }
};

function updateBackground() {
  if(racing){
    backgroundImagePos -= 1;
    if(backgroundImagePos < -100){backgroundImagePos = 0}
    $(".race-tracks").css("background-position", backgroundImagePos + "px 0px");
  }
}

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



