"use strict";

var Game1=(function(originalGame){

  originalGame.Weapon = function(){
    this.name="";
    this.damage= 0;
  };

  //six kinds of weapon
  originalGame.Fire = function(){
    this.name = "Fire";
    this.damage= Math.floor(Math.random() * 4) +4;
  };

  originalGame.Fire.prototype = new originalGame.Weapon();

  originalGame.Spear = function(){
    this.name = "Spear";
    this.damage= Math.floor(Math.random() * 5) +3;
  };

  originalGame.Spear.prototype= new originalGame.Weapon();

  originalGame.Water = function(){
    this.name = "Water";
    this.damage= Math.floor(Math.random() * 6) +2;
  };

  originalGame.Water.prototype= new originalGame.Weapon();

  originalGame.Dagger = function(){
    this.name = "Dagger";
    this.damage= Math.floor(Math.random() * 7) +1;
  };

  originalGame.Dagger.prototype= new originalGame.Weapon();

  originalGame.Egg = function(){
    this.name = "Egg";
    this.damage= Math.floor(Math.random() * 3) +10;
  };

  originalGame.Egg.prototype= new originalGame.Weapon();

  originalGame.Wind = function(){
    this.name = "Air";
    this.damage= Math.floor(Math.random() * 4) +5;
  };

  originalGame.Wind.prototype= new originalGame.Weapon();

  return originalGame;
})(Game1||{});

