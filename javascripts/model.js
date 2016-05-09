"use strict";

var Game1= (function(originalGame){

  originalGame.Robot = function(){
    this.health =0;
    this.weapon = null;
    this.modification = null;
  };

  originalGame.Robot.prototype.setWeapon= function(newWeapon){
   this.weapon = newWeapon;
  };

  originalGame.Robot.prototype.setModification = function(newModification){
    this.modification = newModification;
  };

  //define type/model
  originalGame.Drone = function(){
  	this.name="Drone";
    this.health= Math.floor(Math.random() * 40) +40;
  };

  originalGame.Drone.prototype = new originalGame.Robot();


  originalGame.Bipedal = function(){
  	this.name="Bipedal";
    this.health= Math.floor(Math.random() * 35) +50;
  };

  originalGame.Bipedal.prototype = new originalGame.Robot();


  originalGame.Atv = function(){
  	this.name="ATV";
    this.health= Math.floor(Math.random() * 30) +60;
  };

  originalGame.Atv.prototype = new originalGame.Robot();

  return originalGame;

})(Game1||{});


