/*jshint esversion: 6 */
/*jshint globalstrict: true*/
"use strict";

//define modification
const Modification = function(){
  this.name= "";
  this.protectionBonus =0;
  this.damageBonus =0;
};

//six kinds of modification
const Shield = function(){
  this.name="Shield";
  this.protectionBonus = 2;
};

Shield.prototype = new Modification();

const Love = function(){
  this.name="Love";
  this.protectionBonus = 3;
  this.damageBonus =10;
};

Love.prototype = new Modification();

const Anchor = function(){
  this.name="Anchor";
  this.protectionBonus = 3;
};

Anchor.prototype = new Modification();

const GPS = function(){
  this.name="GPS";
  this.protectionBonus = 1;
  this.damageBonus= 5;
};

GPS.prototype = new Modification();

const Watch = function(){
  this.name="Watch";
  this.damageBonus = 30;
};

Watch.prototype = new Modification();

const Steering = function(){
  this.name="Steering";
  this.protectionBonus = 4;
  this.damageBonus=15;
};

Steering.prototype = new Modification();

