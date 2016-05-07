/*jshint esversion: 6 */
/*jshint globalstrict: true*/
"use strict";

var Weapon = function(){
  this.name="";
  this.damage= 0;
};

//six kinds of weapon
var Fire = function(){
  this.name = "Fire";
  this.damage= Math.floor(Math.random() * 4) +4;
};

Fire.prototype = new Weapon();

var Spear = function(){
  this.name = "Spear";
  this.damage= Math.floor(Math.random() * 5) +3;
};

Spear.prototype= new Weapon();

var Water = function(){
  this.name = "Water";
  this.damage= Math.floor(Math.random() * 6) +2;
};

Water.prototype= new Weapon();

var Dagger = function(){
  this.name = "Dagger";
  this.damage= Math.floor(Math.random() * 7) +1;
};

Dagger.prototype= new Weapon();

var Egg = function(){
  this.name = "Egg";
  this.damage= Math.floor(Math.random() * 3) +10;
};

Egg.prototype= new Weapon();

var Wind = function(){
  this.name = "Air";
  this.damage= Math.floor(Math.random() * 4) +5;
};

Wind.prototype= new Weapon();