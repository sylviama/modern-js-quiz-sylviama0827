"use strict";

var Game1=(function(originalGame){

    //clear previous click border in the same panel
    originalGame.clearModelClickClass=function() {
      $("img.clicked").removeClass("clicked");
    };

    
    const obj={};
    originalGame.setPlayers= function(){
      //Pick Player 1's model
      obj.Player1="empty";
      
      $("#player1Drone").click(function(){
        obj.Player1= new Game1.Drone();
        //if model is selected, all the error message will be clear
        $("#player1WeaponAlert").attr("style", "display:none");
        $("#player1ModificationAlert").attr("style", "display:none");
        //clear previous selected border
        originalGame.clearModelClickClass();
        //give the selected a border
        $(this).attr("class", "player1ModelIcon clicked");
        //for battle page setup
        $("#player1Img").attr("src", "image/drone.png");
        //if one of the values are selected, give a green check
        $("#pass0").attr("style", "display:inline block");
      });

      $("#player1Bike").click(function(){
        obj.Player1 = new Game1.Bipedal();
        $("#player1WeaponAlert").attr("style", "display:none");
        $("#player1ModificationAlert").attr("style", "display:none");
        originalGame.clearModelClickClass();
        $(this).attr("class", "player1ModelIcon clicked");
        $("#player1Img").attr("src", "image/bike.png");
        $("#pass0").attr("style", "display:inline block");
      });

      $("#player1Atv").click(function(){
        obj.Player1 = new Game1.Atv();
        $("#player1WeaponAlert").attr("style", "display:none");
        $("#player1ModificationAlert").attr("style", "display:none");
        originalGame.clearModelClickClass();
        $(this).attr("class", "player1ModelIcon clicked");
        $("#player1Img").attr("src", "image/atv.png");
        $("#pass0").attr("style", "display:inline block");
      });


      //pick player 1's weapon
      $("#player1Fire").click(function(){
        //test if a player 1 model is selected (must select model than select weapon and modification)
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Fire());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1WeaponImg").attr("src", "image/fire.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Water").click(function(){
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Water());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1WeaponImg").attr("src", "image/water.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Wind").click(function(){
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Wind());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1WeaponImg").attr("src", "image/wind.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Egg").click(function(){
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Egg());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1WeaponImg").attr("src", "image/egg.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Spear").click(function(){
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Spear());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1WeaponImg").attr("src", "image/spear.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Dagger").click(function(){
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Dagger());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1WeaponImg").attr("src", "image/dagger.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      //assign modification to Player1
      $("#player1GPS").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.GPS());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1ModificationImg").attr("src", "image/GPS.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Love").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Love());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1ModificationImg").attr("src", "image/love.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Anchor").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Anchor());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1ModificationImg").attr("src", "image/anchor.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Watch").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Watch());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1ModificationImg").attr("src", "image/watch.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Shield").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Shield());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1ModificationImg").attr("src", "image/shield.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Steer").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Steering());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player1ModificationImg").attr("src", "image/steer.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });
    


      //Pick Player 2's model
      obj.Player2="empty";

      $("#player2Drone").click(function(){
        $("#player2WeaponAlert").attr("style", "display:none");
        $("#player2ModificationAlert").attr("style", "display:none");
        obj.Player2 = new Game1.Drone();
        originalGame.clearModelClickClass();
        $(this).attr("class", "clicked");
        $("#player2Img").attr("src", "image/drone.png");
        $("#pass3").attr("style", "display:inline block");
      });

      $("#player2Bike").click(function(){
        $("#player2WeaponAlert").attr("style", "display:none");
        $("#player2ModificationAlert").attr("style", "display:none");
        obj.Player2 = new Game1.Bipedal();
        originalGame.clearModelClickClass();
        $(this).attr("class", "clicked");
        $("#player2Img").attr("src", "image/bike.png");
        $("#pass3").attr("style", "display:inline block");
      });

      $("#player2Atv").click(function(){
        $("#player2WeaponAlert").attr("style", "display:none");
        $("#player2ModificationAlert").attr("style", "display:none");
        obj.Player2 = new Game1.Atv();
        originalGame.clearModelClickClass();
        $(this).attr("class", "clicked");
        $("#player2Img").attr("src", "image/atv.png");
        $("#pass3").attr("style", "display:inline block");
      });

      //pick player 2's weapon
      $("#player2Fire").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Fire());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2WeaponImg").attr("src", "image/fire.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Water").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Water());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2WeaponImg").attr("src", "image/water.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Wind").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Wind());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2WeaponImg").attr("src", "image/wind.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Egg").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Egg());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2WeaponImg").attr("src", "image/egg.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Spear").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Spear());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2WeaponImg").attr("src", "image/spear.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Dagger").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Dagger());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2WeaponImg").attr("src", "image/dagger.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      //assign modification to Player2
      $("#player2GPS").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.GPS());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2ModificationImg").attr("src", "image/GPS.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });

      $("#player2Love").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Love());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2ModificationImg").attr("src", "image/love.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });

      $("#player2Anchor").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Anchor());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2ModificationImg").attr("src", "image/anchor.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });

      $("#player2Watch").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Watch());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2ModificationImg").attr("src", "image/watch.png");
          $("#pass5").attr("style", "display:inline block");
        }
      });

      $("#player2Shield").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Shield());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2ModificationImg").attr("src", "image/shield.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });

      $("#player2Steer").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Steering());
          originalGame.clearModelClickClass();
          $(this).attr("class", "clicked");
          $("#Player2ModificationImg").attr("src", "image/steer.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });


      //check if the "select EVERY to moving forward message could go away"
      $(".myIcon").click(function(){
        if(($("#pass0").attr("style")==="display:inline block")&&
          ($("#pass1").attr("style")==="display:inline block")&&
          ($("#pass2").attr("style")==="display:inline block")&&
          ($("#pass3").attr("style")==="display:inline block")&&
          ($("#pass4").attr("style")==="display:inline block")&&
          ($("#pass5").attr("style")==="display:inline block")){
          $("#selectEverythingAlert").attr("style", "display:none");
        }
      });
   
  };

    originalGame.getPlayers=function(){
      return obj;
    };

  return originalGame;
  

})(Game1||{});

Game1.setPlayers();

















