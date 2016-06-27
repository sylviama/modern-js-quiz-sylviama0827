"use strict";

var Game1=(function(originalGame){

  //define modification
  originalGame.Modification = function(){
    this.name= "";
    this.protectionBonus =0;
    this.damageBonus =0;
  };

  //six kinds of modification
  originalGame.Shield = function(){
    this.name="Shield";
    this.protectionBonus = 2;
  };

  originalGame.Shield.prototype = new originalGame.Modification();

  originalGame.Love = function(){
    this.name="Love";
    this.protectionBonus = 3;
    this.damageBonus =10;
  };

  originalGame.Love.prototype = new originalGame.Modification();

  originalGame.Anchor = function(){
    this.name="Anchor";
    this.protectionBonus = 3;
  };

  originalGame.Anchor.prototype = new originalGame.Modification();

  originalGame.GPS = function(){
    this.name="GPS";
    this.protectionBonus = 1;
    this.damageBonus= 5;
  };

  originalGame.GPS.prototype = new originalGame.Modification();

  originalGame.Watch = function(){
    this.name="Watch";
    this.damageBonus = 30;
  };

  originalGame.Watch.prototype = new originalGame.Modification();

  originalGame.Steering = function(){
    this.name="Steering";
    this.protectionBonus = 4;
    this.damageBonus=15;
  };

  originalGame.Steering.prototype = new originalGame.Modification();

  return originalGame;
})(Game1||{});


