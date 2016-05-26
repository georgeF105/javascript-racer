
var racing = true;

var backgroundImagePos = 0;

var raceCar = function (ID, upKey, downKey, leftKey, rightKey, lane, name) {
  var lanes = [65,165,265,365];
  this.carElement = document.getElementById(ID);
  this.playerInfoElement = document.getElementById(ID + "-info");
  this.playerNameElement = document.getElementById(ID + "-info-name");
  this.playerKeyElement = document.getElementById(ID + "-info-key");
  this.xPos = 300;
  var carLength = this.carElement.offsetWidth;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.upKey = upKey;
  this.downKey = downKey;
  this.leftKey = leftKey;
  this.rightKey = rightKey;
  this.lane = lane;
  var yPos = lanes[this.lane];
  this.name = name;

  this.moveUp = function () {
    console.log("moveUp");
    
    if(this.lane > 0){
      var clear = true;
      for(var i = 0; i < raceCars.length; i++){
        if(raceCars[i].carElement != this.carElement && raceCars[i].lane === this.lane -1){
          if(this.xPos > raceCars[i].xPos - carLength && this.xPos < raceCars[i].xPos + carLength){
            clear = false;
            this.carElement.style.border = "2px solid red";
          }
          else{
            console.log("this.xPos = " + this.xPos + " RaceCars[i].xPos = " + raceCars[i].xPos);
          }
        }
      }
      if(clear){
        this.lane -= 1;
        yPos = lanes[this.lane];
      }
    }
  }
  this.moveDown = function () {
    console.log("moveDown");
    var clear = true;
    if(this.lane < lanes.length-1){
      for(var i = 0; i < raceCars.length; i++){
        if(raceCars[i].carElement != this.carElement && raceCars[i].lane === this.lane + 1){
          if(this.xPos > raceCars[i].xPos - carLength && this.xPos < raceCars[i].xPos + carLength){
            clear = false;
            this.carElement.style.border = "2px solid red";
          }
        }
      }
      if(clear){
        this.lane += 1;
        yPos = lanes[this.lane];
      }
    }
  }
  this.moveRight = function () {
    console.log("moveRight");
    this.xSpeed += 1;
    // if(this.xPos < this.carElement.parentElement.offsetWidth - carLength){
    //   var clear = true;
    //   for(var i = 0; i < raceCars.length; i++){
    //     if(raceCars[i].carElement != this.carElement && raceCars[i].lane === this.lane){
    //       if(this.xPos + carLength + 10 > raceCars[i].xPos){
    //         clear = false;
    //         this.carElement.style.border = "2px solid red";
    //       }
    //     }
    //   }
    //   if(clear){
    //     this.xPos += 10;
    //     console.log("new this.xPos = " + this.xPos);
    //   }
    // }
  }
  this.moveLeft = function () {
    console.log("moveLeft");
    this.xSpeed -= 1;
    // if(this.xPos > 0){
    //   var clear = true;
    //   for(var i = 0; i < raceCars.length; i++){
    //     if(raceCars[i].carElement != this.carElement && raceCars[i].lane === this.lane){
    //       if(this.xPos -10 < raceCars[i].xPos + carLength){
    //         clear = false;
    //         this.carElement.style.border = "2px solid red";
    //       }
    //     }
    //   }
    //   if(clear){
    //     this.xPos -= 10;
    //     console.log("new this.xPos = " + this.xPos);
    //   }
    // }
  }

  this.update = function () {
    if (racing) {
      this.xPos += this.xSpeed;
      this.carElement.style.left = this.xPos + 'px';
      this.carElement.style.top = yPos + 'px';
      this.carElement.style.border = "";
       if (this.xPos > this.carElement.parentElement.offsetWidth - this.carElement.offsetWidth) {
         //carWins(this);
         this.xPos = this.carElement.parentElement.offsetWidth - this.carElement.offsetWidth
         this.xSpeed = 0;
      }
      if(this.xPos <= 0){
        this.xPos = 0;
        this.xSpeed = 0;
      }
      // console.log("here1");
      for(var i = 0; i < raceCars.length; i++){
        // console.log("here2");
        if(this.carElement != raceCars[i].carElement && this.lane === raceCars[i].lane) {
           // console.log("here xPos= " + this.xPos + "i.xPos = " + raceCars[i].xPos);
          if(this.xPos > raceCars[i].xPos - carLength && this.xPos < raceCars[i].xPos + carLength){
            this.xPos = raceCars[i].xPos - carLength;
            this.xSpeed = 0;
            if(this.xPos < 0){
              console.log("HEERREE!");
              this.xPos = 0;
              raceCars[i].xPos = carLength;
            }
          }
        }
      }
    }
  }
};


var raceCars = [];
raceCars[0] = new raceCar("car-1",38, 40, 37, 39, 0, "Player 1");
raceCars[1] = new raceCar("car-2",87, 83, 65, 68, 3, "Player 2");
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
    if(raceCars[i].leftKey == event.which){
      raceCars[i].moveLeft();
    }
    if(raceCars[i].rightKey == event.which){
      raceCars[i].moveRight();
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



