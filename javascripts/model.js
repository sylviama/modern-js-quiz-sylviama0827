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

  //***********define type, first type**********
  originalGame.Drone = function(){
  	this.name="Drone";
    this.health= Math.floor(Math.random() * 40) +40;
  };

  originalGame.Drone.prototype = new originalGame.Robot();

  //Each Type has two models
  originalGame.BasicDrone= function(){
    this.name="Basic Drone";
  }

  originalGame.BasicDrone.prototype= new originalGame.Drone();

  originalGame.AdvancedDrone= function(){
    this.name="Advanced Drone";
    this.health = Math.floor(Math.random() * 40) +50;
  }

  originalGame.AdvancedDrone.prototype= new originalGame.Drone();



  //***********define type, second type**********
  originalGame.Bipedal = function(){
  	this.name="Bipedal";
    this.health= Math.floor(Math.random() * 35) +50;
  };

  originalGame.Bipedal.prototype = new originalGame.Robot();

  //Each Type has two models
  originalGame.BasicBipedal= function(){
    this.name="Basic Bipedal";
  }

  originalGame.BasicBipedal.prototype= new originalGame.Bipedal();

  originalGame.AdvancedBipedal= function(){
    this.name="Advanced Bipedal";
    this.health = Math.floor(Math.random() * 60) +50;
  }

  originalGame.AdvancedBipedal.prototype= new originalGame.Bipedal();


  //***********define type, third type**********
  originalGame.Atv = function(){
  	this.name="ATV";
    this.health= Math.floor(Math.random() * 30) +60;
  };

  originalGame.Atv.prototype = new originalGame.Robot();

  //Each Type has two models
  originalGame.BasicAtv= function(){
    this.name="Basic ATV";
  }

  originalGame.BasicAtv.prototype= new originalGame.Atv();

  originalGame.AdvancedAtv= function(){
    this.name="Advanced ATV";
    this.health = Math.floor(Math.random() * 60) +50;
  }

  originalGame.AdvancedAtv.prototype= new originalGame.Atv();

  return originalGame;

})(Game1||{});


