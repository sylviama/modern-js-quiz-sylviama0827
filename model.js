var Robot = function(){
  this.health =0;
  this.weapon = null;
  this.modification = null;
};

Robot.prototype.setWeapon= function(newWeapon){
 this.weapon = newWeapon;
};

Robot.prototype.setModification = function(newModification){
  this.modification = newModification;
};

//define type/model
var Drone = function(){
  this.health= Math.floor(Math.random() * 40) +40;
};


Drone.prototype = new Robot();


var Bipedal = function(){
  this.health= Math.floor(Math.random() * 35) +50;
};

Bipedal.prototype = new Robot();


var ATV = function(){
  this.health= Math.floor(Math.random() * 30) +60;
};

ATV.prototype = new Robot();




