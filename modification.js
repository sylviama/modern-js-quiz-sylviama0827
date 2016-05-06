//define modification
var Modification = function(){
  this.protectionBonus =0;
  this.damageBonus =0;
};

//six kinds of modification
var Shield = function(){
  this.name="Shield";
  this.protectionBonus = 2;
};

Shield.prototype = new Modification();

var Love = function(){
  this.name="Love";
  this.protectionBonus = 3;
  this.damageBonus =10;
};

Love.prototype = new Modification();

var Anchor = function(){
  this.name="Anchor";
  this.protectionBonus = 3;
};

Anchor.prototype = new Modification();

var GPS = function(){
  this.name="GPS";
  this.protectionBonus = 1;
  this.damageBonus= 5;
};

GPS.prototype = new Modification();

var Watch = function(){
  this.name="Watch";
  this.damageBonus = 30;
};

Watch.prototype = new Modification();

var Steering = function(){
  this.name="Steering";
  this.protectionBonus = 4;
  this.damageBonus=15;
};

Steering.prototype = new Modification();