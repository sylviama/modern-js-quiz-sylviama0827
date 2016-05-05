//This fight only has Health, Damage and Protection
var Player1Health = Player1.health;
var Player2Health = Player2.health;

var Player1Protection = Player1.modification.protectionBonus;
var Player2Protection = Player2.modification.protectionBonus;

var Player1Damage= Player1.weapon.damage+Player1.modification.damageBonus;
var Player2Damage= Player2.weapon.damage+Player2.modification.damageBonus;

//initial setup
$("#player1Health").html(Player1Health);
$("#player2Health").html(Player2Health);

$("#player1Damage").html(Player1Damage);
$("#player2Damage").html(Player2Damage);

//fight starts
$("#attack").click(function(){
  Player1Attack();
  setTimeout(Player2Attack, 1000);
  Announce();
});


function Player1Attack(){
  Player2Health = Player2Health -Math.max((Player1Damage-Player2Protection), 0);
  $("#player2Health").html(Player2Health);
  $("#player2Progress").attr("style", "width:"+Player2Health/Player2.health*100+"%");
  $("#player1Img").effect("shake", {times:4}, 1000);
};

function Player2Attack(){
  Player1Health = Player1Health -Math.max((Player2Damage-Player1Protection), 0);
  $("#player1Health").html(Player1Health);
  $("#player1Progress").attr("style", "width:"+Player1Health/Player1.health*100+"%");
  $("#player2Img").effect("shake", {times:4}, 1000);
};

function Announce(){
  if(Player2Health<=0){
    alert("Player1 Wins");
    $("#attack").attr("disabled", "disabled");
  } else if(Player1Health<=0){
    alert("Player2 Wins");
    $("#attack").attr("disabled", "disabled");
  }
};









