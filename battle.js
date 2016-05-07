//This fight only has Health, Damage and Protection
$("#next5").click(function(){
  //validation rule for "Start Battle" button
  if(($("#pass0").attr("style")==="display:inline block")&&
    ($("#pass1").attr("style")==="display:inline block")&&
    ($("#pass2").attr("style")==="display:inline block")&&
    ($("#pass3").attr("style")==="display:inline block")&&
    ($("#pass4").attr("style")==="display:inline block")&&
    ($("#pass5").attr("style")==="display:inline block")){

    $("#setup").hide();
    $("#battle").show();

    console.log(Player1);
    console.log(Player2);

    var Player1Health = Player1.health;
    var Player2Health = Player2.health;

    var Player1Protection = Player1.modification.protectionBonus;
    var Player2Protection = Player2.modification.protectionBonus;

    var Player1Damage= Player1.weapon.damage+Player1.modification.damageBonus;
    var Player2Damage= Player2.weapon.damage+Player2.modification.damageBonus;

    //initial setup
    $("#player1Health").html(Player1Health);
    $("#player2Health").html(Player2Health);

    $("#player1text").html("A(n) "+Player1.name+" with "+Player1.weapon.name+" and "+Player1.modification.name+". <br>Damage: "+Player1Damage+"; Protection: "+Player1Protection+".");
    $("#player2text").html("A(n) "+Player2.name+" with "+Player2.weapon.name+" and "+Player2.modification.name+". <br>Damage: "+Player2Damage+"; Protection: "+Player2Protection+".");
    
    //fight starts
    $("#attack").click(function(){
      Player1Attack();
      setTimeout(Player2Attack, 1000);
      setTimeout(Announce, 2200);
    });


    function Player1Attack(){
      Player2Health = Player2Health -Math.max((Player1Damage-Player2Protection), 0);
      $("#player2Health").html("<b><i>"+Player2Health+"</i></b>");
      $("#player2Progress").attr("style", "width:"+Player2Health/Player2.health*100+"%");
      $("#player1Img").effect("shake", {times:4}, 1000);
    };

    function Player2Attack(){
      Player1Health = Player1Health -Math.max((Player2Damage-Player1Protection), 0);
      $("#player1Health").html("<b><i>"+Player1Health+"</i></b>");
      $("#player1Progress").attr("style", "width:"+Player1Health/Player1.health*100+"%");
      $("#player2Img").effect("shake", {times:4}, 1000);
    };

    function Announce(){
      if(Player2Health<=0){
        $("#myModal").modal("show");
        $("#attack").attr("disabled", "disabled");
      } else if(Player1Health<=0){
        $(".modal-body p").html("Player 2 Wins!!")
        $("#myModal").modal("show");
        $("#attack").attr("disabled", "disabled");
      }
    };

  }else{
    $("#selectEverythingAlert").attr("style", "display: inline block");
  }
   
});