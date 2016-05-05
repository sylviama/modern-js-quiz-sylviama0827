//Pick Player 1's model

var Player1;
Player1= new Drone();

$("#player1Drone").click(function(){
  Player1 = new Drone();
  $("#img1").attr("class", "clicked");
});

$("#player1Bike").click(function(){
  Player1 = new Bipedal();
  $("#img2").attr("class", "clicked");
});

$("#player1Atv").click(function(){
  Player1 = new ATV();
  $("#img3").attr("class", "clicked");
});








//generate player 1
Player1.setWeapon(new Fire());
Player1.setModification(new Sunroof());


//generate Player 2
var Player2= new Drone();

Player2.setWeapon(new Dagger());
Player2.setModification(new Camera());

