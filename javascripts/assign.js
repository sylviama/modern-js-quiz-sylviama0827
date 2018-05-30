"use strict";

var Game1=(function(originalGame){
    var fat=false;
    var hairLong=false;
    var glasses="No";

    originalGame.clearModelButtons= function(){
      $("#player1DroneButtons").attr("style", "display:none");
      $("#player1BikeButtons").attr("style", "display:none");
      $("#player1AtvButtons").attr("style", "display:none");
      $("#player2DroneButtons").attr("style", "display:none");
      $("#player2BikeButtons").attr("style", "display:none");
      $("#player2AtvButtons").attr("style", "display:none");
    }

    const obj={};
    originalGame.setPlayers= function(){

      //Pick Player 1's model
      obj.Player1="empty";
      
      $("#player1Drone").click(function(){
        fat=true;
        obj.Player1= new Game1.Drone();
        //show the hidden model pick buttons
        originalGame.clearModelButtons();
        $("#player1DroneButtons").attr("style", "display: inline");

        //pick a model(optional)
        $("#player1BasicDrone").click(function(){
          obj.Player1= new Game1.BasicDrone();
        })

        $("#player1AdvancedDrone").click(function(){
          obj.Player1= new Game1.AdvancedDrone();
        })
        
        //if model is selected, all the error message will be clear
        $("#player1WeaponAlert").attr("style", "display:none");
        $("#player1ModificationAlert").attr("style", "display:none");
        //for battle page setup
        $("#player1Img").attr("src", "image/drone.png");
        //if one of the values are selected, give a green check
        $("#pass0").attr("style", "display:inline block");
      });


      $("#player1Bike").click(function(){
        fat=false;
        obj.Player1 = new Game1.Bipedal();
        //show the hidden model pick buttons
        originalGame.clearModelButtons();
        $("#player1BikeButtons").attr("style", "display: inline");

        //pick a model(optional)
        $("#player1BasicBipedal").click(function(){
          obj.Player1= new Game1.BasicBipedal();
        })

        $("#player1AdvancedBipedal").click(function(){
          obj.Player1= new Game1.AdvancedBipedal();
        })

        $("#player1WeaponAlert").attr("style", "display:none");
        $("#player1ModificationAlert").attr("style", "display:none");
        $("#player1Img").attr("src", "image/bike.png");
        $("#pass0").attr("style", "display:inline block");
      });


      $("#player1Atv").click(function(){
        obj.Player1 = new Game1.Atv();
         //show the hidden model pick buttons
         originalGame.clearModelButtons();
        $("#player1AtvButtons").attr("style", "display: inline");

        //pick a model(optional)
        $("#player1AtvBipedal").click(function(){
          obj.Player1= new Game1.BasicAtv();
        })

        $("#player1AdvancedAtv").click(function(){
          obj.Player1= new Game1.AdvancedAtv();
        })

        $("#player1WeaponAlert").attr("style", "display:none");
        $("#player1ModificationAlert").attr("style", "display:none");
        $("#player1Img").attr("src", "image/atv.png");
        $("#pass0").attr("style", "display:inline block");
      });


      //pick player 1's weapon
      $("#player1Fire").click(function(){
        glasses="Red";
        //test if a player 1 model is selected (must select model than select weapon and modification)
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Fire());
          $("#Player2WeaponImg").attr("src", "image/fire.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Water").click(function(){
        glasses="Black";
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Water());
          $("#Player2WeaponImg").attr("src", "image/water.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Wind").click(function(){
        glasses="No";
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Wind());
          $("#Player2WeaponImg").attr("src", "image/wind.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Egg").click(function(){
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Egg());
          $("#Player2WeaponImg").attr("src", "image/egg.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Spear").click(function(){
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Spear());
          $("#Player2WeaponImg").attr("src", "image/spear.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      $("#player1Dagger").click(function(){
        if(obj.Player1==="empty"){
          $("#player1WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Dagger());
          $("#Player2WeaponImg").attr("src", "image/dagger.png");
          $("#pass1").attr("style", "display:inline block");
          }
      });

      //assign modification to Player1
      $("#player1GPS").click(function(){
        hairLong=true;
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.GPS());
          $("#Player2ModificationImg").attr("src", "image/GPS.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Love").click(function(){
        hairLong=false;
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Love());
          $("#Player2ModificationImg").attr("src", "image/love.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Anchor").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Anchor());
          $("#Player2ModificationImg").attr("src", "image/anchor.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Watch").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Watch());
          $("#Player2ModificationImg").attr("src", "image/watch.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Shield").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Shield());
          $("#Player2ModificationImg").attr("src", "image/shield.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      $("#player1Steer").click(function(){
        if(obj.Player1==="empty"){
          $("#player1ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setModification(new Game1.Steering());
          $("#Player2ModificationImg").attr("src", "image/steer.png");
          $("#pass2").attr("style", "display:inline block");
          }
      });

      //decide which Tommy image to show in the battle page
      $("#next5").click(function(){
        if(fat){
          if(hairLong){
            if(glasses==="No"){
              $("#player1Img").attr("src", "image/FatLongH.png");
            }else if(glasses==="Red"){
              $("#player1Img").attr("src", "image/RedGLongHFat.png");
            }else{
              $("#player1Img").attr("src", "image/LongHBlackGFat.png");
            }
          }else{
            if(glasses==="No"){
              $("#player1Img").attr("src", "image/FatNo.png");
            }else if(glasses==="Red"){
              $("#player1Img").attr("src", "image/RedGFat.png");
            }else{
              $("#player1Img").attr("src", "image/BlackGFat.png");
            }
          }
        }else{
          if(hairLong){
            if(glasses==="No"){
              $("#player1Img").attr("src", "image/LongHNoGS.png");
            }else if(glasses==="Red"){
              $("#player1Img").attr("src", "image/RedGLongHSk.png");
            }else{
              $("#player1Img").attr("src", "image/BlackGLongHS.png");
            }
          }else{
            if(glasses==="No"){
              $("#player1Img").attr("src", "image/nothing.png");
            }else if(glasses==="Red"){
              $("#player1Img").attr("src", "image/RedGSkinny.png");
            }else{
              $("#player1Img").attr("src", "image/BlackGShortH.png");
            }
          }
        }
      });
        
      
    


      //Pick Player 2's model
      obj.Player2="empty";

      $("#player2Drone").click(function(){
        $("#player2WeaponAlert").attr("style", "display:none");
        $("#player2ModificationAlert").attr("style", "display:none");
        obj.Player2 = new Game1.Drone();
        //show the hidden model pick buttons
        originalGame.clearModelButtons();
        $("#player2DroneButtons").attr("style", "display: inline");

        //pick a model(optional)
        $("#player2BasicDrone").click(function(){
          obj.Player2= new Game1.BasicDrone();
        })

        $("#player1AdvancedDrone").click(function(){
          obj.Player2= new Game1.AdvancedDrone();
        })
        $("#player1AnimalStyleImg").attr("src", "image/Bear2.png");
        $("#pass3").attr("style", "display:inline block");
      });

      $("#player2Bike").click(function(){
        $("#player2WeaponAlert").attr("style", "display:none");
        $("#player2ModificationAlert").attr("style", "display:none");
        obj.Player2 = new Game1.Bipedal();
        //show the hidden model pick buttons
        originalGame.clearModelButtons();
        $("#player2BikeButtons").attr("style", "display: inline");

        //pick a model(optional)
        $("#player2BasicBike").click(function(){
          obj.Player2= new Game1.BasicBipedal();
        })

        $("#player2AdvancedBike").click(function(){
          obj.Player2= new Game1.AdvancedBipedal();
        })

        $("#player1AnimalStyleImg").attr("src", "image/Rabbit2.png");
        $("#pass3").attr("style", "display:inline block");
      });

      $("#player2Atv").click(function(){
        $("#player2WeaponAlert").attr("style", "display:none");
        $("#player2ModificationAlert").attr("style", "display:none");
        obj.Player2 = new Game1.Atv();
        //show the hidden model pick buttons
        originalGame.clearModelButtons();
        $("#player2AtvButtons").attr("style", "display: inline");

        //pick a model(optional)
        $("#player2BasicAtv").click(function(){
          obj.Player2= new Game1.BasicAtv();
        })

        $("#player2AdvancedAtv").click(function(){
          obj.Player2= new Game1.AdvancedAtv();
        })

        $("#player1AnimalStyleImg").attr("src", "image/Bunny2.png");
        $("#pass3").attr("style", "display:inline block");
      });

      //pick player 2's weapon
      $("#player2Fire").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player1.setWeapon(new Game1.Fire());
          $("#Player1WeaponImg").attr("src", "image/fire.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Water").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Water());
          $("#Player1WeaponImg").attr("src", "image/water.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Wind").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Wind());
          $("#Player1WeaponImg").attr("src", "image/wind.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Egg").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Egg());
          $("#Player1WeaponImg").attr("src", "image/egg.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Spear").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Spear());
          $("#Player1WeaponImg").attr("src", "image/spear.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      $("#player2Dagger").click(function(){
        if(obj.Player2==="empty"){
          $("#player2WeaponAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setWeapon(new Game1.Dagger());
          $("#Player1WeaponImg").attr("src", "image/dagger.png");
          $("#pass4").attr("style", "display:inline block");
          }
      });

      //assign modification to Player2
      $("#player2GPS").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.GPS());
          $("#Player1ModificationImg").attr("src", "image/GPS.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });

      $("#player2Love").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Love());
          $("#Player1ModificationImg").attr("src", "image/love.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });

      $("#player2Anchor").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Anchor());
          $("#Player1ModificationImg").attr("src", "image/anchor.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });

      $("#player2Watch").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Watch());
          $("#Player1ModificationImg").attr("src", "image/watch.png");
          $("#pass5").attr("style", "display:inline block");
        }
      });

      $("#player2Shield").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Shield());
          $("#Player1ModificationImg").attr("src", "image/shield.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });

      $("#player2Steer").click(function(){
        if(obj.Player2==="empty"){
          $("#player2ModificationAlert").attr("style", "display: inline block");
        } else{
          obj.Player2.setModification(new Game1.Steering());
          $("#Player1ModificationImg").attr("src", "image/steer.png");
          $("#pass5").attr("style", "display:inline block");
          }
      });


      
      $(".myIcon").click(function(){
        //give a border for the clicked icon(remove previous first)
        $("img.clicked").removeClass("clicked");
        $(this).attr("class", "myIcon clicked");
        //check if the "select EVERY to moving forward message could go away"
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

















