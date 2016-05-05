//define modification
var Modification = function(){
  this.protectionBonus =0;
  this.damageBonus =0;
};

//six kinds of modification
var Shield = function(){
  this.protectionBonus = 2;
};

Shield.prototype = new Modification();

var Sunroof = function(){
  this.protectionBonus = 3;
  this.damageBonus =10;
};

Sunroof.prototype = new Modification();

var Camera = function(){
  this.protectionBonus = 3;
};

Camera.prototype = new Modification();

var GPS = function(){
  this.protectionBonus = 1;
  this.damageBonus= 5;
};

GPS.prototype = new Modification();

var Engine = function(){
  this.damageBonus = 30;
};

Engine.prototype = new Modification();

var Steering = function(){
  this.protectionBonus = 4;
  this.damageBonus=15;
};

Steering.prototype = new Modification();


